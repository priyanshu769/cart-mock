import toast from 'react-hot-toast'

export const addToCartHandle = (product, cart, setCart) => {
    const cartProduct = cart.find(item => item.id === product.id)
    if (!cartProduct) {
        setCart(cartPrev => [...cartPrev, { ...product, quantity: 1 }])
        toast.success('Product Added to Cart!')
    } else {
        const updatedCart = cart.map(cartItem => {
            if (cartItem.id === cartProduct.id) {
                return { ...cartItem, quantity: cartItem.quantity + 1 }
            } else {
                return cartItem
            }
        })
        setCart(updatedCart)
        toast.success('Product Quantity Increased!')
    }
}

export const decrementhandle = (item, cart, setCart) => {
    if (item.quantity > 1) {
        const itemToDecrease = cart.find(cartItem => cartItem.id === item.id)
        const updatedCart = cart.map(cartItem => {
            if (cartItem.id === itemToDecrease.id) {
                return { ...cartItem, quantity: cartItem.quantity - 1 }
            } else {
                return cartItem
            }
        })
        setCart(updatedCart)
        toast.success('Quantity Decreased!')
    }
}

export const incrementHandle = (item, cart, setCart) => {
    const itemToIncrease = cart.find(cartItem => cartItem.id === item.id)
    const updatedCart = cart.map(cartItem => {
        if (cartItem.id === itemToIncrease.id) {
            return { ...cartItem, quantity: cartItem.quantity + 1 }
        } else {
            return cartItem
        }
    })
    setCart(updatedCart)
    toast.success('Quantity Increased!')
}

export const removeFromCartHandle = (item, cart, setCart) => {
    const updatedCart = cart.filter(cartItem => cartItem.id !== item.id)
    setCart(updatedCart)
    toast.success('Product removed from Cart!')
}

export const saveForLaterHandle = (item, cart, setCart, savedForLater, setSavedForLater) => {
    console.log('Saved for later')
    console.log(savedForLater)
    setSavedForLater(prev => [...prev, item])
    removeFromCartHandle(item, cart, setCart)
    toast.success('Product Saved for later!')
}

export const deleteFromSaveHandle = (savedItem, savedForLater, setSavedForLater) => {
    const updatedSaved = savedForLater.filter(savedForLaterItem => savedForLaterItem !== savedItem)
    setSavedForLater(updatedSaved)
    toast.success('Product Deleted!')
}