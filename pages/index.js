import Head from 'next/head';
import styles from '../styles/Home.module.css'

// components
import Footer from '../comps/Footer'
import Navbar from '../comps/Navbar'

export default function Home() {
  return (
    <>
      <Head>
        <title>Ninja List | Home Page</title>
      </Head>
    	<div className="container pb-3">
    	  <div className="row mt-4">
    	    <div className="col-md-10 offset-md-1">
    	      <h1 className="text-primary text-center">Homepage</h1>
            <p className="lh-lg mt-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus animi impedit suscipit architecto, odio inventore nostrum non neque dicta. Quam magni accusantium culpa distinctio tempore iure accusamus, dolorem nobis odit.</p>
            <p className="lh-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus animi impedit suscipit architecto, odio inventore nostrum non neque dicta. Quam magni accusantium culpa distinctio tempore iure accusamus, dolorem nobis odit.</p>
    	    </div>
    	  </div>
      </div>	
    </>
  )
}
                                                                                                                                                                                                                                                                                                            
