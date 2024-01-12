import { promises as fsPromises } from 'fs';
import path from 'path';
import { currentModulePath, errorMessage } from './constants.js';

const read = async () => {
  const fileToReadPath = path.join(currentModulePath, 'files', 'fileToRead.txt');

  try {
    const fileContent = await fsPromises.readFile(fileToReadPath, 'utf-8');
    console.log('Content of fileToRead.txt:', fileContent);
  } catch (error) {
    console.error(`Error: ${errorMessage}`);
  }
};

await read();
