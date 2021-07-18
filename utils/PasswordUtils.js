const bcrypt = require('bcrypt');
const saltRounds = 10;


function genPassword(password){
    bcrypt.hash(password, saltRounds, function(err, hash){
        if (!err){
            return hash;
        }
    });
}

/**
 * 
 * @param {*} password The plain text password
 * @param {*} hash The hash stored in the databae
 * This func uses the bcrypt lib to generate hash of plain text pass
 * and then compare it with the hash stored in db
 */

async function validPassword(password, hash){
    const match = await bcrypt.compare(password, hash);
    return match;
}

module.exports.genPassword = genPassword;
module.exports.validPassword = validPassword;