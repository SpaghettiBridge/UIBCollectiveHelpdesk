select  * from vw_all_tickets
where  vw_all_tickets.fk_agent_id = ?
or vw_all_tickets.fk_creator_id = ?

ORDER BY 
    CASE vw_all_tickets.priority
        WHEN 'High' THEN 1
        WHEN 'Medium' THEN 2
        WHEN 'Low' THEN 3
        ELSE 4
    END;