function p1() {
    return new Promise((reslove, reject) => {
        setTimeout(() => {
            reslove("P1 Success")
        },2000)
    })
}
function p2() {
    return new Promise((reslove, reject) => {
        setTimeout(() => {
            reslove("P2 Success")
        },2000)
    })
}
function p3() {
    return new Promise((reslove, reject) => {
        setTimeout(() => {
            reslove("P3 Success")
        },2000)
    })
}

async function main() {
    try {
        const result =  await Promise.all([p1(), p2(), p3()]);
        console.log(result);
    } catch (error) {
        console.log("somthing error",error);
        
    }


}
main()