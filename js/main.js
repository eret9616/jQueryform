// var name_validator = new Validator(user_input, rule);

/*选中页面中所有的input[data-rule]*/

/*解析每一个input的验证规则*/

/*验证*/


$(function(){
 'use strict';



  var $inputs = $('[data-rule]');
  var $form = $('#signup');
  var inputs = [];



  $inputs.each(function(index,node){

    var tmp = new Input(node);

    inputs.push(tmp);

  })

  $form.on('submit',function(e){


          e.preventDefault();
          $inputs.trigger('blur');


          for(var i =0; i<inputs.length; i++)
          {
            var item = inputs[i];
            var r = item.validator.is_valid();
            if(!r) {
              alert("不合法！");
              return;
            }
          }


          alert('注册成功！');

  })


  console.log('inputs:',inputs);

  function signup(){
    // $.post()
  }


});
