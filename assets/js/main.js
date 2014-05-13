var ContactManager = new Marionette.Application();

ContactManager.Contact = Backbone.Model.extend({
  defaults: {
    firstName: "",
    phoneNumber: "No phone number"
  }
});

ContactManager.ContactCollection = Backbone.Collection.extend({
  model: ContactManager.Contact
});

ContactManager.addRegions({
  mainRegion: "#main-region"
});

ContactManager.ContactItemView = Marionette.ItemView.extend({
  tagName: "li",
  template: "#contact-list-item" 
});

ContactManager.ContactsView = Marionette.CollectionView.extend({
  tagName: "ul",
  itemView: ContactManager.ContactItemView
});

ContactManager.on("initialize:after", function(){
  console.log("ContactManager has started!");

  var contacts = new ContactManager.ContactCollection([
    {
      firstName: "Bob",
      lastName: "Brigham",
      phoneNumber: "555-0163"
    },
    {
      firstName: "Alice",
      lastName: "Arten",
      phoneNumber: "555-0184"
    },
    {
      firstName: "Charlie",
      lastName: "Campbell",
      phoneNumber: "555-0129"
    }
  ]);

  var concactsListView = new ContactManager.ContactsView({
    collection: contacts
  });

  ContactManager.mainRegion.show(concactsListView);
});

ContactManager.start();
