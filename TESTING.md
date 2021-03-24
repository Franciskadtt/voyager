# Voyager Website - Testing details

[Main README.md file](README.md)

[View website in GitHub Pages](https://franciskadtt.github.io/voyager/)

### Testing client stories from UX section
1. As a beginner to intermediate sailor, I want to have guidance on what to pack for a day/overnight trip.
2. As a sailor, I want to make sure that I have remembered all the items to be packed by using a checklist
3. As a user if I have packed an item on the list, I want to be able to check it off the list.
4. As a sailor, I want to be able to list items I still need to buy 
5. As a user if I have bought an item on the list, I want to be able to check it off the list.
6. As a sailor, I want to be able to find a sailing store to buy items (either physical or online).
7. As a user, I want to be able to see reviews from other users.
8. As a user, I want to be able to share my own feedback regarding the checklist
9. As a user, I want to be able to follow or connect with the creator of the site on social media


### Automated testing of website
[TestProject](https://testproject.io/)
- To test website functionailites
#### Result:
Test 1
Found 2 issues:
Carousel for reviews does not work
Link to LinkedIn showed 404 error
#### Fix: 


[Link Checker](https://validator.w3.org/checklink)
- To check that all links are working and not broken.
#### Result:
Link to LinkedIn showed 404 error
Some of the links to this resource point to broken URI fragments-  Lines: 12, 39, 54
Broken fragments:
* https://franciskadtt.github.io/voyager/#landing-section (lines 39, 54)
#### Fix: 

Lighthouse (Google dev tool)
- To test accesibility and performance of website.
#### Result:
Desktop - attach report
Mobile - attach report
#### Fix:

[Responsinator](http://www.responsinator.com/)
- To test responsiveness of live website and functionalities on different size mobile devices
#### Result:
Carousel issue on some wider /landscape devices
#### Fix:

[Am I Responsive](http://ami.responsivedesign.is/)
- To view images of website on different devices - insert image
#### Result:
Good

[JSHint](https://jshint.com/)
- To detect errors and potential problems in your JavaScript code.
#### Result:
Main script file:
- Issues with not declaring variables - fixed
- Issues variable name - fixed
Email script file:
- Issues with semicolons -fixed
#### Fix:

[W3C CSS validation](https://jigsaw.w3.org/css-validator/)
- To validate CCS code
#### Result:
- 1 error to fix - with store class
- 21 warnings to fix with btn classes around colour 
#### Fix:

[W3C Markup Validation](https://validator.w3.org/)
- To validate HTML code
#### Result:
- 7 errors and 2 warnings to be fixed
#### Fix:

### Manual testing of all elements and functionality on every page
#### Landing Section
#### About Section
#### Checklist Section
#### Store Section
#### Review Section
#### Footer Section