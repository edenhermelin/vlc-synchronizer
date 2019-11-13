let VLCTelnetClient = require('./vlc-telnet-client').VLCTelnetClient;

// Describes a single VLC instance with telnet API included.
class VLCClientInstance extends VLCTelnetClient {

    constructor(telnetPort, password) {
        super();
        this.telnetConnection = new VLCTelnetClient();
        this.telnetConnection.init(telnetPort, password);
        this.playingStatus = setInterval(() => {
            this.playingStatus = this.getPlayingStatus();
        },500);

        this.currentVideoTime = setInterval(() => {
            this.currentVideoTime = this.getTime();
        },500);
    }
    async pause() {
        let res = await this.telnetConnection.send('pause');
        return res;
    }

    async onPause() {

    }

    async play() {
        let res = await this.telnetConnection.send('play');
        return res;
    }

    async onPlay() {

    }

    async getTime() {
        let res = await this.telnetConnection.send('get_time');
        return res;
    }

    async seek(timeToSeek) {
        let res = await this.telnetConnection.send(`seek ${timeToSeek}`);
        return res;
    }

    async getStreamLength() {
        let res = await this.telnetConnection.send('get_length');
        return res;
    }

    // Checks whether the video is playing / paused.
    // 1 - Stream is playing
    // 0 - Otherwise
    async getPlayingStatus() {
        let res = await this.telnetConnection.send('is_playing');
        return res;
    }

}

module.exports = {VLCClientInstance};

// let a = new VLCClientInstance(4212, 1234);
//
// let res = a.init(4212, 1234);
//
// async function f() {
//     await res;
//     return res;
//
// }
//
// f();
