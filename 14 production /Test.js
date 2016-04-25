
$.subscribe('/regenerate-list/', function() {
    var $newTodoList = $('#show-items li');
    // Empty the order array
    order.length = 0;

    // Go through the list item, grab the ID then push into the array
    $newTodoList.each(function() {
        var $this = $(this).attr('id');
        order.push($this);
    });

    // Convert the array into string and save to localStorage
    localStorage.setItem(
        'todo-orders', order.join(',')
    );
});
