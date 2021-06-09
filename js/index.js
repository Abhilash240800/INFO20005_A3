click_redirect = (element) => {
    window.location.href = element.getAttribute('href');
}
show_nav_overlay = () => {
    document.getElementById('nav-overlay').style.display = "grid";
}

hide_nav_overlay = () => {
    document.getElementById('nav-overlay').style.display = "none";
}

show_text_overlay = (element) => {
    document.getElementById('text').innerHTML = element.getAttribute('value');
    document.getElementById('text-overlay').style.display = "grid";
}

hide_text_overlay = () => {
    document.getElementById('text').innerHTML = "";
    document.getElementById('text-overlay').style.display = "none";
}

show_image_overlay = (element) => {
    document.getElementById('image').src += element.getAttribute('value');
    document.getElementById('image-overlay').style.display = "grid";
}

hide_image_overlay = () => {
    document.getElementById('image').src += "";
    document.getElementById('image-overlay').style.display = "none";
}

show_cart_overlay = () => {
    document.getElementById('cart-overlay').style.display = "grid";
}

hide_cart_overlay = () => {
    document.getElementById('cart-overlay').style.display = "none";
}