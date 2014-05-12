var ContactManager = new Marionette.Application();

ContactManager.Contact = Backbone.Model.extend({
  defaults: {
    firstName: "",
    phoneNumber: "No phone number"
  }
});

ContactManager.addRegions({
  mainRegion: "#main-region"
});

ContactManager.ContactView = Marionette.ItemView.extend({
  template: "#contact-template",
  events: {
    "click p": "alertPhoneNumber"
  },
  alertPhoneNumber: function(){
    alert(this.model.escape("phoneNumber"));
  }
});

ContactManager.on("initialize:after", function(){
  console.log("ContactManager has started!");

  var alice = new ContactManager.Contact({
    //firstName: "Alice",
    lastName: "Arten",
    //phoneNumber: "555-0184"
  });

  var aliceView = new ContactManager.ContactView({
    model: alice
  });

  ContactManager.mainRegion.show(aliceView);
});

ContactManager.start();
