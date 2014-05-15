ContactManager.module("ContactsApp.List", function(List, ContactManager, Backbone, Marionette, $, _){
  List.Controller = {
    listContacts: function(){
      var contacts = ContactManager.request("contact:entities");

      var contactsTableView = new List.ContactsTable({
        collection: contacts
      });

      var contactsListView = new List.ContactsList({
        collection: contacts
      });

      contactsTableView.on("itemview:contact:delete", function(childView, model){
        contacts.remove(model); 
      });

      contactsTableView.on("itemview:contact:show", function(childView, model){
        ContactManager.ContactsApp.Show.Controller.showContact(model); 
      });

      ContactManager.mainRegion.show(contactsTableView);
      ContactManager.secondRegion.show(contactsListView);
    }
  };
});
