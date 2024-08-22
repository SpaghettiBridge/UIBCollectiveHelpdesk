{{ui.txt_ext_message7.reset()}}
{{ui.msg_attach7.reset()}}
{{ui.txt_ext_message8.reset()}}
{{ui.msg_attach8.reset()}}
{{ui.txt_ext_message9.reset()}}
{{ui.msg_attach9.reset()}}
{{ui.txt_ext_message10.reset()}}
{{ui.msg_attach10.reset()}}
{{ui.txt_ext_message11.reset()}}
{{ui.msg_attach11.reset()}}

const modalid = steps.params.data.called_by; 
//looks broken but works to close the modal that called this action
ui[modalid].close()


