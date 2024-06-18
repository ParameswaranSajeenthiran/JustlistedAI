const { FillUp } = require("../model");
const axios = require('axios');
const { validateSubscriptionForGeneratePremadeSummary } = require("../utils/utils");

exports.generateFillUpSummary = async (req, res) => {
    try {
        const { userid } = req.tokenData;
        const {
            propertyName,
            textLimit,
            language,
            projectName,
            location,
            propertyType,
            status,
            price,
            floorArea,
            bedRoomNodes,
            kitchenNotes,
            bathRoomNotes,
            additionalNotes,
            purpose,
        } = req.body;


        if(validateSubscriptionForGeneratePremadeSummary(userid) === false){
            return res.status(403).json({
                message: "You have reached your limit for generating premade summary",
                success: false,
            });
        }

        const prompt = `Summarize the property listing for ${propertyName} located in ${location}. This ${propertyType} is currently in ${status} condition and is available for ${purpose}. The ${propertyType} has ${bedRoomNodes} bedrooms and offers a total floor area of ${floorArea} square feet. The kitchen features ${kitchenNotes}, and the bathroom includes ${bathRoomNotes}. Additional notes: ${additionalNotes}. This property is part of the ${projectName} project. The price is ${price}. Provide a summary in ${language} with a character limit of ${textLimit}.`;



        const headers = {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${process.env.GPT_API_KEY}`
        };

        const data = {
            prompt: prompt,
            max_tokens: 150,
            temperature: 0.7,
        };
        const response = await axios.post(process.env.GPT_API_URL, data, { headers: headers });


        FillUp.create({
            userId: userid,
            propertyName,
            textLimit,
            language,
            projectName,
            location,
            propertyType,
            status,
            price,
            floorArea,
            bedRoomNodes,
            kitchenNotes,
            bathRoomNotes,
            additionalNotes,
            purpose,
            generateSummary: response.data.choices[0].text
        }).then((result) => {
            return res.status(201).json({
                message: "fetch data successfully",
                success: true,
                data: result,
                summary: result.generateSummary,
                id: result._id
            });
        }).catch((e) => {
            return res.status(500).json({
                message: "Something went wrong",
                success: false,
                error: e.message,
            });
        })
    } catch (error) {
        return res.status(500).json({
            message: "Something went wrong",
            success: false,
            error: error.message,
        });
    }
};

exports.reGenerateFillUpSummary = async (req, res) => {
    try {
        // const { propertyName, premadeList, textLimit, language } = req.body;
        const { fillupid } = req.headers;
        const { userid } = req.tokenData;

        const fillup = await FillUp.findById(fillupid);

        const prompt = `Summarize the property listing for ${fillup.propertyName} located in ${fillup.location}. This ${fillup.propertyType} is currently in ${fillup.status} condition and is available for ${fillup.purpose}. The ${fillup.propertyType} has ${fillup.bedRoomNodes} bedrooms and offers a total floor area of ${fillup.floorArea} square feet. The kitchen features ${fillup.kitchenNotes}, and the bathroom includes ${fillup.bathRoomNotes}. Additional notes: ${fillup.additionalNotes}.  The price is ${fillup.price}. Provide a summary in ${fillup.language} with a character limit of ${fillup.textLimit}.`;

        const headers = {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${process.env.GPT_API_KEY}`
        };

        const data = {
            prompt: prompt,
            max_tokens: 150,
            temperature: 0.7,
        };
        const response = await axios.post(process.env.GPT_API_URL, data, { headers: headers });

        FillUp.findByIdAndUpdate(fillupid, { regenerateSummary: response.data.choices[0].text, $inc: { regenerationCount: 1 } }, { new: true }).then((result) => {
            return res.status(201).json({
                message: "fetch data successfully",
                success: true,
                data: result,
                regenerateSummary: result.regenerateSummary,
            });
        }).catch((e) => {
            return res.status(500).json({
                message: "Something went wrong",
                success: false,
                error: e.message,
            });
        })


    } catch (error) {
        return res.status(500).json({
            message: "Something went wrong",
            success: false,
            error: error.message,
        });
    }
};

