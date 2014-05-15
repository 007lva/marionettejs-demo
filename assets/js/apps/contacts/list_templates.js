ContactManager.module("ContactsApp.List.Templates", function(Templates, ContactManager, Backbone, Marionette, $, _){  
  Templates.listRowView =  "<td><%= firstName %></td> <td><%= lastName %></td> <td><%= phoneNumber %></td>";
  Templates.listItemView =  "<%= firstName %> <%= lastName %> <%= phoneNumber %>";
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
  Templates.listContainerView = [
    "<p>Here is the list of all the contacts we have information for:</p>",
    "<ul></ul>"
  ].join("\n");
});
