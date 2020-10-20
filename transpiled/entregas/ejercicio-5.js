console.log("-----Ejercicios entregables 5: Slot Machine-----");
// El objetivo de este ejercicio es crear una máquina tragaperras utilizando clases 
// donde cada vez que juguemos insertemos una moneda. Cada máquina tragaperras (instancia) 
// tendrá un contador de monedas que automáticamente se irá incrementando conforme vayamos jugando.
// Cuando se llame al método play el número de monedas se debe incrementar de forma automática y 
// debe generar tres booleanos aleatorios que representarán el estado de las 3 ruletas. El usuario 
// habrá ganado en caso de que los tres booleanos sean true, y por tanto deberá mostrarse por consola el mensaje:
// "Congratulations!!!. You won <número de monedas> coins!!";
// y reiniciar las monedas almacenadas, ya que las hemos conseguido y han salido de la máquina. En caso contrario deberá mostrar otro mensaje:
// "Good luck next time!!".
var SlothMachine = /** @class */ (function () {
    function SlothMachine() {
        this.coins = 0;
    }
    SlothMachine.prototype.play = function () {
        this.coins += 1;
        var firstSlothMachine = this.randomBool();
        var secondSlothMachine = this.randomBool();
        var thirdSlothMachine = this.randomBool();
        var winner = firstSlothMachine && secondSlothMachine && thirdSlothMachine;
        if (winner) {
            console.log("Congratulations!!!. You won " + this.coins + "!!!");
            this.coins = 0;
        }
        else {
            console.log("Good luck next time!!");
        }
    };
    SlothMachine.prototype.randomBool = function () {
        return Boolean(Math.random() >= 0.5);
    };
    return SlothMachine;
}());
var machine1 = new SlothMachine();
machine1.play();
machine1.play();
machine1.play();
machine1.play();
machine1.play();
machine1.play();
machine1.play();
