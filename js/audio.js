window.addEventListener("DOMContentLoaded", () => {
    const audio = new Audio("./js/kırpaptyası.mp3"); // kendi müzik dosyana göre yolu değiştir
    audio.loop = true;
    audio.volume = 0.5;

    // Otomatik başlatmayı dene
    const playAudio = () => {
        audio.play().catch((e) => {
            console.warn("Tarayıcı otomatik oynatmaya izin vermedi.");
        });
    };

    // Hemen dene
    playAudio();

    // Eğer engellenirse, kullanıcı tıkladığında başlat
    document.body.addEventListener("click", () => {
        playAudio();
    }, { once: true });
});
