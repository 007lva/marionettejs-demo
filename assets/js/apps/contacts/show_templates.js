ContactManager.module("ContactsApp.Show.Templates", function(Templates, ContactManager, Backbone, Marionette, $, _){
  
  Templates.showContactView = [
    "<h1><%= firstName %> <%= lastName %></h1>",
    "<p><strong>Phone number:</strong> <%= phoneNumber %></p>"
  ].join("\n");

}); 
