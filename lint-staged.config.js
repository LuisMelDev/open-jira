module.exports = {
    "./components/**/**.{ts,tsx}": files => [
        `yarn eslint --fix ${filenames.join(" ")}`,
        `yarn prettier --write ${filenames.join(" ")}`,
        `jest ${files.join(
            ","
        )} --bail --coverage --onlyChanged --silent --noStackTrace --verbose`,
    ],
    "package.json": ["format-package -w"],
    "**/*.(md|json)": filenames =>
        `yarn prettier --write ${filenames.join(" ")}`,
};
