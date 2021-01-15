import { execSync } from "child_process"
const pack = (name: string) =>
{
    return `
{
    "name": "${name}",
    "version": "1.0.0",
    "description": "",
    "main": "index.js",
    "scripts": {
        "test": "echo \\\"Error: no test specified\\\" && exit 1",
        "build": "tsc --build tsconfig && webpack --config webpack.config.js --display-used-exports",
        "buildtest": "webpack --config webpack.config.js --display-used-exports",
        "publish-demo": "npm run build && npm run deploy",
        "server": "webpack-dev-server --config webpack.config.js --open",
        "start": "webpack --config webpack.config.js --display-used-exports && webpack-dev-server --config webpack.config.js --open",
        "deploy": "gh-pages -d dist",
        "babel": "babel src --out-dir lid",
        "scss": "sass src/scss:src/css/ --style compressed --no-source-map",
        "scsswatch": "sass src/scss:src/css/ --style compressed --watch --no-source-map",
        "production-environment": "rm -r dist && npm run build",
        "demo": "npm i && npm run start"
    },
    "keywords": [],
    "author": "",
    "license": "ISC",
    "devDependencies": {
        "@babel/cli": "^7.11.6",
        "@babel/core": "^7.12.3",
        "@babel/plugin-transform-runtime": "^7.12.1",
        "@babel/preset-env": "^7.12.1",
        "@babel/preset-typescript": "^7.12.1",
        "@babel/register": "^7.12.1",
        "babel-eslint": "^10.1.0",
        "babel-jest": "^26.3.0",
        "babel-loader": "^8.1.0",
        "babel-runtime": "^6.26.0",
        "css-loader": "^4.3.0",
        "es6-promise": "^4.2.8",
        "extract-loader": "^5.1.0",
        "file-loader": "^6.1.0",
        "gh-pages": "^3.1.0",
        "html-loader": "^1.3.1",
        "html-webpack-plugin": "^4.5.0",
        "imagemin-mozjpeg": "^9.0.0",
        "imagemin-pngquant": "^9.0.1",
        "imagemin-webpack-plugin": "^2.4.2",
        "jquery": "^3.5.1",
        "mini-css-extract-plugin": "^0.11.2",
        "sass": "^1.26.11",
        "sass-loader": "^10.0.2",
        "style-loader": "^1.2.1",
        "ts-loader": "^8.0.4",
        "typescript": "^4.0.3",
        "url-loader": "^4.1.0",
        "webpack": "^4.44.2",
        "webpack-cli": "^3.3.12",
        "webpack-dev-server": "^3.11.0"
    },
    "dependencies": {
        "@babel/runtime": "^7.12.1"
    },
    "directories": {
        "test": "test"
    }
}
`
}
export default (push: string, name: string) =>
{
    const p = pack(name)
    execSync(`echo '${p}' >> ${push}/package.json`)
};
