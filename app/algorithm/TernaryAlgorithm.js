class TernaryAlgorithm {
    constructor() {
        this.type = "Ternary";
    }

    search (data, valueToSearch) {
        return this._searchIndex(data, valueToSearch, 0, data.length - 1);
    }

    _searchIndex (data, valueToSearch, iLeft, iRight) {
        let iThird = Math.ceil((iRight - iLeft) / 3),
            iLeftThird = iLeft + iThird,
            iRightThird = iLeftThird + iThird,
            leftThirdValue = data[iLeftThird],
            rightThirdValue = data[iRightThird];

        if(leftThirdValue > valueToSearch) {
            return this._searchIndex(data, valueToSearch, iLeft, iLeftThird);
        } else if(leftThirdValue === valueToSearch) {
            return iLeftThird;
        } else if(rightThirdValue < valueToSearch) {
            return this._searchIndex(data, valueToSearch, iRightThird, iRight);
        } else if(rightThirdValue === valueToSearch) {
            return iRightThird;
        } else {
            return this._searchIndex(data, valueToSearch, iLeftThird, iRightThird);
        }
    }
}