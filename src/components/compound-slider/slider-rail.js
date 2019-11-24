import PropTypes from 'prop-types';
import React from 'react';

const railOuterStyle = {
    position: 'absolute',
    width: '100%',
    height: 40,
    transform: 'translate(0%, -50%)',
    cursor: 'pointer',
};

const railInnerStyle = {
    position: 'absolute',
    width: '100%',
    height: 8,
    transform: 'translate(0%, -50%)',
    borderRadius: 4,
    pointerEvents: 'none',
    backgroundColor: 'rgb(155,155,155)',
};

export const SliderRail = ({getRailProps}) => (
    <>
        <div style={railOuterStyle} {...getRailProps()} />
        <div style={railInnerStyle}/>
    </>
);

SliderRail.propTypes = {
    getRailProps: PropTypes.func.isRequired,
};