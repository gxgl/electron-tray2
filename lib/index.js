"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _electron = require("electron");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
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
  var menu = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : defaultMenu;
  _classCallCheck(this, TrayControl);
  _defineProperty(this, "app", void 0);
  // Consider using a more specific type if available for ElectronApp
  _defineProperty(this, "appIcon", null);
  _defineProperty(this, "contextMenu", null);
  this.app = app;
  this.appIcon = new _electron.Tray(iconPath);
  this.contextMenu = _electron.Menu.buildFromTemplate(menu);
  this.appIcon.setToolTip('This is my application.');
  this.appIcon.setContextMenu(this.contextMenu);
});
var _default = exports["default"] = TrayControl;
module.exports = exports.default;

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJuYW1lcyI6WyJfZWxlY3Ryb24iLCJyZXF1aXJlIiwiX3R5cGVvZiIsIm8iLCJTeW1ib2wiLCJpdGVyYXRvciIsImNvbnN0cnVjdG9yIiwicHJvdG90eXBlIiwiX2RlZmluZVByb3BlcnRpZXMiLCJlIiwiciIsInQiLCJsZW5ndGgiLCJlbnVtZXJhYmxlIiwiY29uZmlndXJhYmxlIiwid3JpdGFibGUiLCJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsIl90b1Byb3BlcnR5S2V5Iiwia2V5IiwiX2NyZWF0ZUNsYXNzIiwiX2NsYXNzQ2FsbENoZWNrIiwiYSIsIm4iLCJUeXBlRXJyb3IiLCJfZGVmaW5lUHJvcGVydHkiLCJ2YWx1ZSIsImkiLCJfdG9QcmltaXRpdmUiLCJ0b1ByaW1pdGl2ZSIsImNhbGwiLCJTdHJpbmciLCJOdW1iZXIiLCJkZWZhdWx0TWVudSIsImxhYmVsIiwiYWNjZWxlcmF0b3IiLCJzZWxlY3RvciIsIlRyYXlDb250cm9sIiwiYXBwIiwiaWNvblBhdGgiLCJtZW51IiwiYXJndW1lbnRzIiwidW5kZWZpbmVkIiwiYXBwSWNvbiIsIlRyYXkiLCJjb250ZXh0TWVudSIsIk1lbnUiLCJidWlsZEZyb21UZW1wbGF0ZSIsInNldFRvb2xUaXAiLCJzZXRDb250ZXh0TWVudSIsIl9kZWZhdWx0IiwiZXhwb3J0cyIsIm1vZHVsZSIsImRlZmF1bHQiXSwic291cmNlcyI6WyIuLi9zcmMvaW5kZXgudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtUcmF5LCBNZW51LCBCcm93c2VyV2luZG93fSBmcm9tICdlbGVjdHJvbic7XG5pbXBvcnQgKiBhcyBwYXRoIGZyb20gJ3BhdGgnO1xuXG4vLyBNZW51IGlzIGEgaHR0cHM6Ly9lbGVjdHJvbi5hdG9tLmlvL2RvY3MvYXBpL21lbnUtaXRlbS9cbmNvbnN0IGRlZmF1bHRNZW51ID0gW1xuICAvLyB7XG4gIC8vICAgbGFiZWw6ICdJdGVtMScsXG4gIC8vICAgdHlwZTogJ3JhZGlvJyxcbiAgLy8gICBpY29uOiBpY29uUGF0aFxuICAvLyB9LFxuICAvLyB7XG4gIC8vICAgbGFiZWw6ICdJdGVtMicsXG4gIC8vICAgc3VibWVudTogW1xuICAvLyAgICAgeyBsYWJlbDogJ3N1Ym1lbnUxJyB9LFxuICAvLyAgICAgeyBsYWJlbDogJ3N1Ym1lbnUyJyB9XG4gIC8vICAgXVxuICAvLyB9LFxuICAvLyB7XG4gIC8vICAgbGFiZWw6ICdJdGVtMycsXG4gIC8vICAgdHlwZTogJ3JhZGlvJyxcbiAgLy8gICBjaGVja2VkOiB0cnVlXG4gIC8vIH0sXG4gIC8vIHtcbiAgLy8gICBsYWJlbDogJ1RvZ2dsZSBEZXZUb29scycsXG4gIC8vICAgYWNjZWxlcmF0b3I6ICdDb21tYW5kT3JDb250cm9sK1NoaWZ0K0knLFxuICAvLyAgIGNsaWNrOiBmdW5jdGlvbigpIHtcbiAgLy8gICAgIHdpbi5zaG93KCk7XG4gIC8vICAgICB3aW4udG9nZ2xlRGV2VG9vbHMoKTtcbiAgLy8gICB9XG4gIC8vIH0sXG4gIHsgbGFiZWw6ICdRdWl0JyxcbiAgICBhY2NlbGVyYXRvcjogJ0NvbW1hbmRPckNvbnRyb2wrUScsXG4gICAgc2VsZWN0b3I6ICd0ZXJtaW5hdGU6JyxcbiAgfVxuXTtcblxuY2xhc3MgVHJheUNvbnRyb2wge1xuICBwcml2YXRlIGFwcDogYW55OyAvLyBDb25zaWRlciB1c2luZyBhIG1vcmUgc3BlY2lmaWMgdHlwZSBpZiBhdmFpbGFibGUgZm9yIEVsZWN0cm9uQXBwXG4gIHByaXZhdGUgYXBwSWNvbjogVHJheSB8IG51bGwgPSBudWxsO1xuICBwcml2YXRlIGNvbnRleHRNZW51OiBNZW51IHwgbnVsbCA9IG51bGw7XG5cbiAgY29uc3RydWN0b3IoYXBwOiBhbnksIGljb25QYXRoOiBzdHJpbmcsIG1lbnUgPSBkZWZhdWx0TWVudSkge1xuICAgIHRoaXMuYXBwID0gYXBwO1xuICAgIHRoaXMuYXBwSWNvbiA9IG5ldyBUcmF5KGljb25QYXRoKTtcbiAgICB0aGlzLmNvbnRleHRNZW51ID0gTWVudS5idWlsZEZyb21UZW1wbGF0ZShtZW51KTtcbiAgICB0aGlzLmFwcEljb24uc2V0VG9vbFRpcCgnVGhpcyBpcyBteSBhcHBsaWNhdGlvbi4nKTtcbiAgICB0aGlzLmFwcEljb24uc2V0Q29udGV4dE1lbnUodGhpcy5jb250ZXh0TWVudSk7XG4gIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IFRyYXlDb250cm9sO1xuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxJQUFBQSxTQUFBLEdBQUFDLE9BQUE7QUFBbUQsU0FBQUMsUUFBQUMsQ0FBQSxzQ0FBQUQsT0FBQSx3QkFBQUUsTUFBQSx1QkFBQUEsTUFBQSxDQUFBQyxRQUFBLGFBQUFGLENBQUEsa0JBQUFBLENBQUEsZ0JBQUFBLENBQUEsV0FBQUEsQ0FBQSx5QkFBQUMsTUFBQSxJQUFBRCxDQUFBLENBQUFHLFdBQUEsS0FBQUYsTUFBQSxJQUFBRCxDQUFBLEtBQUFDLE1BQUEsQ0FBQUcsU0FBQSxxQkFBQUosQ0FBQSxLQUFBRCxPQUFBLENBQUFDLENBQUE7QUFBQSxTQUFBSyxrQkFBQUMsQ0FBQSxFQUFBQyxDQUFBLGFBQUFDLENBQUEsTUFBQUEsQ0FBQSxHQUFBRCxDQUFBLENBQUFFLE1BQUEsRUFBQUQsQ0FBQSxVQUFBUixDQUFBLEdBQUFPLENBQUEsQ0FBQUMsQ0FBQSxHQUFBUixDQUFBLENBQUFVLFVBQUEsR0FBQVYsQ0FBQSxDQUFBVSxVQUFBLFFBQUFWLENBQUEsQ0FBQVcsWUFBQSxrQkFBQVgsQ0FBQSxLQUFBQSxDQUFBLENBQUFZLFFBQUEsUUFBQUMsTUFBQSxDQUFBQyxjQUFBLENBQUFSLENBQUEsRUFBQVMsY0FBQSxDQUFBZixDQUFBLENBQUFnQixHQUFBLEdBQUFoQixDQUFBO0FBQUEsU0FBQWlCLGFBQUFYLENBQUEsRUFBQUMsQ0FBQSxFQUFBQyxDQUFBLFdBQUFELENBQUEsSUFBQUYsaUJBQUEsQ0FBQUMsQ0FBQSxDQUFBRixTQUFBLEVBQUFHLENBQUEsR0FBQUMsQ0FBQSxJQUFBSCxpQkFBQSxDQUFBQyxDQUFBLEVBQUFFLENBQUEsR0FBQUssTUFB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