return new Promise((resolve) => {
  const file = {{ui.msg_attach2.value||ui.msg_attach3.value||ui.msg_attach4.value||ui.msg_attach5.value||ui.msg_attach6.value}};
  const reader = new FileReader();
  reader.readAsBinaryString(file);
  reader.onload = () => {
    resolve(reader.result);
  };
});