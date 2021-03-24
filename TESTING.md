# Voyager Website - Testing details

[Main README.md file](README.md)

[View website in GitHub Pages](https://franciskadtt.github.io/voyager/)

### Testing client stories from UX section

### Automated testing of website
[TestProject](https://testproject.io/)
- To test website functionailites
Test 1
Found 2 issues:
Carousel for reviews does not work
Link to LinkedIn showed 404 error

[Link Checker](https://validator.w3.org/checklink)
- To check that all links are working and not broken
Link to LinkedIn showed 404 error
Some of the links to this resource point to broken URI fragments-  Lines: 12, 39, 54
Broken fragments:
* https://franciskadtt.github.io/voyager/#landing-section (lines 39, 54)

Lighthouse (Google dev tool)
Desktop - attach report and fixes
Mobile - attach report and fixes

[Responsinator](http://www.responsinator.com/)
- To test responsiveness of live website and functionalities on different size mobile devices
Carousel issue on some wider /landscape devices

[Am I Responsive](http://ami.responsivedesign.is/)
- To view images of website on different devices - insert image
Good

[JSHint](https://jshint.com/)
- To detect errors and potential problems in your JavaScript code
Main script file:
- Issues with not declaring variables - fixed
- Issues variable name - fixed
Email script file:
- Issues with semicolons -fixed

[W3C CSS validation](https://jigsaw.w3.org/css-validator/)
- To validate CCS code
- 1 error to fix - with store class
- 21 warnings to fix with btn classes around colour 

[W3C Markup Validation](https://validator.w3.org/)
- To validate HTML code
- 7 errors and 2 warnings to be fixed

### Manual testing of all elements and functionality on every page
#### Landing Section
#### About Section
#### Checklist Section
#### Store Section
#### Review Section
#### Footer Section