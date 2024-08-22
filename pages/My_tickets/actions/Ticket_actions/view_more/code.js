{{ui.flt_priority2.reset()}}
{{ui.flt_type2.reset()}}
{{ui.flt_ticket_num2.reset()}}
{{ui.flt_services2.reset()}}
{{ui.flt_category2.reset()}}
{{ui.flt_agent2.reset()}}
{{ui.flt_queue2.reset()}}
{{ui.flt_textin2.reset()}}
{{ui.flt_date_from2.reset()}}
{{ui.flt_date_to2.reset()}}
{{ui.flt_creator2.reset()}}
{{ui.flt_subcategory2.reset()}}
{{ui.flt_group2.reset()}}
{{ui.flt_status2.setValue(actions.get_ticket_statuses.data.filter(x=> x.name != "Resolved").map(item=>item.id))}}
{{ui.flt_creator2.setValue(data.fk_creator_id)}}
{{ui.mdl_ticket_details2.close()}}