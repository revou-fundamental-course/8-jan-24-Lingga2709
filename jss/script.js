function calculateSquare() {
    const sideLength = document.getElementById("sideLength").value;
    const result = document.getElementById("result");
    if (sideLength < 1) {
        result.innerText = "Panjang sisi harus lebih besar dari 0.";
    } else {
        const area = sideLength * sideLength;
        result.innerText = `Luas: ${area}`;
    }
}