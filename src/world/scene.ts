import {object} from "./obj/object";
import {vec3} from "../util/vec3";

export class scene{
    public objects: object[];
    public constructor(){
        this.objects = new Array<object>();
    }
    public add_object(obj: object): void{
        this.objects.push(obj);
    }
    public find_nearest(p: vec3): number{
        var min = this.objects[0].dist(p);
        for(var i = 1; i < this.objects.length;i++){
            var d = this.objects.dist(p);
            if(d < min){
                min=d;
            }
        }
        return min;
    }
}