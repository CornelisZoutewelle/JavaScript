function BudgetCheck(){
    var budget = 100;
    var product = 60;
    
    if (budget > product){
        console.log("Transactie voltooid.");
        alert("Transactie voltooid.");
        document.getElementById("voldoende").style.color = "green";
        document.getElementById("voldoende").innerHTML = "Transactie voltooid.";
    }   else{
        console.log("Transactie afgebroken.");
        alert("Transactie afgebroken.");
        document.getElementById("voldoende").style.color = "red";
        document.getElementById("voldoende").innerHTML = "Transactie afgebroken.";
    }
}

