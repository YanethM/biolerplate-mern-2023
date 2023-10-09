const mongoose = require("mongoose");
const serviceSchema = mongoose.Schema({
  serviceName: {
    type: String,
    require: true,
  },
  serviceDescription: {
    type: String,
    require: true,
  },
  active: {
    type: Boolean,
    default: true,
  },
  avatar: {
    type: String,
  },
  create_at: {
    type: Date,
    default: Date.now,
  },
});


const Service = mongoose.model("Service", serviceSchema);
module.exports = User;
