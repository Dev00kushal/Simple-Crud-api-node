const Item = require("../models/items.model.js");


const getItems = async (__, res) => {
    try {
        const item = await Item.find({});
        res.status(200).json(item);
    } catch (error) {
        res.status(500).json({
            message: error.message,
        })
    }
}

const createItem  =  async (req,res)  => {
    try {
        const createItem = await Item.create(req.body);
        res.status(200).json(createItem)
    } catch (error) {
        res.status(500).json({
            message:error.message
        })
    }
}





module.exports = {
    getItems,
    createItem

}