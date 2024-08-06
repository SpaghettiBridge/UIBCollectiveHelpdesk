WITH recent_ticket_status AS (
    SELECT DISTINCT ON (fk_ticket_id) 
        fk_ticket_id,
        created_at,
  change AS rec_update,
  			fk_updated_by as who,
        'status' AS record_type
    FROM 
        public.ticket_status_history
    ORDER BY 
        fk_ticket_id, created_at DESC
),
recent_ticket_message AS (
    SELECT DISTINCT ON (fk_ticket_id) 
        fk_ticket_id AS fk_ticket_id,
        created_at,
  			message AS rec_update, 
  			fk_account_id as who,
        'message' AS record_type
    FROM 
        public.ticket_messages
    ORDER BY 
        fk_ticket_id, created_at DESC
),
combined_recent_records AS (
    SELECT * FROM recent_ticket_status
    UNION ALL
    SELECT * FROM recent_ticket_message
),
most_recent_records AS (
    SELECT DISTINCT ON (fk_ticket_id)
        fk_ticket_id,
        created_at,
        record_type,
  			who,
  			rec_update
    FROM 
        combined_recent_records
    ORDER BY 
        fk_ticket_id, created_at DESC
)

SELECT 
    mrr.fk_ticket_id,
    mrr.created_at,
    mrr.record_type,
    mrr.rec_update,
    mrr.who,
    t.ticket_number
FROM 
    most_recent_records AS mrr
JOIN 
    public.tickets AS t ON mrr.fk_ticket_id = t.id
ORDER BY 
    mrr.created_at DESC;
