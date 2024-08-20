{{

var array1 = ui.slct_others.value,
array2 = ui.tbl_mainTickets.selectedRow.data.fk_merged_user_id 

// Find elements in ticket that are not in dropdown
const diff2 = array2.filter(x => !array1.includes(x));


return diff2;
}}

