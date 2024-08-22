console.log(ui.tbl_mainTickets.value)
console.log(ui.tbl_mainTickets.value.findIndex(x=> x.id == actions.clone_ticket.data.ticket_id))

{{ui.tbl_mainTickets.selectRow(ui.tbl_mainTickets.value.findIndex(x=> x.id == actions.clone_ticket.data.ticket_id))}}
// {{ui.mdl_ticket_details.close()}}