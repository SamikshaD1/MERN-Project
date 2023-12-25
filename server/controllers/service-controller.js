const Service = require("../models/service-model")

const services = async (req, res) => {
    try {
        const ServiceData = await Service.find();
        if (!ServiceData) {
            res.status(404).json({ msg: "No service found" });
        }
        console.log(ServiceData);
        res.status(200).json({ msg: ServiceData });
    } catch (error) {
        console.log(`service ${error}`);
    }
}

module.exports = services;