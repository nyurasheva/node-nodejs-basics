import { createReadStream, createWriteStream } from 'fs';
import { fileURLToPath } from 'url';
import path from 'path';
import { createGzip } from 'zlib';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const compress = async () => {
  const filePath = path.join(__dirname, 'files', 'fileToCompress.txt');
  const fileArchive = path.join(__dirname, 'files', 'archive.gz');
  const file = createReadStream(filePath);
  const archive = createWriteStream(fileArchive);

  file.pipe(createGzip()).pipe(archive);
};

await compress();