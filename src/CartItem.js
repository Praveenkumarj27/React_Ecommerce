function CartItem(props) {
    return  <div className="col-lg-12">
   
      <li className="list-group-item d-flex justify-content-between align-items-start">
        <div className="ms-2 me-auto">
          <div className="fw-bold">{props.data.title}</div>
          {props.data.price}
        </div>
        <button  onClick={()=>props.handleRemoveCart(props.data.id)} className="badge bg-primary rounded-pill">❌</button>
      </li>
  </div>
}


export default CartItem;