async function getProducts(uid){
  
    const res = await fetch(`https://kennethsstorefront-default-rtdb.firebaseio.com/coffee/${uid}.json`)
    const coffee = await res.json()
    return  coffee
    
}

export {getProducts}