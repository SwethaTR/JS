let valid = (string) => {
    let fname = "";
    let mname = "";
    let lname = "";
    let spacecount = 0;
    let dotcount = 0;
    let e = "";
   
    for (let i = 0; i < string.length; i++) {
      if (string[i] === ".") {
        dotcount += 1;
      }
      if (string[i] === " ") {
        spacecount += 1;
      }
      if (spacecount === 0) {
        fname += string[i];
      } else
      if (spacecount === 1) {
        if (string[i] !== " ") {
          mname += string[i];
        }
      } else 
      if (spacecount === 2) {
        if (string[i] !== " ") {
          lname += string[i];
        }
      }
    }
    if (string[string.length - 1] === ".") {
        dotcount -= 1;
      }
    
    let fnameRegex = /^[A-Z][a-zA-Z]+$|^[A-Z]\W$/g;
    let a = fnameRegex.test(fname);
    let a1 = fname.match(fnameRegex);
   
    let mnameRegex = /^[A-Z][a-zA-Z]+$|^[A-Z]\W$/g;
    let b = mnameRegex.test(mname);
    let b1 = mname.match(mnameRegex);
   

    let lastNameRegex = /^[A-Z][a-zA-Z]+$/g;
    let c = lastNameRegex.test(lname);
    let c1 = lname.match(lastNameRegex);
    
      if (a === true && b === true && c === true && spacecount === 2
          && (dotcount === 0 || dotcount === 2)) {
        e = true;
      } else
      if (a === true && b === true && c === true && spacecount === 2 
          && (mname[mname.length - 1] === ".")) {
        e = true;
      } else
      if (a === true && b === true && spacecount === 1) {
        e = true; 
      } else
      e = false;
      
        let fullName = fname + " " + mname + " " + lname
     
      return e;
  };
  
 console.log(valid("Herbert G. Wells"));
console.log(valid("H. Wells"));
  console.log(valid("h. Wells"));
  console.log(valid("H Wells"));
  console.log(valid("H. George Wells"));
  console.log(valid("H. George W."));
  