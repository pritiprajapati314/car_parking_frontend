import './NavBar.css';

const NavBar = () => {
    return (
       
        <div className="Nav">
      <section className="header">
   <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <a className="navbar-brand" href="#">BookMySlot</a>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
  
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mr-auto">
        <li className="nav-item active">
          <a className="nav-link" href="#">Home <span className="sr-only"></span></a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Book Slot</a>
        </li>
       
        <li className="nav-item">
          <a className="nav-link " href="#">Nearest parking slot</a>
        </li>
        <li className="nav-item">
            <a className="nav-link " href="#">View Booking History</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Add new Vehicle</a>
          </li>
          <li className="nav-item">
            <a className="nav-link " href="#">Update Vehicle Information</a>
          </li>
          <li className="nav-item">
            <a className="nav-link " href="#">Pay fees</a>
          </li>
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
              Transaction History
            </a>
            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
              <a className="dropdown-item" href="#">Last week</a>
              <a className="dropdown-item" href="#">Last Month</a>
              <a className="dropdown-item" href="#">Last Year</a>
            </div>
          </li>
          <li className="nav-item">
            <a className="nav-link " href="#">Cancel Booking</a>
          </li>
      </ul>
    </div>
  </nav>
</section>
    </div>
        
    )
}

export default NavBar
