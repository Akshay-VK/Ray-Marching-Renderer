"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ray = void 0;
const vec3_1 = require("../util/vec3");
class ray {
    constructor(p, dir) {
        this.position = p;
        this.direction = dir;
    }
    cast(scn, MAX_CAST_ITER, EPSILON, MAX_DIST) {
        var TOTAL_DIST = 0;
        var p = this.position;
        for (var i = 0; i < MAX_CAST_ITER; i++) {
            var dist = scn.find_nearest(this.position);
            this.position = vec3_1.vec3.add(this.position, vec3_1.vec3.multNum(this.direction, dist));
            TOTAL_DIST += dist;
            if (dist < EPSILON) {
                return TOTAL_DIST;
            }
            if (TOTAL_DIST > MAX_DIST) {
                return 0;
            }
        }
        this.position = p;
        return TOTAL_DIST;
    }
}
exports.ray = ray;
