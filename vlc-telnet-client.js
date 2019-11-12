const Telnet = require('telnet-client');

class VLCTelnetClient {
    constructor() {
        this.connection = new Telnet();
        this.isInitialyezed = false;
    }

    async init(port, password, ip = "127.0.0.1") {
        if (!port || !password) {
            throw new Error('should send port and password');
        }
        const params = {
            host: ip,
            port,
            password,
            timeout: 0,
            passwordPrompt: 'Password: ',
            shellPrompt: '> '
        };

        const ready = new Promise(resolve => this.connection.on('ready', resolve));
        await this.connection.connect(params);
        await ready;
        this.isInitialyezed = true;
    }

    async send(cmd) {
        if (!this.isInitialyezed) {
            throw new Error('invoke init before send');
        }
        let res = await this.connection.send(cmd, {waitfor: "\r\n> "});
        return res.replace('\r\n> ', "");
    }
}

module.exports = {VLCTelnetClient};
