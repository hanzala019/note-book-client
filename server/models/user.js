const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username:{
        type: String,
        required:[ true, 'Please enter a username']
    },
    email:{
        type: String,
        required:[true,'Please enter a valid email address'],
        trim:true,
        unique:true,
    },
    password: {
        type:String,
        required: [true, 'Please enter a password'],
        minlength:[10, "the minimum password is 10 characters long"],
    }

})

// userSchema.pre('save', async function(next){
//     const salt =  await bycrypt.genSalt();
//     this.password = await bycrypt.hash(this.password, salt)
//     next()
// })

// userSchema.statics.login = async function (email, password) {
//     const user = await this.findOne({email})

// if(user){
//     const auth = await bycrypt.compare(password, user.password);
//     if(auth){
//         return user
//     }
//     throw Error("Incorrect password")
// }
// throw Error('Incorrect email')
// }

const User =  mongoose.model('user', userSchema);

module.exports = User;