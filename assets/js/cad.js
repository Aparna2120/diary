$(document).ready(function () {


    $('#add_entry').click(function () {
        let title, date, text;
        title = $('#title').val();
        date = new Date($('#date').val());
        let day = date.getDate();
        let month = date.getMonth() + 1;
        let year = date.getFullYear();
        text = $('.text').val();
        console.log(`${month}/${day}/${year}`);
        console.log(title);
        console.log(text);
        $("#entry").append(`<h2>${title}</h2>`);
        return false;
    })

})
