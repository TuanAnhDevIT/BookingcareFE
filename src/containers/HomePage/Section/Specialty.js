import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';


import Slider from 'react-slick';

class Specialty extends Component {

  render() {
    return (
      <div className='section-share section-specialty'>
        <div className='section-container'>
          <div className='section-header'>
            <span className='title-section'>
              <FormattedMessage id="homepage.title-specialty" />
            </span>
            <button className='btn-section'>
              <FormattedMessage id="homepage.more" />
            </button>
          </div>
          <div className='section-body'>
            <Slider {...this.props.settings}>
              <div className='section-customize'>
                <div className='bg-img section-specialty' />

                <div>Cơ xương khớp </div>
              </div>
              <div className='section-customize'>
                <div className='bg-img section-specialty' />
                <div>Da liễu</div>
              </div>
              <div className='section-customize'>
                <div className='bg-img section-specialty' />
                <div>Dị ứng miễn dịch</div>
              </div>
              <div className='section-customize'>
                <div className='bg-img section-specialty' />
                <div>Ngoại thần kinh</div>
              </div>
              <div className='section-customize'>
                <div className='bg-img section-specialty' />
                <div>Nha khoa</div>
              </div>
              <div className='section-customize'>
                <div className='bg-img section-specialty' />
                <div>Nội khoa</div>
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