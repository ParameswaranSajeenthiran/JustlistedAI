const axios = require('axios');
const { PreMade } = require('../model');
const { validateSubscriptionForGeneratePremadeSummary } = require('../utils/utils');

exports.generatePremadeSummary = async (req, res) => {

    console.log("prepare premade summary")
    try {
        const { propertyName, premadeList, textLimit, language } = req.body;
        const { userid } = req.tokenData;
        const isSubscriptionValid = await validateSubscriptionForGeneratePremadeSummary(userid);
        console.log("isSubscriptionValid is " + isSubscriptionValid)
        if(isSubscriptionValid === false){

            console.log("prepare premade summary 2")
            return res.status(403).json({
                message: "You have reached your limit for generating premade summary",
                success: false,
            });
        }



        const headers = {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${process.env.GPT_API_KEY}`
        };
        const data = {
            prompt: `propertyName is ${propertyName} and ${premadeList} summarice this sentence with ${textLimit} character in ${language}`,
            max_tokens: 150,
            temperature: 0.7,
        };
        
         axios.post(process.env.GPT_API_URL, data, { headers: headers }).then((response) => {
            console.log("result is " + response)

            
            PreMade.create({
                userId: userid,
                propertyName: propertyName,
                premadeList: premadeList,
                textLimit: textLimit,
                language: language,
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
        }).catch((e) => {
           console.log("error is " + e)
           return res.status(500).json({
            message: "Something went wrong",
            success: false,
            error: e.message,
        });
        });



    } catch (error) {
        return res.status(500).json({
            message: "Something went wrong",
            success: false,
            error: error.message,
        });
    }
    // 779606747
    // rent room (rosini)
};
exports.reGeneratePremadeSummary = async (req, res) => {
    try {
        // const { propertyName, premadeList, textLimit, language } = req.body;
        const { premadeid } = req.headers;
        const { userid } = req.tokenData;

        const premadeData = await PreMade.findById(premadeid);
        const headers = {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${process.env.GPT_API_KEY}`
        };

        const data = {
            prompt: `propertyName is ${premadeData.propertyName} and ${premadeData.premadeList} summarice this sentence with ${premadeData.textLimit} character in ${premadeData.language}`,
            max_tokens: 150,
            temperature: 0.7,
        };
        const response = await axios.post(process.env.GPT_API_URL, data, { headers: headers });

        PreMade.findByIdAndUpdate(premadeid, { regenerateSummary: response.data.choices[0].text ,$inc: { regenerationCount: 1 }  }, { new: true }).then((result) => {
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
exports.premadeCaption = async (req, res) => {
    try {
        const { regenerate } = req.body;
        const { premadeid } = req.headers;

        // Define common data and headers for the API request
        const data = {
            max_tokens: 150,
            temperature: 0.7,
        };

        const headers = {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${process.env.GPT_API_KEY}`
        };

        const premade = await PreMade.findById(premadeid);

        if (!premade) {
            return res.status(404).json({
                message: "Premade not found",
                success: false,
            });
        }

        data.prompt = regenerate
            ? `${premade.regenerateSummary} create social media captions for this sentence`
            : `${premade.generateSummary} create social media captions for this sentence`;

        const response = await axios.post(process.env.GPT_API_URL, data, { headers });

        const updatedPremade = await PreMade.findByIdAndUpdate(premadeid, { socialMediaCaption: response.data.choices[0].text }, { new: true });

        return res.status(201).json({
            message: "Data fetched and updated successfully",
            success: true,
            data: updatedPremade,
            caption: updatedPremade.socialMediaCaption,
        });
    } catch (error) {
        return res.status(500).json({
            message: "Something went wrong",
            success: false,
            error: error.message,
        });
    }
};

exports.findPremadeById = async (req, res) => {
    try {
        const { premadeid } = req.headers;
        const premade = await PreMade.findById(premadeid)
        return res.status(201).json({
            message: "Data fetched and updated successfully",
            success: true,
            data: premade,

        });
    } catch (error) {
        return res.status(500).json({
            message: "Something went wrong",
            success: false,
            error: error.message,
        });
    }
};
exports.generateUpdatePremadeSummary = async (req, res) => {
    try {
        const { propertyName, premadeList, textLimit, language } = req.body;
        const { premadeid } = req.headers;

        const { userid } = req.tokenData;
        const headers = {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${process.env.GPT_API_KEY}`
        };
        const data = {
            prompt: `propertyName is ${propertyName} and ${premadeList} summarice this sentence with ${textLimit} character in ${language}`,
            max_tokens: 150,
            temperature: 0.7,
        };
        const response = await axios.post(process.env.GPT_API_URL, data, { headers: headers });
        PreMade.findByIdAndUpdate(
            { _id: premadeid },
            {
                propertyName: propertyName,
                premadeList: premadeList,
                textLimit: textLimit,
                language: language,
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
    // 779606747
    // rent room (rosini)
};