select tm.id as message_id, tm.message, tm.fk_ticket_id, tm.message_attachment, tm.message_type, tm.created_at, accounts.name as who from public.ticket_messages tm
join accounts on  accounts.id = tm.fk_account_id
where tm.fk_ticket_id ={{ui.tbl_mainTickets3.selectedRow.data.id}}
order by tm.created_at DESC