let budget = prompt("Vul hier uw gewenste bedrag in:")

function BudgetCheck(){
    var product = 60;
    
    if (budget > product){
        console.log("Transactie voltooid.");
        alert("Transactie voltooid.");
        document.getElementById("voldoende").style.color = "green";
        document.getElementById("voldoende").innerHTML = "Er is geld van uw rekening afgeschreven.";
    }   else{
        console.log("Transactie afgebroken.");
        alert("Transactie afgebroken.");
        document.getElementById("voldoende").style.color = "red";
        document.getElementById("voldoende").innerHTML = "Uw transactie is niet afgeschreven.";
    }
}