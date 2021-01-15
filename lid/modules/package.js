"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _child_process = require("child_process");

var pack = function pack(name) {
  return "\n{\n    \"name\": \"".concat(name, "\",\n    \"version\": \"1.0.0\",\n    \"description\": \"\",\n    \"main\": \"index.js\",\n    \"scripts\": {\n        \"test\": \"echo \\\"Error: no test specified\\\" && exit 1\",\n        \"build\": \"webpack --config webpack.config.js --display-used-exports\",\n        \"buildtest\": \"webpack --config webpack.config.js --display-used-exports\",\n        \"publish-demo\": \"npm run build && npm run deploy\",\n        \"server\": \"webpack-dev-server --config webpack.config.js --open\",\n        \"start\": \"webpack --config webpack.config.js --display-used-exports && webpack-dev-server --config webpack.config.js --open\",\n        \"deploy\": \"gh-pages -d dist\",\n        \"babel\": \"babel src --out-dir lid\",\n        \"scss\": \"sass src/scss:src/css/ --style compressed --no-source-map\",\n        \"scsswatch\": \"sass src/scss:src/css/ --style compressed --watch --no-source-map\",\n        \"production-environment\": \"rm -r dist && npm run build\",\n        \"demo\": \"npm i && npm run start\"\n    },\n    \"keywords\": [],\n    \"author\": \"\",\n    \"license\": \"ISC\",\n    \"devDependencies\": {\n        \"@babel/cli\": \"^7.11.6\",\n        \"@babel/core\": \"^7.12.3\",\n        \"@babel/plugin-transform-runtime\": \"^7.12.1\",\n        \"@babel/preset-env\": \"^7.12.1\",\n        \"@babel/preset-typescript\": \"^7.12.1\",\n        \"@babel/register\": \"^7.12.1\",\n        \"babel-eslint\": \"^10.1.0\",\n        \"babel-jest\": \"^26.3.0\",\n        \"babel-loader\": \"^8.1.0\",\n        \"babel-runtime\": \"^6.26.0\",\n        \"css-loader\": \"^4.3.0\",\n        \"es6-promise\": \"^4.2.8\",\n        \"extract-loader\": \"^5.1.0\",\n        \"file-loader\": \"^6.1.0\",\n        \"gh-pages\": \"^3.1.0\",\n        \"html-loader\": \"^1.3.1\",\n        \"html-webpack-plugin\": \"^4.5.0\",\n        \"imagemin-mozjpeg\": \"^9.0.0\",\n        \"imagemin-pngquant\": \"^9.0.1\",\n        \"imagemin-webpack-plugin\": \"^2.4.2\",\n        \"jquery\": \"^3.5.1\",\n        \"mini-css-extract-plugin\": \"^0.11.2\",\n        \"sass\": \"^1.26.11\",\n        \"sass-loader\": \"^10.0.2\",\n        \"style-loader\": \"^1.2.1\",\n        \"ts-loader\": \"^8.0.4\",\n        \"typescript\": \"^4.0.3\",\n        \"url-loader\": \"^4.1.0\",\n        \"webpack\": \"^4.44.2\",\n        \"webpack-cli\": \"^3.3.12\",\n        \"webpack-dev-server\": \"^3.11.0\"\n    },\n    \"dependencies\": {\n        \"@babel/runtime\": \"^7.12.1\"\n    },\n    \"directories\": {\n        \"test\": \"test\"\n    }\n}\n");
};

var _default = function _default(push, name) {
  var p = pack(name);
  (0, _child_process.execSync)("echo '".concat(p, "' >> ").concat(push, "/package.json"));
};

exports["default"] = _default;