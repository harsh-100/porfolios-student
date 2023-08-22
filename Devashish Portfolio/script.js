
// const getRandomNumber = (maxNum) => {
//     return Math.floor(Math.random() * maxNum);
//   };

//   const getRandomColor = () => {
//     const h = getRandomNumber(360);
//     const s = getRandomNumber(100);
//     const l = getRandomNumber(100);
//     return `hsl(${h}deg, ${s}%, ${l}%)`;
//   };

  const colors=["#336699", "#FF5733", "#33CC99","#ff4040","#ffc0cb", "#ffd700"];

  function myFunction(){
    const randomIndex=Math.floor(Math.random()*colors.length);
    document.getElementById("head").style.backgroundColor = colors[randomIndex];
}





// function random_bg_color() {
//     var x = Math.floor(Math.random() * 256);
//     var y = Math.floor(Math.random() * 256);
//     var z = Math.floor(Math.random() * 256);
//     var bgColor = "rgb(" + x + "," + y + "," + z + ")";
  
//     document.body.style.background = bgColor;
//     }