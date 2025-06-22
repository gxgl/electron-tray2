**NOTE:** This is a fork from https://github.com/dhharker/electron-tray by David Harker <david@dhharker.net>.

# Quickly add a tray icon to an electron app

Very basic at the moment, this module is either going nowhere or I might extend it to deal with app lifecycle management, window toggling etc.

It was built on:
 - NodeJS: v22.14.0
 - npm: v11.2.0
 - electron: v36.3.1

It mught not work on older versions. If this is the case, please use the original npm package `electron-tray` by David.

## Usage:

### TypeScript:
```typescript
import TrayControl from 'electron-tray2';
```

### JavaScript (ES6 modules):
```javascript
import TrayControl from 'electron-tray2';
```

### JavaScript (CommonJS):
```javascript
const TrayControl = require('electron-tray2').default;
```

```javascript
const trayControl = new TrayControl(app, iconPath[, menu]);
```
...where `menu` is passed to [`electron.MenuItem`](https://electron.atom.io/docs/api/menu-item/) via [`electron.Menu.buildFromTemplate()`](https://electron.atom.io/docs/api/menu/) i.e. it's just a normal electron menu.

### Example:
```javascript
const { app, BrowserWindow } = require('electron');
const TrayControl = require('electron-tray2').default;
const path = require('path');

let trayControl;

app.whenReady().then(() => {
  createWindow();

  const iconPath = path.join(__dirname, 'icon.png');
  trayControl = new TrayControl(app, iconPath);

  app.on('activate', function () {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});
```

### ES6 Module Example:
```javascript
import { app, BrowserWindow } from 'electron';
import TrayControl from 'electron-tray2';
import path from 'path';

let trayControl;

app.whenReady().then(() => {
  createWindow();

  const iconPath = path.join(__dirname, 'icon.png');
  trayControl = new TrayControl(app, iconPath);

  app.on('activate', function () {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});
```

# Changes
 - [ ] If clean way to do it, add ability to persist app while all windows are closed, minimise/close to tray etc.
 - [ ] If Windows machine available, investigate integration of [`electron-promote-windows-tray-items`](https://www.npmjs.com/package/electron-promote-windows-tray-items) (Issues [#1](https://github.com/mixmaxhq/electron-promote-windows-tray-items/issues/1) and [#2](https://github.com/mixmaxhq/electron-promote-windows-tray-items/issues/2) may be blockers and will this thing even work with newer electron versions?).
 - [x] Basic functionality works. You can haz icon, and menu.
 - [x] Updated to 28.05.2025 packages
