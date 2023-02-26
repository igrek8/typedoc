import { execSync, ExecSyncOptionsWithBufferEncoding } from 'child_process';
import { program } from 'commander';
import * as path from 'path';

export interface PublishDocsCommandOptions {
  out: string;
}

export default program
  .command('publish')
  .requiredOption('-o --out <path>')
  .action(({ out }: PublishDocsCommandOptions) => {
    const cwd = process.cwd();
    const options: ExecSyncOptionsWithBufferEncoding = { cwd, env: process.env, stdio: 'inherit' };
    const pages = path.resolve(require.resolve('gh-pages/package.json'), '..', 'bin', 'gh-pages.js');
    execSync(`${pages} --dist ${out}`, options);
  });
