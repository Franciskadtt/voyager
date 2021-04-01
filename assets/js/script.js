
let toPackList = Array.prototype.slice.call(document.querySelectorAll('#optionsHolder li.list-group-item'));


function loadInitialData(){
    console.log("loaded", toPackList);
    var currentPackedItems = JSON.parse(localStorage.getItem('packed')) || [];
    var currentBoughtItems = JSON.parse(localStorage.getItem('bought')) || [];

    toPackList.forEach(function (element){
        const elementText = element.innerText.replace('option', '').replace('Buy', '').replace('Check', '').replace('BUY', '').replace('CHECK', '').replace(/\s+/g,' ').trim();
        if (currentPackedItems.includes(elementText)){
            element.classList.add('hideItem');
            var targetList = document.getElementById('packedItems');
            // Create new item if selected 
            var newItem = ' <li class="list-group-item"> ' + elementText + ' </li>';
            // Where new item should be created
            var currentPackedList = targetList.innerHTML;
            targetList.innerHTML = currentPackedList + newItem;
        }
        if (currentBoughtItems.includes(elementText)){
            element.classList.add('hideItem');
            var targetList = document.getElementById('toBuyItems');
            // Create new item if selected 
            newBuyItem = ' <li class="list-group-item">  <div role="group" aria-label="Checklist Buttons"> <button type="button" onClick="markPacked(event);" class="btn btn-check checkItem" data-itemname="' + elementText + '">Check</button> </div> ' + elementText + '</li>';
            // Where new item should be created
            var currentBuyList = targetList.innerHTML;
            targetList.innerHTML = currentBuyList + newBuyItem;
        }

        
    });
}

if (document.readyState === "complete" || document.readyState === "interactive") {
    document.addEventListener("DOMContentLoaded", loadInitialData);
} else {
    document.addEventListener("DOMContentLoaded", loadInitialData);
}

/** Add scroll up function
orginal code from https://www.w3schools.com/howto/howto_js_scroll_to_top.asp with modifications for project
*/
//Get the button
var scrollUpButton = document.getElementById("scrollButton");

// When the user scrolls down 40px from the top of the document, show the button
window.onscroll = function() {
    scrollFunction(); 
};

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

function saveItem(action, itenName){
    if (action.localeCompare('packed') ===0){
        var currentSavedItemsPacked = localStorage.getItem('packed');
        if (currentSavedItemsPacked=== null){
            const itemsPacked = [itenName];
            localStorage.setItem('packed',JSON.stringify(itemsPacked));
        }
        else{
            var currentPackedItems = JSON.parse(localStorage.getItem('packed'));
            currentPackedItems.push(itenName);
            localStorage.setItem('packed',JSON.stringify(currentPackedItems));
        }
    }
    if (action.localeCompare('bought') ===0){
        var currentSavedItemsBought = localStorage.getItem('bought');
        if (currentSavedItemsBought=== null){
            const itemsBought = [itenName];
            localStorage.setItem('bought',JSON.stringify(itemsBought));
        }
        else{
            var currentBoughtItems = JSON.parse(localStorage.getItem('bought'));
            currentBoughtItems.push(itenName);
            localStorage.setItem('bought',JSON.stringify(currentBoughtItems));
        }
    }

}

function removeItem(action, item){
    var currentPackedItems = JSON.parse(localStorage.getItem('packed')) || [];
    var currentBoughtItems = JSON.parse(localStorage.getItem('bought')) || [];

    if (action.localeCompare('bought') ===0){
        const elementIndex = currentBoughtItems.indexOf(item);
        console.log("trying to find elemet", item, elementIndex);
        if (elementIndex > -1){
            currentBoughtItems.splice(elementIndex, 1);
            localStorage.setItem('bought',JSON.stringify(currentBoughtItems));
        }
    }
    if (action.localeCompare('packed') ===0){
        const elementIndex = currentSavedItemsPacked.indexOf(item);
        if (elementIndex > -1){
            currentSavedItemsPacked.splice(elementIndex, 1);
            localStorage.setItem('packed',JSON.stringify(currentSavedItemsPacked));
        }
    }

}


