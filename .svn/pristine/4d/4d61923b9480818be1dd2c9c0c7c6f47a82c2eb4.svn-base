
             var selFileObj = document.getElementById("selFile"); 
             var privewPicObj = document.getElementsByClassName('privewPic')[0];
             selFileObj.onchange = function(){

                   var file = this.files[0];
           
                 var filetypePatt = /^image/; 
                 if(!filetypePatt.test(file.type)){
                      alert('请选择图片');
                      return;
                 } 
                onSelect(file);
			 function onSelect( file){
			 	      var imgObj = document.createElement('img');
			  	var flieReadObj = new FileReader();
			   	flieReadObj.onload = function(ev){
			   		console.log(ev)
			       imgObj.src = ev.target.result;
			       privewPicObj.appendChild(imgObj);
			   }
			   console.log(file)
			   flieReadObj.readAsDataURL(file);
			  }
			  }
                
