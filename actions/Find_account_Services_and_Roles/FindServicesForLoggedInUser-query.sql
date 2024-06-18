SELECT *, join_application_accounts.role as system_role 
FROM public.accounts
JOIN public.join_account_services
ON public.accounts.id = public.join_account_services.account_id
JOIN public.join_application_accounts
ON public.accounts.id = public.join_application_accounts.account_id
WHERE public.accounts.email = {{state.User.email || user.email   }}
and join_application_accounts.app_id = '2771eaa0-114c-4a36-ae37-dd404f3f162f'

-- for tests
-- WHERE email = 'user@spbridge.co.uk'