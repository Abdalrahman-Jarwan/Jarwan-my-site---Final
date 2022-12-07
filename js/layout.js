$(document).ready(function () {
    loadNav();
    loadFooter();
});

loadNav = () => {
    $.get('../nav.html', (data) => {
        $('body').prepend(data);
    });
}

loadFooter = () => {
    $.get('../footer.html', (data) => {
        $('body').append(data);
    });
}