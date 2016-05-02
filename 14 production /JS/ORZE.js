/*

  ██████╗ ██████╗ ███████╗███████╗
 ██╔═══██╗██╔══██╗╚══███╔╝██╔════╝
 ██║   ██║██████╔╝  ███╔╝ █████╗
 ██║   ██║██╔══██╗ ███╔╝  ██╔══╝
 ╚██████╔╝██║  ██║███████╗███████╗
  ╚═════╝ ╚═╝  ╚═╝╚══════╝╚══════╝

  Feeling listless? We can help!

 */

$().ready(function() {

    $addItem.hide();
    $newListName.addClass('active');
    print_items ();


//Formstone Plugins

    $("nav").navigation ({
        gravity: "right",
        type: "overlay"
    });

//end Formstone Plugins


});

    var $newListName= $('#generate_new_list');
    var $addItem= $('#add_item');
    var $saveTitle= $('#save_list_title');
    var $itemInput= $("#add_item_input");
    var $saveItem= $('#add_item_button');


function print_items () {

        if (localStorage.ORZE_db) {

            var listContents = JSON.parse(localStorage.ORZE_db);
            var listItems = listContents.items;

            $newListName.hide();
            $addItem.show();
            $('#add_item_input').focus();


            //TODO: list title not persistent. figure out why

            $('#list_title').html('<h5>' + listContents.name + '</h5>');

            // http://stackoverflow.com/questions/20772417/how-to-loop-through-json-array-in-jquery

            $.each(listItems, function (key, value) {


                if (value.quantity == "" && value.category == "") {

                    $('#list_content').append('<li class="ellipsis"><span class="item">' + value.item + '</span></li>');
                }

                else if (value.quantity !== "" && value.category !== "") {

                    $('#list_content').append('<li class="ellipsis"><span class="item">' + value.item + '</span>, &nbsp; <span class="quantity">' + value.quantity + '</span> &nbsp; <span class="category">' + value.category + '</span></li>');
                }

                else if (value.quantity == "") {

                    $('#list_content').append('<li class="ellipsis"><span class="item">' + value.item + '</span><span class="category">' + value.category + '</span></li>');

                }

                else if (value.category == "") {
                    $('#list_content').append('<li class="ellipsis"><span class="item">' + value.item + '</span>, &nbsp; <span class="quantity">' + value.quantity + '</span></li>');
                }

            });
        }
}

function saveListData() {

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

    print_items ();
}

// Title Creation

    $newListName.on('focus', function () {

        //$saveTitle.fadeIn(300);

        if (!$addItem.is("visible")) {
            $addItem.slideDown(1000);
        }

    });

    $newListName.on('blur', function () {
        $newListName.removeClass('active');
        $newListName.addClass('blue-middle');
        $saveTitle.fadeOut(500);
        $('#add_item_input').focus();
    });

    $newListName.on('keydown', function(e) {
        if (e.which == 13) {
            $newListName.removeClass('active');
            $newListName.addClass('blue-middle');
            $saveTitle.fadeOut(500);
            $('#add_item_input').focus();
        }
    });

    $saveTitle.on('click', function () {

        $newListName.removeClass('active');
        $newListName.addClass('blue-middle');
        $saveTitle.fadeOut(500);
        $('#add_item_input').focus();

    });

// end Title Creation


// Adding Items

    $itemInput.on('keydown', function(e) {
        if (e.which == 13) {

            if ($itemInput.val === "" || $itemInput.length === 0) {
           //TODO alert('should prevent saving empty item field, but is not working');
            }

            else {

                saveListData();

                $('.add').val('');
                $('#add_item_input').focus();
            }
        }
    });


    $saveItem.on('click', function () {

                saveListData();

                $('.add').val('');
                $('#add_item_input').focus();
    });

//end Adding Items