import React, { Component } from 'react';
import { connect } from 'react-redux';
import './HandBook.scss';
import Slider from "react-slick";
import bacsi10 from "../../../assets/images/bacsi10.jpg";
import benhvien7 from "../../../assets/images/benhvien7.jpg";
import bacsithan10 from "../../../assets/images/bacsithan10.jpg";
import bacsi9 from "../../../assets/images/bacsi9.jpg";
import bacsi7 from "../../../assets/images/bacsi7.jpg";
import diachi7 from "../../../assets/images/diachi7.jpg";
import diemtest5 from "../../../assets/images/diemtest5.jpg";
import diachi5 from "../../../assets/images/diachi5.png";
import reviewchitiet from "../../../assets/images/reviewchitiet.png";
import luungay5 from "../../../assets/images/luungay5.png";
import { FormattedMessage } from 'react-intl';

class HandBook extends Component {

    render() {
        let settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 2,
            slidesToScroll: 2,
            // nextArrow: <SampleNextArrow/>,
            // prevArrow: <SamplePrevArrow/>
        };
        return (

            <div className='section-handbook-all'>
                <div className='section-container'>
                    <div className='section-header'>
                        <span className='title-section'>
                            <FormattedMessage id="homepage.handbook" />
                        </span>
                        <button className='btn-section'>
                            <FormattedMessage id="homepage.all-posts" />
                        </button>
                    </div>
                    <div className='section-body'>
                        <Slider {...this.props.settings}>
                            <div className='section-all'>
                                <div className='section-customize'>
                                    <div className='section-handbook'>
                                        <img className='image' src={bacsi10} />
                                        <div className='text-handbook'><b>10 B??c s?? C?? x????ng kh???p gi???i t???i H?? N???i</b></div>
                                    </div>
                                </div>
                            </div>

                            <div className='section-all'>
                                <div className='section-customize'>
                                    <div className='section-handbook'>
                                        <img className='image' src={benhvien7} />
                                        <div className='text-handbook'><b>7 b???nh vi???n, ph??ng kh??m C?? x????ng kh???p uy t??n ??? H?? N???i</b></div>
                                    </div>
                                </div>
                            </div>

                            <div className='section-all'>
                                <div className='section-customize'>
                                    <div className='section-handbook'>
                                        <img className='image' src={bacsithan10} />
                                        <div className='text-handbook'><b>10 b??c s?? Th???n kinh gi???i v?? nhi???u kinh nghi???m ??? H?? N???i</b></div>
                                    </div>
                                </div>
                            </div>

                            <div className='section-all'>
                                <div className='section-customize'>
                                    <div className='section-handbook'>
                                        <img className='image' src={bacsi9} />
                                        <div className='text-handbook'><b>9 b??c s?? kh??m ch???a Tim m???ch gi???i t???i H?? N???i</b></div>
                                    </div>
                                </div>
                            </div>

                            <div className='section-all'>
                                <div className='section-customize'>
                                    <div className='section-handbook'>
                                        <img className='image' src={bacsi7} />
                                        <div className='text-handbook'><b>7 b??c s?? C???t s???ng gi???i v?? nhi???u kinh nghi???m t???i H?? N???i</b></div>
                                    </div>
                                </div>
                            </div>

                            <div className='section-all'>
                                <div className='section-customize'>
                                    <div className='section-handbook'>
                                        <img className='image' src={diachi7} />
                                        <div className='text-handbook'><b>7 ?????a ch??? x??t nghi???m, test nhanh Covid-19 t???t t???i TP.HCM</b></div>
                                    </div>
                                </div>
                            </div>

                            <div className='section-all'>
                                <div className='section-customize'>
                                    <div className='section-handbook'>
                                        <img className='image' src={diemtest5} />
                                        <div className='text-handbook'><b>5 ??i???m Test nhanh Covid-19 uy t??n ??? H?? N???i</b></div>
                                    </div>
                                </div>
                            </div>

                            <div className='section-all'>
                                <div className='section-customize'>
                                    <div className='section-handbook'>
                                        <img className='image' src={diachi5} />
                                        <div className='text-handbook'><b>5 ?????a ch??? Nha khoa uy t??n v???i ?????i ng?? b??c s?? tr??n 10 n??m kinh nghi???m t???i TP.HCM</b></div>
                                    </div>
                                </div>
                            </div>

                            <div className='section-all'>
                                <div className='section-customize'>
                                    <div className='section-handbook'>
                                        <img className='image' src={reviewchitiet} />
                                        <div className='text-handbook'><b>Review chi ti???t 5 b???nh vi???n, ph??ng kh??m Tai m??i h???ng Th??? ?????c uy t??n</b></div>
                                    </div>
                                </div>
                            </div>

                            <div className='section-all'>
                                <div className='section-customize'>
                                    <div className='section-handbook'>
                                        <img className='image' src={luungay5} />
                                        <div className='text-handbook'><b>L??u ngay 5 Ph??ng kh??m Tai m??i h???ng G?? V???p c?? b??c s?? gi???i, uy t??n</b></div>
                                    </div>
                                </div>
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
        isLoggedIn: state.user.isLoggedIn
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(HandBook);
