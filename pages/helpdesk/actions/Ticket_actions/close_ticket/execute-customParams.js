{
  id:{{ui.tbl_mainTickets.selectedRow.data.id}},
 priority:{{ui.tbl_mainTickets.selectedRow.data.priority}},
fk_type_id:{{ui.tbl_mainTickets.selectedRow.data.fk_type_id}},
fk_status_id:"23a42071-4e1d-405c-9494-d5fbb870b015",
  fk_agent_id: {{ui.tbl_mainTickets.selectedRow.data.fk_agent_id}},
fk_ticket_queue:{{ui.tbl_mainTickets.selectedRow.data.fk_ticket_queue}},
fk_reason_id:{{ui.tbl_mainTickets.selectedRow.data.fk_ticket_reason || null}},
fk_category_id:{{ui.tbl_mainTickets.selectedRow.data.fk_category_id || null}},
  fk_subcategory_id:{{ui.tbl_mainTickets.selectedRow.data.fk_subcategory_id|| null}},
    called_by: "mdl_ticket_details"
}