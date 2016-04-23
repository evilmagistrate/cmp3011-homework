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

Name of newList stored on blur

When Add Item is pressed, itemEntry field appears and gains focus
Add Item button stays beneath list title
User enters text
Name of enteredItem stored on blur

Rinse and repeat

Questions: is category assignment prompted now or is there a flyout for info (if so, how to manage)?
also, methods of quick quantity or category entry (such as # or ,) parsed out?

Basic requirements:

header-
back button (always returns to main list screen or just back one step?)
logo (does anything?)
hamburger (menu)

menu-
checklist mode (toggle on/off)
sort (also toggle?)
lists (home)
settings

 */


$().ready(function() {

    var $newList= $('#new_list');
    var $addItem= $('#add_item');

    $('#add_item').hide();


    $newList.on('click', function newListcreation() {
        //var newInput = document.createElement("INPUT");
        //document.body.appendChild(newInput);
        //$(newInput).attr('placeholder', 'Add Item');
        //$(newInput).addClass('active');

        $('#add_item').slideDown(500);


    });

    $newList.on('blur', function newListcompleted() {

        var newText = $newList.val();
        $newList.removeClass('active');
        $newList.addClass('passive');
    });

    $addItem.on('click', function newItemfield() {
        var newInput = document.createElement("INPUT");
        document.body.appendChild(newInput);
        $(newInput).attr('placeholder', 'New Item');
        $(newInput).addClass('active');
        $(newInput).focus();

    });

    $('input').on('blur', function newItemcompleted() {

    });

});