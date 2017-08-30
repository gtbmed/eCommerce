	

    	$(document).ready(function() {
    		
    		function FindGender(){
    			var passedGender = $("#gender").val();
    			var gender;
			    if ( passedGender === "f" ){
			    	gender = "Female";			
			    }
				else{
					gender = "Male";
				}
				$("#gender").val() = gender;
			}

			FindGender();

		});

