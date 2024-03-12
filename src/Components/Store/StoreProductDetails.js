import { useParams } from "react-router-dom";
const StoreProductDetails = () => {
 
    const params = useParams();
    return(
        <>
        <h1>Product Details page</h1>
        <p>{params.productId}</p>
        </>
    )
}

export default StoreProductDetails;