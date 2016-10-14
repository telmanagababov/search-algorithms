class FibonacciAlgorithm {
    constructor() {
        this.type = "Fibonacci";
    }

    search (data, valueToSearch) {
        let valueIndex = -1;
        let valuesAmount = data.length,
            {fibValue, fibValue1, fibValue2} = this._getFibonacciRange(valuesAmount),
            isFound = false;

        while (fibValue > 0 && isFound === false) {
            let i = Math.min(valueIndex + fibValue2, valuesAmount - 1);
            if(data[i] < valueToSearch) {
                fibValue = fibValue1;
                fibValue1 = fibValue2;
                fibValue2 = fibValue - fibValue1;
                valueIndex = i;
            } else if(data[i] > valueToSearch) {
                fibValue = fibValue2;
                fibValue1 = fibValue1 - fibValue2;
                fibValue2 = fibValue - fibValue1;
            } else {
                isFound = true;
                valueIndex = i;
            }
        }

        if(isFound == false) {
            valueIndex++;
        }

        return valueIndex;
    }

    _getFibonacciRange(valuesAmount) {
        let fibValue2 = 0,
            fibValue1 = 1,
            fibValue = fibValue2 + fibValue1;

        while (fibValue < valuesAmount) {
            fibValue2 = fibValue1;
            fibValue1 = fibValue;
            fibValue = fibValue2 + fibValue1;
        }

        return {fibValue, fibValue1, fibValue2}
    }
}