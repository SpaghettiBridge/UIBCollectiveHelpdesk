const actionId = data.id; 
//looks broken but works to call an action with the same ID of the context menu item
actions[actionId].trigger({{ui.tbl_mainTickets.selectedRow.data}})
