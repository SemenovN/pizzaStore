const _products = [
    {'id': 1, 'title': 'Маргарита', 'description': '250 г / 191 кКал','picture': 'margo.jpg', 'price': 798.00 },
    {'id': 2, 'title': 'Пепперони', 'description': '250 г / 191 кКал','picture': 'pepperoni.jpg', 'price': 299.00 },
    {'id': 3, 'title': 'Аппетито', 'description': '250 г / 191 кКал','picture': 'appetito.jpg', 'price': 500.00 },
    {'id': 4, 'title': 'Мексиканская', 'description': '250 г / 191 кКал','picture': 'mexican.jpg', 'price': 425.00 },
    {'id': 5, 'title': 'Боварская', 'description': '250 г / 191 кКал','picture': 'bavarian.jpg', 'price': 425.00 }
]
export default {
    getProducts (cb) {
        setTimeout(() => cb(_products), 100)
    },

    buyProducts (products, cb, errorCb) {
        setTimeout(() => {
            (Math.random() > 0.5 || navigator.userAgent.indexOf('PhantomJS') > -1)
                ? cb()
                : errorCb()
        }, 100)
    }
}