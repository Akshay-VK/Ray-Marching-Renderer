import { Canvas } from "canvas";
import * as fs from "fs";

export class renderer {
    public img: Canvas;
    public ctx: CanvasRenderingContext2D;
    public constructor(width: number, height: number) {
        this.img = new Canvas(width, height);
        this.ctx = this.img.getContext("2d");
    }
    public setPixel(x: number, y: number, r: number, g: number, b: number, a: number): void {
        this.ctx.fillStyle = `rgba(${r},${g},${b},${a})`;
        this.ctx.fillRect(x, y, 1, 1);
    }
    public save(): void {
        var dat = this.img.toDataURL("image/png");
        dat = dat.replace(/^data:image\/\w+;base64,/, "");
        var buff = Buffer.from(dat, "base64");
        fs.writeFile(__dirname+"/../../image.png", buff, (err) => { if (err) { console.log(err) } });
    }
}