let s1 = [];
    let s2 = [];
  
    
    function enqueue(e1) {
        s1.push(e1);
        console.log("The element in the stack ", s1);
    }
  
    
    function dequeue() {
        if (s2.length === 0) {
            if (s1.length === 0) {
                console.log(
            "No element in the stack");
       
            }
            while (s1.length > 0) {
                let x = s1.pop();
                s2.push(x);
            }
        }
        console.log("Element after Dequeue: " + s2.pop());
    }
  
    enqueue("a");
    enqueue("b");
   
    dequeue();