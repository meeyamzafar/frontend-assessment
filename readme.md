Thank you for giving me the oppurtunity to work on this test.
---

######For Exercise 1
---
I have resized my browser to check responsiveness, and also used the Chrome Inspector Device inspector to se how the mobile version renders across various devices.

######For Exercise 2
---
Please note that because of a cross-browser origin problem, the data.json cannot be loaded unless we call it over a web server, or an http request via AJAX or any jquery method like getJSON.

To avoid this, I am asking the user to load the file using a file chooser (simple html input file chooser) which will load the file, and then traverse it to generate tabs and accordions. Please choose the data.json file when the input prompts. 

The breakpoint to transition into accordions is 768px. I have added a very slight animation, please note that all user experience  and user interface can be improved via animations and colors.


Question and Answer
---
Explain why the result of ('b' + 'a' + + 'a' + 'a').toLowerCase() is banana.

1) Looking at the two + signs in middle, the left one attaches itself to the previous 'a', and becomes a concatenation operator, while the right one becomes a single (unary) operator and attaches itself to the 'a' after it.

2) First, the middle + 'a' evaluates to NaN, hence the equation turns into ('b' + 'a' + NaN + 'a').toLowerCase()

3) ('b' + 'a' + NaN + 'a').toLowerCase() is the same as ('b' + 'a' + 'NaN' + 'a').toLowerCase()

4) The equation now turns into ('baNaNa').toLowerCase()

5) the above == banana!!!

---

