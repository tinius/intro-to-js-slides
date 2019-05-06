//// Fat arrow syntax demo ////

function add(a, b) {
    return a + b
}
const subtract = (a, b) => {
    return a - b
}
const multiply = (a, b) => a * b
const square = a => a * a

//// Array.filter ////

const monicasOrders = orders.filter( o => o.name === 'Monica')

const everyOther = orders.filter( (order, i) => i % 2 === 0 )

//// Array.map //// 

const customers = orders.map( o => o.customer)

// adds a property

const ordersNumbered = orders.map( (o, i) => {
    return Object.assign({}, o, { orderNumber : i })
})

// Get rid of price (keep only customer and drink)

const customersAndDrinks = orders.map( o => {
    return {
        customer : o.customer,
        drink : o.drink
    }
})

// add type of beverage

const ordersWithTypes = orders.map(o => {
    return Object.assign({}, o, { type : /tea/.matches(o.drink) ? 'tea' : 'coffee' })
})



//// Array.reduce ////

const earnings = orders.reduce((agg, cur) => {
    return interm + cur.price
}, 0)

const earnings = orders.map( o => o.price ).reduce((agg, cur) => agg + cur)


//// Lodash examples ////

