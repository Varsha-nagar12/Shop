import { useEffect } from "react"

export default function Chocolate()
{
    useEffect(()=>window.Slick(),[])
    return <>
     
    <section className="chocolate_section layout_padding">
      <div className="container">
        <div className="heading_container">
          <h2>
            Our chocolate products
          </h2>
          <p>
            Our life is like a box of chocolates full of sweet indulgences and surprises.
          </p>
        </div>
      </div>
      <div className="container">
        <div className="chocolate_container">
          <div className="box">
            <div className="img-box">
              <img src="images/Dairy milk.webp" alt=""/>
            </div>
            <div className="detail-box">
              <h6>
              Cadbury <span>Dairy milk</span>
              </h6>
              <h5>
              80 Rs 
              </h5>
              <a href="">
                BUY NOW
              </a>
            </div>
          </div>
          <div className="box">
            <div className="img-box">
              <img src="images/Kitkat.avif" alt=""/>
            </div>
            <div className="detail-box">
              <h6>
                Kitkat <span>chocolate</span>
              </h6>
              <h5>
              20 Rs
              </h5>
              <a href="">
                BUY NOW
              </a>
            </div>
          </div>
          <div className="box">
            <div className="img-box">
              <img src="images/Fuse.jpg" alt=""/>
            </div>
            <div className="detail-box">
              <h6>
                Fuse<span>chocolate</span>
              </h6>
              <h5>
                50 Rs
              </h5>
              <a href="">
                BUY NOW
              </a>
            </div>
          </div>
          <div className="box">
            <div className="img-box">
              <img src="images/ferrero.jpg"  alt=""/>
            </div>
            <div className="detail-box">
              <h6>
              Ferrero <span>chocolate</span>
              </h6>
              <h5>
               200 Rs
              </h5>
              <a href="">
                BUY NOW
              </a>
            </div>
          </div>
          <div className="box">
            <div className="img-box">
              <img src="images/Sweets.webp" alt=""/>
            </div>
            <div className="detail-box">
              <h6>
                Sweets <span>chocolate</span>
              </h6>
              <h5>
               300 Rs
              </h5>
              <a href="">
                BUY NOW
              </a>
            </div>
          </div>

          <div className="box">
            <div className="img-box">
              <img src="images/Dark.jpg" alt=""/>
            </div>
            <div className="detail-box">
              <h6>
                Dark <span>chocolate</span>
              </h6>
              <h5>
              60 Rs
              </h5>
              <a href="">
                BUY NOW
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>

    </>
}