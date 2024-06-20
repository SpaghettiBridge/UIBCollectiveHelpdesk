select  * from vw_all_tickets
where  vw_all_tickets.service_id in(?) 
ORDER BY 
    CASE vw_all_tickets.priority
        WHEN 'High' THEN 1
        WHEN 'Medium' THEN 2
        WHEN 'Low' THEN 3
        ELSE 4
    END;