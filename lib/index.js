"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _electron = require("electron");
var _path = _interopRequireDefault(require("path"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
// Menu is a https://electron.atom.io/docs/api/menu-item/
var defaultMenu = [
// {
//   label: 'Item1',
//   type: 'radio',
//   icon: iconPath
// },
// {
//   label: 'Item2',
//   submenu: [
//     { label: 'submenu1' },
//     { label: 'submenu2' }
//   ]
// },
// {
//   label: 'Item3',
//   type: 'radio',
//   checked: true
// },
// {
//   label: 'Toggle DevTools',
//   accelerator: 'CommandOrControl+Shift+I',
//   click: function() {
//     win.show();
//     win.toggleDevTools();
//   }
// },
{
  label: 'Quit',
  accelerator: 'CommandOrControl+Q',
  selector: 'terminate:'
}];
var TrayControl = /*#__PURE__*/_createClass(function TrayControl(app, iconPath) {
  var _this = this;
  var menu = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : defaultMenu;
  _classCallCheck(this, TrayControl);
  this.app = app;
  app.on('ready', function () {
    _this.appIcon = new _electron.Tray(iconPath);
    _this.contextMenu = _electron.Menu.buildFromTemplate(menu);
    _this.appIcon.setToolTip('This is my application.');
    _this.appIcon.setContextMenu(_this.contextMenu);
  });
});
var _default = exports["default"] = TrayControl;

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJuYW1lcyI6WyJfZWxlY3Ryb24iLCJyZXF1aXJlIiwiX3BhdGgiLCJfaW50ZXJvcFJlcXVpcmVEZWZhdWx0IiwiZSIsIl9fZXNNb2R1bGUiLCJfZGVmaW5lUHJvcGVydGllcyIsInIiLCJ0IiwibGVuZ3RoIiwibyIsImVudW1lcmFibGUiLCJjb25maWd1cmFibGUiLCJ3cml0YWJsZSIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwiX3RvUHJvcGVydHlLZXkiLCJrZXkiLCJfY3JlYXRlQ2xhc3MiLCJwcm90b3R5cGUiLCJpIiwiX3RvUHJpbWl0aXZlIiwiX3R5cGVvZiIsIlN5bWJvbCIsInRvUHJpbWl0aXZlIiwiY2FsbCIsIlR5cGVFcnJvciIsIlN0cmluZyIsIk51bWJlciIsIl9jbGFzc0NhbGxDaGVjayIsImEiLCJuIiwiZGVmYXVsdE1lbnUiLCJsYWJlbCIsImFjY2VsZXJhdG9yIiwic2VsZWN0b3IiLCJUcmF5Q29udHJvbCIsImFwcCIsImljb25QYXRoIiwiX3RoaXMiLCJtZW51IiwiYXJndW1lbnRzIiwidW5kZWZpbmVkIiwib24iLCJhcHBJY29uIiwiVHJheSIsImNvbnRleHRNZW51IiwiTWVudSIsImJ1aWxkRnJvbVRlbXBsYXRlIiwic2V0VG9vbFRpcCIsInNldENvbnRleHRNZW51IiwiX2RlZmF1bHQiLCJleHBvcnRzIl0sInNvdXJjZXMiOlsiLi4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7VHJheSwgTWVudSwgQnJvd3NlcldpbmRvd30gZnJvbSAnZWxlY3Ryb24nO1xuaW1wb3J0IHBhdGggZnJvbSAncGF0aCc7XG5cbi8vIE1lbnUgaXMgYSBodHRwczovL2VsZWN0cm9uLmF0b20uaW8vZG9jcy9hcGkvbWVudS1pdGVtL1xuY29uc3QgZGVmYXVsdE1lbnUgPSBbXG4gIC8vIHtcbiAgLy8gICBsYWJlbDogJ0l0ZW0xJyxcbiAgLy8gICB0eXBlOiAncmFkaW8nLFxuICAvLyAgIGljb246IGljb25QYXRoXG4gIC8vIH0sXG4gIC8vIHtcbiAgLy8gICBsYWJlbDogJ0l0ZW0yJyxcbiAgLy8gICBzdWJtZW51OiBbXG4gIC8vICAgICB7IGxhYmVsOiAnc3VibWVudTEnIH0sXG4gIC8vICAgICB7IGxhYmVsOiAnc3VibWVudTInIH1cbiAgLy8gICBdXG4gIC8vIH0sXG4gIC8vIHtcbiAgLy8gICBsYWJlbDogJ0l0ZW0zJyxcbiAgLy8gICB0eXBlOiAncmFkaW8nLFxuICAvLyAgIGNoZWNrZWQ6IHRydWVcbiAgLy8gfSxcbiAgLy8ge1xuICAvLyAgIGxhYmVsOiAnVG9nZ2xlIERldlRvb2xzJyxcbiAgLy8gICBhY2NlbGVyYXRvcjogJ0NvbW1hbmRPckNvbnRyb2wrU2hpZnQrSScsXG4gIC8vICAgY2xpY2s6IGZ1bmN0aW9uKCkge1xuICAvLyAgICAgd2luLnNob3coKTtcbiAgLy8gICAgIHdpbi50b2dnbGVEZXZUb29scygpO1xuICAvLyAgIH1cbiAgLy8gfSxcbiAgeyBsYWJlbDogJ1F1aXQnLFxuICAgIGFjY2VsZXJhdG9yOiAnQ29tbWFuZE9yQ29udHJvbCtRJyxcbiAgICBzZWxlY3RvcjogJ3Rlcm1pbmF0ZTonLFxuICB9XG5dO1xuXG5jbGFzcyBUcmF5Q29udHJvbCB7XG4gIGNvbnN0cnVjdG9yKGFwcCwgaWNvblBhdGgsIG1lbnUgPSBkZWZhdWx0TWVudSkge1xuICAgIHRoaXMuYXBwID0gYXBwO1xuICAgIGFwcC5vbigncmVhZHknLCAoKSA9PiB7XG4gICAgICB0aGlzLmFwcEljb24gPSBuZXcgVHJheShpY29uUGF0aCk7XG4gICAgICB0aGlzLmNvbnRleHRNZW51ID0gTWVudS5idWlsZEZyb21UZW1wbGF0ZShtZW51KTtcbiAgICAgIHRoaXMuYXBwSWNvbi5zZXRUb29sVGlwKCdUaGlzIGlzIG15IGFwcGxpY2F0aW9uLicpO1xuICAgICAgdGhpcy5hcHBJY29uLnNldENvbnRleHRNZW51KHRoaXMuY29udGV4dE1lbnUpO1xuICAgIH0pO1xuICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBUcmF5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