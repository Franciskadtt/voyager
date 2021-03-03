# Voyager

A sailing voyage needs some planning even for an experienced sailor. Voyager is a checklist for Sailors to pack & plan before they set off on an overnight voyage. 

#### The main goals of this site 
- To be a guideline for sailors so they can know what items to pack on a sailing overnight voyage.
- To be a checklist for sailors that is customisable and sharable. 
- To be a tool that can show sailors the quantity of items to buy and the calculate their estimated cost.
- To help people find a sailing store either online or physical store, to purchase the things they need for their voyage.

## UX

### User Persona
This website is a tool for users interested in planning and pack for a day or an overnight sailing trip including beginner to intermediate sailors and people going on a sailing trip. The users want to use this tool as a guide on what to pack but also have a high level view on what needs to be done before they go on a voyage. The users are comfortable with using technology and would like to share information about the trip. 

### Who are we building it for?
- People planning a day or overnight sailing trip.

### What are the goals & needs of the user?
- Have a high level view of the what needs to be done and able to tick items off a list
- To see number and name items that are already packed
- To how many items still needs to be packed or purchased
- To calculate estimate cost of items
- To share list of items 
- Easily find information on sailing stores (online or physical stores)

### What are the goals & needs of the business?
- Be the “go to” planning and checklist tool for users going on a sailing voyage 
- Help users find sailing stores
- Gain insights from users what they need from the tool

### User Stories
- Beginner to Intermediate sailor who wants to have guidance what to pack for a day trip
- A Sailor that wants to make sure they have remembered all items to pack
- A Sailor that wants to be able to list items they need to still buy
- A Sailor that wants to print a list to take to a store
- A Sailor that wants to share a list to pack or buy with friends / shipmates
- A Sailor that wants to be able to calculate the estimate cost of items
- A Sailor that wants to be able see the number of outstanding items
- A Sailor that wants to be able to find a sailing store to buy items (either physical or online)

## Features
- One page site with 6 sections: Home, About, Checklist, Find a Store, Reviews and Footer section

### Nav bar
- Logo - if clicked/ tapped - return to Home section
- Mobile & Tablet - User can tap hamburger icon to open menu with above 6 sections
- Desktop - Nav bar extended and user can see page sections.
- Nav bar - If click/tap on Logo - go to Home Section.
- Nav bar - If click/tap on About - go to About Section.
- Nav bar - If click/tap on Checklist - go to Checklist Section.
- Nav bar - If click/tap on Find a Store - go to Find a Store  Section.
- Nav bar - If click/tap on Reviews - go to Reviews Section.
- Nav bar - If click/tap on Footer - go to Footer Section.

### Home Section / Landing Page
- User can click/tap on start button to go directly to the Checklist section
- User can click/tap on chevron (downarrow) to go to About section
- Heading 1 - “Voyager”, paragraph  - “Subheading”

### About Section
- Paragraph giving some background about the website for the user.

### Checklist Section
- The user can enter the voyage name in the box with field type = text. 
- The user can enter the departure point name in the box with field type = text.
- If user click/tap on “Don’t know where to start button” then a modal displays with instructions.
- In the Instructions box, there is a “X” which the user can tap to exit the modal and return to the main screen.
- If user clicks/taps on the “Clear all & Start again” button, then all the values are cleared below.
- Main Checklist
    - List of categories in unordered list. If the user click/tap arrow, the list expands. If the user click/tap category in list, list of items for that category will display below in “Items” list. If a category is not selected, the category items will be hidden. Number of items for that category is displayed next to it
    - List of items linked to a category in unordered list. Only show max 7 items. User can scroll down to view more items.
    - If the user click/tap on item, the item moves to “Done” container the background colour changes and a checkmark display.
    - Option where user can add own item in the box with field type = text. If user click on garbage icon, item is removed
    - List of “Done” items - Display check icon with heading next to it “Items packed” and counter of number of items in “Done” list. Display percentage 
      completed.  List all items clicked/tapped above. If listed here background colour changes and a checkmark display.
- Local storage & session storage

### Still to pack & buy Section
- Items appear here still if it still needs to be packed / purchased - list items here if not selected above. All items in the dropdown list, do not display if user clicked/ tapped above.
- Items appear here if box was ticked in the Checklist section
- User can enter number in “Qty” box
- User can enter a number in “Estimated cost”
- If user click/tap on “Calculate” -> Sum of all Qty items
- If user click/tap on “Calculate” -> Sum of Estimate Cost item
- Email list - email icon, if user click/tap on icon - modal opens to display info to email options (API)

### Find a store
- Display stores on Google Maps (API) with map markers
- List of links to online stores - if user click/tap on box - new page open with company website

### Reviews
- Have a carousel with cards. Can click on arrows to toggle left or right
- If hover over review card, card stand out

### Footer
Social links - click/tap on social icons to open new page to social media pages
 
### Existing Features
#### Header
- Logo - Allows the user to easily recognise the brand of “Voyage”. If the user clicks on the logo, it will return the users to the “Home” section as they would expect.
- Navigation Bar - Allows the user to easily navigate the website's sections and find what they are looking for with ease and speed.

#### Specific Sections
- Landing Page Section - Allows the user to see a quick snapshot of who is Franciska Du Toit
- About Section - Allows the user to see a high level page to navigate them to specific projects in her portfolio
- Checklist Section- Allows user to select pre-populated items they have packed but also select items they add themselves. The users can also see a list of items they have already packed. 
- Still to pack & purchase Section- Allows user to see items still to be packed. The user can add the quantity of items to buy and calculate the estimated cost. 
- Find a Store Section - Allows user to find a sailing store online or on Google maps if they want to go to a physical store. If they choose a physical store, the user will be able to see basic information on the store.
- Review Section - Allow user to see other users’ feedback and how they used it. It also allows the user to give their own feedback.

#### Footer 
Social Icons - Allows the user to access the social platforms that the designer & creator of the website uses.

### Features Left to Implement
- A unique environment for the user where they can sign in with a user name and password so that their information can be saved across devices - will need further skills to implement this feature
- A feature to store documents related to a voyage - will need further skills to implement this feature

## Technologies Used
- Languages - This project uses HTML, CSS and Javascript languages
- [Gitpod](https://www.gitpod.io/) - This projects used **Gitpod** as the IDE while building the website.
- [Popper.js](https://popper.js.org/)
    - The project uses **Popper,js** reference Javascript needed for the responsive navbar
- [BootstrapCDN](https://www.bootstrapcdn.com/)
    - The project uses **Bootstrap4** to simplify the structure of the website and help make the website responsive easy to do.
    - The project also uses BootstrapCDN to provide icons from [FontAwesome](https://www.bootstrapcdn.com/fontawesome/)
- [Google Fonts](https://fonts.google.com/)
    - The project uses **Google fonts** to style the website fonts.

## Testing - to be done

## Deployment - to be done

## Credits - to be done

### Content
- The copy and text for this website was created by Franciska Du Toit

### Media 

### Acknowledgements