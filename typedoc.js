/* eslint-disable @typescript-eslint/no-var-requires */

const path = require('path');

const cwd = process.cwd();

/**
 * @type {import('typedoc').TypeDocOptions}
 */
module.exports = {
  entryPoints: [path.join(cwd, 'src', 'index.ts')],
  includes: [path.join(cwd, 'src')],
  hideGenerator: true,
  excludePrivate: true,
  excludeProtected: true,
  excludeInternal: true,
  excludeExternals: true,
  theme: 'markdown',
  out: path.join(cwd, 'docs'),
  sort: ['alphabetical'],
  media: path.join(cwd, 'media'),
};
