return new Promise((resolve) => {
  const file = {{params}};
  const reader = new FileReader();
  reader.readAsBinaryString(file);
  reader.onload = () => {
    resolve(reader.result);
  };
});