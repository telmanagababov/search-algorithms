class LinearAlgorithm {
    constructor() {
        this.type = "Linear";
    }

    search (data, value) {
        let valueIndex = 0;
        for(let i = 0, len = data.length; i < len; i++) {
            if(data[i] === value) {
                valueIndex = i;
                break;
            }
        }
        return valueIndex;
    }
}