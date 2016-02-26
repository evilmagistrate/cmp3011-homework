function randomFruit () {

        var fruitArray = [
        "jackfruit" ,
        "papaya" ,
        "pineapple" ,
        "mango" ,
        "kumquat",
        "persimmon",
        "guava"
        ] ;
        
        var rando = fruitArray[Math.floor(Math.random() * fruitArray.length)];
        document.write(rando) ;
    }

