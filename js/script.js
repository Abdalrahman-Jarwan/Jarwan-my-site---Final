//--- Your Scripts

function toggleMobileMenu(menu) {
    menu.classList.toggle('open');

}
const root = document.documentElement;
const marqueeElementsDisplayed = getComputedStyle(root).getPropertyValue("--marquee-elements-displayed");
const marqueeContent = document.querySelector("ul.marquee-content");
root.style.setProperty("--marquee-elements", marqueeContent.children.length);
for (let i = 0; i < marqueeElementsDisplayed; i++) {
    marqueeContent.appendChild(marqueeContent.children[i].cloneNode(true));
}




$(document).ready(function () {
    $('#list').click(function (event) { event.preventDefault(); $('#products .item').addClass('list-group-item'); });

    $('#grid').click(function (event) { event.preventDefault(); $('#products .item').removeClass('list-group-item'); $('#products .item').addClass('grid-group-item'); });
});