select
  acc.id as id,
  acc.name,
 jas.service_id
from
  public.accounts acc
  left join public.join_account_services jas on jas.account_id = acc.id