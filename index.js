function createRandom() {
    let randomNum = Math.floor(1000 + Math.random() * 9000);
    return randomNum
}

function getMessage() {
    let code = document.getElementById('code').value;
    code = parseInt(code);
    console.log("code: ", code);
    textArrayDict = {
        5765: {
            "message": "A mutual? Talk to Him/Her. Get next Clue?",
            "nextcode": "8249", "food": "", "name": "Deep"
        },
        8249: { "name": "Aditi", "message": "Close Friend. Understanding. I've talked to them. Go meet HE/SHE and ask for next clue?", "nextcode": "1825", "food": "Have Croissant and Coffee when you meet." },
        1825: { "name": "Manali", "message": "One of the inner circle friend. Someone who shares the name with someone close to me", "nextcode": "4248", "food": "Go have aunty ke waha ka vadapav" },
        4248: { "name": "Komal", "message": "Special, but far, still there for you, why would you beat her up on street with chappal?", "nextcode": "4188", "food": "" },
        4188: { "name": "Honey", "message": "Sweet as _____.", "nextcode": "1032", "food": "When you meet her, have something sweet!" },
        1032: { "name": "Kashish", "message": "HE/SHE cares for you alot! They knows me, kinda! Closest to you still far!", "nextcode": "1637", "food": "Eat one of her fav food!" },
        1637: { "name": "Activa", "message": "Blue? What's the closest thing to you at the moment? Find the code. ", "nextcode": "6601" },
        6601: {
            "message": "Ruk ja! things are loading yet, Your internet is shit!",
            "name": "Dolly", "nextcode": "5765", "food": ""
        },
        // 6601: {
        //     "message": "The one who loves chap! Talk to HE/SHE, meet and you should have your next clue!",
        //     "name": "Dolly", "nextcode": "5765", "food": ""
        // },

        3406: {
            "message": "Whom did I meet? Have a coffee with them. Oh wait, Don't you want your next clue?",
            "nextcode": "2594", "food": "Coffee", "name": "Aishu"
        },
        2594: { "name": "Ayushi", "message": "Again a mutual. Also friends with someone we both are friends with. Note down the next clue?", "nextcode": "1825", "food": "" },
        7994: { "name": "Karan", "message": "Activa pe round marne chale? Meet and ask for next clue?", "nextcode": "4248", "food": "" },
        5766: { "name": "Aditi", "message": "", "nextcode": "", "food": "" }
    }

    if (code in textArrayDict) {
        alert(textArrayDict[code]["message"] + "\n" + textArrayDict[code]["food"]);
        window.location = '';
        return
    }
    else {
        alert("Check your code again bb! And do not input anything random, it won't work");
        window.location = '';
        return
    }
}