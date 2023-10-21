class Circle {
    static Pi = Math.PI;
  
    constructor(radius) {
      if (radius <= 0) {
        throw new Error("Radius must be positive.");
      }
      this.radius = radius;
    }
  
    area() {
      return Circle.Pi * this.radius ** 2;
    }
  
    perimeter() {
      return 2 * Circle.Pi * this.radius;
    }
  }