/**
 * UserController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */
var moment = require('moment');

module.exports = {


  computeData: async function(req,res){

    return res.ok({
      name:req.allParams().name,
      birthDate:req.allParams().birthDate,
      age:moment(req.allParams().birthDate, "DDMMYYYY").fromNow().split(" ")[0],
    })

  },
  

};

