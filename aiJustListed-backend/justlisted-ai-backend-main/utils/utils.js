
const { User } = require("../model");
const { PreMade } = require('../model');
const { FillUp } = require("../model");

const currentDate = new Date();

const startOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1).toISOString();

// Set the end of the month
const endOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0, 23, 59, 59, 999).toISOString();
console.log("startOfMonth is " + startOfMonth)
console.log("endOfMonth is " + endOfMonth)
exports.validateSubscriptionForGeneratePremadeSummary = async (userID) => {

    console.log("userID is " + userID)
    const user = await User.findOne({  _id: userID }).then((result) => {
        console.log("result is " + result)
        return result;
    }).catch((e) => {   
        console.log("error is " + e)
        return e;
    });

    if(user.subscription === "Professional"){
        
        // get premade count for this user
        const premadeCount = await PreMade.find({userId:userID ,createdAt: {
            $gte: startOfMonth,
            $lt: endOfMonth
          }}).countDocuments();

          // get fillup count for this user

            const fillupCount = await FillUp.find({userId:userID ,createdAt: {
                $gte: startOfMonth,
                $lt: endOfMonth
                }}).countDocuments();

                console.log("premadeCount is " + premadeCount)
                console.log("fillupCount is " + fillupCount)
                console.log("total is " + (premadeCount + fillupCount))

        if((premadeCount + fillupCount) >= 5){
            console.log("line 46")
            return false;
        }
        console.log("line 47")

    }else if(user.subscription === "Free"){
        // get premade count for this user
        const premadeCount = await PreMade.find({userID:userID ,createdAt: {
            $gte: startOfMonth,
            $lt: endOfMonth
          }}).countDocuments();
          const fillupCount = await FillUp.find({userID:userID ,createdAt: {
            $gte: startOfMonth,
            $lt: endOfMonth
            }}).countDocuments();

        if((premadeCount + fillupCount) >= 1){
            return false;
        }
    }else if(user.subscription === "Gold"){
        // get premade count for this user
        const premadeCount = await PreMade.find({userID:userID ,createdAt: {
            $gte: startOfMonth,
            $lt: endOfMonth
          }}).countDocuments();
          const fillupCount = await FillUp.find({userID:userID ,createdAt: {
            $gte: startOfMonth,
            $lt: endOfMonth
            }}).countDocuments();

        if((premadeCount + fillupCount) >= 15){
            return false;
        }
    }else if (user.subscription === "Platinum"){
        // get premade count for this user
        const premadeCount = await PreMade.find({userID:userID ,createdAt: {
            $gte: startOfMonth,
            $lt: endOfMonth
          }}).countDocuments();
          const fillupCount = await FillUp.find({userID:userID ,createdAt: {
            $gte: startOfMonth,
            $lt: endOfMonth
            }}).countDocuments();

        if((premadeCount + fillupCount) >= 30){
            return false;
        }
    }

return true;

}