function mapToNegativize(sourceArray) {
    const newArr = []
    for (const int of sourceArray) {
        newArr.push(-(int))
    }
    return newArr
}

function mapToNoChange(sourceArray) {
    return sourceArray
}

function mapToDouble(sourceArray) {
    const newArr = []
    for (const int of sourceArray) {
        newArr.push(int * 2)
    }
    return newArr
}

function mapToSquare(sourceArray) {
    const newArr = []
    for (const int of sourceArray) {
        newArr.push(Math.pow(int, 2))
    }
    return newArr
}

function reduceToTotal(sourceArray, startingPoint=0) {
    let total = startingPoint
    for (const int of sourceArray) {
        total += int
    }
    return total
}

function reduceToAllTrue(sourceArray) {
    for (const bool of sourceArray) {
        if (!!bool === false) { return false }
    }
    return true
}

function reduceToAnyTrue(sourceArray) {
    for (const bool of sourceArray) {
        if (!!bool === true) { return true }
    } 
        return false
}