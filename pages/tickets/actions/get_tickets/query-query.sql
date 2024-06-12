select  
tic.id,
tic.location,
tic.priority,
tic.links,
tic.details,
tic.title,
tic.urgency,
tic.importance,
tic.assigned_queue,
tic.ticket_number,
tic.screenshot1,
tic.screenshot2,
tic.screenshot3,
tic.created_at as entered_date,
ac.name as creator,
acc.name as agent,
lts.name as status,
ltt.name as ticket_type,
apps.app_name,
ltc.name as category,
ltsc.name as subcategory,
th.thread_content as external_thread,
thr.thread_content as internal_thread,
thre.thread_content as development_thread,
tic.fk_type_id as ticket_type_id
from tickets tic
left join accounts ac on tic.fk_creator_id = ac.id
left join accounts acc on tic.fk_agent_id = acc.id
left join lu_ticket_status lts on tic.fk_status_id = lts.id
left join lu_ticket_types ltt on tic.fk_type_id = ltt.id
left join applications apps on tic.fk_app_id = apps.id
left join lu_ticket_categories ltc on tic.fk_category_id = ltc.id
left join lu_ticket_subcategories ltsc on tic.fk_subcategory_id = ltsc.id
left join threads th on th.id = tic.fk_external_thread_id
left join threads thr on thr.id = tic.fk_internal_thread_id
left join threads thre on thre.id = tic.fk_development_thread_id

where  tic.fk_agent_id = {{state.AccountData.account_id}}