const { User } = require("../model");
const bcrypt = require('bcrypt');
const { createToken } = require("../middleware/token");
const path = require("path")
const fs = require("fs");
const { sign, verify } = require("jsonwebtoken");
const { sendLinkByMail } = require("../services/sendLinkByMail");
exports.signUp = async (req, res) => {
    try {
        const { userName, password, email } = req.body;
        const user = await User.findOne({ email: email });
        if (user) {
            return res.status(200).json({
                message: "user already exists",
                success: false,
            });
        }
        const saltRounds = 10;
        const hashedPassword = await bcrypt.hash(password, saltRounds);
        const token = sign({ email: email }, "A?D(G+KbPdSgVkYp3s6v9y$B&E)H@Mc")

        sendLinkByMail(email, token)
        const createdUser = await User.create({ email, userName, password: hashedPassword,token:token });
        const jsonToken = createToken(email, createdUser._id);
        return res.status(201).json({
            message: "User created successfully",
            success: true,
            token: jsonToken,
            userName: createdUser.userName,
        });
    } catch (error) {
        return res.status(500).json({
            message: "Something went wrong",
            success: false,
            error: error.message,
        });
    }
};
exports.logIn = async (req, res) => {
    try {
        const { password, email } = req.body;
        const user = await User.findOne({ email: email });
        if (!user) {
            return res.status(404).json({
                message: "invalid user",
                success: false,
                error: "user Not Found",
            });
        }

        const passwordMatch = await bcrypt.compare(password, user.password);

        if (!passwordMatch) {
            return res.status(401).json({
                message: "Invalid credentials",
                success: false,
            });
        }

        const jsonToken = createToken(email, user._id);
        user.password = undefined
        return res.status(200).json({
            message: "Login successful",
            success: true,
            token: jsonToken,
            userName: user.userName,
            userImage: user.userImage,
        });
    } catch (error) {
        return res.status(500).json({
            message: "Something went wrong",
            success: false,
            error: error.message,
        });
    }
};
exports.emailValidate = async (req, res) => {
    try {
        const { token } = req.body;
        const email = verify(token, "A?D(G+KbPdSgVkYp3s6v9y$B&E)H@Mc")
        console.log(email);


        const checkUser = await User.findOneAndUpdate({ email: email.email }, { token: "", emailIsValid: true })

        if (!checkUser) {
            res.status(200).json({
                message: "invalid token",
                success: true,
            });
        } else {
            return res.status(200).json({
                message: "Email find successfully",
                success: true,
                data: checkUser
            });
        }

    } catch (e) {
        return res.status(500).json({
            message: "Something went wrong",
            success: false,
            error: e.message
        });
    }
};
exports.updateUser = async (req, res) => {
    try {
        const { userid } = req.tokenData;
        const { userName, userImage, email, phoneNumber, address, subscription } = req.body;
        
        // Define the fields you want to update
        const updateFields = {
            userName,
            email,
            phoneNumber,
            address,
            subscription
        };
        
        // If a new userImage is provided, update the userImage field
        if (userImage) {
            const base64Data = userImage.replace(/^data:image\/jpeg;base64,/, '');
            const imageBuffer = Buffer.from(base64Data, 'base64');
            const imageName = `user_${Date.now()}_${userid}.jpg`;
            const imagePath = path.join(__dirname, '../uploads/images', imageName);
            const imagePathnew = `/uploads/images/${imageName}`;
            updateFields.userImage = imagePathnew;
            fs.writeFileSync(imagePath, imageBuffer);
        }
        
        User.findByIdAndUpdate({ _id: userid }, updateFields, { new: true })
            .then((result) => {
                return res.status(200).json({
                    message: "Update successful",
                    success: true,
                    data: result
                });
            })
            .catch((error) => {
                return res.status(500).json({
                    message: "Something went wrong",
                    success: false,
                    error: error.message,
                });
            });
    } catch (error) {
        return res.status(500).json({
            message: "Something went wrong",
            success: false,
            error: error.message,
        });
    }
};


exports.FindUserDate = async (req, res) => {
    try {
        const { userid } = req.tokenData;
        User.findById(userid).then((result) => {
            return res.status(200).json({
                message: "user already exists",
                success: false,
                data: result
            });
        }).catch((e) => {
            return res.status(200).json({
                message: "restaurant already exists",
                success: false,
                error: e,
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