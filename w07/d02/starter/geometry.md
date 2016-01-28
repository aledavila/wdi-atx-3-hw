# Geometry

### TIPS
- You can reference the SECOND (not the first) code example [here](http://idhana.com/2009/07/13/constructor-vs-class-methods-in-javascript/) if you need a reminder on how to augment an object's prototype. Remember, adding a method to an object's prototype means adding a method to all instances of that object.
- You may need to look up some geometric terms like area, isosceles, obtuse, etc. if you've forgotten what they mean :)

## Rectangle

Given the following constructor function:

```
function Rectangle(length, width) {
  this.length = length;
  this.width = width;
}
```

Augment its prototype with the following methods:

* `isSquare` - returns true if the rectangle is a square.
* `area` - calculates the area of the rectangle.
* `perimeter` - calculates the perimeter of the rectangle.

Create a few rectangles with different lengths and widths, and then test your outcomes using the console


## Triangle

Given the following constructor function:

```
function Triangle(sideA, sideB, sideC) {
  this.sideA = sideA;
  this.sideB = sideB;
  this.sideC = sideC;
}
```

Augment its prototype with the following methods:

* `isEquilateral` - returns true [if the triangle is equilateral](http://en.wikipedia.org/wiki/Equilateral_triangle).
* `isIsosceles` - return true [if the triangle is isosceles](http://en.wikipedia.org/wiki/Isosceles_triangle#By_relative_lengths_of_sides).
* `area` - calculates the [area of the Triangle](http://en.wikipedia.org/wiki/Heron%27s_formula).
* `isObtuse` - returns true [if the triangle is obtuse](http://en.wikipedia.org/wiki/Isosceles_triangle#By_internal_angles).

Create a few rectangles with different lengths and widths, and then test your outcomes using the console


## LineSegment

Given the following constructor:

```
function LineSegment(x1, y1, x2, y2) {
  this.x1 = x1;
  this.y1 = y1;
  this.x2 = x2;
  this.y2 = y2;
}
```
Augment its prototype with the following method:

* `length` – calculates the length of the (x1, y1) --> (x2, y2) [line segment](http://en.wikipedia.org/wiki/Pythagorean_theorem).
