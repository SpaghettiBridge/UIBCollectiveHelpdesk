select
  acc.id as id,
  acc.name,
 jas.service_id, 
 jac.role
from
  public.accounts acc
  left join public.join_account_services jas on jas.account_id = acc.id
	join public.join_application_accounts jac on jac.account_id = acc.id
where jac.app_id = '2771eaa0-114c-4a36-ae37-dd404f3f162f'
order by acc.name