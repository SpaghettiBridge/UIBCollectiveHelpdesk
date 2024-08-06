SELECT * 
FROM vw_all_tickets
WHERE 
    vw_all_tickets.fk_agent_id = {{state.AccountData.account_id}}
    OR vw_all_tickets.fk_creator_id = {{state.AccountData.account_id}}
  	
ORDER BY 
    CASE vw_all_tickets.priority
        WHEN 'High' THEN 1
        WHEN 'Medium' THEN 2
        WHEN 'Low' THEN 3
        ELSE 4
    END;
