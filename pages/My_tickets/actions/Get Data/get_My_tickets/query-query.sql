SELECT *,
public.vw_all_tickets.id as "id",
public.join_tickets_users.type as ticket_role
FROM public.vw_all_tickets
JOIN public.join_tickets_users 
    ON public.vw_all_tickets.id = public.join_tickets_users.fk_ticket_id
WHERE 
    (vw_all_tickets.fk_agent_id = {{state.AccountData.account_id}}
    OR vw_all_tickets.fk_creator_id = {{state.AccountData.account_id}})
    OR public.join_tickets_users.fk_account_id = {{state.AccountData.account_id}}
ORDER BY 
    CASE vw_all_tickets.priority
        WHEN 'High' THEN 1
        WHEN 'Medium' THEN 2
        WHEN 'Low' THEN 3
        ELSE 4
    END;
