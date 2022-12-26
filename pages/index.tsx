import dummydata from '../data/dummy-data.json';

function Home(props:any) {
  return (
      <ul>
        {props.products.map((item:any,index:any)=>{
          return (
            <li key={index}>{item.title}</li>
          )
          })}
      </ul>
  );
}

export async function getStaticProps(){
  console.info('in getstatic props');
  return { 
    props: {products :dummydata.products},
    revalidate: 10
  };
}

export default Home;
