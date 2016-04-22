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

TODO: figure out how to check to see if the add item button is already present (clicking title or add item multiple times SHOULD NOT create multiple add item buttons) OR! make the add item a button and hide/show it

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

    $('#new_list').on('click', function newListcreation() {
        var newInput = document.createElement("INPUT");
        document.body.appendChild(newInput);
        $(newInput).attr('placeholder', 'Add Item');
        $(newInput).addClass('active');
    });

    $('#new_list').on('blur', function newListcompleted() {

        var newText = $('#new_list').val();
        $("#new_list").removeClass('active');
        $("#new_list").addClass('passive');
    });

});