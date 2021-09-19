"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const renderer_1 = require("./util/renderer");
const vec3_1 = require("./util/vec3");
const sphere_1 = require("./world/obj/sphere");
const ray_1 = require("./world/ray");
const scene_1 = require("./world/scene");
var r = new ray_1.ray(vec3_1.vec3.ZERO, vec3_1.vec3.fromXYZ(-1, 0, 0));
var scn = new scene_1.scene();
var s = new sphere_1.sphere(vec3_1.vec3.fromXYZ(3, 0, 0), 1);
scn.add_object(s);
var s2 = new sphere_1.sphere(vec3_1.vec3.fromXYZ(-3, 0, 0), 2);
scn.add_object(s2);
console.log(r.cast(scn, 20, 0.00001, 10000));
var render = new renderer_1.renderer(500, 500);
for (var x = 0; x < 500; x++) {
    for (var y = 0; y < 250; y++) {
        render.setPixel(x, y, 255, 0, 0, 1);
    }
    for (var y = 250; y < 500; y++) {
        render.setPixel(x, y, 0, 255, 0, 1);
    }
}
render.save();
