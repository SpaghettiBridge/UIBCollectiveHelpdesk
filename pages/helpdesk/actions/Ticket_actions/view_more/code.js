{{ui.flt_priority.reset()}}
{{ui.flt_type.reset()}}
{{ui.flt_ticket_num.reset()}}
{{ui.flt_services.reset()}}
{{ui.flt_category.reset()}}
{{ui.flt_agent.reset()}}
{{ui.flt_queue.reset()}}
{{ui.flt_textin.reset()}}
{{ui.flt_date_from.reset()}}
{{ui.flt_date_to.reset()}}
{{ui.flt_creator.reset()}}
{{ui.flt_subcategory.reset()}}
{{ui.flt_group.reset()}}
{{ui.flt_status.setValue(actions.get_ticket_statuses.data.filter(x=> x.name != "Resolved").map(item=>item.id))}}
{{ui.flt_creator.setValue(data.fk_creator_id)}}
{{ui.mdl_ticket_details.close()}}