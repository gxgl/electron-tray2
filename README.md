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
import TrayControl from 'electron-tray';
```

### JavaScript (ES6 modules):
```javascript
import TrayControl from 'electron-tray';
```

### JavaScript (CommonJS):
```javascript
const TrayControl = require('electron-tray').default;
```

```javascript
const trayControl = new TrayControl(app, iconPath[, menu]);
```
...where `menu` is passed to [`electron.MenuItem`](https://electron.atom.io/docs/api/menu-item/) via [`electron.Menu.buildFromTemplate()`](https://electron.atom.io/docs/api/menu/) i.e. it's just a normal electron menu.

### Example:
```javascript
const { app } = require('electron');
const TrayControl = require('electron-tray').default;
const path = require('path');

const iconPath = path.join(__dirname, 'icon.png');

// Keep this reference around otherwise the icon will
//   vanish when the TrayControl instance gets GCed.
const trayControl = new TrayControl(app, iconPath);

// ... initialise your app here as normal ...
```

### ES6 Module Example:
```javascript
import { app } from 'electron';
import TrayControl from 'electron-tray';
import path from 'path';

const iconPath = path.join(__dirname, 'icon.png');
const trayControl = new TrayControl(app, iconPath);
```

# Changes
 - [ ] If clean way to do it, add ability to persist app while all windows are closed, minimise/close to tray etc.
 - [ ] If Windows machine available, investigate integration of [`electron-promote-windows-tray-items`](https://www.npmjs.com/package/electron-promote-windows-tray-items) (Issues [#1](https://github.com/mixmaxhq/electron-promote-windows-tray-items/issues/1) and [#2](https://github.com/mixmaxhq/electron-promote-windows-tray-items/issues/2) may be blockers and will this thing even work with newer electron versions?).
 - [x] Basic functionality works. You can haz icon, and menu.
 - [x] Updated to 28.05.2025 packages
