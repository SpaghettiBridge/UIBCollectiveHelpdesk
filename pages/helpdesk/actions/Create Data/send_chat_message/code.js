{{ui.txt_ext_message2.reset()}}
{{ui.msg_attach2.reset()}}
{{ui.txt_ext_message3.reset()}}
{{ui.msg_attach3.reset()}}
{{ui.txt_ext_message4.reset()}}
{{ui.msg_attach4.reset()}}
{{ui.txt_ext_message5.reset()}}
{{ui.msg_attach5.reset()}}
{{ui.txt_ext_message6.reset()}}
{{ui.msg_attach6.reset()}}

const modalid = steps.params.data.called_by; 
//looks broken but works to close the modal that called this action
ui[modalid].close()


