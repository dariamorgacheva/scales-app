const { Scale } = require('../models/Scale');

module.exports = {
  getAllScales: async (req, res) => {
    const scales = await Scale.find({});
    res.json({ scales });
  },
  postScale: async (req, res) => {
    debugger 
    const scale = new Scale()
  }
}
