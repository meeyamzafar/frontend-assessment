
$(document).ready(function(){
    $("#get_the_file").change(function(){

    	let data;

     	let file_to_read = $('#get_the_file').prop('files')[0];
	    let fileread = new FileReader();
	    fileread.onload = function(e) {
	      let content = e.target.result;
	      // console.log(content);
	      let data = JSON.parse(content); // Array of Objects.
	      console.log(data); // You can index every object
	      $.each(data, function(i, item) {

			  if(i!=0){
			  	var radioBtn = $('<input type="radio" name="tabs" id="tab'+i+'">');
			  }
			  else {
			  	 var radioBtn = $('<input type="radio" name="tabs" id="tab'+i+'" checked="checked">');
			  }
			  var label = $('<label for="tab'+i+'">'+item.title+'</label>');
			  var contentDiv = $('<div class="tab" id="tab_'+i+'">');

    		  radioBtn.appendTo('.tabs');
    		  label.appendTo('.tabs')
    		  contentDiv.appendTo('.tabs')

    		  var para = $('<p">'+item.content+'</p>');
    		  contentDiv.append(para);

		  });
	    };
	    fileread.readAsText(file_to_read);

	});

 	var labelID;

	$('label').click(function() {
	       labelID = $(this).attr('for');
	       console.log(labelID);
	});

});