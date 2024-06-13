return new Promise((resolve) => {
  const file = {{ui.inp_ticket_sh1.value}};
  const reader = new FileReader();
  reader.readAsBinaryString(file);
  reader.onload = () => {
    resolve(reader.result);
  };
});