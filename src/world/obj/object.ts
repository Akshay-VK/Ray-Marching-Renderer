import {vec3} from "../../util/vec3";

export interface object{
    dist(p: vec3): number;
}