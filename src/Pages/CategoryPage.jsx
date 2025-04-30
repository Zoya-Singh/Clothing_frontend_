import React, { useContext } from 'react'
import './CSS/CategoryPage.css'
import { ShopContext } from '../Context/ShopContext'
import dropdown_icon from '../Components/Assets/dropdown_icon.png'
import Item from '../Components/Item/Item'

const CategoryPage = (props) => {
    const {all_product} = useContext(ShopContext);
  return (
    <div className='category-page'>
        <img className='categorypage-banner' src={props.banner} alt="" />
        <div className="categorypage-indexSort">
          <p>
            <span>Showing 1-12 out of 36 products</span>
          </p>
          <div className="categorypage-sort">
            Sort by <img src={dropdown_icon} alt="" />
          </div>
        </div>
        <div className="categorypage-products">
          {all_product.map((item,i)=>{
            if (props.category===item.category){
              return <Item 
              key={i} 
              id={item.id} 
              name={item.name} 
              image={item.image} 
              new_price={item.new_price} 
              old_price={item.old_price}/>
            }
            else{
              return null;
            }
          })}
        </div>
        <div className="categorypage-loadmore">
          Explore More
        </div>
    </div>
  )
}

export default CategoryPage