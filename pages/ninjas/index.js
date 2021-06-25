import Head from 'next/head';
import Link from 'next/link';
import styles from '../../styles/Ninjas.module.css';

export const getStaticProps = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  const data = await res.json();
  
  return {
    props: { ninjas: data }
  }
}

const Ninjas = ({ ninjas }) => {
  return (
    <>
      <Head>
        <title>Ninja List | All Ninjas</title>
      </Head>
      
      <div className="container pb-3">
        <div className="row mt-4">
          <div className="col-md-10 offset-md-1">
            <h1 className="text-primary text-center mb-3">All Ninjas</h1>
            
            { ninjas &&
              ninjas.map(ninja => (
                <Link href={`/ninjas/${ninja.id}`} key={ ninja.id }>
                  <a className={`${styles.single} mb-3`}>
                    <h3 className="text-warning d-inline">{ ninja.name }</h3>
                  </a>
                </Link>
              ))
            }
          </div>
        </div>
      </div>
    </>
  );
}

export default Ninjas; 
                                                                                                                                                                                                                                                                                                            
