"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _child_process = require("child_process");

function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var _default = function _default(fortnite, file) {
  var template = ["", ""];

  var _iterator = _createForOfIteratorHelper(fortnite),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var iterator = _step.value;

      if (iterator !== "img") {
        if (iterator === "html") {
          template[0] = "\n<!DOCTYPE html>\n<html lang=\"ja\">\n\n<head>\n    <meta charset=\"UTF-8\">\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n    <title>Hello</title>\n</head>\n\n<body>\n    <h1>Hello</h1>\n</body>\n\n</html>";
          template[1] = "html";
        } else if (iterator === "js") {
          template[0] = "\nimport '../css/index.css'\nconsole.log('Hello')";
          template[1] = "ts";
        } else if (iterator === "css") {
          template[0] = "\nbody {\n    text-align: center;\n}";
          template[1] = "css";
        }

        (0, _child_process.execSync)("mkdir ".concat(file, "/src/").concat(template[1] || iterator));
        (0, _child_process.exec)("echo \"".concat(template[0], "\" >> ").concat(file, "/src/").concat(template[1] || iterator, "/index.").concat(template[1] || iterator));
      }
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
};

exports["default"] = _default;