SELECT *, join_application_accounts.role as system_role 
FROM public.accounts
JOIN public.join_account_services
ON public.accounts.id = public.join_account_services.account_id
JOIN public.join_application_accounts
ON public.accounts.id = public.join_application_accounts.account_id
WHERE public.accounts.email = {{state.User.email || user.email   }}
and join_application_accounts.app_id = '6590b3e7-ffa3-4f47-93cb-5265c2924ae2'

-- for tests
-- WHERE email = 'user@spbridge.co.uk'