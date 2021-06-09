let cart_products = window.sessionStorage.getItem("cart_products") !== null ? JSON.parse(window.sessionStorage.getItem("cart_products")) : {
    'bmg-special-antique-cherry': {
        "name": "THE BMG SPECIAL",
        "qty": 0,
        "price": 620,
        "image": {
            "rotate": 6.6,
            "width": 60
        }
    },
    'bmg-special-antique-cherry-left': {
        "name": "THE BMG SPECIAL",
        "qty": 0,
        "price": 662,
        "image": {
            "rotate": 6.6,
            "width": 60
        }
    },
    'bmg-special-le-3-tone-sunburst': {
        "name": "THE BMG SPECIAL LE",
        "qty": 0,
        "price": 662,
        "image": {
            "rotate": -25,
            "width": 70
        }
    },
    'bmg-special-le-natural': {
        "name": "THE BMG SPECIAL LE",
        "qty": 0,
        "price": 662,
        "image": {
            "rotate": -25,
            "width": 70
        }
    },
    'bmg-special-le-emerald-green': {
        "name": "THE BMG SPECIAL LE",
        "qty": 0,
        "price": 662,
        "image": {
            "rotate": -25,
            "width": 70
        }
    },
    'bmg-special-le-baby-blue': {
        "name": "THE BMG SPECIAL LE",
        "qty": 0,
        "price": 662,
        "image": {
            "rotate": -25,
            "width": 70
        }
    },
    'bmg-super': {
        "name": "THE BMG SUPER",
        "qty": 0,
        "price": 2458,
        "image": {
            "rotate": 9,
            "width": 65
        }
    },
    'bmg-bass-antique-cherry': {
        "name": "THE BMG BASS",
        "qty": 0,
        "price": 662,
        "image": {
            "rotate": 7,
            "width": 75
        }
    },
    'bmg-raphsody-electro-acoustic': {
        "name": "THE BMG RAPHSODY",
        "qty": 0,
        "price": 454,
        "image": {
            "rotate": -25,
            "width": 70
        }
    },
    'bmg-arielle': {
        "name": "THE BMG ARIELLE",
        "qty": 0,
        "price": 662,
        "image": {
            "rotate": -25,
            "width": 65
        }
    }
}


let product_image_src = `..\\resources\\images\\products\\`;

let click_change_image = () => {
    console.log("CHANGE IMAGE");
    let active_image = document.getElementById('bmg-product-image-1');
    let inactive_image = document.getElementById('bmg-product-image-2');
    let remove_image = active_image.src;
    let remove_image_width = active_image.style.width;
    let remove_image_transform = active_image.style.transform;

    active_image.style.display = "none";

    active_image.src = inactive_image.src;
    active_image.style.width = inactive_image.style.width;
    active_image.style.transform = inactive_image.style.transform;

    inactive_image.src = remove_image;
    inactive_image.style.width = remove_image_width;
    inactive_image.style.transform = remove_image_transform;

    active_image.style.display = "";
}
let click_scroll = (element) => {
    console.log("SCROLL", element.getAttribute('scrollTo'));
    let position = document.getElementById(element.getAttribute('scrollTo')).getBoundingClientRect();
    window.scrollTo({
            top: position.top,
            left: position.left,
            behavior: 'smooth'
        })
        //window.location.href = element.getAttribute('scrollTo');
}

let click_redirect = (element) => {
    console.log("REDIRECT");
    window.location.href = element.getAttribute('href');
}

let click_check_redirect = (element) => {
    let check = false;

    Object.entries(cart_products).forEach(([key, value]) => {
        if (value["qty"] > 0) {
            check = true;
        }
    });
    if (check) {
        click_redirect(element);
    }
}

let show_nav_overlay = () => {
    document.getElementById('nav-overlay').style.display = "grid";
}

let hide_nav_overlay = () => {
    document.getElementById('nav-overlay').style.display = "none";
}

let show_search_overlay = () => {
    document.getElementById('search-overlay').style.display = "grid";
}

let hide_search_overlay = () => {
    document.getElementById('search-overlay').style.display = "none";
}
let show_text_overlay = (element) => {
    document.getElementById('text').innerHTML = element.getAttribute('value');
    document.getElementById('text-overlay').style.display = "grid";
}

let hide_text_overlay = () => {
    document.getElementById('text').innerHTML = "";
    document.getElementById('text-overlay').style.display = "none";
}

let show_image_overlay = (element) => {
    document.getElementById('image').src = element.getAttribute('value');
    document.getElementById('image-overlay').style.display = "grid";
}

