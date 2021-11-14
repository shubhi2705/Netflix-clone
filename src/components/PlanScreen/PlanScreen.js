import React,{useEffect,useState} from 'react'
import { useSelector } from 'react-redux';
import { selectUser } from '../../features/userSlice';
import db from '../../firebase';
import './PlanScreen.css';
import {loadStripe} from '@stripe/stripe-js';
const PlanScreen = () => {
    const [products,setProducts]=useState([]);
    const user=useSelector(selectUser);
    const subscribed=true;
useEffect(()=>{
   db.collection('Products')
   .where('active','==',true)
   .get().then(querySnapshot=>{
       const products={};
       querySnapshot.forEach(async doc=> {
           products[doc.id]=doc.data();
           var pricing=await doc.ref.collection('price').get();
           pricing=pricing.docs[0].data();

           products[doc.id].price=pricing;
       })
       setProducts(products);
   })
},[])

const result=(Object.entries(products)).map(([productId,productData])=>{
 return {productId,productData}
});
const IDs=result.map(d=>d.productId);
const productData=result.map(d=>d.productData);
const loadCheckout=async (id)=>{
alert("Please register to Stripe payment gateway to pay the bill")
}

    return (
        <div className='planScreen'>
          {
           <div >
               {productData.map(product=>(
                   <>
                    <div className='planScreen_plans'>  
                    <div className='planScreen_info'>
                         <h4>{product.name}</h4>
                         <h5>{product.description}</h5>
                     </div>        
                     {
                        <button onClick={()=>loadCheckout(product.id)}>Subscribe</button> 
                          
                    }                                              
                   </div>
                   
                   </> 
               ))}
           </div>
          }
        </div>
    )
}

export default PlanScreen
