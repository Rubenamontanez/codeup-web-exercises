for (var i = 1; i < 100; i++) {

    if (i % 2 !== 0) {
        // skipping all odd numbers;
        continue;
    }

    console.log('Here is a lovely even number: ' + i);
}