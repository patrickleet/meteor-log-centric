Events = new Meteor.Collection('events');

if (Meteor.isClient) {
  Template.events.helpers({
    events: function() {
      return Events.find();
    }
  });
}

if (Meteor.isServer) {
  Meteor.methods({
    logEvent: function(event) {
      console.log('logging event: ' + event);
      Events.insert(event);
    }
  });
}