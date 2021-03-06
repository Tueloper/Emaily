"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.server = void 0;

var _http = _interopRequireDefault(require("http"));

var _app = _interopRequireDefault(require("./app"));

var _chalk = _interopRequireDefault(require("chalk"));

var _keys = _interopRequireDefault(require("./webpack/keys"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//declare the port
const port = _keys.default.PORT || 7000; //create the server

const server = _http.default.createServer(_app.default);

exports.server = server;
server.listen(port, () => {
  console.log(_chalk.default.green.inverse(`Server is running on port ${port}\nVisit http://localhost:${port}`));
});