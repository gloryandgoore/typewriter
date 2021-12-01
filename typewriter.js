const sentence = "hello there from lighthouse Labs";
let iterate = 0
let typeSpeed = 180;

for (const char of sentence) {
    setTimeout(() =>{
    process.stdout.write(`${char}`);   
    }, iterate);
    iterate += typeSpeed;
}
setTimeout(() => {
    process.stdout.write('\n');
}, iterate);