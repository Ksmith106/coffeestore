import Head from 'next/head'
import PageTitle from "../components/PageTitle/PageTitle";
import ProductCard from "../components/ProductCard/ProductCard";
import {pane} from "./../styles/home.module.scss"

 
 
export default function Home(props) {

    const products = props.products.slice(0,3);
   


     return(
          <>
          <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
          <meta name="description" content="storefront online running shoes with free shipping"/>
          <meta name="keywords" content="Shoes, Runing, Running Shoes, Nike Shoes, New Balance Shoes"/>
           <title>Storefront</title>
          </Head>
           <PageTitle tagline="product specials" title="Storefront"/>
           <main className={pane}>
               {  products.map(product=> <ProductCard  key={product.uid} product={product}/>)}
           </main>
          </>
     )
}


 

export async function getStaticProps(){
  
    const res = await fetch('https://kennethsstorefront-default-rtdb.firebaseio.com/coffee.json')
    const productData = await res.json();
    const products = Object.values(productData)
 return {
      props:{
           products
      },
      revalidate: 60,
 }
}

 