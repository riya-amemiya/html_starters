"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.read = read;
exports.check = check;

var _fs = _interopRequireDefault(require("fs"));

var _path = _interopRequireDefault(require("path"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function read(file) {
  file = _path["default"].resolve(file);

  if (check(file)) {
    return _fs["default"].readFileSync(file, 'utf8');
  }

  return "";
}

function check(file) {
  file = _path["default"].resolve(file);
  var hasfaile = false;

  try {
    _fs["default"].statSync(file);

    hasfaile = true;
  } catch (err) {
    hasfaile = false;
  }

  return hasfaile;
}