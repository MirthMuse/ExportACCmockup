import archiver from 'archiver';
import fs from 'fs';
import path from 'path';

const output = fs.createWriteStream('./public/project.zip');
const archive = archiver('zip', { zlib: { level: 9 } });

output.on('close', () => {
    console.log(archive.pointer() + ' total bytes');
});
archive.on('error', (err) => { throw err; });

archive.pipe(output);

archive.glob('**/*', {
    cwd: '.',
    ignore: ['node_modules/**', 'dist/**', '.git/**', '.cache/**', '*.zip', '*.tar.gz']
});

archive.finalize();
