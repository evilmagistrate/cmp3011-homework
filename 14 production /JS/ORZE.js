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

    $('input[type=text]').on('keydown', function(e) {
        if (e.which == 13) {
            var newInput = document.createElement("INPUT");
            document.getElementById("list_content").appendChild(newInput);
            $(newInput).attr('placeholder', 'New Item');
            $(newInput).attr('type', 'text');
            $(newInput).addClass('active');
            $(newInput).addClass('ellipses');
            $(newInput).attr('id', 'listItem');
            $(newInput).focus();
        }
    });

    $newList.on('click', function newListcreation() {
        //var newInput = document.createElement("INPUT");
        //document.body.appendChild(newInput);
        //$(newInput).attr('placeholder', 'Add Item');
        //$(newInput).addClass('active');

        $('#add_item').slideDown(500);

    });

    $newList.on('blur', function newListTitled() {

        var newText = $newList.val();
        $newList.removeClass('active');
        $newList.addClass('blue-middle');

    });

    $addItem.on('click', function newItemfield() {
        var newInput = document.createElement("INPUT");
        document.getElementById("list_content").appendChild(newInput);
        $(newInput).attr('placeholder', 'New Item');
        $(newInput).attr('type', 'text');
        $(newInput).addClass('active');
        $(newInput).addClass('ellipses');
        $(newInput).attr('id', 'listItem');
        $(newInput).focus();
    });

    $('#listItem').on('blur', function newItemcompleted() {

        $('#listItem').removeClass('active');
        $('#listItem').addClass('passive');

    });

//Formstone Plugins

    $("nav").navigation ({
        gravity: "right",
        type: "overlay"
    });

    $("input[type=checkbox]").checkbox({
        toggle: true
    });

//end Formstone Plugins


});