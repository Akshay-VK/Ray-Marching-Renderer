"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.scene = void 0;
class scene {
    constructor() {
        this.objects = new Array();
    }
    add_object(obj) {
        this.objects.push(obj);
    }
    find_nearest(p) {
        var min = this.objects[0].dist(p);
        for (var i = 1; i < this.objects.length; i++) {
            var d = this.objects[i].dist(p);
            if (d < min) {
                min = d;
            }
        }
        return min;
    }
}
exports.scene = scene;
