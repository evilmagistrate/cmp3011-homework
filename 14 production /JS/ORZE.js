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
    var $newList= $('#new_list');
    var $addItem= $('#add_item');

    $addItem.hide();



//storage management ideas, super basic

    //$(function() {
    //    var listItem = document.getElementById('listItem');
    //    $(listItem).blur(function() {
    //        localStorage.setItem('todoData', this.textContent);
    //    });
    //    if ( localStorage.getItem('todoData') ) {
    //        listItem.textContent = localStorage.getItem('todoData');
    //    }
    //});

//accepting user input on 'return' key

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

 //$('#return_to_lists').on('click', function(e) {
 //    e.preventDefault();
 //    var url = this.href;
 //
 //    $('#wrapper').remove();
 //    $('#wrapper').load(url + ' #wrapper').hide().fadeIn('slow');
 //
 //   });

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
        $(newInput).attr('type', 'text')
        $(newInput).addClass('active');
        $(newInput).focus();
    });

    $('.listItem').on('blur', function newItemcompleted() {

    });



//Formstone Plugins

    $("nav").navigation ({
        gravity: "right",
        type: "overlay"
    });

//end Formstone Plugins


});