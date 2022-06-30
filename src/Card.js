function Card(props) {
    return <div className='col-lg-4'>
        <div class="card" style={{width:"18rem"}}>
    <img src={props.data.img}class="card-img-top" alt="..."/>
    {/* <img src={`https://picsum.photos/200/150?random=${Math.floor(Math.random()*100)}`} class="card-img-top" alt="..."/> */}
    <div class="card-body">
      <h5 class="card-title">{props.data.title}</h5>
      <h5 className='price'>{props.data.price}</h5>
      <p class="card-text">FREE Delivery.</p>
     
      <button disabled={props.cartItem.some(obj=>obj.id===props.data.id)} onClick={()=> props.handleaddTocart(props.data.id) } href="#" class="btn btn-primary">Add to Cart</button>
    </div>
  </div>
    </div>
}

export default Card;


