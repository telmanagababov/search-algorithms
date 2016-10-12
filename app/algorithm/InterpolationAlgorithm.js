class InterpolationAlgorithm {
    constructor() {
        this.type = "Interpolation";
    }

    search (data, valueToSearch) {
        let valueIndex = 0;
        let iStart = 0,
            iMiddle = 0,
            iEnd = data.length - 1,
            middleValue = 0;

        // bucketSort(data);

        while(true) {
            iMiddle = this._getMiddleValue(data, valueToSearch, iStart, iEnd);
            middleValue = data[iMiddle];
            if(valueToSearch < middleValue) {
                iEnd = iMiddle;
            } else if(valueToSearch > middleValue) {
                iStart = iMiddle;
            } else {
                valueIndex = iMiddle;
                break;
            }
        }

        return valueIndex;
    }

    _getMiddleValue (data, valueToSearch, iStart, iEnd) {
        return iStart + ((iEnd - iStart) / (data[iEnd] - data[iStart])) * (valueToSearch - data[iStart]);
    }
}