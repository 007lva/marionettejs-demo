ContactManager.module("ContactsApp.List.Templates", function(Templates, ContactManager, Backbone, Marionette, $, _){  
  Templates.listItemView =  "<td><%= firstName %></td> <td><%= lastName %></td> <td><%= phoneNumber %></td>";
});
