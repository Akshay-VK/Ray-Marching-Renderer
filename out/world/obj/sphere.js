"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sphere = void 0;
const vec3_1 = require("../../util/vec3");
class sphere {
    constructor(pos, radius) {
        this.position = pos;
        this.radius = radius;
    }
    dist(p) {
        return vec3_1.vec3.magnitude(vec3_1.vec3.sub(this.position, p)) - this.radius;
    }
}
exports.sphere = sphere;
