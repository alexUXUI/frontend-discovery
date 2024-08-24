// jest.config.js
module.exports = {
    setupFiles: ['./jest.setup.js'],
    // other configurations
    "transform": {
        "^.+\\.[t|j]sx?$": "babel-jest"
    }
};