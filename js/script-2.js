
$(document).ready(function(){
	/* This is the input element which is defined to capture the JSON file*/
    $("#get_the_file").change(function(){

    	let data;

     	let file_to_read = $('#get_the_file').prop('files')[0];
     	// create a new file reader
	    let fileread = new FileReader();
	    fileread.onload = function(e) {
	      let content = e.target.result;
	      // console.log(content);
	      let data = JSON.parse(content); // Array of Objects.
	      console.log(data); // You can index every object
	      // for each JSON object, iterate to create a new tab and then read the content
	      $.each(data, function(i, item) {
	      	// create a clickable radio button
	      	  var radioBtn;
			  if(i!=0){
			  	radioBtn = $('<input type="radio" name="tabs" id="tab'+i+'">');
			  }
			  else {
			  	 radioBtn = $('<input type="radio" name="tabs" id="tab'+i+'" checked="checked">');
			  }
			  // the label for the radio button will actually show as the tab to the user
			  var label = $('<label id="label_'+i+'" for="tab'+i+'">'+item.title+'</label>');
			  var contentDiv = $('<div class="tab" id="tab_'+i+'">');

    		  radioBtn.appendTo('.tabs');
    		  label.appendTo('.tabs')
    		  contentDiv.appendTo('.tabs')

    		  // read the tab data and append into as a paragraph
    		  var para = $('<p">'+item.content+'</p>');
    		  contentDiv.append(para);

		  });
	    };
	    fileread.readAsText(file_to_read);

	});

});
