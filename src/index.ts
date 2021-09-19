import { vec3 } from "./util/vec3";
import { sphere } from "./world/obj/sphere";

var a = vec3.ZERO;
var s = new sphere(vec3.fromXYZ(3,4,0),1);

console.log(s.dist(a));