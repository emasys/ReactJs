import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const settings = {
  dots: true,
  arrows: false,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1
}
const generateSlides = ({slides}) => {
  if (slides) {
    return (
      <Slider {...settings}>
        {slides.map((item) => {
          return (
            <div
              key={item.id}
              className='item_slider'
              style={{
              height: '700px',
              background: `url(/images/covers/${item.cover})`
            }}>
              <div className="caption">
                <h4>
                  {item.topic}
                </h4>
                <p>{item.title}</p>
              </div>
            </div>
          )
        })
}
      </Slider>
    )
  }

}
const Featured = (props) => {
  return (
    <div>{generateSlides(props)}</div>
  );
}

export default Featured;