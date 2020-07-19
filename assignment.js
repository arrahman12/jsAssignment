function feetToMile(feet) {

    var result = feet/5280;
    return result;

}



function woodCalculator(chair,table,bed) {

    var totalWood = chair;
    var totalTable = table * 3;
    var totalBed = bed * 5;

    var netTotal = totalWood + totalTable + totalBed;
    return netTotal;

}



function tinyFriend(arr) {

    for (var i = 0; i<arr.length;i++){
        for (var j = i+1; j < arr.length;j++){

            if (arr[i].length > arr[j].length){
                var a = arr[i];
                arr[i] = arr[j];
                arr[j] = a;
            }

        }
    }
    return arr[0];
}


function brickCalculator(n) {

    if ((n-10) === 0 || (n-10) < 0){
        var res = n * 15 * 1000;
        console.log(res);
    }else if (n > 10 && n <= 20) {

        var firstTen = 10 * 15 * 1000;
        var nextTen = ( n - 10 ) * 12 * 1000;
        var ans = firstTen + nextTen;
        console.log(ans);
    }else if (n > 20){
        var firstTen = 10 * 15 * 1000;
        var nextTen = 10 * 12 * 1000;
        var restOfTen = (n - 20) * 10 * 1000;
        var ans = firstTen + nextTen + restOfTen;
        console.log(ans);

    }

}
