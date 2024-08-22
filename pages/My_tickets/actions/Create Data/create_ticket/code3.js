return new Promise((resolve) => {
  const file = {{ui.slct_createTick_sh6.value}};
  const reader = new FileReader();
  reader.readAsBinaryString(file);
  reader.onload = () => {
    resolve(reader.result);
  };
});