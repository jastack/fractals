# Fractals

## Background

Fractals are a visually intriguing exploration of complex numbers and iteration. A fractal begins with a set of initial conditions and a relatively simple equation to iterate over, and at each step the images can change and often a surprising shape emerges.

## Functionality & MVP

With this fractal generator, users will be able to:
- [ ] View several different fractal templates
- [ ] Adjust initial conditions
- [ ] Zoom in and navigate around the image
- [ ] Mouse over image and watch simple fractal trees grow.

In addition the generator will include an about section that gives more information about fractals and how the generator works, as well as a production Readme.

## Wireframes

This app will be single page with control/input boxes and a centered display box. I haven't totally decided if there will be only one display box or if the user can scroll to see different type of fractals. But basically I imagine a display in the center to show the fractal, inputs on the top, and on the left fractal templates to choose from (koch curve, mandlebrot set, etc).

![wireframe](docs/wireframe.png)

## Architecture and Technologies

This project will mostly JavaScript and HTML5 Canvas, although I am also interested in learning about WebGL to potentially help with some animations.

It will also use webpack to bundle and serve up all the scripts.

## Implementation Timeline

**Day 1:** Get the basic skeleton setup. Configure webpack and the entry file. Learn about canvas and have a better idea of how I will implement the fractal generator.

**Day 2:** Complete a basic fractal output.

**Day 3:** Add additional fractal options. And begin to add user functionality.

**Day 4:** Add full user functionality (zoom, change starting conditions, etc.). Make sure it looks pretty!

## Bonus features

Add more fractal options. Add animation. Add a clearly diagramed/animated explanation of the math behind fractals.
