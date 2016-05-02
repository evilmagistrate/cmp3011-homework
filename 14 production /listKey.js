var $listName = $newListName.val();
var item = $itemInput.val();
var quantity = $('#add_quantity').val();
var category = $('#add_category').val();

if ( localStorage.ORZE_db ) {

    console.log ('List database exists.');
    var listContents = JSON.parse(localStorage.ORZE_db);
    console.log('listContents',listContents);

    var listItems = listContents.items;
    console.log('listItems before adding new one:',listItems);

    var listItemSize = Object.keys(listItems).length;

    console.log('listItemSize',listItemSize);

    listItems[listItemSize] = { 'item': item, 'quantity': quantity, 'category': category};
    console.log('listItems after adding new one:',listItems);

    var newList = {};
    newList.name = $listName;
    newList.items = {};
    newList.items = listItems;

    localStorage.ORZE_db = JSON.stringify(newList);

    // How would you scale this for multiple lists?
    // Easy: store each list as object in a "lists" object:
    // localStorage.lists[0].name = 'groceries'
    // localStorage.lists[0].items[0] = { 'item': 'cheese', 'quantity': '5' }
    // localStorage.lists[1].name = 'fruits'
    // localStorage.lists[1].items[0] = { 'item': 'bananas', 'quantity': '2' }
    // or you could store each list in its own top-level object:
    // localStorage.list1 = ...
    // localStorage.list2 = ...
    // in which case, you may want to keep an object that contains the names of all of the lists:
    // localStorage.master = { 'list1', 'list2', ... }

    var ORZE_json = JSON.parse(localStorage.ORZE_db);

    console.log( 'listItems after saving to localStorage:', ORZE_json.items );
}

else {

    console.log ('List database DOES NOT exist.');

    var listItems = { 'item': item, 'quantity': quantity, 'category': category };
    var listItemSize = 0;

    console.log('listItems',listItems);
    console.log('listItemSize',listItemSize);

    var newList = {};
    newList.name = $listName;
    newList.items = {};
    newList.items[listItemSize] = listItems;
    localStorage.ORZE_db = JSON.stringify(newList);

}