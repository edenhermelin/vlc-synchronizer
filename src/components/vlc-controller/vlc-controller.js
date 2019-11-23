import React, { useState } from 'react';
import CompoundSlider from '../compound-slider';
import { Button, Input } from 'semantic-ui-react';

const {ipcRenderer} = window.require('electron');

const VlcController = () => {
    const [jumpBy, setJumpBy] = useState();
    const onJumpByChange = (e) => {
        console.log(e.target.value);
        const parsed = parseInt(e.target.value);
        if (!isNaN(parsed)) {
            setJumpBy(parsed);
        }
    };
    return (
        <>
            <CompoundSlider min={0} max={7402} onUpdatedChanged={(seconds) => setJumpBy(seconds)}/>
            <Button icon='add' onClick={() => ipcRenderer.send('vlc')}/>
            <Button icon="play" onClick={() => ipcRenderer.send('play')}/>
            <Button icon="pause" onClick={() => ipcRenderer.send('pause')}/>
            <Input acton={{
                labelPosition: 'left',
                content: 'Jump',
                onclick: onJumpByChange,
            }} value={jumpBy} onChange={onJumpByChange} type="number"/>
            <Button onClick={() => ipcRenderer.send('jump', jumpBy)}>jump</Button>
            <Button onClick={() => ipcRenderer.send('sync')}>sync</Button>
        </>
    );
};

VlcController.propTypes = {};
VlcController.defaultProps = {};

export default VlcController;
