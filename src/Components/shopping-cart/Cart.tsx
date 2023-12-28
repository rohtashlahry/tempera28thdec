import React, { useEffect, useState } from 'react'
import '../tempCommon.css'

const Cart = () => {
  const dummyProducts = [
    {id: 0, Title: "Product 1 shoes", Price: "560"},
    {id: 1, Title: "Product 2 shoes", Price: "100"},
    {id: 2, Title: "Product 3 shoes", Price: "200"},
    {id: 3, Title: "Product 4 shoes", Price: "230"},
    {id: 4, Title: "Product 5 shoes", Price: "430"},
    {id: 5, Title: "Product 6 shoes", Price: "580"},
    {id: 6, Title: "Product 7 shoes", Price: "180"},
  ]

  const [cartItems, setCartItems] = useState<any>([]);

  const [totlaCartPrice, setTotlaCartPrice] = useState<any>();
  const [productCounter, setProductCounter] = useState<any>(1);

  const handleAddtoCart = (item: any) => {
    console.log(item);
    setCartItems([...cartItems, item])
  }


  useEffect(() => {
    const updatedCartPrice = cartItems.map((itemPrice: any) => {
      return itemPrice.Price; 
    });
    const totalPriceSum = updatedCartPrice.reduce((acc: any, val: any) => acc + Number(val), 0);
    setTotlaCartPrice(totalPriceSum)
  }, [cartItems])

    const QuantityCount = () => {
      const [itemQuantity, setItemQuantity] = useState<any>(1);
      const handleAddToCartQuantity = (e: any) => {
        if(e.target.value == "add"){
          setItemQuantity(itemQuantity +1)
        }
        else{
          setItemQuantity(itemQuantity -1)
        }
      }
      return(
        <>
          <button value="subs" onClick={handleAddToCartQuantity}> - </button>
          <span>{itemQuantity}</span>
          <button value="add" onClick={handleAddToCartQuantity}> + </button>
        </>
      )
    }

  return (
    <div>
        <div>
            <h2>Shopping Cart</h2>
            <div>Products List
              <div className='products_list'>
                {dummyProducts && dummyProducts.map((item: any) => {
                  return(
                    <div className='products_grid' key={item.id}>
                      {/* <div className='products_sr_no'>1</div> */}
                      <div className='products_title'>Title: {item.Title}</div>
                      <div className='products_price'>Price: {item.Price}</div>
                      <div className='products_title'>
                        <QuantityCount />
                        <button onClick={() => handleAddtoCart(item)}>Add to Cart</button>
                        </div>
                    </div>
                  )
                })}
              </div>
            </div>
              <div className='cart_cls'>
                <div>Cart
                  {cartItems && cartItems.map((x: any) => {
                    return(
                      <div key={x.id} className='cart_products_grid'>
                        <div className='cart_products_title'>Sr.No: {x.id}</div>
                        <div className='cart_products_title'>Title: {x.Title}</div>
                        <div className='cart_products_title'>Price: {x.Price}</div>
                      </div>
                    )
                  })}
                  
                </div>
              <div>Checkout
                <div>
                  Total Cart Price: {totlaCartPrice}
                </div>
              </div>
            </div>
            
        </div>
    </div>
  )
}

export default Cart