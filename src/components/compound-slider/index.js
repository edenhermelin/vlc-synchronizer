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

const fromMonolo = {
    wholeLength: 7204,
    videos: [
        {
            length: 3600,
            relativeStartPoint: 1200,
        },
        {
            length: 6541,
            relativeStartPoint: 600,
        },
        {
            length: 6000,
            relativeStartPoint: 100,
        },
        {
            length: 700,
            relativeStartPoint: 2500,
        },
    ],
};

const slidersColors = ['red', 'blue', 'green', 'yellow'];

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

const getRailByPropsGenerator = (monoloData) => ({getRailProps}) => {
    const getPercentFromWholeVideo = (num) => (num / monoloData.wholeLength) * 100;
    return (
        <>
            <SliderRail key={0} getRailProps={getRailProps} order={0}/>
            {
                monoloData.videos.map((video, index) =>
                    <SliderRail getRailProps={getRailProps} order={index + 1} key={index + 1}
                                start={getPercentFromWholeVideo(video.relativeStartPoint)}
                                length={getPercentFromWholeVideo(video.length)}
                                color={slidersColors[index]}/>)
            }
        </>
    );
};

const CompoundSlider = ({min, max, ticks, sliderSteps, onUpdatedChanged, onSelectedChanged}) => {
    const [selected, setSelected] = useState(0);
    const [updated, setUpdated] = useState(0);

    return (
        <div>
            <Header header={'Selected'} date={selected}/>
            <Header header={'Updated'} date={updated}/>
            <div style={{margin: '5%', height: 30, width: '90%'}}>
                <Slider
                    mode={1}
                    step={(max - min) / sliderSteps}
                    domain={[+min, +max]}
                    rootStyle={sliderStyle}
                    onUpdate={([seconds]) => {
                        const rounded = Math.round(seconds);
                        setUpdated(rounded);
                        onUpdatedChanged(rounded);
                    }}
                    onChange={([seconds]) => {
                        const rounded = Math.round(seconds);
                        setSelected(rounded);
                        onSelectedChanged(rounded);
                    }}
                    values={[+selected]}
                >
                    <Rail>
                        {getRailByPropsGenerator(fromMonolo)}
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
    onUpdatedChanged: PropTypes.func,
    onSelectedChanged: PropTypes.func,
};
CompoundSlider.defaultProps = {
    min: 0,
    ticks: 10,
    sliderSteps: 500,
    onUpdatedChanged: () => {
    },
    onSelectedChanged: () => {
    },
};

export default CompoundSlider;
