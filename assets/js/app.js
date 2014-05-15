var ContactManager = new Marionette.Application();

ContactManager.addRegions({
  mainRegion: "#main-region",
  secondRegion: "#second-region"
});

ContactManager.on("initialize:after", function(){
  ContactManager.ContactsApp.List.Controller.listContacts();
});
