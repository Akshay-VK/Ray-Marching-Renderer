import {vec3} from "../../util/vec3";

export interface base_object{
    dist(p: vec3): number;
}