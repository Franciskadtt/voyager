# Voyager Website - Testing details

[Main README.md file](README.md)

[View website in GitHub Pages](https://franciskadtt.github.io/voyager/)

## Testing user stories from UX section
1. As a beginner to intermediate sailor, I want to have guidance on what to pack for a day/overnight trip.
    - In the Checklist section there is a comprehensive list of items divided into different categories so the user is guided on what to pack. The user does not have think of their own items or research for items.
2. As a sailor, I want to make sure that I have remembered all the items to be packed by using a checklist.
    - The "Checklist" section has a list of items underneath each other and has a function built in, where the user can "check-off" items from the list like they would in real life.
3. As a user if I have packed an item on the list, I want to be able to check it off the list.
    - The user can click/tap on the "Check" button and it will remove the item from the "Items to Pack" list. The item will then move the "Already Packed" section.
4. As a sailor, I want to be able to list items I still need to buy. 
    - The user can click/tap on the "Buy" button and it will remove the item from the "Items to Pack" list and add it to the "To Buy" list where the user can easily see the items they need to buy.
5. As a user if I have bought an item on the list, I want to be able to check it off the list.
    - In the "To Buy" section the items appear with a "Check" button so that if the item is then bought and packed, it can be clicked/tapped. The item will then move the "Already Packed" section.
6. As a sailor, I want to be able to find a sailing store to buy items (either physical or online).
    - In the "Find a Store" section, the user has a choice of online or physical stores that sell sailing and marine items. 
    - In the "Online Stores" section, the user can simply click/tap on the store link and they will be taken to the store's website.
    - In the "Physical Stores" section, the user can interact with the Map and there are pre-populated markers to indicate physical store in the area. If the user click/tap on the map marker, the store's information will appear as well as a link to their website.
7. As a user, I want to be able to see reviews from other users.
    - In the Review Section, the user can view the feedback of the website tool in a carousel of testimonials from other users.
8. As a user, I want to be able to share my own feedback regarding the checklist
    - The user can fill in the feedback form to give suggestions or feedback of the website tool.
9. As a user, I want to be able to follow or connect with the creator of the site on social media.
    - The user can click/tap on the social links which will take them to the creator's social media sites.

## Automated testing of website
### [TestProject](https://testproject.io/)
To test website functionailites.
* **Result**
    1. Carousel for reviews does not work.
    2. Link to LinkedIn showed 404 error.
* **Fix** 
    1. Update link for Linkedin.
    2. Fix carousel by using bootstrap code.


### [Link Checker](https://validator.w3.org/checklink)
To check that all links are working and not broken.
* **Result**
    1. Link to LinkedIn showed 404 error.
    2. Broken fragments for landing section link.
* **Fix**  
    * Update link for Linkedin.
    * Add id for landing section.

### Lighthouse (Google dev tool)
To test accesibility and performance of website.
#### Desktop
* **Result**
    1. Links to cross-origin destinations are unsafe.
    2. Slow loading time for website.
    3. No Accessibility for achor tags.
    4. Heading elements are not in a sequentially-descending order.
* **Fix** 
    1. Add rel="noopener noreferrer" to any external links to improve performance and prevent security vulnerabilities.
    2. Optimise images with TinyPNG.
    3. Add aria label to anchor tags.
    4. Change heading element tag to be in descending order.

#### Mobile
* **Result**
     1. Font-sizes too in certain paragraphs.
* **Fix** 
    2. Increase font-sizes to be more than 12px.

### [Responsinator](http://www.responsinator.com/)
To test responsiveness of live website and functionalities on different size mobile devices.
* **Result**
    1. Carousel issue on some wider /landscape devices.
* **Fix** 
    1. Fix carousel by using bootstrap code to ensure responsive on all devices.

### [Am I Responsive](http://ami.responsivedesign.is/)
To view images of website on different devices.
* **Result**
    1. The responsiveness of the website looks good.

### [JSHint](https://jshint.com/)
To detect errors and potential problems in your JavaScript code.
1. Main script file:
* **Result**
    1. Issues with not declaring variables.
    2. Issues variable name.
* **Fix** 
    1. Ensure variable is declared correctly.
    2. Fix variable name.
2. Email script file:
* **Result**
    1. Issues with semicolons that were missing.
* **Fix** 
    1. Add semicolons in correct places.

### [W3C CSS validation](https://jigsaw.w3.org/css-validator/)
To validate the CCS code of the project.
* **Result**
    1. Error: left is not a align-items value.
    2. Warning: Same colour background and border for check button.
    3. Warning: Same colour background and border for buy button.
    4. Warning: Same colour background and border for add-own button.
    5. Warning: Same colour background and border for store links.
    6. Warning: Same colour background and border for store-info button.
    7. Warning: unknown vendors for transition style.
* **Fix** 
    1. Fix Error: remove align-items.
    2. Fix Warnings for background and border colour: Remove border color.
    3. Fix Warning for unknown vendors: Remove vendon extensions.

### [W3C Markup Validation](https://validator.w3.org/)
To validate the HTML code of the project.
* **Result**
    1. Warning: The type attribute is unnecessary for JavaScript resources (2 scripts)
    2. Error: Attribute href not allowed on element button at this point.
    3. Error: An img element must have an alt attribute, except under certain conditions. (3 images)
    4. Error: The value of the for attribute of the label element must be the ID of a non-hidden form control.
    5. Error : The aria-describedby attribute must point to an element in the same document.
* **Fix** 
    1. Fix warning 1 = Remove 'type' attribute from scripts
    2. Fix warning 2 = Change 'button' tag to 'input' tag
    3. Add alt attributes to 3 carousel images
    4. Add identical for and id elements for label and input fields
    5. Remove aria-describedby attribute

## Manual testing of all elements and functionality on every page
1.  Landing Section
    1. Go to the "Landing" page from a desktop.
    2. Change the screen size from desktop to mobile to verify that the navigation bar is responsive and switches from in line menu to burger icon dropdown menu at the appropriate place.
    3. Reduce the width of the window to confirm that the image have correct focus for mobile and tablet.
    4. Hover over the start button and verify if you hover over it, a shadow appears as expected.
    5. Click on start button which scrolls down to the Checklist section.
    6. Hover over the down arrow and verify if you hover over it, it moves as expected.
    7. Click on down arrow which scrolls down to the About section.
2. About Section
    1. Click on scroll up button which scrolls up to the Landing Section.
3. Checklist Section
    1. Reduce the width of the window to confirm that the text boxed moves below each other for mobile and tablet view.
    2. Type in "Voyage Name" text box.
    3. Type in "Departure Point" text box.
    4. Click on "Show me the Ropes" and modal opens. 
    5. Click on "x" in modal to close modal.
    6. Click on all "check" buttons in each category and all items move to "Already packed" list.
    7. Click on all "buy" buttons in each category and all items move to "To Buy list".
    8. Click on "check" buttons for items in "To Buy" list and all items move to "Already Packed" list.
    9. Click on "Own Items" category and type in text in input field. Click on "+" button and new item is added to the "Own list" category.
    10. Click on delete button in "Own List" category and item is deleted from that list.
    11. Still to test "check" and buy" buttons if user adds own item in "Own Items" List.
    12. Click on "Clear the Decks" to refresh page and page resets and removes all typed info in boxes and resets checklist.
    13. Click on scroll up button which scrolls up to the Landing Section.
4. Store Section
    1. Hover over the store item link and verify if you hover over it, the colour change works as expected.
    2. Click on each store link and verify that the correct store site is opened in a new tab.
    3. Refresh page several times to ensure Google maps is displaying correctly with the correct map markers.
    4. Click on each map marker and verify that on click the store infomation card displays.
    5. Resize page to verify the store information card displays below the Google Map for mpbile and tablet.
5. Review Section
    1. Click on carousel arrows to move back and forth and verify it slides as expected.
    2. Try to submit the empty form and verify that an error message about the required fields appears
    3. Try to submit the form with an invalid email address and verify that a relevant error message appears
    4.  Reduce and expand width of window to verify that the form display behaves and centres the way expected, and that it looks good on all device widths.
6. Footer Section
    1. Verify all social media links go to social media pages - issue with LinkeIn link 

## Further testing: 