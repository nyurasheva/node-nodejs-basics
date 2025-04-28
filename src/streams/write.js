import { createWriteStream } from 'fs';
import { fileURLToPath } from 'url';
import path from 'path';
import { pipeline } from 'stream/promises';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const write = async () => {
  const filePath = path.join(__dirname, 'files', 'fileToWrite.txt');
  const writeStream = createWriteStream(filePath, { encoding: 'utf-8' });

  try {
    await pipeline(process.stdin, writeStream);
  } catch (error) {
    console.error(`Error writing to the file: ${error.message}`);
  }
};

await write();
