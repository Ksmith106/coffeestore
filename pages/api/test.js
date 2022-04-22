export default function handler(req, res) {
  
  console.log("temp")
  if(req.method ==="POST"){
    console.log("Handle The Product")
    const productId = req.body.uid
    res.status(200).send( `good to go ${productId} `)
  }else{
    res.status(200).json({ name: 'Kenneth Smith' })
  }
}
