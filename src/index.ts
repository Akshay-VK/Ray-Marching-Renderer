import { vec3 } from "./util/vec3";
import { sphere } from "./world/obj/sphere";
import { ray } from "./world/ray";
import { scene } from "./world/scene";

var r = new ray(vec3.ZERO, vec3.fromXYZ(-1,0,0));

var scn = new scene();

var s = new sphere(vec3.fromXYZ(3,0,0),1);
scn.add_object(s);

var s2 = new sphere(vec3.fromXYZ(-3,0,0),2);
scn.add_object(s2);

console.log(r.cast(scn,20,0.00001,10000));