const Agency = require("../models/agency");
const { validationResult } = require("express-validator");

const getAgency = async (req, res, next) => {
  try {
    const agent = req.user.id
    const agency = await Agency.findOne({ agent }).populate('agent')
    console.log(agency)

    if (!agency) {
      return res.status(400).json({ msg: "Thereis no profile for this admin" });
    }
    
    res.status(200).json(agency);
  } catch (err) {
    console.log(err)
    res.status(500).json({ msg: "Server error" });
  }
};

// add agency 
const createAgency = async (req, res) => {
  console.log("agency file", req.user.id)
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  const { phone, agencyName, headOfficeLocation } = req.body;
  /// profile object

  const agencyFields = { phone, agencyName, agent:req.user.id, headOfficeLocation };
  // agencyFields.agent = req.user.admin.id;
  
  try {
    let agencyProfile = await Agency.findOne({ agent: req.user.id });
    if (agencyProfile){
      // Update needed
      agencyProfile = await Agency.findOneAndUpdate(
        { agent: req.user.id },
        { $set: agencyFields },
        { new: true }
      );
      return res.status(200).json(agencyProfile);
    }

    // Need to create
    agencyProfile = new Agency(agencyFields);
    console.log(agencyProfile)
    await agencyProfile.save();
    res.status(200).json(agencyProfile);

  } catch (err) {
    res.status(500).json({ msg: "Server Error" });
  }
};

module.exports = {getAgency,createAgency };