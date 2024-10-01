{
  id:{{ui.tbl_mainTickets.selectedRow.data.id}},
 priority:{{ui.tbl_mainTickets.selectedRow.data.priority}},
fk_type_id:{{ui.tbl_mainTickets.selectedRow.data.fk_type_id}},
fk_status_id:"d77143f9-c074-42ee-aa8e-a92accc0cfa5",
  fk_agent_id: {{ui.tbl_mainTickets.selectedRow.data.fk_agent_id}},
fk_reason_id:{{ui.tbl_mainTickets.selectedRow.data.fk_ticket_reason || null}},
fk_category_id:{{ui.tbl_mainTickets.selectedRow.data.fk_category_id || null}},
  fk_subcategory_id:{{ui.tbl_mainTickets.selectedRow.data.fk_subcategory_id|| null}},
    called_by: "mdl_needs_info"
}