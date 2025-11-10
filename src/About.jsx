export default function About()
{
    return <>
      <section className="about_section layout_padding ">
      <div className="container  ">
        <div className="row">
          <div className="col-md-6">
            <div className="detail-box">
              <div className="heading_container">
                <h2>
                 Chocolate's 
                </h2>
              </div>
              <p> “Make a list of important things to do today. At the top of your list, eat chocolate. Now, you’ll get at least one thing done today.” </p>
              <a href="#">
                <span>
                  Read More
                </span>
                <img src="images/color-arrow.png" alt=""/>
              </a>
            </div>
          </div>
          <div className="col-md-6">
            <div className="img-box">
              <img src="images/chocolates.jpg" alt=""/>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
}