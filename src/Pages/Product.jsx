import React, { useContext } from 'react';
import { ShopContext } from '../Context/ShopContext';
import { useParams } from 'react-router-dom';
import Breadcrum from '../Components/Breadcrums/Breadcrum';
import ProductDisplay from '../Components/ProductDisplay/ProductDisplay';
import DescriptionBox from '../Components/DescriptionBox/DescriptionBox';

const Product = () => {
  const { all_product } = useContext(ShopContext);
  const { productID } = useParams(); // ✅ matches the route param
  
  const product = all_product?.find((e) => e.id === Number(productID));


  if (!product) {
    return <div>Loading product details...</div>; // or show a spinner
  }

  return (
    <div>
      <Breadcrum product={product} />
      <ProductDisplay product={product} />
      <DescriptionBox/>
    </div>
  );
};

export default Product;
