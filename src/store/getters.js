/*export const cartProducts = state => {
    return state.cart.added.map(({ id, quantity }) => {
        const product = state.products.all.find(p => p.id === id)
        return {
            title: product.title,
            price: product.price,
            quantity
        }
    })
}*/

export const cartProducts = state => {
    var cart = state.cart.added
    //console.log(cart)
    return cart
}

export const cartCount = state => {
    var totalCount = 0
    state.cart.added.forEach(({ quantity }) => {
        totalCount += quantity
    })
    return totalCount
}

export const qtyInCart = (state) => {
    const found = state.cart.added.find( p => p.id === p.id)
    //console.log(found)
    if (!found){
        return 0
    } else
        return found.quantity
}