import PropTypes from 'prop-types';
import React from 'react';

export const Track = ({source, target, getTrackProps, disabled}) => (
    <div
        style={{
            position: 'absolute',
            transform: 'translate(0%, -50%)',
            height: 8,
            zIndex: 1,
            backgroundColor: 'red',
            borderRadius: 4,
            cursor: 'pointer',
            left: `${source.percent}%`,
            width: `${target.percent - source.percent}%`,
        }}
        {...getTrackProps()}
    />
);

Track.propTypes = {
    source: PropTypes.shape({
        id: PropTypes.string.isRequired,
        value: PropTypes.number.isRequired,
        percent: PropTypes.number.isRequired,
    }).isRequired,
    target: PropTypes.shape({
        id: PropTypes.string.isRequired,
        value: PropTypes.number.isRequired,
        percent: PropTypes.number.isRequired,
    }).isRequired,
    getTrackProps: PropTypes.func.isRequired,
    disabled: PropTypes.bool,
};

Track.defaultProps = {
    disabled: false,
};