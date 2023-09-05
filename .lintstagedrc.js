const path = require("path");

const buildEslintCommand = (filenames) => {
  const lintPaths = filenames.map((f) => path.relative(process.cwd(), f));

  return [
    `prettier --write ${lintPaths.join(" ")}`,
    `next lint --fix --file ${lintPaths.join(" --file ")}`,
  ];
};

module.exports = {
  "*.{js,jsx,ts,tsx}": [buildEslintCommand],
};
