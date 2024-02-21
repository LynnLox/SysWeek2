const body = document.querySelector(".body")

function generateRandomColor()
{
    const rValue = Math.floor(Math.random()*256);
    const gValue = Math.floor(Math.random()*256);
    const bValue = Math.floor(Math.random()*256);

    console.log(rValue)
    console.log(gValue)
    console.log(bValue);

    body.style.backgroundColor = `rgb(${rValue},${gValue},${bValue})`;
}