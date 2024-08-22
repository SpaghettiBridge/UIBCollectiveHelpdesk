return new Promise((resolve) => {
  const file = {{ui.msg_attach7.value||ui.msg_attach8.value||ui.msg_attach9.value||ui.msg_attach10.value||ui.msg_attach11.value}};
  const reader = new FileReader();
  reader.readAsBinaryString(file);
  reader.onload = () => {
    resolve(reader.result);
  };
});