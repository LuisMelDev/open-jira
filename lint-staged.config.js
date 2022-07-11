/* eslint-disable no-undef */
module.exports = {
    "./components/**/**.{ts,tsx}": files => [
        `yarn eslint --fix ${files.join(" ")}`,
        `yarn prettier --write ${files.join(" ")}`,
        `jest --bail --coverage --onlyChanged --passWithNoTests`,
    ],
};
