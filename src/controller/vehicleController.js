import Vehicle from '../models/vehicleModel.js';

export const store = async (req, res) => {
    try {
        const vehicle = await Vehicle.create({
            plate:req.body.plate,
            model:req.body.model,
            year:req.body.year,
            owner:req.body.owner,
            maintenances:req.body.maintenances  
    });
        return res.status(201).json(vehicle);
    } catch (error) {
        return res.status(400).json({ message: error.message });
    }
};

export const index = async (req, res) => {
    try {
        const vehicle = await Vehicle.find().exec();
        return res.status(200).json(vehicle);
    } catch (error) {
        return res.status(400).json({ message: error.message });
    }
};

export const update = async (req, res) => {
    try {
        const vehicle = await Vehicle.findByIdAndUpdate(req.params.id, req.body).exec();
        return res.status(200).json(vehicle);
    } catch (error) {
        return res.status(400).json({ message: error.message });
    }
};

export const destroy = async (req, res) => {
    try {
        const vehicle = await Vehicle.findByIdAndDelete(req.params.id).exec();
        return res.status(200).json(vehicle);
    } catch (error) {
        return res.status(400).json({ message: error.message });
    }
};

	
