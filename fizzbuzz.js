class FizzBuzz {
    static say(number) {
        // if (number % 3 === 0 && number % 5 === 0) {
        //     return "FizzBuzz";
        // } else if (number % 5 === 0) {
        //     return "Buzz";
        // } else if (number % 3 === 0) {
        //     return "Fizz";
        // }
        // return number;

        //     switch (true) {
        //         case number % 15 === 0:
        //             return "FizzBuzz";
        //         case number % 3 === 0:
        //             return "Fizz";
        //         case number % 5 === 0:
        //             return "Buzz";
        //         default:
        //             return number;
        //     }
        // }

        switch (true) {
            case this.mod(number, 15) === 0:
                return "FizzBuzz";
            case this.mod(number, 3) === 0:
                return "Fizz";
            case this.mod(number, 5) === 0:
                return "Buzz";
            default:
                return number;
        }
    }

    static mod(number, base) {
        // while (number >= base) {
        //     number -= base;
        // }
        // return number;
        return number - Math.floor(number / base) * base;
    }
}

module.exports = FizzBuzz;