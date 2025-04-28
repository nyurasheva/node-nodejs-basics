import { fileURLToPath } from 'url';
import path from 'path';
import { fork } from 'child_process';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const spawnChildProcess = async (args) => {
  const filePath = path.join(__dirname, 'files', 'script.js');
  
  const child = fork(filePath, args, {
    stdio: ['pipe', 'pipe', 'pipe', 'ipc']
  });

  process.stdin.pipe(child.stdin);
  child.stdout.pipe(process.stdout);

  child.on('close', (code) => {
    console.log(`Child process exited with code ${code}`);
  });
};

// Put your arguments in function call to test this functionality
spawnChildProcess(['someArgument1', 'someArgument2', 'someArgument3']);
