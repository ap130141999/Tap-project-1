
const mongoose = require('mongoose');

const enumSchema = new mongoose.Schema({
  enumId: {
    type: String,
    required: true
  },
  optionValues : {
      type : Array,
      required : true
  },
  
});

module.exports = Enum = mongoose.model('enum', enumSchema);