let hide_image_overlay = () => {
    document.getElementById('image-overlay').style.display = "none";
}

let show_cart_overlay = () => {
    inject_cart_items();
    inject_grand_total();
    document.getElementById('cart-overlay').style.display = "grid";
}

let hide_cart_overlay = () => {
    document.getElementById('cart-overlay').style.display = "none";
}

let inject_cart_items = () => {
    let inject_parent = document.getElementById('cart-overlay-content');
    let inject_html = "";
    Object.entries(cart_products).forEach(([key, value]) => {
        if (value["qty"] > 0) {
            inject_html += `<li>
                    <img class="product-image" style = "z-index: 10; width: ${value['image']['width']}px; transform: rotate(${value['image']['rotate']}deg);" src= "${product_image_src}${key}.jpg">
                    <div class="bmg-cart-item-content">
                        <h1 href = "/html/product.html?product=${key}" onclick = "click_redirect(this)">${value["name"]}</h1>
                        <div class="bmg-cart-item-mr-flex">
                            <div class="bmg-cart-item-quantity">
                                <p>QTY</p>
                                <button class="btn-add" value = ${key} onclick = "increase_quantity_cart_overlay(this)">+</button>
                                <a class="bmg-cart-item-amount">${value["qty"]}</a>
                                <button class="btn-remove" value = ${key} onclick = "decrease_quantity_cart_overlay(this)">&mdash;</button>
                            </div>
                            <div class="bmg-cart-item-pricing">
                                <h2 class="bmg-cart-item-pricing-price-header">PRICE :</h2>
                                <h2 class="bmg-cart-item-pricing-subtotal-header">SUBTOTAL :</h2>
                                <h1 class="bmg-cart-item-pricing-price">&euro;${value["price"]}</h1>
                                <h1 class="bmg-cart-item-pricing-subtotal">&euro;${value["price"]*value["qty"]}</h1>
                            </div>
                        </div>
                        <div class="bmg-product-limited-stock ">
                            <object class="info " data="..\\resources\\images\\icons\\info_danger.svg "></object>
                            <p>Limited Stock</p>
                        </div>
                    </div>
                </li> \n`
        }
    });
    inject_parent.innerHTML = inject_html;

}
let inject_grand_total = (element) => {
    let total = 0;
    Object.entries(cart_products).forEach(([key, value]) => {
        total += value["qty"] * value["price"]
    })
    document.getElementById('cart-overlay-grand-total').innerHTML = `&euro;${total}`;
}

let add_to_cart = (element) => {
    cart_products[element.getAttribute('value')]["qty"] += 1;
    sessionStorage.setItem("cart_products", JSON.stringify(cart_products));
    localStorage.setItem
    hide_cart_overlay();
    show_cart_overlay();
}
let increase_quantity_cart_overlay = (element) => {
    cart_products[element.getAttribute('value')]["qty"] += 1;
    sessionStorage.setItem("cart_products", JSON.stringify(cart_products));
    hide_cart_overlay();
    show_cart_overlay();
}

let decrease_quantity_cart_overlay = (element) => {
    cart_products[element.getAttribute('value')]["qty"] -= 1;
    sessionStorage.setItem("cart_products", JSON.stringify(cart_products));
    hide_cart_overlay();
    show_cart_overlay();
}


let inject_checkout_cart = () => {
    let inject_parent = document.getElementById("bmg-cart-item-content");
    let inject_html = "";
    Object.entries(cart_products).forEach(([key, value]) => {
        if (value["qty"] > 0) {
            inject_html += `<li>
            <img class="product-image" style = "z-index: 10; width: ${value['image']['width']}px; transform: rotate(${value['image']['rotate']}deg);" src= "${product_image_src}${key}.jpg">
            <div class="bmg-cart-item-content">
                <h1 href = "/html/product.html?product=${key}" onclick = "click_redirect(this)">${value["name"]}</h1>
                <div class="bmg-cart-item-mr-flex">
                    <div class="bmg-cart-item-quantity">
                        <p>QTY</p>
                        <button class="btn-add" value = ${key} onclick = "increase_quantity(this)">+</button>
                        <a class="bmg-cart-item-amount">${value["qty"]}</a>
                        <button class="btn-remove" value = ${key} onclick = "decrease_quantity(this)">&mdash;</button>
                    </div>
                    <div class="bmg-cart-item-pricing">
                        <h2 class="bmg-cart-item-pricing-price-header">PRICE :</h2>
                        <h2 class="bmg-cart-item-pricing-subtotal-header">SUBTOTAL :</h2>
                        <h1 class="bmg-cart-item-pricing-price">&euro;${value["price"]}</h1>
                        <h1 class="bmg-cart-item-pricing-subtotal">&euro;${value["price"]*value["qty"]}</h1>
                    </div>
                </div>
                <div class="bmg-product-limited-stock ">
                    <object class="info " data="..\\resources\\images\\icons\\info_danger.svg "></object>
                    <p>Limited Stock</p>
                </div>
            </div>
        </li> \n`
        }
    });
    inject_parent.innerHTML = inject_html;
    inject_checkout_cart_grand_total();
}

