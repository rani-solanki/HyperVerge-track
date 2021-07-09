const Agency = require("../models/agency");
const { validationResult } = require("express-validator");

// add agency 
const createAgency = async(req, res, next) => {
  const errors = validationResult(req);
  console.log(errors)
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
};

module.exports = { createAgency};