Template.body.events({
	'click #submitButton':function(event,template){
		event.preventDefault();
		
		let exclamation = template.find("exclamation").value;
		/*let adverb = template.find(#adverb).value;
		let noun = template.find(#noun).value;
		let verb = template.find(#verb).value;

		let madlib = '/"' + exclamation + '!/" you say, as you ' + adverb + ' jump onto your ' +
					 noun + ' and ' + verb + ', into the sunset/"';*/
		Session.set('exclamation', exclamation);
		console.log(exclamation);
	},

});

