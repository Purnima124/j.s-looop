let text=""
Loop2:
for (let i = 10; i < 15; i++) {
    if (i === 12) continue Loop2;
    text += i + "\n";
}
console.log(text)