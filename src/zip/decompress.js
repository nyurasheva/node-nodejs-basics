import { createReadStream, createWriteStream } from 'fs';
import { createGunzip } from 'zlib';
import { fileURLToPath } from 'url';
import path from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const decompress = async () => {
  const archivePath = path.join(__dirname, 'files', 'archive.gz');
  const filePath = path.join(__dirname, 'files', 'fileToCompress.txt');
  
  const archive = createReadStream(archivePath);
  const file = createWriteStream(filePath);
  
  archive.pipe(createGunzip()).pipe(file);

  file.on('finish', () => {
    console.log('File decompressed successfully');
  });

  archive.on('error', (err) => {
    console.error(`Error reading archive: ${err.message}`);
  });

  file.on('error', (err) => {
    console.error(`Error writing decompressed file: ${err.message}`);
  });
};

await decompress();
