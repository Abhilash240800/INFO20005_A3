let products = {
    'bmg-special-antique-cherry': {
        "group": 'bmg-special',
        "price": 620,
        "raters": 335,
        "desc": "Features superb build quality, awesome playability and an rich diversity of killer tones.",
        "image": {
            "rotate": 6.6,
            "width": 90
        }
    },
    'bmg-special-antique-cherry-left': {
        "group": 'bmg-special',
        "price": 662,
        "raters": 11,
        "desc": "Features superb build quality, awesome playability and an rich diversity of killer tones.",
        "image": {
            "rotate": 6.6,
            "width": 90
        }
    },
    'bmg-special-le-3-tone-sunburst': {
        "group": 'bmg-special-le',
        "price": 662,
        "raters": 5,
        "desc": "Features superb build quality, awesome playability and an rich diversity of killer tones.",
        "image": {
            "rotate": -25,
            "width": 140
        }
    },
    'bmg-special-le-natural': {
        "group": 'bmg-special-le',
        "price": 662,
        "raters": 13,
        "desc": "Features superb build quality, awesome playability and an rich diversity of killer tones.",
        "image": {
            "rotate": -25,
            "width": 140
        }
    },
    'bmg-special-le-emerald-green': {
        "group": 'bmg-special-le',
        "price": 662,
        "raters": 11,
        "desc": "Features superb build quality, awesome playability and an rich diversity of killer tones.",
        "image": {
            "rotate": -25,
            "width": 140
        }
    },
    'bmg-special-le-baby-blue': {
        "group": 'bmg-special-le',
        "price": 662,
        "raters": 7,
        "desc": "Features superb build quality, awesome playability and an rich diversity of killer tones.",
        "image": {
            "rotate": -25,
            "width": 140
        }
    },
    'bmg-super': {
        "group": 'bmg-series',
        "price": 2458,
        "raters": 15,
        "desc": "Features superb build quality, awesome playability and an rich diversity of killer tones.",
        "image": {
            "rotate": 9,
            "width": 90
        }
    },
    'bmg-bass-antique-cherry': {
        "group": 'bmg-series',
        "price": 662,
        "raters": 5,
        "desc": "Features superb build quality, awesome playability and an rich diversity of killer tones.",
        "image": {
            "rotate": 7,
            "width": 75
        }
    },
    'bmg-raphsody-electro-acoustic': {
        "group": 'bmg-series',
        "price": 454,
        "raters": 25,
        "desc": "Features superb build quality, awesome playability and an rich diversity of killer tones.",
        "image": {
            "rotate": -25,
            "width": 135
        }
    },
    'bmg-arielle': {
        "group": 'bmg-arielle',
        "price": 662,
        "raters": 1,
        "desc": "Features superb build quality, awesome playability and an rich diversity of killer tones.",
        "image": {
            "rotate": -25,
            "width": 135
        }
    }
}

let inject_product_catalog = () => {

    let group = window.location.href.split('=')[1];
    let inject_parent = document.getElementById('bmg-products-catalog-content');
    let inject_html_catalog = "";

    Object.entries(products).forEach(([key, value]) => {
        if (value["group"] === group) {
            inject_html_catalog += `<li>
            <img class="product-image" style = "width: ${value['image']['width']}px; transform: rotate(${value['image']['rotate']}deg);" src= "${product_image_src}${key}.jpg">
            <div class="bmg-product-content">
                <div class="bmg-product-header ">
                    <h4 class="bmg-product-name" href = "/html/product.html?product=${key}" onclick = "click_redirect(this)">${key.replaceAll('-', " ").toUpperCase()}</h4>
                    <div class="bmg-product-ratings ">
                        <div id="feature-product-stars " class="bmg-product-stars ">
                            <object data="..\\resources\\images\\icons\\star_primary.svg "></object>
                            <object data="..\\resources\\images\\icons\\star_primary.svg "></object>
                            <object data="..\\resources\\images\\icons\\star_primary.svg "></object>
                            <object data="..\\resources\\images\\icons\\star_primary.svg "></object>
                            <object data="..\\resources\\images\\icons\\star_primary.svg "></object>
                        </div>
                        <p class="bmg-product-raters ">(${value["raters"]})</p>
                    </div>
                </div>
                <p class="bmg-short-description ">${value["desc"]}</p>
                <div class="bmg-product-add-basket ">
                    <div class="button-group ">
                        <h1 class="bmg-product-cost "> &euro;${value["price"]}</h1>
                        <div class="bmg-product-limited-stock ">
                            <object class="info " data="..\\resources\\images\\icons\\info_danger.svg "></object>
                            <p>Limited Stock</p>
                        </div>
                        <button type="button " class="btn-primary " value=${key} onclick="add_to_cart(this)" >Add to Basket</button>
                    </div>
                </div>
            </div>
        </li> \n`;
        }
    });
    inject_parent.innerHTML = inject_html_catalog;
    document.getElementById("bmg-group-header").innerHTML = group.replaceAll('-', " ").toUpperCase();
}

let inject_search_results = () => {
    let search_string = window.location.href.split('=')[1].split('%20');

    let inject_parent = document.getElementById('bmg-products-catalog-content');
    let inject_html_catalog = "";

    let matches = 0;

    Object.entries(products).forEach(([key, value]) => {
        if (search(key.replaceAll('-', " "), search_string) === true) {
            matches += 1;
            inject_html_catalog += `<li>
            <img class="product-image" style = "width: ${value['image']['width']}px; transform: rotate(${value['image']['rotate']}deg);" src= "${product_image_src}${key}.jpg">
            <div class="bmg-product-content">
                <div class="bmg-product-header ">
                    <h4 class="bmg-product-name ">${key.replaceAll('-', " ").toUpperCase()}</h4>
                    <div class="bmg-product-ratings ">
                        <div id="feature-product-stars " class="bmg-product-stars ">
                            <object data="..\\resources\\images\\icons\\star_primary.svg "></object>
                            <object data="..\\resources\\images\\icons\\star_primary.svg "></object>
                            <object data="..\\resources\\images\\icons\\star_primary.svg "></object>
                            <object data="..\\resources\\images\\icons\\star_primary.svg "></object>
                            <object data="..\\resources\\images\\icons\\star_primary.svg "></object>
                        </div>
                        <p class="bmg-product-raters ">(${value["raters"]})</p>
                    </div>
                </div>
                <p class="bmg-short-description ">${value["desc"]}</p>
                <div class="bmg-product-add-basket ">
                    <div class="button-group ">
                        <h1 class="bmg-product-cost "> &euro;${value["price"]}</h1>
                        <div class="bmg-product-limited-stock ">
                            <object class="info " data="..\\resources\\images\\icons\\info_danger.svg "></object>
                            <p>Limited Stock</p>
                        </div>
                        <button type="button " class="btn-primary " style = "z-index: 2;" value=${key} onclick="add_to_cart(this)" >Add to Basket</button>
                    </div>
                </div>
            </div>
        </li> \n`;
        }
    });
    inject_parent.innerHTML = inject_html_catalog;
    document.getElementById('bmg-search-string').innerHTML = window.location.href.split('=')[1].replaceAll('%20', ' ');
    document.getElementById('bmg-search-results-found').innerHTML = matches;
}

let search = (check_val, search_string) => {
    let check = false;
    search_string.forEach(q => {
        if (check_val.includes(q)) {
            check = true;
        }
    })
    return check;
}