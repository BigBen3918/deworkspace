/** @format */

const UserSchema = require("../models/users");

const UserController = {
    createUser: async (props) => {
        console.log(props);
        const newUser = new UserSchema({
            name: name,
            nick: nick,
            password: password,
            ip: ip,
            email: email,
            verify: verify,
            active: active,
            coins: coins,
            address: address,
        });

        let userData = await newUser.save();
        if (!userData) throw new Error("DataBase Error");

        return userData;
    },
    updateUser: async (props) => {
        const { account, amount } = props;
        var user = await UserSchema.findOne({
            account: account,
        });

        user.balance = Number(user.balance) + Number(amount);
        if (user.balance < 0) {
            let error = new Error("Insufficient balance");
            throw error;
        }
        const userData = await user.save();

        return userData;
    },
    findUser: async (props) => {
        const { param, flag } = props;
        var user;
        switch (flag) {
            case 1: //email search
                user = await UserSchema.findOne({ email: param });
                break;
            case 2: //name search
                user = await UserSchema.findOne({ name: param });
                break;
            case 3: //nickname search
                user = await UserSchema.findOne({ nick: param });
                break;
            case 4: //verify search
                user = await UserSchema.findOne({ verify: param });
                break;
            case 5: //weapons search
                user = await WeaponSchema.findOne({ address: param });
                break;
        }
        return user;
    },
};

module.exports = { UserController };
