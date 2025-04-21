import { createReadStream } from 'fs';
import { fileURLToPath } from 'url';
import path from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const read = async () => {
  const filePath = path.join(__dirname, 'files', 'fileToRead.txt');
  const readStream = createReadStream(filePath, { encoding: 'utf-8' });

  readStream.on('data', (chunk) => {
    process.stdout.write(chunk);
  });

  readStream.on('error', (err) => {
    console.error(`Error reading file: ${err.message}`);
  });
};

await read();
