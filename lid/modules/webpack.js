"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _child_process = require("child_process");

function webpack(mode) {
  if (mode === "typescript") {
    mode = ",\n        {\n            test: /.ts$/,\n            use: 'ts-loader',\n            exclude: /node_module/\n        }";
  } else {
    mode = "";
  }

  return "\nconst path = require('path');\nconst outputPath = path.resolve(__dirname, 'dist');\nconst HtmlWebpackPlugin = require('html-webpack-plugin');\nconst MiniCssExtractPlugin = require('mini-css-extract-plugin');\nconst webpackConfig = {\n    // \u672C\u756A\u306B\u30C7\u30D7\u30ED\u30A4\u3059\u308B\u3068\u304D\u306F\u30E2\u30FC\u30C9\u5024\u3092 production \u306B\u8A2D\u5B9A\n    // development \u306B\u8A2D\u5B9A\u3059\u308B\u3068\u5143\u306E\u30D5\u30A1\u30A4\u30EB\u3068\u306E\u95A2\u9023\u6027\u304C\u308F\u304B\u308B\u30BD\u30FC\u30B9\u30DE\u30C3\u30D7\u3068\u4E00\u7DD2\u306B\u51FA\u529B\u3055\u308C\u308B\n    mode: 'development',\n    output: {\n        filename: 'js/[name].js',\n        path: outputPath\n    },\n    // entry\n    entry: {\n        index: './src/js/index.js'\n    },\n\n    module: {\n        rules: [{\n            test: /.css$/,\n            use: [{\n                    loader: MiniCssExtractPlugin.loader,\n                    options: {}\n                },\n                'css-loader'\n            ]\n        }, {\n            test: /.scss$/i,\n            use: [{\n                    loader: MiniCssExtractPlugin.loader,\n                    options: {}\n                },\n                {\n                    loader: 'css-loader',\n                },\n                {\n                    loader: 'sass-loader',\n                    options: {\n                        sassOptions: {\n                            outputStyle: 'compressed',\n                        }\n                    },\n                },\n            ]\n        }, {\n            test: /.(js)$/,\n            exclude: /node_modules/,\n            use: {\n                loader: 'babel-loader', //loader\u540D\n                options: { //Babel\u306E\u8A2D\u5B9A\n                    presets: ['@babel/preset-env'],\n                    plugins: ['@babel/plugin-transform-runtime'],\n                }\n            }\n        }".concat(mode, "]\n    },\n    plugins: [\n        new MiniCssExtractPlugin({\n            filename: './[name].css'\n        })\n    ],\n};\nObject.keys(webpackConfig.entry).forEach((key) => {\n    webpackConfig.plugins.push(\n        new HtmlWebpackPlugin({\n            meta: [{\n                    viewport: 'width=device-width, initial-scale=1'\n                },\n                {\n                    'http-equiv': 'X-UA-Compatible',\n                    content: 'IE=edge'\n                }\n            ],\n            template: (key === 'index') ? './src/html/index.html' : './src/html/' + key + '.html', // Source\n            filename: (key === 'index') ? './index.html' : key + '.html', // Dist\n            inject: true,\n            hash: true,\n            chunks: [key], // insert to the root of output folder\n        })\n    );\n})\nmodule.exports = webpackConfig\n");
}

var _default = function _default(push, mode) {
  var t = webpack(mode);
  (0, _child_process.exec)("echo \"".concat(t, "\" >> ").concat(push, "/webpack.config.js"), function (error, stdout, stderr) {
    if (error) {
      console.log(stderr);
      return;
    }

    console.log(stdout);
  });
};

exports["default"] = _default;