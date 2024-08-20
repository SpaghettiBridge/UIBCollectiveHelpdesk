{{

var array1 = ui.slct_others.value,
array2 = ui.tbl_mainTickets.selectedRow.data.fk_merged_user_id 

// // Find elements in dropdown that are not in ticket
const diff1 = array1.filter(x => !array2.includes(x));

return diff1;
}}

