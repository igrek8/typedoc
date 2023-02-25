import { execSync, ExecSyncOptionsWithBufferEncoding } from 'child_process';
import { program } from 'commander';

export interface PublishDocsCommandOptions {
  out: string;
}

export default program
  .command('publish')
  .requiredOption('-o --out <path>')
  .action(({ out }: PublishDocsCommandOptions) => {
    const cwd = process.cwd();
    const options: ExecSyncOptionsWithBufferEncoding = { cwd, env: process.env, stdio: 'inherit' };
    execSync(`gh-pages --dist ${out}`, options);
  });
