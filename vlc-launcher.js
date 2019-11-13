const {spawn} = require('child_process');
const config  = require('config');
class VLCLauncher {
    constructor(telnetPort, telnetPassword, fileToOpen, onError, onClose, vlcStdout, vlcStderr) {
        if (!telnetPort || !telnetPassword) throw new Error('port and password cannot be undefined');
        let args = [
            "--extraintf=telnet",
            `--telnet-password=${telnetPassword}`,
            `--telnet-port=${telnetPort}`,
        ];
        if (vlcStdout || vlcStderr) args = args.concat(["--extraintf=logger", "--verbose=2", "--color"]);
        fileToOpen && args.push(fileToOpen);
        this.process = spawn(config.VLCPath, args);
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

module.exports = {VLCLauncher};
