import { Link } from "react-router-dom";

export default function Header()
{
    return <>
         <header className="header_section">
        <div className="container-fluid">
          <nav className="navbar navbar-expand-lg custom_nav-container ">
            <a className="navbar-brand" href="index.html">
              Chocolate Shop
            </a>
           
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className=""> </span>
            </button>

            <div className="collapse navbar-collapse " id="navbarSupportedContent">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item active">
                  <Link to="/" className="nav-link">Home <span className="sr-only">(current)</span></Link>
                </li>
                <li className="nav-item">
                  <Link to="/about" className="nav-link"> About</Link>
                </li>
                <li className="nav-item">
                  <Link to="/chocolte" className="nav-link">Chocolates</Link>
                </li>
                {/* <li className="nav-item">
                  <a className="nav-link" href="testimonial.html">Testimonial</a>
                </li> */}
                <li className="nav-item">
                  <Link to="/contact" className="nav-link" >Contact Us</Link>
                </li>
              </ul>
              {/* <div className="quote_btn-container">
                <form className="form-inline">
                  <button className="btn  my-2 my-sm-0 nav_search-btn" type="submit">
                    <i className="fa fa-search" aria-hidden="true"></i>
                  </button>
                </form>
                <a href="">
                  <i className="fa fa-user" aria-hidden="true"></i>
                </a>
              </div> */}
            </div>
          </nav>
        </div>
      </header>
    
    </>
}