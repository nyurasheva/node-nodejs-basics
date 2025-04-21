import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';
import { errorMessage } from './constants.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const srcFolder = path.join(__dirname, 'files');
const destFolder = path.join(__dirname, 'files_copy');

const copy = async () => {
  try {
    await fs.access(srcFolder);
  } catch {
    console.error(`Error: ${errorMessage}`);
    return;
  }

  try {
    await fs.access(destFolder);
    throw new Error(errorMessage);
  } catch (err) {
    if (err.code !== 'ENOENT') {
      console.error(`Error: ${errorMessage}`);
      return;
    }
  }
  
  try {
    await fs.cp(srcFolder, destFolder, { recursive: true });
    console.log(`Files copied successfully from ${srcFolder} to ${destFolder}`);
  } catch (err) {
    console.error(`Error: ${errorMessage}`);
  }
};

await copy();
