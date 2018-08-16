import React from 'react';

const Footer = () => {
return (

<footer className="page-footer font-small white pt-4 mt-4" style={{'background-color': 'rgb(53, 57, 66)'}}>

    <div className="container text-center text-md-left">

      <div className="row text-center text-md-left mt-3 pb-3">

        <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
          <h6 className="text-uppercase mb-4 font-weight-bold">GRETSER</h6>
          <p>Nos especializamos en venta de productos traidos del exterior. En caso de cualquier consulta, no dude en contactarnos por cualquiera de los métodos disponibles.</p>
        </div>

        <hr className="w-100 clearfix d-md-none" />


        <hr className="w-100 clearfix d-md-none" />

        <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mt-3">
        {/*
          <h6 className="text-uppercase mb-4 font-weight-bold">Useful links</h6>
          <p>
            <a href="#!">Your Account</a>
          </p>
          <p>
            <a href="#!">Become an Affiliate</a>
          </p>
          <p>
            <a href="#!">Shipping Rates</a>
          </p>
          <p>
            <a href="#!">Help</a>
          </p>
        */}
        </div>

        <hr className="w-100 clearfix d-md-none" />

        <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
          <h6 className="text-uppercase mb-4 font-weight-bold">Contacto</h6>
          <p>
            <i className="fa fa-home mr-3"></i> Cochabamba, Bolivia</p>
          <p>
            <i className="fa fa-envelope mr-3"></i> info@gretser.com</p>
          <p>
            <i className="fa fa-phone mr-3"></i> + 1 (479) 222-0203</p>
          <p>
            <i className="fa fa-phone mr-3"></i> + 59172233939</p>
        </div>

      </div>

      <hr />

      <div className="row d-flex align-items-center">

        <div className="col-md-7 col-lg-8">

          <p className="text-center text-md-left">© 2018 Copyright: Gretser Producciones
          </p>

        </div>
        <div className="col-md-5 col-lg-4 ml-lg-0">
         {/* 
          <div className="text-center text-md-right">
            <ul className="list-unstyled list-inline">
              <li className="list-inline-item">
                <a className="btn-floating btn-sm rgba-white-slight mx-1">
                  <i className="fa fa-facebook"></i>
                </a>
              </li>
              <li className="list-inline-item">
                <a className="btn-floating btn-sm rgba-white-slight mx-1">
                  <i className="fa fa-twitter"></i>
                </a>
              </li>
              <li className="list-inline-item">
                <a className="btn-floating btn-sm rgba-white-slight mx-1">
                  <i className="fa fa-google-plus"></i>
                </a>
              </li>
              <li className="list-inline-item">
                <a className="btn-floating btn-sm rgba-white-slight mx-1">
                  <i className="fa fa-linkedin"></i>
                </a>
              </li>
            </ul>
          </div>
    */}
        </div>
      </div>
    </div>
  </footer>

);
}
export default Footer;