"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.vec3 = void 0;
class vec3 {
    constructor(x, y, z) {
        this.x = x;
        this.y = y;
        this.z = z;
    }
    static from(a) {
        return new vec3(a, a, a);
    }
    static fromXYZ(x, y, z) {
        return new vec3(x, y, z);
    }
    static get ZERO() {
        return new vec3(0, 0, 0);
    }
    static get ONE() {
        return new vec3(1, 1, 1);
    }
    get magnitude() {
        return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z);
    }
    static magnitude(v) {
        return Math.sqrt(v.x * v.x + v.y * v.y + v.z * v.z);
    }
    get normalize() {
        var m = this.magnitude;
        return new vec3(this.x / m, this.y / m, this.z / m);
    }
    static normalize(v) {
        var m = v.magnitude;
        return new vec3(v.x / m, v.y / m, v.z / m);
    }
    static cross(a, b) {
        return new vec3(a.y * b.z - a.z * b.y, a.z * b.x - a.x * b.z, a.x * b.y - a.y * b.x);
    }
    static dot(a, b) {
        return a.x * b.x + a.y * b.y + a.z * b.z;
    }
    static max(a, b) {
        return new vec3(Math.max(a.x, b.x), Math.max(a.y, b.y), Math.max(a.z, b.z));
    }
    static min(a, b) {
        return new vec3(Math.min(a.x, b.x), Math.min(a.y, b.y), Math.min(a.z, b.z));
    }
    static abs(a) {
        return new vec3(Math.abs(a.x), Math.abs(a.y), Math.abs(a.z));
    }
    static add(a, b) {
        return new vec3(a.x + b.x, a.y + b.y, a.z + b.z);
    }
    static addNum(a, b) {
        return new vec3(a.x + b, a.y + b, a.z + b);
    }
    static sub(a, b) {
        return new vec3(a.x - b.x, a.y - b.y, a.z - b.z);
    }
    static subNum(a, b) {
        return new vec3(a.x - b, a.y - b, a.z - b);
    }
    static mult(a, b) {
        return new vec3(a.x * b.x, a.y * b.y, a.z * b.z);
    }
    static multNum(a, b) {
        return new vec3(a.x * b, a.y * b, a.z * b);
    }
    static div(a, b) {
        return new vec3(a.x / b.x, a.y / b.y, a.z / b.z);
    }
    static divNum(a, b) {
        return new vec3(a.x / b, a.y / b, a.z / b);
    }
}
exports.vec3 = vec3;
