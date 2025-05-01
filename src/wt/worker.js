import { parentPort, workerData } from 'worker_threads';

const nthFibonacci = (n) => {
  // if (n < 10) throw new Error('Test error in worker');
  return n < 2 ? n : nthFibonacci(n - 1) + nthFibonacci(n - 2);
};

const sendResult = () => {
  try {
    const result = nthFibonacci(workerData);
    parentPort.postMessage({ status: 'resolved', data: result });
  } catch (error) {
    parentPort.postMessage({ status: 'error', data: null });
  }
};

sendResult();
