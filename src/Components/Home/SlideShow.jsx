import Carousel from 'react-bootstrap/Carousel';
import '../Home/SlideShow.css';

function SlideShow() {
  return (
    <Carousel>
      <Carousel.Item interval={2000}>
        <img
          className="d-block w-100 carousel-image"
          src="https://imageio.forbes.com/specials-images/imageserve/627436a5500db36bd941d642/0x0.jpg?format=jpg&width=1200"
          alt="First slide"
        />
        {/* <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption> */}
      </Carousel.Item>
      <Carousel.Item interval={500}>
        <img
          className="d-block w-100 carousel-image"
          src="https://www.apexon.com/wp-content/uploads/2021/09/customer-experience-data-analytics-blog-735x300.jpg"
          alt="Second slide"
        />
        {/* <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption> */}
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 carousel-image"
          src="https://images.pexels.com/photos/845451/pexels-photo-845451.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="Third slide"
        />
        
      </Carousel.Item>
    </Carousel>
  );
}

export default SlideShow;