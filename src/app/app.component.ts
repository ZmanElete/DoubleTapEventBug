import { Component, OnInit } from "@angular/core";

const platformModule = require("tns-core-modules/platform");

@Component({
    selector: "ns-app",
    templateUrl: "./app.component.html"
})
export class AppComponent implements OnInit {
    public widthPixels = 0;
    public heightPixels = 0;
    public widthDIPs = 0;
    public heightDIPs = 0;
    public DIPWidthRatio = 0;
    public DIPHeightRatio = 0;
    public lastTappedX = 0;
    public lastTappedY = 0;
    public correctLocationX = 0;
    public correctLocationY = 0;

    ngOnInit() {
        const mainScreen = platformModule.Screen.mainScreen
        this.widthPixels = mainScreen.widthPixels
        this.heightPixels = mainScreen.heightPixels
        this.widthDIPs = mainScreen.widthDIPs
        this.heightDIPs = mainScreen.heightDIPs
        this.DIPWidthRatio = this.widthPixels/this.widthDIPs
        this.DIPHeightRatio = this.heightPixels/this.heightDIPs
    }

    doubleTapEvent(event): void {
        const x = event.getX()
        const y = event.getY()
        this.lastTappedX = x;
        this.lastTappedY = y;
        this.correctLocationX = x * this.DIPWidthRatio
        this.correctLocationY = y * this.DIPHeightRatio
    }
}
