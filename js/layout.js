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
    
    $.ajax('./footer.html', (data) => {
        $('#footer').html(data);
    });
}