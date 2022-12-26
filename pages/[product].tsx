import { Fragment } from 'react';
import dummydata from '../data/dummy-data.json';
function ProductId(props:any) {
    const products = {props};
    return (
        <Fragment>
        <h1>
            {products.props.products?.title}</h1>
        </Fragment>
    );
}
export async function getStaticProps(context:any){
    console.info('in getstatic props',context);
    const {params} = context;
    const Id = params.product;
    const product = dummydata.products.find((product:any)=> product.id === Id);
    // console.log(product) 
    return { 
      props: {products :product}
    };
  }

  export async function getStaticPaths(){
    return{
        paths:[
            {params :{product:'p1'}},
            {params :{product:'p2'}},
            {params :{product:'p3'}}
        ],
        fallback:false
    };
  }

  
  
  export default ProductId;