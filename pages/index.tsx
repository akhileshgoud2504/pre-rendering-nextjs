import Link from 'next/link';
import dummydata from '../data/dummy-data.json';

function Home(props:any) {
  return (
      <ul>
        {props.products.map((item:any,index:any)=>{
          return (
            <li key={index}><Link href={`${item.id}`}>{item.title}</Link></li>
          )
          })}
      </ul>
  );
}

export async function getStaticProps(){
  console.info('in getstatic props');
  if(!dummydata){
    return{
      redirect:{
        destination: './datanotfound'
      }
    }
  }

  if(!dummydata.products){
    return {
      notFound: true
    }
  }

  return { 
    props: {products :dummydata.products},
    revalidate: 10
  };
}

export default Home;
