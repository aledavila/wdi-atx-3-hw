function Rectangle(length, width) {
  this.length = length;
  this.width = width;
}

Rectangle.prototype =  {
	isSquare: function() {
    if(this.length === this.width) {
      return true;
    } else {
      return false;
    }
  },
  area: function() {
    return this.length * this.width;
  },
  perimeter: function() {
    return 2 * (this.length + this.width);
  }
};

function Triangle(sideA, sideB, sideC) {
  this.sideA = sideA;
  this.sideB = sideB;
  this.sideC = sideC;
}
Triangle.prototype = {
	isEquilateral: function() {
    if((this.sideA === this.sideB) && (this.sideA === this.sideC) && (this.sideB === this.sideC)) {
      return true;
    } else {
      return false;
    }
  },
  isIsosceles: function() {
    if((this.sideA && this.sideB) || (this.sideA && this.sideC) || (this.sideB && this.sideC) {
      return true;
    } else {
      return false;
    }
  },
  area: function() {
    var s = (this.sideA + this.sideB + this.sideC) / 2;
    var area = (s * (s - this.sideA) * (s - this.sideB) * (s - this.sideC));
    return Math.sqrt(area);
  },
  isObtuse: function() {

  }
};


function LineSegment(x1, y1, x2, y2) {
  this.x1 = x1;
  this.y1 = y1;
  this.x2 = x2;
  this.y2 = y2;
}
LineSegment.prototype = {
	// Your code goes here
};

loser = new Rectangle(2, 2);
console.log(loser.isSquare());
console.log(loser.area());
console.log(loser.perimeter());

triangle = new Triangle(4, 13, 15);
console.log(triangle.isEquilateral());
console.log(triangle.isIsosceles());
console.log(triangle.area());
