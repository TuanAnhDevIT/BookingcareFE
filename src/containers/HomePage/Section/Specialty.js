import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import './Specialty.scss';
import specialtyImg from "../../../assets/images/imgcoxuongkhop.jpg"


import Slider from 'react-slick';

class Specialty extends Component {

  render() {
    let settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 1
    };
    return (
      <div className='section-specialty'>
        <div className='specialty-container'>
          <div className='specialty-header'>
            <span className='title'>Chuyên khoa phổ biến</span>
            <button className='xemthem'>Xem thêm</button>
          </div>
          <div className='specialty-body'>
            <Slider {...settings}>

              <div className='img-customize'>
                <img src={specialtyImg} />
                <h3>Cơ xương khớp</h3>
              </div>
              <div className='img-customize'>
                <img src={specialtyImg} />
                <h3>Cơ xương khớp</h3>
              </div>
              <div className='img-customize'>
                <img src={specialtyImg} />
                <h3>Cơ xương khớp</h3>
              </div>
              <div className='img-customize'>
                <img src={specialtyImg} />
                <h3>Cơ xương khớp</h3>
              </div>
              <div className='img-customize'>
                <img src={specialtyImg} />
                <h3>Cơ xương khớp</h3>
              </div>
              <div className='img-customize'>
                <img src={specialtyImg} />
                <h3>Cơ xương khớp</h3>
              </div>
              <div className='img-customize'>
                <img src={specialtyImg} />
                <h3>Cơ xương khớp</h3>
              </div>
            </Slider>
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    isLoggedIn: state.user.isLoggedIn,
    language: state.app.language,
  };
};

const mapDispatchToProps = dispatch => {
  return {
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Specialty);