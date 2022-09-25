const path = require('path');
const { ESLint } = require('eslint');

const removeIgnoredFiles = async (files) => {
  const eslint = new ESLint();
  const isIgnored = await Promise.all(
    files.map((file) => {
      return eslint.isPathIgnored(file);
    }),
  );
  return files.filter((_, i) => !isIgnored[i]);
};

const buildEslintCommand = async (filenames) => {
  const filesToLint = await removeIgnoredFiles(filenames);
  return `next lint --max-warnings 0 --fix ${filesToLint
    .map((f) => `--file ${path.relative(process.cwd(), f)}`)
    .join(' ')}`;
};

module.exports = {
  '*.{js,jsx,ts,tsx}': [buildEslintCommand, 'prettier --write'],
};
