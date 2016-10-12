class BinaryAlgorithm {
    constructor() {
        this.type = "Binary";
    }

    search (data, valueToSearch) {
        let valueIndex = 0;

        // bucketSort(data);

        for (let iStart = 0, iMiddle = 0, iEnd = data.length, middleValue = 0;;) {
            iMiddle = Math.floor((iStart + iEnd) / 2);
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
}