declare class TrayControl {
    private app;
    private appIcon;
    private contextMenu;
    constructor(app: any, iconPath: string, menu?: {
        label: string;
        accelerator: string;
        selector: string;
    }[]);
}
export default TrayControl;
