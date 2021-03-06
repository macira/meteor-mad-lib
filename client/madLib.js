import { Template } from 'meteor/templating';

Template.body.events({
  'submit .form-horizontal'(event, template) {
    event.preventDefault();

    // console.log('Hello, world');
    const exclamation = template.find("input[name=exclamation]").value;
    const adverb = template.find("input[name=adverb]").value;
    const noun = template.find("input[name=noun]").value;
    const verb = template.find("input[name=verb]").value;
    
    const text = `"${exclamation}!", you say as you ${adverb} jump onto your ${noun} and ${verb} off into the sunset`;
  
    $('#title').hide();
    $('#title').html(text);
    $('#title').css('color', '#0000ff');
    $('#title').fadeIn('slow', function() {});
  },
});
