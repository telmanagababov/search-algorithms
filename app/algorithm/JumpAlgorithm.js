class JumpAlgorithm {
    constructor() {
        this.type = "Jump";
    }

    search (data, valueToSearch) {
        let blockIndex = this._getBlockIndex(data, valueToSearch);
        return this._linearSearch(data, valueToSearch, blockIndex);
    }

    _getBlockIndex (data, valueToSearch) {
        let dataSize = data.length,
            blockSize = Math.sqrt(dataSize),
            blockIndex = 0,
            nextBlockIndex = blockSize;
        while(data[Math.min(nextBlockIndex, dataSize - 1)] < valueToSearch) {
            blockIndex = nextBlockIndex;
            nextBlockIndex += blockSize;
        }
        return blockIndex;
    }

    _linearSearch (data, valueToSearch, startIndex) {
        let valueIndex = startIndex + 1;
        while(data[valueIndex] < valueToSearch) {
            valueIndex++;
        }
        return valueIndex;
    }
}