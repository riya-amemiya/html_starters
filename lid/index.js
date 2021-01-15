"use strict";

var _child_process = require("child_process");

var _webpack = _interopRequireDefault(require("./modules/webpack"));

var _figlet = _interopRequireDefault(require("figlet"));

var _clear = _interopRequireDefault(require("clear"));

var _fs = require("./modules/fs");

var _babel = _interopRequireDefault(require("./modules/babel"));

var _readline = _interopRequireDefault(require("readline"));

var _path = _interopRequireDefault(require("path"));

var _package = _interopRequireDefault(require("./modules/package"));

var _hello = _interopRequireDefault(require("./modules/template/hello"));

var _typescript = _interopRequireDefault(require("./modules/template/typescript"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

(0, _clear["default"])();

var rl = _readline["default"].createInterface({
  input: process.stdin,
  output: process.stdout
}); // const hasos = {
//     is_windows: process.platform === 'win32',
//     is_mac: process.platform === 'darwin',
//     is_linux: process.platform === 'linux'
// }


var config = JSON.parse((0, _fs.read)("html_starters.config.json"));
var fortnite = (config === null || config === void 0 ? void 0 : config.DuildFileType) || ["js", "html", "css", "img"];
var mode = (config === null || config === void 0 ? void 0 : config.mode) || "hello";
rl.question("プロジェクトの名前を入力してください:", function (a) {
  console.log("Thank you!! start ".concat(a));

  if (!(0, _fs.check)(a)) {
    (0, _figlet["default"])("HTMLSTARTER", function (err, data) {
      if (err) console.log(err);
      console.log(data);
    });
    (0, _child_process.execSync)("mkdir ".concat(a));

    var file = _path["default"].resolve(a);

    (0, _package["default"])(file, a);
    (0, _webpack["default"])(file, mode);
    (0, _child_process.execSync)("mkdir ".concat(file, "/src"));
    if (mode === "hello") (0, _hello["default"])(fortnite, file);
    if (mode === "typescript") (0, _typescript["default"])(fortnite, file);
    (0, _babel["default"])(file, mode);
    console.log("cd ".concat(a, "\nnpm run demo"));
  } else if ((0, _fs.check)(a)) {
    try {
      throw "すでに存在しています";
    } catch (error) {
      console.log(error);
    }
  } else if (a) {
    try {
      throw "フォルダ名を指定してください";
    } catch (error) {
      console.log(error);
    }
  }

  rl.close();
});