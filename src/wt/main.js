import { Worker } from 'worker_threads';
import os from 'os';
import { fileURLToPath } from 'url';
import path from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const workerScriptPath = path.join(__dirname, 'worker.js');
const numberOfCores = os.cpus().length;
const workerDataArray = Array.from({ length: numberOfCores }, (_, index) => 10 + index);
const workers = workerDataArray.map(data => new Worker(workerScriptPath, { workerData: data }));
const results = [];

const sendToWorker = (worker, data) => {
  return new Promise((resolve, reject) => {
    worker.on('message', message => {
      results.push({ status: 'resolved', data: message });
      resolve();
    });

    worker.on('error', error => {
      results.push({ status: 'error', data: null });
      reject(new Error(`Worker ${worker.threadId} encountered an error: ${error.message}`));
    });

    worker.postMessage(data);
  });
};

const performCalculations = async () => {
  await Promise.all(workers.map((worker, index) => sendToWorker(worker, 10 + index)));
  console.log(results);
};

performCalculations();
