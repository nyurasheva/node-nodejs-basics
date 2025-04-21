import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';
import { errorMessage } from './constants.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const oldPath = path.join(__dirname, 'files', 'wrongFilename.txt');
const newPath = path.join(__dirname, 'files', 'properFilename.md');

const rename = async () => {
  try {
    await fs.access(oldPath);
    try {
      await fs.access(newPath);
      throw new Error(errorMessage);
    } catch (checkErr) {
      if (checkErr.code !== 'ENOENT') {
        throw checkErr;
      }
    }
    await fs.rename(oldPath, newPath);
    console.log(`File renamed successfully from ${oldPath} to ${newPath}`);
  } catch {
    console.error(`Error: ${errorMessage}`);
  }
};

await rename();