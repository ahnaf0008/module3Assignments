function printObjectProperties(obj){
  if(Object.keys(obj).length === 0){
      console.log("Object is empty.")
  }else{
      for(let i in obj){
          console.log(obj[i])
      }
  }

}


let obj ={
    // name : "Ahnaf",
    // id : "008",
    // salary :23000.66
}

printObjectProperties(obj);