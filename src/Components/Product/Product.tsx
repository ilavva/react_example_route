import "./Product.css";

export type ProductProps = {
  prodName: string;
  productDescription: string;
  prodPrice: number;
};
export const Product: React.FC<ProductProps> = (props: {
  prodName: string;
  productDescription: string;
  prodPrice: number;
}) => {
  return (
    <div className="prod">
      <h2>{props.prodName}</h2>
      <p>{props.prodPrice}</p>
      {/* {props.productDescription && <p>{props.productDescription}</p>} */}
      <p>{props.productDescription ? props.productDescription : "The Best"}</p>
    </div>
  );
};
