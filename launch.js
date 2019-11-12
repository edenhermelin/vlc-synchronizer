const {spawn} = require('child_process');

class VLCLaunch {
    constructor(telnetPort, telnetPassword, fileToOpen, onError, onClose, vlcStdout, vlcStderr) {
        if (!telnetPort || !telnetPort) throw new Error('port and password cannot be undefined');
        let args = [
            "--extraintf=telnet",
            `--telnet-password=${telnetPassword}`,
            `--telnet-port=${telnetPort}`,
        ];
        fileToOpen && args.push(fileToOpen);
        if (vlcStdout || vlcStderr) args = args.concat(["--extraintf=logger", "--verbose=2", "--color"]);
        this.process = spawn('C:\\Program Files\\VideoLAN\\VLC\\vlc.exe', args);
        this.process.on('close', (code) => onClose && onClose(code));
        this.process.on('error', (error) => onError && onError(error));
        vlcStderr && this.process.stderr.on('data', (data) => vlcStderr(data.toString()));
        vlcStdout && this.process.stdout.on('data', (data) => vlcStdout(data.toString()));
    }

    kill() {
        this.isAlive() && this.process.kill();
    }

    isAlive() {
        return !!this.process.pid;
    }

    pid() {
       return this.process.pid;
    }
}

module.exports = {VLCLaunch};
