import './Footer.css';

function Footer() {
    return(
        
        <>
  <link
    href="//netdna.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css"
    rel="stylesheet"
  />
  <link
    href="//netdna.bootstrapcdn.com/bootstrap/3.0.0/css/bootstrap.min.css"
    rel="stylesheet"
    id="bootstrap-css"
  />
  
  <footer className="nb-footer">
    <div className="container">
      <div className="row">
        <div className="col-sm-12">
          <div className="about">
            <img
              src="images/logo.png"
              className="img-responsive center-block"
              alt=""
            />
            <div className="social-media">
              <ul className="list-inline">
                <li>
                  <a href="http://www.nextbootstrap.com/" title="">
                    <i className="fa fa-facebook" />
                  </a>
                </li>
                <li>
                  <a href="http://www.nextbootstrap.com/" title="">
                    <i className="fa fa-twitter" />
                  </a>
                </li>
                <li>
                  <a href="http://www.nextbootstrap.com/" title="">
                    <i className="fa fa-google-plus" />
                  </a>
                </li>
                <li>
                  <a href="http://www.nextbootstrap.com/" title="">
                    <i className="fa fa-linkedin" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col-md-3 col-sm-6">
          <div className="footer-info-single">
            <h2 className="title">LOCATION</h2>
            <ul className="list-unstyled">
              <li>
                <a href="http://www.nextbootstrap.com/" title="">
                  <i className="fa fa-angle-double-right" />Amman-Jordan
                </a>
              </li>
              <li>
                <a href="http://www.nextbootstrap.com/" title="">
                  <i className="fa fa-phone mr-3"/> +9607781084
                </a>
                <a href="http://www.nextbootstrap.com/" title="">
                <i class="fa fa-envelope-o mr-3"/> TicketEase@gmail.com
                </a>
        
              </li>
            </ul>
          </div>
        </div>
        <div className="col-md-3 col-sm-6">
          <div className="footer-info-single">
            <h2 className="title">QUCK LINKS</h2>
            <ul className="list-unstyled">
              <li>
                <a href="http://www.nextbootstrap.com/" title="">
                  <i className="fa fa-angle-double-right" /> HOME
                </a>
              </li>
              <li>
                <a href="http://www.nextbootstrap.com/" title="">
                  <i className="fa fa-angle-double-right" /> About Us
                </a>
              </li>
              <li>
                <a href="http://www.nextbootstrap.com/" title="">
                  <i className="fa fa-angle-double-right" /> FAQ's
                </a>
              </li>
             
            </ul>
          </div>
        </div>
        <div className="col-md-3 col-sm-6">
          <div className="footer-info-single">
            <h2 className="title">Security &amp; privacy</h2>
            <ul className="list-unstyled">
              <li>
                <a href="http://www.nextbootstrap.com/" title="">
                  <i className="fa fa-angle-double-right" /> Terms Of Use
                </a>
              </li>
              <li>
                <a href="http://www.nextbootstrap.com/" title="">
                  <i className="fa fa-angle-double-right" /> Privacy Policy
                </a>
              </li>
              <li>
                <a href="http://www.nextbootstrap.com/" title="">
                  <i className="fa fa-angle-double-right" /> Return / Refund
                  Policy
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-md-3 col-sm-6">
          <div className="footer-info-single">
            <h2 className="title">OPENING HOUR</h2>
            <li><i class="fa fa-check"> Sat-Mon: 8 AM-5 PM </i></li>
            <li><i class="fa fa-check"> Tus-Thu: 8 Am-7 PM </i></li>
            <li><i class="fa fa-times"> Friday: Closed </i></li>  
          </div>
        </div>
      </div>
    </div>
    <section className="copyright">
      <div className="container">
        <div className="row">
          <div className="col-sm-6">
            <p>Copyright © 2023. Ticket Ease.</p>
          </div>
          <div className="col-sm-6" />
        </div>
      </div>
    </section>
  </footer>
</>
    )
}

export default Footer;