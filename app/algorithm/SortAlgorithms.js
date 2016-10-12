const bucketSort = function (data) {
    const DEFAULT_BUCKET_SIZE = 5;
    let result = [],
        dataAmount = data.length,
        minValue = data[0],
        maxValue = data[0],
        defaultBucketSize = DEFAULT_BUCKET_SIZE,
        bucketsAmount = 0,
        buckets = [];

    //find range
    for(let i = 1, currentValue = 0; i < dataAmount; i++) {
        currentValue = data[i];
        if(currentValue < minValue) {
            minValue = currentValue;
        } else if (currentValue > maxValue) {
            maxValue = currentValue;
        }
    }

    //init buckets
    bucketsAmount = Math.floor((maxValue - minValue) / defaultBucketSize) + 1;
    buckets = new Array(bucketsAmount);
    for(let i = 0; i < bucketsAmount; i++) {
        buckets[i] = [];
    }

    //distributing the values
    for(let i = 0, currentValue = 0, bucketIndex = 0; i < dataAmount; i++) {
        currentValue = data[i];
        bucketIndex = Math.floor((currentValue - minValue) / defaultBucketSize);
        buckets[bucketIndex].push(currentValue);
    }

    //sort buckets
    for(let i = 0, currentBucket = [], bucketItemsAmount = 0; i < bucketsAmount; i++) {
        currentBucket = buckets[i];
        bucketItemsAmount = currentBucket.length;
        insertionSort(currentBucket);
        for(let j = 0; j < bucketItemsAmount; j++) {
            result.push(currentBucket[j]);
        }
    }

    return result;
};

const insertionSort = function (data) {
    let len = data.length;
    for(let i = 1, j = 0, currentValue = 0; i < len; i++) {
        currentValue = data[i];
        j = i - 1;
        while( j >= 0 && currentValue < data[j]) {
            data[j+1] = data[j];
            j--;
        }
        data[j+1] = currentValue;
    }
    return data;
};