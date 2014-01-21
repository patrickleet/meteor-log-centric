if (Meteor.isClient) {
  Template.hello.greeting = function () {
    return "Welcome to app.";
  };

  Template.hello.events({
    'click input' : function () {
      // template data, if any, is available in 'this'
      console.log('click input')
      Meteor.call('doThing')
    }
  });
}

if (Meteor.isServer) {
  EventStore = DDP.connect('http://localhost:3000'),

  Meteor.methods({
    doThing: function() {
      console.log('calling do thing on ' + EventStore.toString());
      event = {
        type: 'thing',
        payload: {
          a: 'b',
          c: 'd'
        },
        date: new Date()
      };
      EventStore.call('logEvent', event);
    }
  });


}
