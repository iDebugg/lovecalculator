function calculate() {

    var input1 = pn.value;

    var input2 = ln.value;


    display.innerHTML = ""

    if (input1 == "" || input2 == "") {

        alert("Enter Both Names");

    } else {
        var ans = Math.random() * 100
        var roud = Math.round(ans)

        if (roud > 0 && roud <= 40) {
            display.innerHTML = `
            <h4>You and ${input2} do not match</h4>
            <h5 style="color: red;">${roud} %</h5>
        <h4>Please do not date ${input2}!</h4>
       
        `
        } else if (roud > 40 && roud < 60) {

            display.innerHTML = `
            <h4>You and ${input2} do not match</h4>
            <h5 style="color: red;">${roud} %</h5>
        <h4>Please do not date ${input2}!</h4>
        `

        } else if (roud >= 61 && roud < 70) {

            display.innerHTML = `
            <h4>You and ${input2} is quite a match</h4>
            <h5 style="color: red;">${roud} %</h5>
        <h4>You might consider dating ${input2}!</h4>
        `

        } else if (roud >= 71 && roud < 100) {

            display.innerHTML = `
            <h4>You and ${input2} are a great match</h4>
            <h5 style="color: green;">${roud} %</h5>
        <h4>Please give ${input2} a chance!</h4>
        `

        }


    }
}