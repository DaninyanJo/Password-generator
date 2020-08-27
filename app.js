// function lengthRender() {
//     let btn = document.getElementById('passRange');
//     btn.addEventListener('change', (e) => {
//         let result = document.getElementById('lengthOutput')
//         result.innerText = `Rande is: ${e.target.value}`
//     })
// }
window.onload = () => {
    passLengthRender()
}
function passLengthRender(){
    let result = document.getElementById('passLengthInput').value
    document.getElementById('passLengthOutput').textContent = result
}

function passGen() {
    let cfg = {
        symbols    : "AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz0123456789".split(''), 
        passLength : document.getElementById('passLengthOutput').textContent,
    }
    function gen(){
        let newPass = [];
        for (let i = 0; i < cfg.passLength; i++) {
            let n = (Math.trunc((Math.random()*cfg.symbols.length))) 
            newPass.push(cfg.symbols[n])
        }
        return newPass.join('')

       
    }
    document.getElementById('passOutput').value = gen();
    console.log(gen());
};


function copyPass() {
    let text = document.getElementById("passOutput");
    text.select();
    document.execCommand("copy");
  }