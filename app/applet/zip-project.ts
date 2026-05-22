import archiver from 'archiver';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const output = fs.createWriteStream(path.join(__dirname, '../public/project-source.zip'));
const archive = archiver('zip', { zlib: { level: 9 } });

output.on('close', () => {
    console.log(archive.pointer() + ' total bytes');
    console.log('Archiver has been finalized and the output file descriptor has closed.');
});
archive.on('error', (err) => { throw err; });

archive.pipe(output);

archive.glob('**/*', {
    cwd: path.join(__dirname, '..'),
    ignore: ['node_modules/**', 'dist/**', '.git/**', '.cache/**', 'public/project-source.zip', 'public/project-source.tar.gz']
});

archive.finalize();
