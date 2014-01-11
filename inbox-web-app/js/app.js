// Create the app
App = Ember.Application.create();

// Model
App.Mailbox = Em.Object.extend();

App.Mailbox.reopenClass({
  find: function(id) {
    if (id) {
      return App.FIXTURES.findBy('id', id);
    } else {
      return App.FIXTURES;
    }
  }
});

// Routes
App.Router.map(function() {
  this.resource('mailbox', { path: '/:mailbox_id' }, function() {
    this.resource('mail', { path: '/:message_id' });
  });
});

App.ApplicationRoute = Em.Route.extend({
  model: function() {
    return App.Mailbox.find();
  }
});

App.MailRoute = Em.Route.extend({
  model: function(params) {
    return this.modelFor('mailbox').messages.findBy('id', params.message_id);
  }
});

// Handlebars helper
Ember.Handlebars.registerBoundHelper('date', function(date) {
  return moment(date).format('MMM Do');
});

// Fixtures
App.FIXTURES = [
  {
    name: "Inbox",
    id: "inbox",
    messages: [
      {
        id: 1,
        subject: "Welcome to DirectInABox may be a long text will strech the table how much can it greac reopenClass reopenClass reopenClass do that you think mr params",
        from: "dr.tomster@direct.hospital.com",
        to: "user@direct.patientportal.com",
        date: new Date(),
        body: "Welcome to Ember. We hope you enjoy your stay"
      }, {
        id: 2,
        subject: "DirectInABox Resources",
        from: "dr.tomster@direct.hospital.com",
        to: "user@direct.patientportal.com",
        date: new Date(),
        body: "What is Direct XDR? Can I configure it to get my EMRs going? How can I app ecosystem for bluebutton."
      }
    ]
  }, {
    name: "Labs",
    id: "labs",
    messages: [
      {
        id: 3,
        subject: "You have one the report.....!",
        from: "411labs@direct.labnetwork.com",
        to: "user@direct.patientportal.com",
        date: new Date(),
        body: "Its your patient information available for folks to view and review."
      }
    ]
  }, {
    name: "Sent Mail",
    id: "sent-mail",
    messages: [
      {
        id: 4,
        subject: "Should I do more testing..",
        from: "user@direct.patientportal.com",
        to: "dr.tomster@direct.hospital.com",
        date: new Date(),
        body: "How long before Direct in a box becomes reality?"
      }
    ]
  }
];