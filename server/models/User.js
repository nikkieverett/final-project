const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require("bcrypt-nodejs");
const SALT_FACTOR = 10;

const userSchema = Schema({
  username: { type: String, required: true, unique: true  },
  password: { type: String, required: true },
});

userSchema.methods.name = function() {
 return this.username;
};

const User = mongoose.model('User', userSchema);

const noop = function(){};

userSchema.pre("save", function(done) {
  let user = this;
  if (!user.isModified("password")) {
   return done();
  }
  bcrypt.genSalt(SALT_FACTOR, function(err, salt) {
    if (err) {
      return done(err);
    }

    bcrypt.hash(User.password, salt, noop, function(err, hashedPassword) {
      if (err) {
        return done(err);
      }
      user.password = hashedPassword;
      done();
    });
  });
});

module.exports = User;
