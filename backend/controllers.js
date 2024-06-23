const Data = require('./models');

const getData = async (req,res) =>{
    try {
        const data = await Data.find();
        res.json(data);
    } catch (error) {
        res.status(500).json({message: error.message});
        
    }
};

const addData = async (req,res) =>{
    const {value, timestamp} = req.body;
    const newData = new Data({value,timestamp});
    try {
        await newData.save();
        res.status(201).json(newData);
    } catch (error) {
        res.status(400).json({message: error.message});
    }
}
module.exports ={getData,addData};