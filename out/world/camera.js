"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.camera = void 0;
const renderer_1 = require("../util/renderer");
const vec3_1 = require("../util/vec3");
const ray_1 = require("./ray");
class camera {
    constructor(pos, dir, width, height, focal_length, aperture) {
        this.position = pos;
        this.direction = dir;
        this.width = width;
        this.height = height;
        this.focal_length = focal_length;
        this.aperture = aperture;
        this.rays = new Array(height);
        for (var i = 0, y = -height / 2; i < height; i++, y++) {
            this.rays[i] = new Array(width);
            for (var j = 0, x = -width / 2; j < width; j++, x++) {
                var cx = ((j / width) * 2) - 1;
                var cy = ((i / height) * 2) - 1;
                var f = vec3_1.vec3.normalize(vec3_1.vec3.sub(this.position, this.direction));
                var r = vec3_1.vec3.cross(vec3_1.vec3.fromXYZ(0, 1, 0), f);
                var c = vec3_1.vec3.add(vec3_1.vec3.multNum(f, focal_length), this.position);
                var u = vec3_1.vec3.cross(f, r);
                var i_ = vec3_1.vec3.add(c, vec3_1.vec3.add(vec3_1.vec3.multNum(r, cx), vec3_1.vec3.multNum(u, cy)));
                var ray_dir = vec3_1.vec3.sub(i_, this.position);
                this.rays[i][j] = new ray_1.ray(this.position, ray_dir);
            }
        }
        this.painter = new renderer_1.renderer(this.width, this.height);
    }
    cast(scn, MAX_CAST_ITER, EPSILON, MAX_DIST) {
        this.rays.forEach((val, i) => {
            val.forEach((r, index) => {
                var d = r.cast(scn, MAX_CAST_ITER, EPSILON, MAX_DIST);
                if (d != 0)
                    console.log(d);
                this.painter.setPixel(index - (this.width / 2), i - (this.height / 2), d / 255, d / 255, d / 255, 1);
            });
        });
        this.painter.save("renderer");
    }
    draw_rays() {
    }
}
exports.camera = camera;
