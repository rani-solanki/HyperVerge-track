const Agency = require("../models/agency");
const { validationResult } = require("express-validator");

exports.getAgency = async (req, res) => {
  try {
      const agency = await Agency.findOne({ agent: req.user.id }).populate("agent",["name", "email"]);
    console.log(agency);

    if (!agency) {
      return res.status(400).json({ msg: "There is no profile for this user" });
    }
    
    return res.status(200).json(agency);
  } catch (err) {
    console.log(err.message);
    res.status(500).send("Server error");
  }
};

exports.createAgency = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
      return next({
        status: 400,
        error: "validation error"
      });
  }

  const { phone, agencyName, headOfficeLocation } = req.body;
    const agencyInfo = {
      phone,
      agencyName,
      headOfficeLocation
    };
  
  agencyInfo.agent = req.user.id;
  try {
    console.log(agencyInfo.agent)
    let agencyProfile = await Agency.findOnd({});
    console.log(agencyProfile)
      console.log(agencyProfile)
        if (agencyProfile){
            agencyProfile = await Agency.findOneAndUpdate(
                { agent: req.user.id },
                { $set: agencyInfo },
                { new: true }
            );
            return res.json(agencyProfile);
        }  
    agencyProfile = new Agency(agencyInfo);
    console.log(agencyProfile)
    await agencyProfile.save();
    return res.json(agencyProfile);

    } catch (err) {
        console.error(err.message);
        res.status(500).send("Server Error");
    }
};