// Add Checklist Packed function
    function markPacked(event){
        // Get the element that triggered a specific event
        var selectedItem = event.target;
        // Get element by id - where to place target item
        var targetList = document.getElementById('packedItems');
        // Create new item if selected 
        var newItem = ' <li class="list-group-item"> ' + selectedItem.getAttribute("data-itemname") + ' </li>';
        // Where new item should be created
        var currentPackedList = targetList.innerHTML;
        targetList.innerHTML = currentPackedList + newItem;
        // Hide item if selected
        selectedItem.parentElement.parentElement.classList.add('hideItem');
        saveItem('packed', selectedItem.getAttribute("data-itemname"));
        removeItem('bought', selectedItem.getAttribute("data-itemname"));


    }
    // Take each element clicked on
    var items = document.getElementsByClassName('checkItem');
    for (var index = 0; index < items.length; index++) {
        items[index].addEventListener('click', markPacked, false);
    }

// Add Checklist to-buy function
    function markToBuy (event){
        // Get the element that triggered a specific event
        var selectedItem = event.target;
        // Get element by id
        var targetList = document.getElementById('toBuyItems');
        // Create new item if selected 
        newBuyItem = ' <li class="list-group-item">  <div role="group" aria-label="Checklist Buttons"> <button type="button" onClick="markPacked(event);" class="btn btn-check checkItem" data-itemname="' + selectedItem.getAttribute("data-buyitemname") + '">Check</button> </div> ' + selectedItem.getAttribute("data-buyitemname") + '</li>';
        // Where new item should be created
        var currentBuyList = targetList.innerHTML;
        targetList.innerHTML = currentBuyList + newBuyItem;
        // Hide item if selected
        selectedItem.parentElement.parentElement.classList.add('hideItem');
        saveItem('bought', selectedItem.getAttribute("data-buyitemname"));
    }
    // Take each element clicked on
    var itemsToBuy = document.getElementsByClassName('to-buy-items');
    for (var index = 0; index < itemsToBuy.length; index++) {
        itemsToBuy[index].addEventListener('click', markToBuy, false);
    }

// Add Own List
/* orginal code with modifications from https://medium.com/@suryashakti1999/to-do-list-app-using-javascript-for-absolute-beginners-13ea9e38a033 */

    //Selectors and get Elements
    var ownInput = document.getElementById('formOwnInput');
    var ownAddButton = document.querySelector('.btn-add-own');
    var ownList = document.getElementById('ownItems');
    //Event listeners
    ownAddButton.addEventListener("click", addOwnItem);

    //Function to add new items
    function addOwnItem(event) {
        event.preventDefault();
        //Add own list Div
        var ownListDiv = document.createElement('div');
        ownListDiv.classList.add('Checklist');
        ownListDiv.classList.add('Buttons');
        //Add own list item
        var newOwnList = document.createElement('li');
        newOwnList.innerText = ownInput.value;
        newOwnList.classList.add('list-group-item');
        
        // ownListDiv.appendChild(newOwnList);
        if(ownInput.value === ""){
            return null;
        }
        //Add Check Button
        var checkOwnButton = document.createElement('button');
        checkOwnButton.innerHTML = 'Check';
        checkOwnButton.classList.add('btn', 'btn-check', 'checkItem');
        checkOwnButton.setAttribute("data-itemname", ownInput.value);
        ownListDiv.appendChild(checkOwnButton);
        //Add Buy Button
        var buyOwnButton = document.createElement('button');
        buyOwnButton.innerHTML = 'Buy';
        buyOwnButton.classList.add('btn', 'btn-buy', 'to-buy-items');
        buyOwnButton.setAttribute("data-buyitemname", ownInput.value);
        ownListDiv.appendChild(buyOwnButton);
        //Add Delete Buttons
        var deleteButton = document.createElement('button');
        deleteButton.innerHTML = '<i class="fas fa-trash"></i>';
        deleteButton.classList.add('delete_btn');
        ownListDiv.appendChild(deleteButton);
        //Clear own item input VALUE
        ownInput.value = "";
        
        newOwnList.appendChild(ownListDiv);
        // Event listeners 
        checkOwnButton.addEventListener('click', markPacked, false);
        buyOwnButton.addEventListener('click', markToBuy, false);
        deleteButton.addEventListener('click', deleteCheck, false);
        ownList.appendChild(newOwnList);
    }

//Function for delete button
function deleteCheck(e) {
    var item = e.target;
    item.parentElement.parentElement.remove(); 
}

// Function for clear localStorage
function clearLocalStorage(){
    localStorage.clear();
}
var resetPage = document.getElementById('resetbutton');
resetPage.addEventListener('click', clearLocalStorage);