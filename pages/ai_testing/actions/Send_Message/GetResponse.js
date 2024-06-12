 var output = data.choices[0].message
output.created_at = new Date();
return output