"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const vec3_1 = require("./util/vec3");
const sphere_1 = require("./world/obj/sphere");
var a = vec3_1.vec3.ZERO;
var s = new sphere_1.sphere(vec3_1.vec3.fromXYZ(3, 4, 0), 1);
console.log(s.dist(a));
