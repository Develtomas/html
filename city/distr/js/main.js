$(document).ready(function(){

    //Validation
    jQuery.validator.addMethod("nameReg", function(value, element) {
        return this.optional( element ) || /^[a-яёА-Яa-zA-Z -]+$/.test( value );
    }, 'Enter correct name');

    $.validator.methods.email = function( value, element ) {
        return this.optional( element ) ||  /[^@]+@[^@.]+\.[^@]+/.test( value );
    }   

    $.validator.setDefaults({

        ignore: [], //make checkbox alive
        errorPlacement: function(error, element) { 
            if  ($(element).attr("type") == "checkbox") { //to show popover in correct place
                let labelCheckbox = $(element).next('label');
                labelCheckbox.attr({"data-content": error.text()});
                labelCheckbox.popover('show'); 
            }
            else {
                $(element).attr({"data-content": error.text()});
                $(element).popover('show');
            }
        },
        highlight: function(element){ //modify input view
            if ($(element).attr("type") == "text") {
                $(element).css({
                    "border-color" : "#bb4444", 
                    "color" : "#bb4444",
                    "background-image": "url('../../images/iconError.png')"
                });
                $(element).prev('.placeholder').css("color", '#bb4444');
            }
        },
        unhighlight: function(element){ //hide error visual effects
            if ($(element).attr("type") == "text") {
                $(element).css({
                    "border-color" : "#4488bb", 
                    "color" : "#4488bb",
                    "background-image": "url('../../images/iconOK.png')"
                });
                $(element).prev('.placeholder').css("color", '#aaaaaa');
                $(element).popover('hide');
            }
            else if ($(element).attr("type") == "checkbox") {
                $(element).next('label').popover('hide');
            }
            else {$(element).popover('hide');}
        }
    });

    $("#form_request").validate({ //jQuery Validation plugin settings
       
	    rules:{
            email:{
                required: true,
				email: true
            },
            name:{
                required: true,
                minlength: 3,
                nameReg: true
            },
			country:{
				required: true
			},
			agreement:{
				required: true
			}
        },
        messages: {
            name: {
                required: "Please enter your name",
                minlength: "Minimum 3 characters"
            },
            email: {
                required: "Please enter email",
                email: "Valid, please"
            },
            country: "Select your country" ,
            agreement: "Mark the checkbox"
        }

    });
});