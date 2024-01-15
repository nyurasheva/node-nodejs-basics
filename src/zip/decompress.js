import { createReadStream, createWriteStream } from 'fs';
import { fileURLToPath } from 'url';
import path from 'path';
import { createUnzip } from 'zlib';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const decompress = async () => {
    const filePath = path.join(__dirname, 'files', 'fileToCompress.txt');
    const fileArchive = path.join(__dirname, 'files', 'archive.gz');
    const file = createWriteStream(filePath);
    const archive = createReadStream(fileArchive);

    archive.pipe(createUnzip()).pipe(file);
};

await decompress();