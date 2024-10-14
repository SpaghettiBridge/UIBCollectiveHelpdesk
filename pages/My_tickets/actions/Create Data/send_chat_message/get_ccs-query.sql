select public.accounts.email from public.join_tickets_users jtu
join public.accounts on jtu.fk_account_id = public.accounts.id