import PropTypes from 'prop-types';
import React from 'react';

const railOuterStyle = {
    position: 'absolute',
    width: '100%',
    height: 40,
    transform: 'translate(0%, -50%)',
    cursor: 'pointer',
};

const getRailInnerStyle = (order, start, length, color) => ({
    position: 'absolute',
    left: `${start}%`,
    width: `${length}%`,
    height: 8,
    bottom: 10 * (order - 1) + 4,
    transform: 'translate(0%, -50%)',
    borderRadius: 4,
    pointerEvents: 'none',
    backgroundColor: color,
});

export const SliderRail = ({getRailProps, order, start, length, color}) => (
    <>
        <div style={railOuterStyle} {...getRailProps()} />
        <div style={getRailInnerStyle(order, start, length, color)}/>
    </>
);

SliderRail.propTypes = {
    getRailProps: PropTypes.func.isRequired,
    order: PropTypes.number,
    start: PropTypes.number,
    length: PropTypes.number,
    color: PropTypes.string,
};

SliderRail.defaultProps = {
    order: 0,
    start: 0,
    length: 100,
    color: 'grey',
};