Meteor.startup(function() {
  EventStore = new GravityEventStoreClient({
    url: Meteor.settings.public.gravity.url
  });
});

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
  

  Meteor.methods({
    doThing: function() {
      console.log('doing thing');
      event = {
        type: 'thing',
        payload: {
          a: 'b',
          c: 'd'
        },
        date: new Date()
      };
      EventStore.send(event);
    }
  });


}
