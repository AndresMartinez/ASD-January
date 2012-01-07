var forIform = function(data){
   alert("here is your data "+data);
};
$(document).ready(function(){
    var iform=$('#Form'),
        fperrorslink = $('#fperrorslink');
    
    iform.validate({
        invalidHandler: function(form, validator){
            fperrorslink.click();
            var html = '';
            for (var key in validator.submitted){
                var label=$('label[for^="'+key+'"]').not('[generated]');
                var legend=label.closest('fieldset').find('.ui-controlgroup-label');
                var fieldname = legend.length ? legend.text() : label.text();
                html += '<li>' + fieldname +'</li>';
            };
            $("#formpageerrors ul").html(html);
        },
        submitHandler: function(){
            var data = iform.serializeArray();
            alert("form submitted");
            forIForm(data);
        }
    });
});








function storeItems(id){
         if (id == 1){
         
         var workout = $('#workout').val();
         var name    = $('#name').val();  
         var yes     = $('#yes').val():
         var reps    = $('#reps').val();
         var wkdate  = $('#wkdate').val();
         var comments= $('#comments').val;      
         
         var viewInfo = [
             
             workout,
             name,
             yes,
             reps,
             wkdate,
             comments
           ];
           
           
           if(name != ""){
              localStorage.setItem(viewInfo);
           };
         
         }
};







function editItem(id) {
          
          
          var value = localStorage.getItem(id);
          value = value.split(';');
          $('#pworkout').val(value[0]);
          $('#name').val(value[1]);
          $('#yes').val(value[2]);
          $('#reps').val(value[3]);
          $('# wkdate').val(value[4]);
          $('#  ').val(value[5]);


   // populates form fields with localStorage Values
   
   $('#pworkout').val() = pworkout;
   $('#name').val()     = name ;
   if(yes == "on"){
      $('#yes').attr("checked","checked")
   }
   $('#reps').val()     = reps;
   $('#wkdate').val()   = wkdate;
   $('#comments').val() = comments;
   
   //reveal editItem button, hide submit
   var editItem = $('#editItem');
   editItem.style.display = "block";
   var submit = $('#submit');
   submit.style.display = "none";
   
   
   
   
   
   //capture editItem Buttons click
   $('#editItem').onClick = function (){
   
   var pworkout = $('#pworkout').val();
   var name     = $('#name').val();
   var yes      = $('#yes ').val();
   var reps     = $('#reps').val();
   var wkdate   = $('#wkdate ').val();
   var comments = $('#comments ').val();
   
   var allitems =[
        pworkout,
        name,
        yes,
        wkdate,
        comments
    ];
   
   
   }


};













function clearLocal() {
	localStorage.clear(); 
	location.reload(true);
} 













