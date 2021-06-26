
const mongoose = require('mongoose');

var enumSchema = new mongoose.Schema({
  enumId: {
    type: String,
    required: true
  },
  optionValues : {
      type : Array,
      required : true
  },
  label :{
    type : String
  },
  value : {
    type : String
  }
  
});

// module.exports = Enum = mongoose.model('enum', enumSchema);
module.exports = enumSchema;