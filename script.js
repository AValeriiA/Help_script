$(document).mouseup(function (e) {
    var container = $("YOUR CONTAINER SELECTOR");
    if (container.has(e.target).length === 0){
        container.hide();
    }
});
/*Click outside of the container*/