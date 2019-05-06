import slidesTemplate from "./src/templates/slides.html!text"

import Handlebars from 'handlebars'

import orders from './js/orders.json'

export async function render() {
    // this function just has to return a string of HTML
    // you can generate this using js, e.g. using Mustache.js

    console.log(orders)

    const slides = Handlebars.compile(slidesTemplate)

    return slides({ orders, ordersStr : JSON.stringify(orders.slice(0, 3), null, 2).replace(/}[^,]/, '},\n... ') })
}