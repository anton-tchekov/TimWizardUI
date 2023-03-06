require("./index.css");


"use strict";
let $650934f729b0bf11$var$touch_device = "ontouchstart" in window || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0;
/* PAGE */ function $650934f729b0bf11$var$page_create(options) {
    let page = document.createElement("div");
    $650934f729b0bf11$var$_handle_id(page, options);
    $650934f729b0bf11$var$_handle_class(page, "page " + (options.center ? "center " : ""), options);
    $650934f729b0bf11$var$_handle_styles(page, options);
    page.style.flexDirection = options.type || "column";
    if (options.title) options.children.unshift($650934f729b0bf11$var$header_create({
        text: options.title
    }));
    $650934f729b0bf11$var$_handle_children(page, options);
    document.body.appendChild(page);
    return page;
}
function $650934f729b0bf11$var$page_show(current) {
    let pages = document.getElementsByClassName("page");
    for (let page of pages)page.style.display = page == current ? "flex" : "none";
}
/* LAYOUT */ function $650934f729b0bf11$var$layout_create(options) {
    let layout = document.createElement("div");
    $650934f729b0bf11$var$_handle_id(layout, options);
    $650934f729b0bf11$var$_handle_class(layout, "layout", options);
    layout.style.flexDirection = options.type || "column";
    $650934f729b0bf11$var$_handle_styles(layout, options);
    $650934f729b0bf11$var$_handle_children(layout, options);
    $650934f729b0bf11$var$_handle_border(layout, options);
    $650934f729b0bf11$var$_handle_color(layout, options);
    return layout;
}
/* HEADER */ function $650934f729b0bf11$var$header_create(options) {
    let header = document.createElement("p");
    header.innerText = options.text || "HEADER";
    $650934f729b0bf11$var$_handle_id(header, options);
    $650934f729b0bf11$var$_handle_class(header, "header", options);
    $650934f729b0bf11$var$_handle_styles(header, options);
    header.change = function(new_text) {
        this.innerText = new_text;
    };
    return header;
}
/* TEXT */ function $650934f729b0bf11$var$text_create(options) {
    let text = document.createElement("div");
    text.innerText = options.text || "TEXT";
    $650934f729b0bf11$var$_handle_id(text, options);
    $650934f729b0bf11$var$_handle_class(text, "text", options);
    $650934f729b0bf11$var$_handle_styles(text, options);
    text.change = function(new_text) {
        this.innerText = new_text;
    };
    return text;
}
/* IMAGE */ function $650934f729b0bf11$var$image_create(options) {
    let image = document.createElement("img");
    image.alt = options.alt || "";
    image.src = options.src || "";
    $650934f729b0bf11$var$_handle_id(image, options);
    $650934f729b0bf11$var$_handle_class(image, "image", options);
    $650934f729b0bf11$var$_handle_styles(image, options);
    return image;
}
/* BUTTON */ function $650934f729b0bf11$var$button_create(options) {
    let button = document.createElement("button");
    $650934f729b0bf11$var$_handle_id(button, options);
    $650934f729b0bf11$var$_handle_class(button, "button", options);
    if (options.label) button.innerText = options.label || "BUTTON";
    else $650934f729b0bf11$var$_handle_children(button, options);
    $650934f729b0bf11$var$_handle_styles(button, options);
    $650934f729b0bf11$var$_handle_color(button, options);
    if ($650934f729b0bf11$var$touch_device) {
        if (options.onclick) button.onclick = function() {
            setTimeout(options.onclick, 500);
        };
    } else if (options.onclick) button.onclick = options.onclick;
    button.change = function(newText) {
        frontSpan.innerText = newText;
    };
    return button;
}
/* FIELD */ function $650934f729b0bf11$var$field_create(options) {
    let container = document.createElement("div");
    container.className = "input-container";
    let input = document.createElement("input");
    $650934f729b0bf11$var$_handle_id(input, options);
    $650934f729b0bf11$var$_handle_class(input, "input", options);
    input.value = options.value || "";
    input.placeholder = options.placeholder || "";
    $650934f729b0bf11$var$_handle_color(input, options);
    let label = document.createElement("label");
    label.innerHTML = input.placeholder;
    label.className = "label";
    $650934f729b0bf11$var$_handle_color(label, options);
    container.appendChild(input);
    container.appendChild(label);
    container.set = function(new_text) {
        this.children[0].value = new_text;
    };
    container.get = function() {
        return this.children[0].value;
    };
    return container;
}
/* CHART */ function $650934f729b0bf11$var$chart_create(options) {
    let chart = document.createElement("canvas");
    chart.height = options.height || 150;
    chart.width = options.width || 300;
    $650934f729b0bf11$var$_handle_id(chart, options);
    $650934f729b0bf11$var$_handle_class(chart, "chart", options);
    $650934f729b0bf11$var$_handle_styles(chart, options);
    return chart;
}
/* UTIL */ function $650934f729b0bf11$var$_handle_styles(element, options) {
    if (options.style) for(let property in options.style)element.style[property] = options.style[property];
}
function $650934f729b0bf11$var$_handle_id(element, options) {
    if (options.id) element.id = options.id;
}
function $650934f729b0bf11$var$_handle_class(element, default_class, options) {
    element.className = default_class + " " + (options.classes || "");
}
function $650934f729b0bf11$var$_handle_color(element, options) {
    element.style.setProperty("--clr", options.color || "#FFFFFF");
}
function $650934f729b0bf11$var$_handle_children(element, options) {
    if (options.children) options.children.forEach((child)=>element.appendChild(child));
}
function $650934f729b0bf11$var$_handle_border(element, options) {
    if (options.border) element.className += " border";
}
document.body.className = "center";


//# sourceMappingURL=index.js.map
