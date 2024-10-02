function distanceFromHqInBlocks(someValue) {
    const hqLocation = 42;
    return Math.abs(someValue - hqLocation);
}
console.log(distanceFromHqInBlocks(50));
console.log(distanceFromHqInBlocks(34));

function distanceFromHqInBlocks(someValue) {
    const hqLocation = 42;
    return Math.abs(someValue - hqLocation);
}

function distanceFromHqInFeet(someValue) {
    const feetBlock = 264;
    const blocks = distanceFromHqInBlocks(someValue);
    return feetBlock * blocks;
}
console.log(distanceFromHqInFeet(50));
console.log(distanceFromHqInFeet(34));

function distanceTravelledInFeet(start, destination) {
    const feetBlock = 264;
    const blocksTravelled = Math.abs(destination - start);
    return blocksTravelled * feetBlock;
}
console.log(distanceTravelledInFeet(43,48));
console.log(distanceTravelledInFeet(50,60));
console.log(distanceTravelledInFeet(34,28));

function distanceTravelledInFeet(start, destination) {
    const feetBlock = 264;
    const blocksTravelled = Math.abs(destination - start);
    return blocksTravelled * feetBlock;
}

function calculatesFarePrice(start, destination) {
    const distance = distanceTravelledInFeet(start, destination);

    if (distance<=400) {
        return 0;
    }
    else if (distance>400 && distance<=2000) {
        return (distance - 400) * 0.02;
    }
    else if (distance>=2000 && distance<=2500) {
        return 25;
    }
    else {
        return 'cannot travel that far';
    }
}
console.log(calculatesFarePrice(43,44));
console.log(calculatesFarePrice(34,32));
console.log(calculatesFarePrice(50,58));
console.log(calculatesFarePrice(34,24));