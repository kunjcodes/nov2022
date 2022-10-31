function createRandom() {
    let randomNum = Math.floor(1000 + Math.random() * 9000);
    return randomNum
}

function getMessage() {
    let code = document.getElementById('code').value;
    code = parseInt(code);
    console.log("code: ", code);
    textArrayDict = {
        6601: {
            "message": "The one who loves chap! Talk to HE/SHE, meet and you should have your next clue!",
            "name": "Dolly", "nextcode": "5765", "food": ""
        },
        5765: {
            "message": "A mutual? Talk to HE/SHE. Get next Clue?",
            "nextcode": "8249", "food": "", "name": "Deep"
        },
        3406: {
            "message": "Whom did I meet? Have a coffee with them. Oh wait, Don't you want your next clue?",
            "nextcode": "2594", "food": "Coffee", "name": "Aishu"
        },
        2594: { "name": "Ayushi", "message": "Again a mutual. Also friends with someone we both are friends with. Note down the next clue?", "nextcode": "1825", "food": "" },
        1825: { "name": "Manali", "message": "One of the inner circle friend. Vadapav is their neighbor", "nextcode": "7994", "food": "Go have samne vali aunty ke waha ka vadapav" },
        7994: { "name": "Karan", "message": "Activa pe round marne chale? Meet and ask for next clue?", "nextcode": "4248", "food": "" },
        4248: { "name": "Komal", "message": "", "nextcode": "1637", "food": "" },
        1637: { "name": "Activa", "message": "Blue? What's the closest thing to you at the moment? Find the code. ", "nextcode": "4188" },
        8249: { "name": "Aditi", "message": "Close Friend. Understanding. I've talked to her Go meet HE/SHE and ask for next clue?", "nextcode": "3406", "food": "Croissant and Coffee" },
        4188: { "name": "Aditi", "message": "", "nextcode": "1032", "food": "" },
        1032: { "name": "Aditi", "message": "", "nextcode": "5766", "food": "" },
        5766: { "name": "Aditi", "message": "", "nextcode": "", "food": "" }
    }

    if (code in textArrayDict) {
        alert(textArrayDict[code]["message"]);
        window.location = '';
        return
    }
    else {
        alert("Check your code again bb! And do not input anything random, it won't work");
        window.location = '';
        return
    }
}