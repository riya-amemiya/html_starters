"use strict";

var _child_process = require("child_process");

var _webpack = _interopRequireDefault(require("./modules/webpack"));

var _fs = require("./modules/fs");

var _babel = _interopRequireDefault(require("./modules/babel"));

var _readline = _interopRequireDefault(require("readline"));

var _path = _interopRequireDefault(require("path"));

var _package = _interopRequireDefault(require("./modules/package"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var figlet = require("figlet");

var clear = require("clear");

clear();

var rl = _readline["default"].createInterface({
  input: process.stdin,
  output: process.stdout
});

var fortnite = ["js", "html", "css", "img"];
var template = "";
rl.question("プロジェクトの名前を入力してください:", function (a) {
  console.log("Thank you!! start ".concat(a));

  if (!(0, _fs.check)(a)) {
    figlet("HTMLSTARTER", function (err, data) {
      if (err) console.log(err);
      console.log(data);
    });
    (0, _child_process.execSync)("mkdir ".concat(a));

    var file = _path["default"].resolve(a);

    (0, _package["default"])(file, a);
    (0, _webpack["default"])(file);
    (0, _child_process.execSync)("mkdir ".concat(file, "/src"));

    var _iterator = _createForOfIteratorHelper(fortnite),
        _step;

    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var iterator = _step.value;
        (0, _child_process.execSync)("mkdir ".concat(file, "/src/").concat(iterator));

        if (iterator !== "img") {
          if (iterator === "html") {
            template = "\n<!DOCTYPE html>\n<html lang=\"ja\">\n\n<head>\n    <meta charset=\"UTF-8\">\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n    <title>Hello</title>\n</head>\n\n<body>\n    <h1>Hello</h1>\n</body>\n\n</html>";
          } else if (iterator === "js") {
            template = "console.log('Hello')";
          } else if (iterator === "css") {
            template = "\nbody {\n    text-align: center;\n}";
          }

          (0, _child_process.exec)("echo \"".concat(template, "\" >> ").concat(file, "/src/").concat(iterator, "/index.").concat(iterator));
        }
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }

    (0, _babel["default"])(file);
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