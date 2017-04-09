import * as types from './mutation-types'

export const addToCart = ({ commit }, product) => {
        commit(types.ADD_TO_CART, {
            id: product.id,
            title: product.title,
            description: product.description,
            picture: product.picture,
            price: product.price
        })
}
export const removeFromCart = ({ commit }, product) => {
    commit(types.REMOVE_FROM_CART, {
        id: product.id
    })
}