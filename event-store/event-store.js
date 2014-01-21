Events = new Meteor.Collection('events');

if (Meteor.isClient) {
  Template.events.helpers({
    events: function() {
      return Events.find();
    }
  });

  Template.event.helpers({
    diff: function() {
      return this.date - this.received;
    }
  });
}

if (Meteor.isServer) {
  Meteor.methods({
    logEvent: function(event) {
      console.log('logging event: ' + event);
      event.received = new Date();

      Events.insert(event);
    }
  });
}