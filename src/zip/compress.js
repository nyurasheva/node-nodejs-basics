import { createReadStream, createWriteStream, existsSync } from 'fs';
import { createGzip } from 'zlib';
import { fileURLToPath } from 'url';
import path from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const compress = async () => {
  const filePath = path.join(__dirname, 'files', 'fileToCompress.txt');
  const fileArchive = path.join(__dirname, 'files', 'archive.gz');
    
  if (!existsSync(filePath)) {
    console.error(`Error: The file ${filePath} does not exist.`);
    return;
  }
  
  const file = createReadStream(filePath);
  const archive = createWriteStream(fileArchive);

  file.pipe(createGzip()).pipe(archive);

  archive.on('finish', () => {
    console.log('File compressed successfully');
  });

  file.on('error', (err) => {
    console.error(`Error reading file: ${err.message}`);
  });

  archive.on('error', (err) => {
    console.error(`Error writing compressed file: ${err.message}`);
  });
};

await compress();