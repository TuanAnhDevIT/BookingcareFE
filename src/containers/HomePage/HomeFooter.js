import React, { Component } from 'react';
import { connect } from 'react-redux';
import './HomeFooter.scss';

import Slider from "react-slick";
class HomeFooter extends Component {

    render() {

        return (
            <div className='home-footer'>
                <p>&copy; 2022 TuanAnhDEV. More infomation.Please visit my github.
                    <a target='blank' href='https://github.com/TuanAnhDevIT'>
                        &#8594; Click here	&#8592; </a></p>
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

export default connect(mapStateToProps, mapDispatchToProps)(HomeFooter);
