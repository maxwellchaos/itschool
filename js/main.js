
$.ajax({
    type: "GET",
    url: "include/footer.html",
    async: false,  
    success: function (data, textStatus) {
        $('footer').html(data);
    }          
});

$.ajax({
    type: "GET",
    url: "include/yandex.html",
    async: false,  
    success: function (data, textStatus) {
        $('#yandex').html(data);
    }          
});
