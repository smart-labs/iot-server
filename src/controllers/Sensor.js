const cloud = require("../../config/knot");

module.exports = {


    async index(req, res) {

        try{
            
            await cloud.connect();
            const devices = await cloud.getDevices();
            console.log('devices pegos');
            const device = devices.find(device => device.name === req.params.deviceName);
            console.log(device);
            if ( !device ) {
                error(res, 'device_not_found');
            }

            const thing = await cloud.getData(device.id);
            
            res.json(thing);

            // const sensor = thing.filter(
            //     ({ data }) => data.sensor_id === req.body.sensorId
            // );
            //nao agora 
        
        } catch (err) {
            error(err);
        } finally {
            await cloud.close();
        }

    },

    async writeData (req, res) {
        try{

            await cloud.connect();
            await cloud.setData(req.params.deviceId, req.body.data);
            res.json();

        }catch(err){
            error(err);
        }finally{
            cloud.close();
        }
    },
    
}