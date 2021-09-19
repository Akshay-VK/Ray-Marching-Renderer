import { renderer } from "../util/renderer";
import { vec3 } from "../util/vec3";
import { ray } from "./ray";
import { scene } from "./scene";

export class camera{
    public position: vec3;
    public direction: vec3;

    public rays: ray[][];

    public width: number;
    public height: number;
    public focal_length: number;
    public aperture: number;

    public painter: renderer;

    public constructor(pos: vec3, dir: vec3, width: number, height: number, focal_length: number, aperture: number){
        this.position = pos;
        this.direction = dir;

        this.width=width;
        this.height=height;
        this.focal_length=focal_length;
        this.aperture=aperture;

        this.rays = new Array<Array<ray>>(height);
        //MY METHOD.. didnt work :(
        // for(var y = -height/2, i = 0; i < height; i++,y++){
        //     this.rays[i] = new Array<ray>(width);
        //     for(var x = -width/2, j = 0;j < width; j++,x++){
        //         var dir = vec3.fromXYZ(x,y,focal_length).normalize;
        //         //var dir = vec3.cross(vec3.fromXYZ(x,y,focal_length).normalize,this.direction);
        //         this.rays[i][j] = new ray(
        //             this.position,
        //             dir
        //         );
        //         if(j==0){console.log(dir)};
        //     }
        // }

        //previous one: only square cameras :(
        for(var i = 0,y=-height/2; i < height; i++,y++){
            this.rays[i] = new Array<ray>(width);
            for(var j = 0,x=-width/2;j < width; j++,x++){
                var cx = ((j/width)*2)-1;
                var cy = ((i/height)*2)-1;

                var f = vec3.normalize(
                    vec3.sub(this.position, this.direction)
                );

                var r = vec3.cross(
                    vec3.fromXYZ(0,1,0),
                    f
                );

                var c = vec3.add(
                    vec3.multNum(f,focal_length),
                    this.position
                );

                var u = vec3.cross(f,r);

                var i_ = vec3.add(
                    c,
                    vec3.add(
                        vec3.multNum(r,cx),
                        vec3.multNum(u,cy)
                    )
                );

                var ray_dir = vec3.sub(i_,this.position);
                
                this.rays[i][j] = new ray(
                    this.position,
                    ray_dir
                );
            }
        }

        this.painter = new renderer(this.width, this.height);
    }
    
    public cast(scn: scene, MAX_CAST_ITER: number, EPSILON: number, MAX_DIST: number): void{
        this.rays.forEach((val: ray[],i: number)=>{
            val.forEach((r: ray, index: number)=>{
                var d = r.cast(scn, MAX_CAST_ITER, EPSILON, MAX_DIST);
                this.painter.setPixel(index-(this.width/2),i-(this.height/2),d/255,d/255,d/255,1);
            });
        })
        this.painter.save("renderer");
    }
}