 const gifs = [
      { src: "./gifs/gif1.gif", message: "So ye ek chota sa message mere taraf se next pe click karte jana ....aise to ye december wala ke liye tha but koi na tab kuch aur acha soch lenge 👉👈 !" },
      { src: "./gifs/hug.gif", message: "Sorry 😭 ham bhul gaye the aj tumhara birthday hai , but I Love You Verry Verry Verryyy muchh ❤️❤️❤️❤️❤️❤️❤️ " },
      { src: "./gifs/hands.gif", message: "First time jab tumko toch kiye the tumhara hath pakde the and tumko hug kiye the dam ke uppar mere life ka best moment tha wo ham to chahte the hamesha wahi rahe kahi aur na jaye hamse to control hi nahi ho raha tha 😌 " },
      { src: "gifs/couples-love.gif", message: "umm hamko tumhare gal bhaut zayada pasand hai ... aur usko touch karna aur bhi zyada 😍 .. samandar ka pani blue blue .. mere babu ka gal 😉" },
      { src: "./gifs/couple.gif", message: " Aur yad hai jab security guard andhere me jane nahi diya tha aur fir bye bolne bad tum wo hug ki thi 😍 ekdam goosebumbs aa gaya tha hamko aur fir bad me bhi jab bhi ham jate the tum hug karti thi sabke samne ham itna khush hote the aur thora shy bhi par bhaut zyadaa acha lagta tha wo 🤩  " },
      { src: "gifs/lily-and-marigold.gif", message: "to bas itna hi tumse to kuch payar bhar confesion hota hi nahi hai 😔.. hamhi kar diye  ... byee byee LOVE YOU ❤️❤️❤️❤️ " },
    ]; 
    
    let currentIndex = 0;
    
    // Get elements
    const gifElement = document.getElementById("gif");
    const messageElement = document.getElementById("message");
    const nextButton = document.getElementById("next-btn");
    const heartsContainer = document.getElementById("hearts-container");
    
    // Function to update GIF and message
    function updateContent() {
      gifElement.src = gifs[currentIndex].src;
      messageElement.textContent = gifs[currentIndex].message;
    }
    
    // Create sparkles
    function createSparkles() {
      const sparkle = document.createElement('div');
      sparkle.classList.add('sparkle');
      sparkle.style.left = `${Math.random() * 100}%`;
      sparkle.style.top = `${Math.random() * 100}%`;
      sparkle.style.animationDuration = `${1 + Math.random() * 2}s`;
      sparkle.style.width = `${3 + Math.random() * 4}px`;
      sparkle.style.height = sparkle.style.width;
      document.body.appendChild(sparkle);
      
      setTimeout(() => {
        sparkle.remove();
      }, 2000);
    }
    
    // Create floating hearts
    function createHearts() {
      const heart = document.createElement('div');
      heart.classList.add('heart');
      heart.innerHTML = '❤️';
      heart.style.left = `${Math.random() * 100}%`;
      heart.style.animationDuration = `${10 + Math.random() * 10}s`;
      heart.style.fontSize = `${15 + Math.random() * 15}px`;
      heartsContainer.appendChild(heart);
      
      setTimeout(() => {
        heart.remove();
      }, 15000);
    }
    
    // Start animations
    function startAnimations() {
      // Sparkles every 200ms
      setInterval(createSparkles, 200);
      
      // Hearts every 800ms
      setInterval(createHearts, 800);
    }
    
    // Event listener for the "Next" button
    nextButton.addEventListener("click", () => {
      currentIndex = (currentIndex + 1) % gifs.length;
      updateContent();
      // Enhanced confetti
      confetti({
        particleCount: 200,
        spread: 120,
        origin: { y: 0.6 },
        colors: ['#ff0000', '#00ff00', '#0000ff', '#ffff00', '#ff00ff', '#00ffff'],
        shapes: ['circle', 'square'],
        scalar: 1.5,
        ticks: 200
      });
      
      // Extra sparkles on click
      for (let i = 0; i < 20; i++) {
        setTimeout(createSparkles, i * 50);
      }
    });
    
    // Initialize
    updateContent();
    startAnimations();
