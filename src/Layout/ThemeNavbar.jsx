//import React from 'react'
import logo from '../assets/logo.png'

const ThemeNavbar = () => {
  return (
    <>
      <section className="header ">
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
          <div className="container">
            <a className="navbar-brand" href="#">
              <img src={logo} alt="image" className='img-fluid logo' />
            </a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="#">Home</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="#">About</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="/service">Services</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="#">Blogs</a>
                </li>

                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="#">Contact Us</a>
                </li>
              </ul>
              {/* <form className="d-flex" role="search">

                <button className="btn btn-outline-success" type="submit">Search</button>
              </form> */}
            </div>
          </div>
        </nav>
      </section>
    </>
  )
}

export default ThemeNavbar