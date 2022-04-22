import {getProduct} from './../../libs/getProduct'

export default async function handler(req, res) {
    const product = await getProduct(req.body.uid)

    res.send("thank you for the order")
}

export {checkOutRequest}