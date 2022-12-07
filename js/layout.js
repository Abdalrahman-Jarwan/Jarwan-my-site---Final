$(document).ready(function () {
    console.log('layout ready');
    // loadNav();
    loadFooter();
});

// loadNav = () => {
//     $.get('./nav.html', (data) => {
//         $('#nav').html(data);
//     });
// }

loadFooter = () => {
    //fix cors issue

    $.get('../footer.html', (data) => {
        $('#footer').html(data);
    });
}