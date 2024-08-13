const path = require("path");
const jest = require("jest");

/**
 * Object props is a more extensible solution when we have a lot of props
 */
function buildModule({ pathname }) {
  return `
  module.exports = {
    __esModule: true,
    default: '${pathname}'
  };`;
}

/**
 * @see https://stackoverflow.com/questions/58603201/jest-cannot-load-svg-file
 * @see https://jestjs.io/docs/28.x/upgrading-to-jest28#transformer
 * @see https://jestjs.io/docs/28.x/code-transformation#writing-custom-transformers
 */
// eslint-disable-next-line no-undef
module.exports = {
  process(sourceText, sourcePath, options) {
    const pathname = JSON.stringify(path.basename(sourcePath));

    let contents;
    // todo: expose URL or SVG content?
    // let baseContent = `module.exports = ${pathname};`;
    let baseContent = sourceText;

    if (sourcePath.match(/\.svg$/)) {
      baseContent = buildModule({ pathname });
    }

    // Adapt for > Jest 28
    const isJestGreaterThan28 = parseInt(jest.getVersion().split(".")[0]) >= 28;
    if (isJestGreaterThan28) {
      contents = { code: baseContent };
    } else {
      contents = baseContent;
    }

    return contents;
  },
};
