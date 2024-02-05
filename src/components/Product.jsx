export function Product({
  name,
  description,
  img,
  price,
  productQty,
  setProductQty,
}) {
  function increaseCounter() {
    setProductQty((prev) => {
      return { ...prev, [name]: prev[name] + 1 };
    });
  }
  function decreaseCounter() {
    if (productQty[name] != 0) {
      return setProductQty((prev) => {
        return { ...prev, [name]: prev[name] - 1 };
      });
    }
  }
  return (
    <>
      <div className="grid-item product">
        <div className="product-photo">
          <img src={img} />
        </div>
        <div className="product-body">
          <div className="product-name">
            <div>{name}</div>
            <div className="product-price">{price}</div>
          </div>
          <div className="product-description">{description}</div>
          <div className="btn">
            <div className="modify-counter-btn" onClick={decreaseCounter}>
              -
            </div>
            <div className="counter">{productQty[name]}</div>
            <div className="modify-counter-btn" onClick={increaseCounter}>
              +
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
