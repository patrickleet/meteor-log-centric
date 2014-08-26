if (Meteor.isClient) {
  Template.eventStore.helpers({
    events: function() {
      return EventStore.events.find();
    }
  });

  Template.event.helpers({
    diff: function() {
      return this.date - this.received;
    }
  });
}