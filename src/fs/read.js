import { promises as fsPromises } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { errorMessage } from './constants.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const read = async () => {
  const fileToReadPath = path.join(__dirname, '/files/fileToRead.txt');

  try {
    const fileContent = await fsPromises.readFile(fileToReadPath, 'utf-8');
    console.log('Content of fileToRead.txt:', fileContent);
  } catch (error) {
    console.error(`Error: ${errorMessage}`);
  }
};

await read();
