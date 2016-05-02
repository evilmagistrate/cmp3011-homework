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
    var $saveTitle= $('#save_list_title');
    var $itemInput= $("#add_item_input");
    var $saveItem= $('#add_item_button');


    $addItem.hide();
    $newList.addClass('active');

    var listContents = [];



// Title Creation

    $newList.on('focus', function () {

        $saveTitle.fadeIn(300);

        if (!$addItem.is("visible")) {
            $addItem.slideDown(1000);
        }

    });

    $newList.on('blur', function () {
        $newList.removeClass('active');
        $newList.addClass('blue-middle');
        $saveTitle.fadeOut(500);
        $('#add_item_input').focus();
    });

    $newList.on('keydown', function(e) {
        if (e.which == 13) {
            $newList.removeClass('active');
            $newList.addClass('blue-middle');
            $saveTitle.fadeOut(500);
            $('#add_item_input').focus();
        }
    });

    $saveTitle.on('click', function () {

        $newList.removeClass('active');
        $newList.addClass('blue-middle');
        $saveTitle.fadeOut(500);
        $('#add_item_input').focus();

    });

// end Title Creation


// Adding Items

    $itemInput.on('keydown', function(e) {
        if (e.which == 13) {

            $('.add').val('');
            $('#add_item_input').focus();
        }
    });


    $saveItem.on('click', function () {

        $('.add').val('');
        $('#add_item_input').focus();

    });

//end Adding Items


//Formstone Plugins

    $("nav").navigation ({
        gravity: "right",
        type: "overlay"
    });

//end Formstone Plugins

});
