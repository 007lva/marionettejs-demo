ContactManager.module("ContactsApp.List.Templates", function(Templates, ContactManager, Backbone, Marionette, $, _){  
  Templates.listItemView =  "<td><%= firstName %></td> <td><%= lastName %></td> <td><%= phoneNumber %></td>";
  Templates.tableItemsView = [
    "<thead>",
    "  <tr>",
    "    <th>First Name</th>",
    "    <th>Last Name</th>",
    "    <th>Phone Number</th>",
    "  </tr>",
    "</thead>",
    "<tbody>",
    "</tbody>"
  ].join("\n");
});
