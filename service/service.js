
var EventStore = DDP.connect('http://localhost:3000/');
Events = new Meteor.Collection('events', EventStore);

Things = new Meteor.Collection('things');

if (Meteor.isClient) {
  Template.things.helpers({
    things: function() {
      return Things.find();
    }
  });
}

if (Meteor.isServer) {
  Events.find().observe({
    added: function (event) {
      console.log
      if (event.type === 'thing') {
        Things.insert({
          time: event.date,
          a: event.payload.a
        })
      }
    }
  });
}

