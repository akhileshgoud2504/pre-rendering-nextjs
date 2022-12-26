import { Fragment } from 'react';
import dummydata from '../data/dummy-data.json';
function ProductId(props:any) {
    const products = {props};
    /* 
    not needed for blocking fallback
    if(!products){
        return (<p>loading</p>)
    }
    */
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
            // {params :{product:'p2'}},
            // {params :{product:'p3'}}
        ],
        fallback:'blocking'
        /*
        true: this will build the defined pages in paths statically during build time and rest other are build on server side
        if(!params.somnethinh){
            return (<p>loading</p>)
        }

        false: this will build the defined pages in paths statically during build time amd rest other gives 404 page not found

        blocking: this will build the defined pages in paths statically during build time amd rest other are build on server site without any conditional chceking
        */
    };
  }

  
  
  export default ProductId;