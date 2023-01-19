// errors try, catch

function failed() {
    try {
         console.log('this works');
    } catch (err) {
         console.log('we made oopsie', err.message);//err.name & err.stack(trace)
    } finally {
        console.log('still working');
    }
}

