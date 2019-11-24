import React, { useState } from 'react';
import { scaleLinear } from 'd3-scale';
import PropTypes from 'prop-types';
import moment from 'moment';
import Header from '../header';
import { Handles, Rail, Slider, Ticks, Tracks } from 'react-compound-slider';
import { Handle } from './handle';
import { SliderRail } from './slider-rail';
import { Tick } from './tick';
import { Track } from './track';

const sliderStyle = {
    position: 'relative',
    width: '100%',
};

const formatTick = (seconds) => moment().startOf('day').seconds(seconds).format('HH:mm:ss');

const getTickValues = (min, max, ticks) => {
    const scale = scaleLinear().domain([min, max]).range([min, max]).nice().ticks(ticks);
    // remove the first tick (0) and last (end of video)
    return scale.slice(1, scale.length - 1);
};

const CompoundSlider = ({min, max, ticks, sliderSteps, onUpdatedChanged, onSelectedChanged}) => {
    const [selected, setSelected] = useState(0);
    const [updated, setUpdated] = useState(0);

    return (
        <div>
            <Header header={'Selected'} date={selected}/>
            <Header header={'Updated'} date={updated}/>
            <div style={{margin: '5%', height: 120, width: '90%'}}>
                <Slider
                    mode={1}
                    step={(max - min) / sliderSteps}
                    domain={[+min, +max]}
                    rootStyle={sliderStyle}
                    onUpdate={([seconds]) => setUpdated(seconds)}
                    onChange={([seconds]) => setSelected(seconds)}
                    values={[+selected]}
                >
                    <Rail>
                        {({getRailProps}) => <SliderRail getRailProps={getRailProps}/>}
                    </Rail>
                    <Handles>
                        {({handles, getHandleProps}) => (
                            <div>
                                {handles.map(handle => (
                                    <Handle
                                        key={handle.id}
                                        handle={handle}
                                        domain={[+min, +max]}
                                        getHandleProps={getHandleProps}
                                    />
                                ))}
                            </div>
                        )}
                    </Handles>
                    <Tracks right={false}>
                        {({tracks, getTrackProps}) => (
                            <div>
                                {tracks.map(({id, source, target}) => (
                                    <Track
                                        key={id}
                                        source={source}
                                        target={target}
                                        getTrackProps={getTrackProps}
                                    />
                                ))}
                            </div>
                        )}
                    </Tracks>
                    <Ticks values={getTickValues(min, max, ticks)}>
                        {({ticks}) => (
                            <div>
                                {ticks.map(tick => (
                                    <Tick
                                        key={tick.id}
                                        tick={tick}
                                        count={ticks.length}
                                        format={formatTick}
                                    />
                                ))}
                            </div>
                        )}
                    </Ticks>
                </Slider>
            </div>
        </div>
    );
};

CompoundSlider.propTypes = {
    min: PropTypes.number,
    max: PropTypes.number.isRequired,
    ticks: PropTypes.number,
    sliderSteps: PropTypes.number,
};
CompoundSlider.defaultProps = {
    min: 0,
    ticks: 10,
    sliderSteps: 500,
};

export default CompoundSlider;
