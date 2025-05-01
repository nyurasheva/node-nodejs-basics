import { Worker } from 'worker_threads';
import os from 'os';
import { fileURLToPath } from 'url';
import path from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const workerScriptPath = path.join(__dirname, 'worker.js');
const numberOfCores = os.cpus().length;
const results = [];

const sendToWorker = (worker, index) => {
  return new Promise((resolve, reject) => {
    worker.on('message', (result) => {
      results[index] = result; 
      resolve();
    });

    worker.on('error', () => {
      results[index] = { status: 'error', data: null };
      reject();
    });
  });
};

const performCalculations = async () => {
  const workerDataArray = Array.from({ length: numberOfCores }, (_, i) => 10 + i);

  const promises = workerDataArray.map((data, index) => {
    const worker = new Worker(workerScriptPath, { workerData: data });

    return sendToWorker(worker, index);
  });

  await Promise.all(promises);
  console.log(results);
};

performCalculations();