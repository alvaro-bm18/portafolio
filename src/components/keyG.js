const keyGenerator = () => {
    let key = "";
    while (key.length != 10) {
        if (Math.random() > 0.5) {
            const code = Math.floor(Math.random() * (123 - 97) + 97);
            key += String.fromCharCode(code);
        }
        else{
            key += Math.floor(Math.random() * 9);
        }
    }
    return key;
}

export default keyGenerator;