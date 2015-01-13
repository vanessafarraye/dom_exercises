# DOM Example - Collections

We're going to practice DOM manipulation for collections of elements.

In the first example, we only grabbed elements that had IDs. This
allowed us to work with individual elements.

However, in this example we're going to select groups of elements and
see how to work with them.

- Look at `collections.html` and examine the HTML.
- Also open `collections.js`. We're going to write our JavaScript here.
- Open `collections.html` in Chrome.

## Part 1

- Use `.getElementsByTagName` to retrieve all of the `<li>` elements.
- Set `.style.borderBottom` on *each* of them.
- Notice that you'll need to loop (!) over each element in order to do
  this.

## Part 2

- Use `.getElementsByClassName` to retrieve all of the `<li>`s with
  the class of `datatype`.
- Turn all of them `red`.
- You'll need to use the `.style.color` property.
- You'll need to loop over each element.

# Part 3
- Find every element with a class of `function` and change its `color`
  to `blue`.

# Questions

- What are the differences between `.getElementById`,
  `.getElementsByClassName`, and `.getElementsByTagName`.
- How did you loop over the lists of elements?
