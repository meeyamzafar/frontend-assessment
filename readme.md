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


Introduction
---
Thanks for taking the time to complete this frontend technical assessment. We will be focusing on software quality (scalability, readability, maintainability, etc.) and your eye for detail. You may include any libraries. Bonus points if SASS/LESS is used and jQuery is not used.

Exercise 1
---
Build a responsive page based on the designs.

##### Requirements
1. Match the designs exactly.
2. Needs to be responsive.

##### Designs
* exercise1-desktop.png
* exercise1-mobile.png

##### Assets
* Desktop banner - http://via.placeholder.com/1920x650
* Mobile banner - http://via.placeholder.com/600x600
* Content images - http://via.placeholder.com/400x300

Exercise 2
---
Read the `data.json` file and display the data as an accordion on desktop and tabs on mobile.

##### Requirements
1. Display data in tabs on desktop.
2. Display data in an accordion on mobile.
3. Only 1 accordion/tab should be open at a time.
4. Open the first accordion/tab on load.
5. If the open accordion is selected, close it.

###### Bonus points
* Improve the user experience with meaningful animations/transitions.
* Design and styling.
* Explain why the result of `('b' + 'a' + + 'a' + 'a').toLowerCase()` is `banana`.

Submission
---
We recommend submitting your completed assessment as a forked repository. Please replace README content with instructions and relevant documentation.
