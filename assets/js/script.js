
/** Add Checklist packed function*/
    function markPacked(event){
        /** If event happens*/
        selectedItem = event.target;
        /** Get element by id*/
        targetList = document.getElementById('packedItems');
        /** Create new item if selected */
        newItem = ' <li class="list-group-item"> ' + selectedItem.getAttribute("data-itemname") + ' </li>';
        /** Where new item should be created */
        currentPackedList = targetList.innerHTML;
        targetList.innerHTML = currentPackedList + newItem;
        /** Hide item if selected*/
        selectedItem.parentElement.parentElement.classList.add('hideItem');
    }
    /** Take each element clicked on*/
    items = document.getElementsByClassName('checkItem');
    for (var index = 0; index < items.length; index++) {
        items[index].addEventListener('click', markPacked, false);
    }