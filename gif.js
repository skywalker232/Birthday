// Array of GIFs and messages
const gifs = [
    { src: "./gifs/gif1.gif", message: "So ye ek chota sa message mere taraf se next pe click karte jana ....aise to ye december wala ke liye tha but koi na tab kuch aur acha soch lenge 👉👈 !" },
    { src: "./gifs/hug.gif", message: "Sorry 😭 ham bhul gaye the aj tumhara birthday hai , but I Love You Verry Verry Verryyy muchh ❤️❤️❤️❤️❤️❤️❤️ " },
    { src: "./gifs/hands.gif", message: "First time jab tumko toch kiye the tumhara hath pakde the and tumko hug kiye the dam ke uppar mere life ka best moment tha wo ham to chahte the hamesha wahi rahe kahi aur na jaye hamse to control hi nahi ho raha tha 😌 " },
    { src: "gifs/couples-love.gif", message: "umm hamko tumhare gal bhaut zayada pasand hai ... aur usko touch karna aur bhi zyada 😍 .. samandar ka pani blue blue .. mere babu ka gal 😉" },
    { src: "./gifs/couple.gif", message: " Aur yad hai jab security guard andhere me jane nahi diya tha aur fir bye bolne bad tum wo hug ki thi 😍 ekdam goosebumbs aa gaya tha hamko aur fir bad me bhi jab bhi ham jate the tum hug karti thi sabke samne ham itna khushhote the aur thora shy bhi par bhaut zyadaa acha lagta tha wo 🤩  " },
    { src: "gifs/lily-and-marigold.gif", message: "to bas itna hi tumse to kuch payar bhar confesion hota hi nahi hai 😔.. hamhi kar diye  ... byee byee LOVE YOU ❤️❤️❤️❤️ " },
   
  ];
  
  let currentIndex = 0;
  
  // Get elements
  const gifElement = document.getElementById("gif");
  const messageElement = document.getElementById("message");
  const nextButton = document.getElementById("next-btn");
  
  // Function to update GIF and message
  function updateContent() {
    gifElement.src = gifs[currentIndex].src;
    messageElement.textContent = gifs[currentIndex].message;
  }
  
  // Event listener for the "Next" button
  nextButton.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % gifs.length; // Loop through the array
    updateContent();
    // Trigger confetti
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
    });
  });
  // Initialize with the first GIF and message
  updateContent();

  