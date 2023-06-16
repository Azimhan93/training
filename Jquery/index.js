$('li').css('color', 'blue');

$('<p>Is there a setting I can change so that it automatically generates my lorem ipsum on multiple lines?</p>').appendTo('body');

function hideList() {
    return $('li').hide();
}

function showList() {
    return $('li').show();
}

function addList() {
    return $('li').toogle().css('color', 'red');
}



