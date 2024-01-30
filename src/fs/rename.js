import { promises as fsPromises } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { errorMessage } from './constants.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const rename = async () => {
  const sourceFilePath = path.join(__dirname, '/files/wrongFilename.txt');
  const destinationFilePath = path.join(__dirname, '/files/properFilename.md');

  try {
    await fsPromises.rename(sourceFilePath, destinationFilePath);
    console.log(`File renamed successfully from ${sourceFilePath} to ${destinationFilePath}`);
  } catch (error) {
    console.error(`Error: ${errorMessage}`);
  }
};

await rename();
