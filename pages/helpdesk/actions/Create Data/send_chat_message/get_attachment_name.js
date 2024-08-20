 if ({{ui.msg_attach2.value != null}}) {
  return {{ui.msg_attach2.value.name}};
} else if ({{ui.msg_attach3.value != null}}) {
  return {{ui.msg_attach3.value.name}};
}
return null;