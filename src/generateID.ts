
const generateID = () =>{
    const idLength : number = 4
    let ans: string  = ""
    const subset: string = "1234567890qwertyuooplkjhgfdasmzxncbv"

    for( let i = 0; i <= idLength; i++){
        ans += subset[Math.floor(Math.random()*subset.length)]
    }
    return ans
}

export default generateID