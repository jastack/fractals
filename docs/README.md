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

![wireframe](./wireframe.png)

## Architecture and Technologies

This project will use JavaScript and HTML5 Canvas, and I am also interested in learning about WebGL to potentially help with some animations if I am able to finish the MVP first.

In order to represent a series of complex number iterations, I will need to be able to map a color gradient to specific pixels, which can be done using Canvas. I will also need to figure out how to allow a user to input initial state information and render the fractal accordingly.

I imagine I will have a file for each fractal I produce. So there will be:

mandlebrot.js

koch.js

sierpinski.js

It will also use webpack to bundle and serve up all the scripts.

###I will add more to this section as I implement the project and have a better idea of exactly what the architecture will be###

## Implementation Timeline

**Day 1:** Get the basic skeleton setup. Configure webpack and the entry file. Learn about canvas and have a better idea of how I will implement the fractal generator. Play around with altering shapes and lines in Canvas, learn how to apply a variable gradient color to specific pixels. Start working on mandlebrot.js.

**Day 2:** Finish mandlebrot.js and add user interactivity (ability to change a few starting conditions for example). Learn more about variable inputs in canvas, and how to get an image to re-render.

**Day 3:** Add additional koch.js and sierpinski.js. Play around more with canvas to think of additional ways to include user interactivity (like zoom and pan for mandlebrot or ways to display each step for koch and sierpinski).

**Day 4:** Finish any items left over from the MVP list. Make sure it looks pretty!

## Bonus features

Add more fractal options. Add animation. Add a clearly diagramed/animated explanation of the math behind fractals.
