ContactManager.module("ContactsApp.List.Templates", function(Templates, ContactManager, Backbone, Marionette, $, _){ 
  
  Templates.listRowView =  [
    "<td><%= firstName %></td>",
    "<td><%= lastName %></td>",
    "<td><%= phoneNumber %></td>",
    "<td>",
    "  <button class='btn btn-small js-show'>",
    "    <i class='icon-eye-open'></i>",
    "    Show",
    "  </button>",   "  <button class='btn btn-small js-delete'>",
    "    <i class='icon-remove'></i>",
    "    Delete",
    "  </button>",
    "</td>"
  ].join("\n");
  
  Templates.listItemView =  "<%= firstName %> <%= lastName %> <%= phoneNumber %>";

  Templates.tableItemsView = [
    "<thead>",
    "  <tr>",
    "    <th>First Name</th>",
    "    <th>Last Name</th>",
    "    <th>Phone Number</th>",
    "    <th></th>",
    "  </tr>",
    "</thead>",
    "<tbody>",
    "</tbody>"
  ].join("\n");

  Templates.listContainerView = [
    "<p>Here is the list of all the contacts we have information for:</p>",
    "<ul></ul>"
  ].join("\n");

});
