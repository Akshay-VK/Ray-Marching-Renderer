export class vec3{
    public x:number;
    public y:number;
    public z:number;
    
    public constructor(x: number, y: number, z: number){
        this.x=x;
        this.y=y;
        this.z=z;
    }
    public static from(a: number): vec3{
        return new vec3(a,a,a);
    }
    public static fromXYZ(x: number, y: number, z: number): vec3{
        return new vec3(x,y,z);
    }
    public static get ZERO(): vec3{
        return new vec3(0,0,0);
    }
    public static get ONE(): vec3{
        return new vec3(1,1,1);
    }
    

    public get magnitude(): number{
        return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z);
    }
    public static magnitude(v: vec3): number{
        return Math.sqrt(v.x*v.x+v.y*v.y+v.z*v.z);
    }
    public get normalize(): vec3{
        var m: number = this.magnitude;
        return new vec3(
            this.x/m,
            this.y/m,
            this.z/m
        );
    }

    public static normalize(v: vec3): vec3{
        var m: number = v.magnitude;
        return new vec3(
            v.x/m,
            v.y/m,
            v.z/m
        );
    }

    public static cross(a: vec3, b: vec3): vec3{
        return new vec3(
            a.y*b.z-a.z*b.y,
            a.z*b.x-a.x*b.z,
            a.x*b.y-a.y*b.x
        );
    }
    public static dot(a:vec3, b: vec3): number{
        return a.x*b.x+a.y*b.y+a.z*b.z;
    }

    public static max(a: vec3,b: vec3): vec3{
        return new vec3(
            Math.max(a.x,b.x),
            Math.max(a.y,b.y),
            Math.max(a.z,b.z)
        );
    }

    public static min(a: vec3,b: vec3): vec3{
        return new vec3(
            Math.min(a.x,b.x),
            Math.min(a.y,b.y),
            Math.min(a.z,b.z)
        );
    }

    public static abs(a: vec3): vec3{
        return new vec3(
            Math.abs(a.x),
            Math.abs(a.y),
            Math.abs(a.z)
        );
    }

    public static add(a: vec3, b: vec3):vec3{
        return new vec3(
            a.x+b.x,
            a.y+b.y,
            a.z+b.z
        );
    }
    public static addNum(a: vec3, b: number):vec3{
        return new vec3(
            a.x+b,
            a.y+b,
            a.z+b
        );
    }
    public static sub(a: vec3, b: vec3):vec3{
        return new vec3(
            a.x-b.x,
            a.y-b.y,
            a.z-b.z
        );
    }
    public static subNum(a: vec3, b: number):vec3{
        return new vec3(
            a.x-b,
            a.y-b,
            a.z-b
        );
    }
    public static mult(a: vec3, b: vec3):vec3{
        return new vec3(
            a.x*b.x,
            a.y*b.y,
            a.z*b.z
        );
    }
    public static multNum(a: vec3, b: number):vec3{
        return new vec3(
            a.x*b,
            a.y*b,
            a.z*b
        );
    }
    public static div(a: vec3, b: vec3):vec3{
        return new vec3(
            a.x/b.x,
            a.y/b.y,
            a.z/b.z
        );
    }
    public static divNum(a: vec3, b: number):vec3{
        return new vec3(
            a.x/b,
            a.y/b,
            a.z/b
        );
    }
    
}