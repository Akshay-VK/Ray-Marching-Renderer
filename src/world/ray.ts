import { vec3 } from "../util/vec3";
import { scene } from "./scene";

export class ray{
    public position: vec3;
    public direction: vec3;
    public constructor(p: vec3, dir: vec3){
        this.position=p;
        this.direction=dir;
    }
    cast(scn: scene, MAX_CAST_ITER: number, EPSILON: number, MAX_DIST: number): number{
        var TOTAL_DIST = 0;
        //save pos
        var p = this.position;
        //for MAX_CAST_ITER:
        for(var i = 0; i < MAX_CAST_ITER; i++){
            //find nearest
            var dist = scn.find_nearest(this.position);
            //advance
            this.position = vec3.add(this.position, vec3.multNum(this.direction,dist));
            //add dist
            TOTAL_DIST += dist;
            //if dis < EPSILON
            if(dist < EPSILON){
                //return TOTAL_DIST
                return TOTAL_DIST;
            }
            //if TOTAL_DIST < MAX_DIST
            if(TOTAL_DIST > MAX_DIST){
                //return 0
                return 0;
            }
        }
        this.position=p;
        return TOTAL_DIST;
    }
}