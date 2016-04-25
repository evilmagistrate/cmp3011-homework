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

    var i = Number(localStorage.getItem('todo-counter')) + 1;
    var $itemList = $('#list_content');
    var $newItem = $('#listItem');
    var order = [];
    var $newList= $('#new_list');
    var $addItem= $('#add_item');
    var $this;

    $('#add_item').hide();

    function itemStorage ( ) {

        if ($newItem.val() !== "") {
            localStorage.setItem(
                "todo-" + i, $newItem.val()
            );

            localStorage.setItem(
                'todo-counter', i
            );

//TODO: generate additional fields/buttons here for quantity and description

            var $newTodoList = $('#new_list');
            order.length = 0;

            $newTodoList.each(function () {
                var $this = $(this).attr('id');
                order.push($this);
            });

            localStorage.setItem(
                'todo-orders', order.join(',')
            );
        }
    }


    $newList.on('click', function newListcreation() {
        //var newInput = document.createElement("INPUT");
        //document.body.appendChild(newInput);
        //$(newInput).attr('placeholder', 'Add Item');
        //$(newInput).addClass('active');

        $('#add_item').slideDown(500);

    });

    $newList.on('blur', function newListTitled() {

        var newText = $newList.val();

        $newList.removeClass( 'active' );
        $newList.addClass( 'passive' );

        itemStorage();

    });

    $addItem.on('click', function newItemfield() {

        var newInput = document.createElement("INPUT");
        document.getElementById("list_content").appendChild(newInput);
        $(newInput).attr('placeholder', 'New Item');
        $(newInput).attr('id', 'listItem');

        $(newInput).addClass( 'active' );

        $(newInput).focus();

    });

    $('#listItem').on('focusout', function newItemcompleted() {

        $('#listItem').removeClass( 'active' );
        $('#listItem').addClass( 'passive' );

        itemStorage();

    });

});