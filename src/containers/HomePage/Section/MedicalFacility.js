import React, { Component } from 'react';
import { connect } from 'react-redux';
import './MedicalFacility.scss';
import Slider from "react-slick";
import { FormattedMessage } from 'react-intl';

import benhvienhuunghivietduc from "../../../assets/images/benhvienhuunghivietduc.jpg";
import benhvienchoray from "../../../assets/images/benhvienchoray.jpg";
import phongkhambenhviendaihocyduoc1 from "../../../assets/images/phongkhambenhviendaihocyduoc1.jpg";
import benhvienkcosophanchutrinh from "../../../assets/images/benhvienkcosophanchutrinh.jpg";
import benhvienungbuouhungviet from "../../../assets/images/benhvienungbuouhungviet.jpg";
import hethongytethucuctci from "../../../assets/images/hethongytethucuctci.jpg";
import phongkhamdakhoasaigonhealthcare from "../../../assets/images/phongkhamdakhoasaigonhealthcare.jpg";
import benhviennamhocvahienmuonhanoi from "../../../assets/images/benhviennamhocvahienmuonhanoi.jpg";
import benhviendakhoahongphat from "../../../assets/images/benhviendakhoahongphat.jpg";
import benhviendakhoaanviet from "../../../assets/images/benhviendakhoaanviet.jpg";
class MedicalFacility extends Component {

    render() {

        return (
            <div className='section-medical-facility'>
                <div className='section-container'>
                    <div className='section-header'>
                        <span className='title-section'>
                            <FormattedMessage id="homepage.title-medical-facility" />
                        </span>
                        <button className='btn-section'>
                            <FormattedMessage id="homepage.find-more" />
                        </button>
                    </div>
                    <div className='section-body'>
                        <Slider {...this.props.settings}>

                            <div className='section-all'>
                                <div className='section-customize'>
                                    <div className='section-medicalty'>
                                        <img className='image' src={benhvienhuunghivietduc} />
                                        <div className='text-phongkham'>B???nh vi???n h???u ngh??? Vi???t ?????c</div>
                                    </div>
                                </div>
                            </div>

                            <div className='section-all'>
                                <div className='section-customize'>
                                    <div className='section-medicalty'>
                                        <img className='image' src={benhvienchoray} />
                                        <div className='text-phongkham'>B???nh vi???n Ch??? R???y</div>
                                    </div></div>
                            </div>


                            <div className='section-all'>
                                <div className='section-customize'>
                                    <div className='section-medicalty'>
                                        <img className='image' src={phongkhambenhviendaihocyduoc1} />
                                        <div className='text-phongkham'>Ph??ng kh??m b???nh vi???n ?????i H???c Y D?????c 1</div>
                                    </div></div>
                            </div>


                            <div className='section-all'>
                                <div className='section-customize'>
                                    <div className='section-medicalty'>
                                        <img className='image' src={benhvienkcosophanchutrinh} />
                                        <div className='text-phongkham'>B???nh vi???n K - C?? s??? Phan Chu Trinh</div>
                                    </div></div>

                            </div>

                            <div className='section-all'>
                                <div className='section-customize'>
                                    <div className='section-medicalty'>
                                        <img className='image' src={benhvienungbuouhungviet} />
                                        <div className='text-phongkham'>B???nh vi???n Ung b?????u H??ng Vi???t</div>
                                    </div></div>
                            </div>


                            <div className='section-all'>
                                <div className='section-customize'>
                                    <div className='section-medicalty'>
                                        <img className='image' src={hethongytethucuctci} />
                                        <div className='text-phongkham'>H??? th???ng Y t??? Thu C??c TCI</div>
                                    </div></div>
                            </div>


                            <div className='section-all'>
                                <div className='section-customize'>
                                    <div className='section-medicalty'>
                                        <img className='image' src={phongkhamdakhoasaigonhealthcare} />
                                        <div className='text-phongkham'>Ph??ng kh??m ??a khoa Saigon Healthcare</div>
                                    </div></div>
                            </div>


                            <div className='section-all'>
                                <div className='section-customize'>
                                    <div className='section-medicalty'>
                                        <img className='image' src={benhviennamhocvahienmuonhanoi} />
                                        <div className='text-phongkham'>B???nh vi???n Nam h???c v?? Hi???m mu???n H?? N???i</div>
                                    </div></div>
                            </div>


                            <div className='section-all'>
                                <div className='section-customize'>
                                    <div className='section-medicalty'>
                                        <img className='image' src={benhviendakhoahongphat} />
                                        <div className='text-phongkham'>B???nh vi???n ??a khoa H???ng Ph??t</div>
                                    </div></div>

                            </div>

                            <div className='section-all'>
                                <div className='section-customize'>
                                    <div className='section-medicalty'>
                                        <img className='image' src={benhviendakhoaanviet} />
                                        <div className='text-phongkham'>B???nh vi???n ??a khoa An Vi???t</div>
                                    </div></div>
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

export default connect(mapStateToProps, mapDispatchToProps)(MedicalFacility);
