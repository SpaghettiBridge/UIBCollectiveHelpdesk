var original_agent = {{ui.tbl_mainTickets3.selectedRow.data.fk_agent_id}};

if (original_agent != ui.slct_agent2.value) {
  return ui.slct_agent2.value;
} else if(ui.tbl_mainTickets3.selectedRow.data.fk_type_id != ui.slct_details_type2.value) {
  return {{actions.get_ticket_types.data.filter(x=> x.id == ui.slct_details_type2.value)[0].fk_agent_id}};
} else{
return original_agent
}