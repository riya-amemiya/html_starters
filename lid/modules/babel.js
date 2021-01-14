"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _child_process = require("child_process");

var babel = "\nmodule.exports = {\n    presets: [\n        [\n            '@babel/preset-env',\n            {\n                'modules': 'false',\n                'useBuiltIns': 'usage',\n                'targets': '> 0.25%, not dead',\n            }\n        ]\n    ],\n};\n";

var _default = function _default(push) {
  (0, _child_process.exec)("echo \"".concat(babel, "\" >> ").concat(push, "/babel.config.js"), function (error, stdout, stderr) {
    if (error) {
      console.log(stderr);
      return;
    }

    console.log(stdout);
  });
};

exports["default"] = _default;