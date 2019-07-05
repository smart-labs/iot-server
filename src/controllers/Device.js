const cloud = require("../../config/knot");

module.exports = {

    async index(req, res) {
        try{
            await cloud.connect();
            
            const devices = await cloud.getDevices();

            res.json(devices);
        } catch (err) {
            error(err);
        } finally {
            await cloud.close();
        }
        
    },

    
}