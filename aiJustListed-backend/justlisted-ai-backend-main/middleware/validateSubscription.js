module.exports = {
    validateSubscription: (req, res, next) => {
        const { subscription } = req.body;
        if (subscription === "free" || subscription === "premium") {
            next();
        } else {
            return res.status(400).json({
                success: false,
                error: "Invalid subscription type"
            });
        }
    }   
};
