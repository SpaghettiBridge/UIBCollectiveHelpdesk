const	prefix= "SomeTextGoeshere"
console.log({{data}})
var output = data.map(x=> {return {lastModified: x.lastModified,lastModifiedDate: x.lastModifiedDate,name: prefix.concat("|", x.name),size: x.size,type: x.type,webkitRelativePath: x.webkitRelativePath } })
console.log({{output}})
return {{output}}