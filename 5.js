function Anagram (str1, str2) {

   
    if (str1.length !== str2.length) {
        return false;
    }
    
  
    var a = str1.split('').sort().join('');
    var b = str2.split('').sort().join('');

   
    return (a === b);
}

console.log(Anagram('mary','army'));