// 1. Copy and paste your prototype in here and refactor into class syntax.

class RCuboidMaker{
    constructor(attb) {
        this.length = attb.length;
        this.width = attb.width;
        this.height = attb.height;
    };


    volume() {
        return this.length * this.width * this.height;
    };

  
    surfaceArea(){
        return 2 * (this.length * this.width + this.length * this.height + this.width * this.height);
    };

};

let rcuboid = new RCuboidMaker({
    length: 4,
    width: 5,
    height: 5,
});

    
console.log(rcuboid.volume()); // 100
console.log(rcuboid.surfaceArea()); // 130

// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods using the dimension properties from CuboidMaker.  Test your work by logging out your volume and surface area.