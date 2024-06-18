const { PreMade, FillUp } = require("../model");

exports.findAllMade = async (req, res) => {

    try {
        const { userid } = req.tokenData;
        const premade = await PreMade.find({ userId: userid }).select("propertyName updatedAt");
        const fillup = await FillUp.find().select("propertyName updatedAt");
        // Create a combined array with type and propertyName
        const combinedData = [
            ...premade.map(item => ({ type: 'premade', propertyName: item.propertyName, _id: item._id ,updatedAt:item.updatedAt })),
            ...fillup.map(item => ({ type: 'fillup', propertyName: item.propertyName, _id: item._id ,updatedAt:item.updatedAt}))
        ];
        combinedData.sort((a, b) => new Date(b.updatedAt) - new Date(a.updatedAt));

        return res.status(201).json({
            message: "Fetch data successfully",
            success: true,
            data: combinedData
        });
    } catch (error) {
        return res.status(500).json({
            message: "Something went wrong",
            success: false,
            error: error.message,
        });
    }

}