class UniformAlgorithm {
    constructor() {
        this.type = "Uniform";
    }

    search (data, valueToSearch) {
        let delta = this._produceDelta(data.length),
            iDelta = 0,
            valueIndex = delta[iDelta] - 1;

        while (data[valueIndex] !== valueToSearch) {
            iDelta++;
            if(data[valueIndex] < valueToSearch) {
                valueIndex += delta[iDelta];
            } else {
                valueIndex -= delta[iDelta];
            }
        }

        return valueIndex;
    }

    _produceDelta (size) {
        let delta = [],
            i = 0,
            power = 1,
            currentPower = 0;

        do {
            currentPower = power;
            power <<= 1;
            delta[i] = Math.floor((size + currentPower) / power);
        } while (delta[i++] !== 0);

        return delta;
    }
}