const fetchData = () => {
    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("DONE");
        }, 1500);
    });
    return promise;
};

setTimeout(() => {
    console.log("Timer is done!");
    fetchData().then()
}, 2000);