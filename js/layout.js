$(document).ready(function () {
    loadNav();
    loadFooter();
    document.getElementById('focusmeplease').focus();
});

loadNav = () => {
    $.get('../Nav&Fot/nav.html', (data) => {
        $('body').prepend(data);
    });
}

loadFooter = () => {
    $.get('../Nav&Fot/footer.html', (data) => {
        $('body').append(data);
    });
}