 
         document.addEventListener("keydown", (e) => {
            if (e.key == "Enter") {
                myFunction();
                document.getElementById("input").value = "";
            }
        })
         function myFunction() {
            let input = Number(document.getElementById('input').value);
            let result = "";
            let factorial = 1;
        
            for( i=1; i<=input; i++){
             factorial = factorial * i
             result += `Your Entered ${input} Your Counting is: ${i} And Your Factorial is ${factorial} <br>`
            
            }
            document.getElementById('output').style.display = "flex";
            document.getElementById('output').innerHTML = `${result}`;
}   
