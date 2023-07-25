function fibonacci(num) {
    let outputArr = [];
    if (num === 1) {
        outputArr.push(0);
        console.log(outputArr);
    } else if (num === 2) {
        outputArr.push(0);
        outputArr.push(1);
        console.log(outputArr);
    } else {
        outputArr = [0, 1];
        for (let i = 0; i < num - 1; i++) {
            outputArr.push(outputArr[i + 1] + outputArr[i]);
        }
        console.log(outputArr);
        console.log(outputArr[num]);
    }

}

fibonacci(10);