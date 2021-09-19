import { renderer } from "./util/renderer";
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

//renderer
var render = new renderer(500,500);
for(var x = 0;x < 500;x++){
    for(var y = 0;y < 250;y++){
        render.setPixel(x,y,255,0,0,1);
    }
    for(var y = 250;y < 500;y++){
        render.setPixel(x,y,0,255,0,1);
    }
}
render.save();