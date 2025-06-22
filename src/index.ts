import {Tray, Menu, BrowserWindow} from 'electron';
import * as path from 'path';

// Menu is a https://electron.atom.io/docs/api/menu-item/
const defaultMenu = [
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
  { label: 'Quit',
    accelerator: 'CommandOrControl+Q',
    selector: 'terminate:',
  }
];

class TrayControl {
  private app: any; // Consider using a more specific type if available for ElectronApp
  private appIcon: Tray | null = null;
  private contextMenu: Menu | null = null;

  constructor(app: any, iconPath: string, menu = defaultMenu) {
    this.app = app;
    this.appIcon = new Tray(iconPath);
    this.contextMenu = Menu.buildFromTemplate(menu);
    this.appIcon.setToolTip('This is my application.');
    this.appIcon.setContextMenu(this.contextMenu);
  };
}

export default TrayControl;
