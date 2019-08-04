/**
 * UserController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {


  computeData: async function(req,res){

    var birthDate = req.allParams().birthDate

    //determine the age
    var today = new Date();
    var birthDate = new Date(req.allParams().birthDate);
    var age = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }

    return res.ok({
      name:req.allParams().name,
      birthDate:req.allParams().birthDate,
      age:age,
    })

  },
  

};

