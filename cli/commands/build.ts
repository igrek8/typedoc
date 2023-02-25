import { execSync, ExecSyncOptionsWithBufferEncoding } from 'child_process';
import { program } from 'commander';
import { readFileSync, writeFileSync } from 'fs';
import * as path from 'path';

export interface BuildDocsCommandOptions {
  out: string;
}

export default program
  .command('build')
  .requiredOption('-o --out <path>')
  .action(({ out }: BuildDocsCommandOptions) => {
    const cwd = process.cwd();
    const options: ExecSyncOptionsWithBufferEncoding = { cwd, env: process.env, stdio: 'inherit' };
    const typedocOptions = path.join(__dirname, '..', '..', 'typedoc.js');
    execSync(`typedoc --out ${out} --options ${typedocOptions}`, options);
    writeFileSync(path.join(cwd, out, 'index.html'), readFileSync(path.join(cwd, 'public', 'index.html')));
  });