exports.fillupCaption = async (req, res) => {
    try {
        const { regenerate } = req.body;
        const { fillupid } = req.headers;

        // Define common data and headers for the API request
        const data = {
            max_tokens: 150,
            temperature: 0.7,
        };

        const headers = {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${process.env.GPT_API_KEY}`
        };

        const fillup = await FillUp.findById(fillupid);

        if (!fillup) {
            return res.status(404).json({
                message: "Premade not found",
                success: false,
            });
        }

        data.prompt = regenerate
            ? `${fillup.regenerateSummary} create social media captions for this sentence`
            : `${fillup.generateSummary} create social media captions for this sentence`;

        const response = await axios.post(process.env.GPT_API_URL, data, { headers });

        const updatedFillup = await FillUp.findByIdAndUpdate(fillupid, { socialMediaCaption: response.data.choices[0].text }, { new: true });

        return res.status(201).json({
            message: "Data fetched and updated successfully",
            success: true,
            data: updatedFillup,
            caption: updatedFillup.socialMediaCaption,

        });
    } catch (error) {
        return res.status(500).json({
            message: "Something went wrong",
            success: false,
            error: error.message,
        });
    }
};
exports.findFillupById = async (req, res) => {
    try {
        const { fillupid } = req.headers;
        const fillup = await FillUp.findById(fillupid)
        return res.status(201).json({
            message: "Data fetched and updated successfully",
            success: true,
            data: fillup,

        });
    } catch (error) {
        return res.status(500).json({
            message: "Something went wrong",
            success: false,
            error: error.message,
        });
    }
};
exports.generateupdateFillUpSummary = async (req, res) => {
    try {
        const { userid } = req.tokenData;
        const { fillupid } = req.headers;

        const {
            propertyName,
            textLimit,
            language,
            projectName,
            location,
            propertyType,
            status,
            price,
            floorArea,
            bedRoomNodes,
            kitchenNotes,
            bathRoomNotes,
            additionalNotes,
            purpose,
        } = req.body;
        const prompt = `Summarize the property listing for ${propertyName} located in ${location}. This ${propertyType} is currently in ${status} condition and is available for ${purpose}. The ${propertyType} has ${bedRoomNodes} bedrooms and offers a total floor area of ${floorArea} square feet. The kitchen features ${kitchenNotes}, and the bathroom includes ${bathRoomNotes}. Additional notes: ${additionalNotes}. . The price is ${price}. Provide a summary in ${language} with a character limit of ${textLimit}.`;

        const headers = {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${process.env.GPT_API_KEY}`
        };

        const data = {
            prompt: prompt,
            max_tokens: 150,
            temperature: 0.7,
        };
        const response = await axios.post(process.env.GPT_API_URL, data, { headers: headers });


        FillUp.findByIdAndUpdate({
          _id:fillupid
        }, {
            propertyName,
            textLimit,
            language,
            projectName,
            location,
            propertyType,
            status,
            price,
            floorArea,
            bedRoomNodes,
            kitchenNotes,
            bathRoomNotes,
            additionalNotes,
            purpose,
            generateSummary: response.data.choices[0].text,
            regenerateSummary:"",
            socialMediaCaption:""
        }, {
            new: true
        }).then((result) => {
            return res.status(201).json({
                message: "fetch data successfully",
                success: true,
                data: result,
                summary: result.generateSummary,
                id: result._id
            });
        }).catch((e) => {
            return res.status(500).json({
                message: "Something went wrong",
                success: false,
                error: e.message,
            });
        })
    } catch (error) {
        return res.status(500).json({
            message: "Something went wrong",
            success: false,
            error: error.message,
        });
    }
};