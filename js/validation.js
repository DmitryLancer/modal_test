$("#formValidation").validate({
	rules:{
		name:{
			minlength: 4
		},
		surname:{
			minlength: 5
		},
		email:{
			email:true
		},
		phone:{
			number:true,
			minlength: 11,
			maxlength:14
		}
	},
	messages: {
		name: {
		required: "Введите свое имя",
		},
		surname: {
			required: "Введите свою фамилию",
		},
		email: "Введите свою почту",
		phone: "Введите номер мобильного телефона",
	},

	submitHandler: function(form) {
	  form.submit();
	}
  });
