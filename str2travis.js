function char2travis(c){
  if(c.match(/[a-zA-Z]/i)){
    return c
  }else if(c==='\n'){
    return "\\n"
  }else if(c==='\t'){
    return "\\t"
  }else{
    return `\\${c}`
  }
}
function str2travis(s){
  if(s.length===0){return ""}
  return Array.from(s).map(char2travis).reduce((x,y)=>x+y)
}
exports.str2travis=str2travis
