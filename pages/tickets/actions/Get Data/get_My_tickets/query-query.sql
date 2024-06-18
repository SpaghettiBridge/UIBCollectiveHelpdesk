select  * from vw_all_tickets
where  vw_all_tickets.fk_agent_id = {{state.AccountData.account_id}}