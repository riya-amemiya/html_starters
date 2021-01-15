"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _child_process = require("child_process");

function babel(mode) {
  if (mode === "typescript") {
    mode = "'@babel/preset-typescript',";
  } else {
    mode = "";
  }

  return "\nmodule.exports = {\n    presets: [\n        ".concat(mode, "\n        [\n            '@babel/preset-env',\n            {\n                'modules': 'false',\n                'useBuiltIns': 'usage',\n                'targets': '> 0.25%, not dead',\n            }\n        ]\n    ],\n};\n");
}

var _default = function _default(push, mode) {
  var t = babel(mode);
  (0, _child_process.exec)("echo \"".concat(t, "\" >> ").concat(push, "/babel.config.js"), function (error, stdout, stderr) {
    if (error) {
      console.log(stderr);
      return;
    }

    console.log(stdout);
  });
};

exports["default"] = _default;