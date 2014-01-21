
var EventStore = DDP.connect('http://localhost:3000/');
Events = new Meteor.Collection('events', EventStore);
ProcessedEvents = new Meteor.Collection('appliedEvents');

Things = new Meteor.Collection('things');

if (Meteor.isClient) {
  Template.things.helpers({
    things: function() {
      return Things.find();
    }
  });
}

if (Meteor.isServer) {
  eventEmitter = new (Npm.require('events').EventEmitter);

  Events.find({'type': 'thing'}).observe({
    added: function (event) {
      console.log('processing event ' + event._id);
      processEvent(event);
    }
  });

  eventEmitter.on('event:thing', function(event) {
    Things.insert({
      time: event.date,
      a: event.payload.a
    });
  });
}

function processEvent (event) {
  if (!ProcessedEvents.findOne({_id: event._id})) {
    eventEmitter.emit('event:'+event.type, event);
    ProcessedEvents.insert(event);
  }
}