let inject_checkout_cart_grand_total = () => {
    let total = 0;
    Object.entries(cart_products).forEach(([key, value]) => {
        total += value["qty"] * value["price"]
    })
    document.getElementById('checkout-cart-grand-total').innerHTML = `&euro;${total}`;
}

let increase_quantity = (element) => {
    cart_products[element.getAttribute('value')]["qty"] += 1;
    sessionStorage.setItem("cart_products", JSON.stringify(cart_products));
    document.getElementById("bmg-cart-item-content").innerHTML = "";
    inject_checkout_cart();
}

let decrease_quantity = (element) => {
    cart_products[element.getAttribute('value')]["qty"] -= 1;
    sessionStorage.setItem("cart_products", JSON.stringify(cart_products));
    document.getElementById("bmg-cart-item-content").innerHTML = "";
    inject_checkout_cart();
}

let inject_checkout_payment = () => {

    let inject_parent = document.getElementById("bmg-order-summary-content");
    let inject_html = "";
    Object.entries(cart_products).forEach(([key, value]) => {
        if (value["qty"] > 0) {
            inject_html += `        <li>
                <h2>${key.replaceAll('-', " ").toUpperCase()}</h2>
            <h2 class="bmg-product-cost "> &euro;${value["price"]} &#10005; ${value["qty"]}</h2>
        </li> \n`
        }
    });
    inject_parent.innerHTML = inject_html;
    inject_checkout_payment_grand_total();
}

let inject_checkout_payment_grand_total = () => {
    let total = 0;
    Object.entries(cart_products).forEach(([key, value]) => {
        total += value["qty"] * value["price"]
    })
    document.getElementById('checkout-payment-grand-total').innerHTML = `&euro;${total}`;
}

let inject_checkout_complete = () => {

    let inject_parent = document.getElementById("bmg-ordered-items-content");
    let inject_html = "";
    Object.entries(cart_products).forEach(([key, value]) => {
        if (value["qty"] > 0) {
            inject_html += `<li>
            <img class="product-image" style = "z-index: 10; width: ${value['image']['width']}px; transform: rotate(${value['image']['rotate']}deg);" src= "${product_image_src}${key}.jpg">
            <div class="bmg-ordered-item-content">
                <h2 href = "/html/product.html?product=${key}" onclick = "click_redirect(this)">${value["name"]}</h2>
                <div class="bmg-cart-item-pricing">
                    <p class="bmg-cart-item-pricing-price-header">PRICE :</p>
                    <p class="bmg-cart-item-pricing-subtotal-header">SUBTOTAL :</p>
                    <p class="bmg-cart-item-pricing-price">&euro;${value["price"]}<span>&#10005;</span>${value["qty"]}</p>
                    <p class="bmg-cart-item-pricing-subtotal">&euro;${value["price"]*value["qty"]}</p>
                </div>  
            </div>
        </li> \n`
        }
    });
    inject_parent.innerHTML = inject_html;
    inject_checkout_complete_grand_total();
}

let inject_checkout_complete_grand_total = () => {
    let total = 0;
    Object.entries(cart_products).forEach(([key, value]) => {
        total += value["qty"] * value["price"]
    })
    document.getElementById('checkout-complete-grand-total').innerHTML = `&euro;${total}`;
}

let search_products = () => {
    let search_string = document.getElementById("search").value;
    console.log(search_string)
    window.location.href = `\\html\\search_results.html?q=${search_string}`;
    hide_search_overlay();
}


/*let products = {
        'bmg-special-antique-cherry': {},
        'bmg-special-antique-cherry-left': {},
        'bmg-special-le-3-tone-sunburst': {},
        'bmg-special-le-3-tone-sunburst': {},
        'bmg-special-le-natural': {},
        'bmg-special-le-emerald-green': {},
        'bmg-special-le-baby-blue': {},
        'bmg-super': {},
        'bmg-bass-antique-cherry': {},
        'bmg-raphsody-electro-acoustic': {},
        'bmg-raphsody-electro-acoustic': {},
        'bmg-arielle': {}
    }*/