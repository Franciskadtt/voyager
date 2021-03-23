
/** Add scroll up function
orginal code from https://www.w3schools.com/howto/howto_js_scroll_to_top.asp with modifications for project
*/

//Get the button
var scrollUpButton = document.getElementById("scrollButton");

// When the user scrolls down 40px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 40 || document.documentElement.scrollTop > 40) {
    scrollUpButton.style.display = "block";
    } else {
    scrollUpButton.style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}



// Add Checklist Packed function
    function markPacked(event){
        // Get the element that triggered a specific event
        selectedItem = event.target;
        // Get element by id - where to place target item
        targetList = document.getElementById('packedItems');
        // Create new item if selected 
        newItem = ' <li class="list-group-item"> ' + selectedItem.getAttribute("data-itemname") + ' </li>';
        // Where new item should be created
        currentPackedList = targetList.innerHTML;
        targetList.innerHTML = currentPackedList + newItem;
        // Hide item if selected
        selectedItem.parentElement.parentElement.classList.add('hideItem');
    }
    // Take each element clicked on
    items = document.getElementsByClassName('checkItem');
    for (var index = 0; index < items.length; index++) {
        items[index].addEventListener('click', markPacked, false);
    }

// Add Checklist to-buy function
    function markToBuy (event){
        // Get the element that triggered a specific event
        selectedItem = event.target;
        // Get element by id
        targetList = document.getElementById('toBuyItems');
        // Create new item if selected 
        newBuyItem = ' <li class="list-group-item">  <div role="group" aria-label="Checklist Buttons" class="btn-position"> <button type="button" onClick="markPacked(event);" class="btn btn-check checkItem" data-itemname="' + selectedItem.getAttribute("data-buyitemname") + '">Check</button> </div> ' + selectedItem.getAttribute("data-buyitemname") + '</li>';
        // Where new item should be created
        currentBuyList = targetList.innerHTML;
        targetList.innerHTML = currentBuyList + newBuyItem;
        // Hide item if selected
        selectedItem.parentElement.parentElement.classList.add('hideItem');
    }
    // Take each element clicked on
    itemsToBuy = document.getElementsByClassName('to-buy-items');
    for (var index = 0; index < itemsToBuy.length; index++) {
        itemsToBuy[index].addEventListener('click', markToBuy, false);
    }

// Add Own List
/* orginal code with modifications from https://medium.com/@suryashakti1999/to-do-list-app-using-javascript-for-absolute-beginners-13ea9e38a033 */

    //Selectors and get Elements
    let ownInput = document.getElementById('formOwnInput');
    let ownAddButton = document.querySelector('.btn-add-own');
    let ownList = document.getElementById('ownItems');
    //Event listeners
    ownAddButton.addEventListener("click", addOwnItem)
    ownList.addEventListener("click", deleteCheck)
    ownList.addEventListener("click", checkOwnButton)

    //Function to add new items
    function addOwnItem(event) {
        event.preventDefault();
        //Add own list Div
        var ownListDiv = document.createElement('div');
        ownListDiv.classList.add('ownlist-item');
        //Add own list item
        var newOwnList = document.createElement('li');
        newOwnList.innerText = ownInput.value;
        newOwnList.classList.add('own-list-item');
        ownListDiv.appendChild(newOwnList);
        if(ownInput.value === ""){
            return null
        }
        //Add Check Button
        var checkOwnButton = document.createElement('button');
        checkOwnButton.innerHTML = 'Check';
        checkOwnButton.classList.add('btn', 'btn-check', 'checkItem')
        ownListDiv.appendChild(checkOwnButton);
        //Add Buy Button
        var checkOwnButton = document.createElement('button');
        checkOwnButton.innerHTML = 'Buy';
        checkOwnButton.classList.add('btn', 'btn-buy', 'to-buy-items')
        ownListDiv.appendChild(checkOwnButton);
        //Add Delete Buttons
        var deleteButton = document.createElement('button');
        deleteButton.innerHTML = '<i class="fas fa-trash"></i>';
        deleteButton.classList.add('delete_btn')
        ownListDiv.appendChild(deleteButton);
        //Append to Actual LIST
        ownList.appendChild(ownListDiv);
        //Clear own item input VALUE
        ownInput.value = ""
    }

//Function what happens if click on delete button
function deleteCheck(e) {
    var item = e.target;
    //Delete
    if (item.classList[0] === "delete_btn") {
        var ownItem = item.parentElement;
        //Animation for delete item
        ownItem.classList.add("disappear")
        ownItem.addEventListener('transitionend', removeOwnItem)
    }
    //Check Item
    if (item.classList[0] === "checkItem") {
        owmItem.markPacked();
    }
}

//Function to delete own item
function removeOwnItem () {
    ownItem.remove()
        }