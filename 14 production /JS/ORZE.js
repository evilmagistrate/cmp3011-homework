/*

  ██████╗ ██████╗ ███████╗███████╗
 ██╔═══██╗██╔══██╗╚══███╔╝██╔════╝
 ██║   ██║██████╔╝  ███╔╝ █████╗
 ██║   ██║██╔══██╗ ███╔╝  ██╔══╝
 ╚██████╔╝██║  ██║███████╗███████╗
  ╚═════╝ ╚═╝  ╚═╝╚══════╝╚══════╝

What we are trying to accomplish, in brief

User scenario: creating new list and adding items

//When New List is pressed, focus on newList
//Add Item field appears
//User enters name

Name of newList stored on blur?

//When Add Item is pressed, itemEntry field appears and gains focus
//Add Item button stays beneath list title
User enters text
Name of enteredItem stored on blur?

Rinse and repeat

Questions: is category assignment prompted now or is there a flyout for info (if so, how to manage)?
also, methods of quick quantity or category entry (such as # or ,) parsed out?

Basic requirements:

header-
back button (always returns to main list screen or just back one step?)
logo (does anything?)
//hamburger (menu)

//menu-
//checklist mode (toggle on/off)
//sort (also toggle?)
//lists (home)
//settings

 */

$().ready(function() {

    var $itemList = $('#list_content');
    var $newItem = $('#listItem');
    var $newList= $('#generate_new_list');
    var $addItem= $('#add_item');

    $addItem.hide();

    var listContents = [];


    //function storeNewItem( item, quantity, category ) {
    //
    //    var listContents = JSON.parse(localStorage.getItem( 'listName' ) || []);
    //    listContents.push({item: item , quantity: quantity, category: category });
    //    localStorage.setItem( 'listName', JSON.stringify(listContents));
    //
    //}

//creating content


    $newList.on('blur', function () {

        $newList.removeClass('active');
        $newList.addClass('blue-middle');

        storeNewItem();

    });

//accepting user input on 'return' key

    $('input[type=text]').on('keydown', function(e) {
        if (e.which == 13) {

            $( "<div ><input type='text' placeholder='New Item Name' title='add list item' class='list_item, active' /> <input type='text' placeholder='Quantity' title='add optional quantity' class='item_quantity, active'/></div>").appendTo( "#list_content" );

            $('list_item').focus();

        }
    });

    $addItem.on('click', function () {

        $( "<div ><input type='text' placeholder='New Item Name' title='add list item' class='list_item, active' /> <input type='text' placeholder='Quantity' title='add optional quantity' class='item_quantity, active'/></div>").appendTo( "#list_content" );

        $('list_item').focus();


    });

    $('listItem').on('blur', function () {

        $("listItem").removeClass( "active" );

        var item = $("listItem").value;


    });



//Formstone Plugins

    $("nav").navigation ({
        gravity: "right",
        type: "overlay"
    });

//end Formstone Plugins

});
