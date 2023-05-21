function add() {
    var username = document.getElementById('student').value
    var a = Number(document.getElementById('Mathes').value) 
    var b = Number(document.getElementById('English').value)
    var c = Number(document.getElementById('Physics').value)
    var d = Number( document.getElementById('Biology').value)
    var e = Number( document.getElementById('Chemistry').value)
    var add =(document.getElementById(`total`))
    add.value =a+b+c+d+e;
    document.getElementById("total").value=`Hello ${username} your total this section is ${add.value} %`
}
function Average() {
    var username = document.getElementById('student').value
    var a = Number(document.getElementById('Mathes').value) 
    var b = Number(document.getElementById('English').value)
    var c = Number(document.getElementById('Physics').value)
    var d = Number( document.getElementById('Biology').value)
    var e = Number( document.getElementById('Chemistry').value)
    var Average =(document.getElementById(`Avera`))
    Average.value =a+b+c+d+e/5;
    document.getElementById("Avera").value=`Congratulations  your grade is ${Average.value} %`
}

function Grade() {
    var username = document.getElementById('student').value
    var a = Number(document.getElementById('Mathes').value) 
    var b = Number(document.getElementById('English').value)
    var c = Number(document.getElementById('Physics').value)
    var d = Number( document.getElementById('Biology').value)
    var e = Number( document.getElementById('Chemistry').value)
    var Average =(document.getElementById(`Avera`))
    Average.value =a+b+c+d+e/5;
    
    if (Average.value <= 39) {
        document.getElementById('grade').value = `Hello ${username},F9 this's very poor result.this is a bad result try  to improve yourself!`   
    }
    if (Average.value >= 40) {
        document.getElementById('grade').value = `Hello ${username},E8 this is Pass result.you have to try hard next time Harder!`   
    }
    if (Average.value >= 49) {
        document.getElementById('grade').value = `Hello ${username},D7 this is a very Upon Graduation result.try Harder next time!`   
    }
    if (Average.value >= 50) {
         document.getElementById('grade').value = `Hello ${username},C5 this is  Praiseworthy result.could do better !`
    }
    if (Average.value >= 60) {
        document.getElementById('grade').value = `Hello ${username},C4 this is a Top Honours  result.could do better !`   
    }
    if (Average.value >= 65) {
        document.getElementById('grade').value = `Hello ${username},B3 this is  High Honours  result.more room for improvement!`   
    }

    if (Average.value >= 70) {
        document.getElementById('grade').value = `Hello ${username},B2 this is an Average highest  result. keep pushing!`   
    }
    
    if (Average.value >= 75) {
        document.getElementById('grade').value = `Hello ${username},B1 this is a Brilliant  result. has improved!`   
    }
    
    if (Average.value >= 80) {
        document.getElementById('grade').value = `Hello ${username},A this is an Excellent  result. keep it up!`   
    }
    
    if (Average.value >= 90) {
        document.getElementById('grade').value = `Hello ${username}, A+ this is an Excellent  result. keep it up!`   
    }
}
