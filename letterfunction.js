
function gradeConvert() {

    var grade1 = document.getElementById("grade1").value;
    var grade2 = document.getElementById("grade2").value;
    var grade3 = document.getElementById("grade3").value;
    var grade4 = document.getElementById("grade4").value;
    var grade5 = document.getElementById("grade5").value; 
    var calculate = document.getElementById('convert');

    var ltrA ="A"
    var ltrB ="B"
    var ltrC ="C"
    var ltrD ="D"
    var ltrF ="F"
/*allows for separate inputs with one button */
        if (document.getElementById("grade1").value <= 50){
            document.getElementById("letter1").innerHTML = ltrF;
                }
            if (document.getElementById("grade1").value >= 51){
                    document.getElementById("letter1").innerHTML = ltrD;
                }
            if (document.getElementById("grade1").value >= 70){
                    document.getElementById("letter1").innerHTML = ltrC;
                }
            if (document.getElementById("grade1").value >= 80){
                    document.getElementById("letter1").innerHTML = ltrB;
                }
            if (document.getElementById("grade1").value >= 90){
                    document.getElementById("letter1").innerHTML = ltrA;
                }
//second test grade below
        if (document.getElementById("grade2").value <= 50){
            document.getElementById("letter2").innerHTML = ltrF;
                }
            if (document.getElementById("grade2").value >= 51){
                    document.getElementById("letter2").innerHTML = ltrD;
                }
            if (document.getElementById("grade2").value >= 70){
                    document.getElementById("letter2").innerHTML = ltrC;
                }
            if (document.getElementById("grade2").value >= 80){
                    document.getElementById("letter2").innerHTML = ltrB;
                }
            if (document.getElementById("grade2").value >= 90){
                    document.getElementById("letter2").innerHTML = ltrA;
                }
//third test grade below
        if (document.getElementById("grade3").value <= 50){
            document.getElementById("letter3").innerHTML = ltrF;
                }
            if (document.getElementById("grade3").value >= 51){
                    document.getElementById("letter3").innerHTML = ltrD;
                }
            if (document.getElementById("grade3").value >= 70){
                    document.getElementById("letter3").innerHTML = ltrC;
                }
            if (document.getElementById("grade3").value >= 80){
                    document.getElementById("letter3").innerHTML = ltrB;
                }
            if (document.getElementById("grade3").value >= 90){
                    document.getElementById("letter3").innerHTML = ltrA;
                }
//fourth test grade below
        if (document.getElementById("grade4").value <= 50){
            document.getElementById("letter4").innerHTML = ltrF;
                }
            if (document.getElementById("grade4").value >= 51){
                    document.getElementById("letter4").innerHTML = ltrD;
                }
            if (document.getElementById("grade4").value >= 70){
                    document.getElementById("letter4").innerHTML = ltrC;
                }
            if (document.getElementById("grade4").value >= 80){
                    document.getElementById("letter4").innerHTML = ltrB;
                }
            if (document.getElementById("grade4").value >= 90){
                    document.getElementById("letter4").innerHTML = ltrA;
                }
//fifth test grade below
        if (document.getElementById("grade5").value <= 50){
            document.getElementById("letter5").innerHTML = ltrF;
                }
            if (document.getElementById("grade5").value >= 51){
                    document.getElementById("letter5").innerHTML = ltrD;
                }
            if (document.getElementById("grade5").value >= 70){
                    document.getElementById("letter5").innerHTML = ltrC;
                }
            if (document.getElementById("grade5").value >= 80){
                    document.getElementById("letter5").innerHTML = ltrB;
                }
            if (document.getElementById("grade5").value >= 90){
                    document.getElementById("letter5").innerHTML = ltrA;
                }
//the following shortcut converts "strings" to "numbers"
testAverage = (+grade1 + +grade2 + +grade3 + +grade4 + +grade5) / 5;
var letterAverage = testAverage;

                if(letterAverage <69){
                    document.getElementById("letterAverage").innerHTML= ltrD;    
                }
                if(letterAverage >=70){
                document.getElementById("letterAverage").innerHTML= ltrC;
                }
                if(letterAverage >=80){
                    document.getElementById("letterAverage").innerHTML= ltrB;
                }
                if(letterAverage >=90){
                document.getElementById("letterAverage").innerHTML= ltrA;
                }

document.getElementById("TestAverage").innerHTML= testAverage;
}             
