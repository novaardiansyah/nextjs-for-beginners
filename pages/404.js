import Link from 'next/link';
import { useEffect } from 'react';
import { useRouter } from 'next/router';

const NotFound = () => {
  const router = useRouter();
  
  useEffect(() => {
    setTimeout(function() {
      router.push('/');
    }, 3000);
  }, []);
  
  return (
    <div className="container pb-3">
      <div className="row mt-5">
        <div className="col-md-8 offset-md-1 text-center">
          <h1>Ooops...</h1>
          <h2>That Page Cannot be Found :</h2>
          <p className="lh-lg">Going Back to the <Link href="/"><a className="link-primary">Home</a></Link> Page.</p>
        </div>
      </div>
    </div>
  )
}

export default NotFound;
                                                                                                                                                                                                                                                                                                            
