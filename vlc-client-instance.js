const {VLCTelnetClient} = require('./vlc-telnet-client');

// Describes a single VLC instance with telnet API included.
class VLCClientInstance extends VLCTelnetClient {

    constructor(port, password, ip = "127.0.0.1") {
        super(port, password, ip);
    }

    async init() {
        await super.init();
    }

    async pause() {
        return this.send('pause');
    }

    async play() {
        return this.send('play');
    }

    async stop() {
        return this.send('stop')
    }

    async getTime() {
        return this.send('get_time');
    }

    async seek(timeToSeek) {
        return this.send(`seek ${timeToSeek}`);
    }

    async getStreamLength() {
        return this.send('get_length');
    }

    async getVlcStatus() {
        const status = await this.send('status');
        let isPlaying = this._isPlayingFromStatus(status);
        return {isPlaying}
    }

    _isPlayingFromStatus(status) {
        const state = status.match(/\( state (.*) \)/)[1];
        if (state === "paused" || state === "stopped") {
            return false;
        } else if (state === "playing") {
            return true;
        } else {
            throw new Error('state result from vlc telnet not match playing or paused')
        }
    }

}

module.exports = {VLCClientInstance};
