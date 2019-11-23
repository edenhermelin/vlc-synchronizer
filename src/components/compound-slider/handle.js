import PropTypes from 'prop-types';
import React from 'react';

export const Handle = ({
                           domain: [min, max],
                           handle: {id, value, percent},
                           disabled,
                           getHandleProps,
                       }) => (
    <div
        role="slider"
        aria-valuemin={min}
        aria-valuemax={max}
        aria-valuenow={value}
        style={{
            left: `${percent}%`,
            position: 'absolute',
            transform: 'translate(-50%, -50%)',
            cursor: 'pointer',
            zIndex: 2,
            width: 20,
            height: 20,
            borderRadius: '50%',
            boxShadow: '1px 1px 1px 1px rgba(0, 0, 0, 0.3)',
            backgroundColor: disabled ? '#666' : '#333',
        }}
        {...getHandleProps(id)}
    />
);

Handle.propTypes = {
    domain: PropTypes.array.isRequired,
    handle: PropTypes.shape({
        id: PropTypes.string.isRequired,
        value: PropTypes.number.isRequired,
        percent: PropTypes.number.isRequired,
    }).isRequired,
    getHandleProps: PropTypes.func.isRequired,
    disabled: PropTypes.bool,
};

Handle.defaultProps = {
    disabled: false,
};