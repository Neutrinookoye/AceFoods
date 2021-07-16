import asyncHandler from 'express-async-handler'
import Order from '../models/orderModel.js'


// @desc    Create new order
// @route   POST /api/orders
// @access  Private
export const addOrderItems =  asyncHandler(async( req , res , next ) => {
    const { orderItems , deliveryAddress , paymentMethod , 
            itemsPrice , taxPrice , deliveryPrice , totalPrice 
    } = req.body

    if(orderItems && orderItems.length === 0) {
        res.status(400) //bad request
        throw new Error('No order items')
        return
    } else {
        const order = new Order({
            orderItems , 
            deliveryAddress , 
            paymentMethod , 
            itemsPrice , 
            taxPrice , 
            deliveryPrice , 
            totalPrice ,
            user: req.user._id
        })
        const createdOrder = await order.save()
        res.status(201).json(createdOrder) //Something was created

    }
})

// @desc    Get order by ID
// @route   GET /api/orders/:id
// @access  Private
export const getOrderById =  asyncHandler(async( req , res , next ) => {
    const order = await Order.findById(req.params.id).populate('user' , 'name email') //Means you want the name and email of the user.

    if(order) {
        res.json(order) 
    }else {
        res.status(404)
        throw new Error('Order not found')
    }
})

// @desc    Update Order to paid
// @route   GET /api/orders/:id/pay
// @access  Private
export const updateOrderToPaid =  asyncHandler(async( req , res , next ) => {
    const order = await Order.findById(req.params.id)

    if(order) {
        order.isPaid = true
        order.paidAt = Date.now()
        order.reference = req.body.reference

        const updatedOrder = await order.save()

        res.json(updatedOrder)
    }else {
        res.status(404)
        throw new Error('Order not found')
    }
})
