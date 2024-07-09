return new Promise((resolve) => {
  const file = {{ui.msg_attach.value}};
  const reader = new FileReader();
  reader.readAsBinaryString(file);
  reader.onload = () => {
    resolve(reader.result);
  };
});