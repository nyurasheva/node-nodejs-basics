import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';
import { errorMessage } from './constants.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const read = async () => {
  const filePath = path.join(__dirname, 'files', 'fileToRead.txt');

  try {
    const fileContent = await fs.readFile(filePath, 'utf-8');
    console.log(`Content of fileToRead.txt:\n${fileContent}`);
  } catch {
    console.error(`Error: ${errorMessage}`);
  }
};

await read();