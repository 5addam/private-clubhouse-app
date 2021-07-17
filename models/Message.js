const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const MessageSchema = new Schema({
    title: {type: String, required: true},
    message: {type: String, required: true},
    timestamp: {type: Date, default: Date.now},
    user: {type: Schema.Types.ObjectId, ref: 'User', required: true}

});

MessageSchema
.virtual('formatted_date')
.get(function(){
    return DateTime.fromJSDate(this.timestamp).toLocalString(DateTime.DATE_MED);
})

