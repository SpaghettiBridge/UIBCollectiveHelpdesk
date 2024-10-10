return new Promise((resolve) => {
  const file = {{ui[steps.code2.data.file].value}};
  const reader = new FileReader();
  reader.readAsBinaryString(file);
  reader.onload = () => {
    resolve(reader.result);
  };
});