function f1() {
    return new Promise((resolve, resject) => {
        setTimeout(() => {
            console.log("This is f1 function");
            resolve()
        },3000)
    });
}

function f2() {
    console.log("This is f2 function");
}

async function main() {
    await f1()
    f2()
}
main()