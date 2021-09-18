import {base_object} from "./obj/base_object";
import {vec3} from "../util/vec3";

export class scene{
    public objects: base_object[];
    public constructor(){
        this.objects = new Array<base_object>();
    }
    public add_object(obj: base_object): void{
        this.objects.push(obj);
    }
    public find_nearest(p: vec3): number{
        var min = this.objects[0].dist(p);
        for(var i = 1; i < this.objects.length;i++){
            var d = this.objects[i].dist(p);
            if(d < min){
                min=d;
            }
        }
        return min;
    }
}