if (Meteor.isClient) {
  // counter starts at 0
  Session.setDefault('counter', 0);

  Template.body.helpers({
    // Add some data to play with in the templates
    letters: ['a', 'b', 'c'],
    numbers: [1, 2, 3],
    // Add some nested data
    nest : [{'egg': 'yolk', 'bird': 'bones'}, {'egg': 'whites', 'bird' : 'guts'}]
  })

  Template.hello.helpers({
    counter: function () {
      return Session.get('counter');
    },
  });

  Template.hello.events({
    'click button': function () {
      // increment the counter when button is clicked
      Session.set('counter', Session.get('counter') + 1);
      if (Session.get('counter') == 5){
        alert('stop clikcing this')
      }
    }
  });
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
