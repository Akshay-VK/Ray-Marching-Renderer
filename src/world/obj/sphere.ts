import { base_object } from "./base_object";
import { vec3 } from "../../util/vec3";

export class sphere implements base_object{
    public position: vec3;
    public radius: number;
    public constructor(pos: vec3, radius: number){
        this.position=pos;
        this.radius=radius;
    }
    dist(p: vec3): number {
        return vec3.magnitude(vec3.sub(this.position,p))-this.radius;
    }
}