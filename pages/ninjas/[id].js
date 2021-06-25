import Head from 'next/head';
import Link from 'next/link';
import styles from '../../styles/Ninjas.module.css';

export const getStaticPaths = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  const data = await res.json();
  
  // map data to an array of path objects with params (id)
  const paths = data.map(ninja => {
    return {
      params: { id: ninja.id.toString() }
    }
  });
  
  return {
    paths,
    fallback: false
  }
}

export const getStaticProps = async (context) => {
  const id = context.params.id;
  
  const res = await fetch('https://jsonplaceholder.typicode.com/users/' + id);
  const data = await res.json();
  
  return {
    props: { ninja: data }
  }
}

const Details = ({ ninja }) => {
  return (
    <>
      <Head>
        <title>{ ninja.name }</title>
      </Head>
      
      <div className="container pb-3">
        <div className="row mt-4">
          <div className="col-md-10 offset-md-1">
          
            <div className={`${styles.single} my-3`}>
              <h3 className="text-warning text-center">{ ninja.name }</h3>
              
              <div className="row text-white text-break">
                <div className="col text-md-end">Username :</div>
                <div className="col-7 col-md-8">{ ninja.username }</div>
              </div>
              
              <div className="row text-white text-break">
                <div className="col text-md-end">Email :</div>
                <div className="col-7 col-md-8">{ ninja.email }</div>
              </div>
              
              <div className="row text-white text-break">
                <div className="col text-md-end">Address :</div>
                <div className="col-7 col-md-8">{ ninja.address.city }</div>
              </div>
              
              <div className="row text-white text-break">
                <div className="col text-md-end">Phone :</div>
                <div className="col-7 col-md-8">{ ninja.phone }</div>
              </div>
              
              <div className="row text-white text-break">
                <div className="col text-md-end">Company :</div>
                <div className="col-7 col-md-8">{ ninja.company.name }</div>
              </div>
              
              <div className="text-center mt-3">
                <Link href="/ninjas"><a className="btn btn-outline-warning">Back to List</a></Link>
              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  )
}

export default Details;
                                                                                                                                                                                                                                                                                                            
