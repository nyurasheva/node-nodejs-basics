import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';
import { errorMessage } from './constants.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const list = async () => {
  const folderPath = path.join(__dirname, 'files');

  try {
    const files = await fs.readdir(folderPath);
    console.log('List of files:', files);
  } catch {
    console.error(`Error: ${errorMessage}`);
  }
};

await list();