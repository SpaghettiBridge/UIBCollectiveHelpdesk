console.log(ui.tbl_mainTickets3.value)
console.log(ui.tbl_mainTickets3.value.findIndex(x=> x.id == actions.clone_ticket.data.ticket_id))

{{ui.tbl_mainTickets3.selectRow(ui.tbl_mainTickets3.value.findIndex(x=> x.id == actions.clone_ticket.data.ticket_id))}}
// {{ui.mdl_ticket_details2.close()}}