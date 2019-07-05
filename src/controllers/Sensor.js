const cloud = require("../../config/knot");

module.exports = {


    async index(req, res) {

        try{
            
            await cloud.connect();
            const devices = await cloud.getDevices();
            const device = devices.find(device => device.name === req.params.deviceName);

            if ( !device ) {
                error(res, 'device_not_found');
            }

            const thing = await cloud.getData(device.id);
            const sensor = thing.filter(
                ({ data }) => data.sensor_id === req.body.sensorId
            );

            if (!sensor) {
                error(res, 'sensor_not_found');
            }

            return sensor;
        
        } catch (err) {
            error(err);
        } finally {
            await cloud.close();
        }

    },
    
}