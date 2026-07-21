import archiver from 'archiver';
import fs from 'fs';
import path from 'path';

const output = fs.createWriteStream('./public/project-source.zip');
const archive = archiver('zip', { zlib: { level: 9 } });

output.on('close', () => {
    console.log('Project zipped successfully, ' + archive.pointer() + ' bytes total.');
});
archive.on('error', (err) => { throw err; });

archive.pipe(output);

archive.glob('**/*', {
    cwd: '.',
    ignore: ['node_modules/**', 'dist/**', '.git/**', '.cache/**', 'public/*.zip', 'public/*.tar.gz', 'public/project-source.zip']
});

archive.finalize();
