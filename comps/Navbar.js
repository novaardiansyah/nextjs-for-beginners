import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-md navbar-dark bg-dark">
      <div className="container">
        <Link href="/"><a className="navbar-brand">Ninja List</a></Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#myNavbar" aria-controls="myNavbar" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse d-md-flex justify-content-md-end align-items-md-center" id="myNavbar">
          <div className="navbar-nav">
            <Link href="/"><a className="nav-link">Home</a></Link>
            <Link href="/about"><a className="nav-link">About</a></Link>
            <Link href="/ninjas"><a className="nav-link">Ninja Listing</a></Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar; 
                                                                                                                                                                                                                                                                                                            
