// var name_validator = new Validator(user_input, rule);

/*选中页面中所有的input[data-rule]*/

/*解析每一个input的验证规则*/

/*验证*/


$(function(){
 'use strict';


  
  var $inputs = $('[data-rule]');

  var inputs = [];



  $inputs.each(function(index,node){

    var tmp = new Input(node);

    inputs.push(tmp);

  })


  console.log('inputs:',inputs);


});
