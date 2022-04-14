$("#checkCryptoBtn").click(function(){
   if($("#checkCrypto").attr('coin') == undefined){
      var v = $("#checkCrypto").val();
      var c = $("#selectOption").val();
   }else{
      var t = $("#checkCrypto");
      var c = t.attr('coin');
      var v = t.val();
   }

   if(v != '' && v != undefined){
      var valid = WAValidator.validate(v, c);
      if(valid){
         $('.alert').removeClass('bg-danger');
         $('.alert').addClass('bg-success');
         $('.alert').html(`Address is a valid ${c} address`);
         $('.alert').show();
      }else{
         $('.alert').removeClass('bg-success');
         $('.alert').addClass('bg-danger');
         $('.alert').html(`Address is an invalid ${c} address`);
         $('.alert').show();
      }
   }else{
      $('.alert').hide();
   }
 });

 $("#checkCrypto").keyup(function(){
    $(".alert").hide();
 })

 $('#siteUrl').html($(location).attr('hostname'));

 $('.form-select').change(function(){
    var c = $(this).val();
    if(c == 'others'){
      document.location = `others.html`;
    }else{
      document.location = `${c}-validator.html`;
    }

 })