Thank you for giving me the oppurtunity to work on this test.
---

For Exercise 1, I am attaching some snapshots in the folder called snapshots which show how the design is rendered across different responsive sizes for me.

For Exercise 2, please note that because of a cross-browser origin problem, the data.json cannot be loaded unless we call it using a web server, or an http request via AJAX or any jquery method like getJSON.

To avoid this, I am asking the user to load the file using a file chooser (simple html input file chooser) which will load the file, and then traverse it to generate tabs and accordions.


Question and Answer
---
Explain why the result of ('b' + 'a' + + 'a' + 'a').toLowerCase() is banana.

1) Looking at the two + signs in middle, the left one attaches itself to the previous 'a', and becomes a concatenation operator, while the right one becomes a single (unary) operator and attaches itself to the 'a' after it.

2) First, the middle + 'a' evaluates to NaN, hence the equation turns into ('b' + 'a' + NaN + 'a').toLowerCase()

3) ('b' + 'a' + NaN + 'a').toLowerCase() is the same as ('b' + 'a' + 'NaN' + 'a').toLowerCase()

4) The equation now turns into ('baNaNa').toLowerCase()

5) the above == banana!!!

---

