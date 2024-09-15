# Instructions :
# The goal is to create a class that represents a simple circle.
# A Circle can be defined by either specifying the radius or the diameter.
# The user can query the circle for either its radius or diameter.

# Other abilities of a Circle instance:

# Compute the circle’s area
# Print the attributes of the circle - use a dunder method
# Be able to add two circles together, and return a new circle with the new radius - use a dunder method
# Be able to compare two circles to see which is bigger, and return a Boolean - use a dunder method
# Be able to compare two circles and see if there are equal, and return a Boolean- use a dunder method
# Be able to put them in a list and sort them
# Bonus (not mandatory) : Install the Turtle module, and draw the sorted circles

import math


class Circle:
    def __init__(self, radius=None, diameter=None):
        if radius is not None:
            self._radius = radius
        else:
            self._radius = diameter / 2

    @property
    def radius(self):
        return self._radius

    @property
    def diameter(self):
        return self._radius * 2

    def area(self):
        return math.pi * (self._radius**2)

    def __str__(self):
        return f"Circle with radius of {self._radius:.2f} and diameter of {self.diameter:.2f}"

    def __repr__(self):
        return f"Circle with radius of {self._radius:.2f} and diameter of {self.diameter:.2f}"

    def __add__(self, other):
        if isinstance(other, Circle):
            return Circle(radius=self._radius + other._radius)
        return NotImplemented

    def __lt__(self, other):
        if isinstance(other, Circle):
            return self._radius < other._radius
        return NotImplemented

    def __eq__(self, other):
        if isinstance(other, Circle):
            return self._radius == other._radius
        return NotImplemented


c1 = Circle(radius=5)
c2 = Circle(diameter=12)
c3 = Circle(radius=7)


print(c1)
print(c1.area())

c4 = c1 + c2
print(c4)

print(c1 < c2)
print(c3 == c4)

circles = [c1, c2, c3, c4]
sorted_circles = sorted(circles)

for circle in sorted_circles:
    print(circle)
