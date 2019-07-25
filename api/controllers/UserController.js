/**
 * UserController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {


  computeData: async function(req,res){

    var age = req.allParams().age
    var color = '#FFFFFF'
    var colorName = 'WHITE'

    if(age>=1 && age<=20){
        color = '#03A9F4'
        colorName = 'LightBlue'
    }else if(age<=50){
        color = '#ef5350'
        colorName = 'LightRed'
    }else{
        color = '#9E9E9E'
        colorName = 'Gray'
    }

    return res.ok({
      name:req.allParams().name,
      age:req.allParams().age,
      color: color,
      colorName: colorName,
    })

  },
  

};

