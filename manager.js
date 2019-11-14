const {VLCClientInstance} = require('./vlc-client-instance');
const {VLCLauncher} = require('./vlc-launcher');
const {logger} = require('./logger');
const config = require('./config');

const telnetPassword = config.telnetPassword;
let lastPortInUsed = config.startPort;
let vlcId = 1;
const vlcProcesses = {};
const vlcClients = {};
const openNewVlc = async (file) => {
    let port = lastPortInUsed++;
    const id = vlcId++;
    const vlcProcess = new VLCLauncher(
        port,
        telnetPassword,
        file,
        (error) => logger.error(`vlc with id:${id} throw error:`, error.stack || error.toString()),
        (code) => {
            logger.warn(`vlc process with vlc id:${id} closed with code${code}`);
            delete vlcClients[id];
        }
    );

    logger.info(`open vlc with id:${id} on port: ${port} with password:${telnetPassword} with file: ${file}`);
    const telnetInstance = new VLCClientInstance(port, telnetPassword);
    await telnetInstance.init();
    logger.info(`connect to vlc with id:${id} on port: ${port} with password: ${telnetPassword}`);
    vlcProcesses[id] = vlcProcess;
    vlcClients[id] = telnetInstance;
    return telnetInstance;
};

const pauseAll = async () => {
    return Promise.all(Object.values(vlcClients).map(vlcClient => vlcClient.pause()))
};

const playAll = async () => {
    return Promise.all(Object.values(vlcClients).map(vlcClient => vlcClient.play()))
};

const stopAll = async () => {
    return Promise.all(Object.values(vlcClients).map(vlcClient => vlcClient.stop()))
};
const seekAll = async (time) => {
    return Promise.all(Object.values(vlcClients).map(vlcClient => vlcClient.seek(time)))
};