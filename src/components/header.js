import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment/moment';

const Header = ({date: seconds, header}) => {
    return (
        <div
            style={{
                width: '100%',
                textAlign: 'center',
                fontFamily: 'Arial',
                margin: 5,
            }}
        >
            <b>{header}:</b>
            <div style={{fontSize: 12}}>{moment().startOf('day').seconds(seconds).format('H:mm:ss')}</div>
        </div>
    );
};

Header.propTypes = {
    date: PropTypes.any.isRequired,
    header: PropTypes.string.isRequired,
};
Header.defaultProps = {};

export default Header;
