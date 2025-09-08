// candles.js — add subtle randomized flicker to each flame, emit smoke puffs
(function () {
    const flames = Array.from(document.querySelectorAll('.flame'));
    const candles = Array.from(document.querySelectorAll('.candle'));
    if (!flames.length) return;

    function flicker(el) {
        const t = Math.random() * 900 + 300; // duration
        const scale = 0.9 + Math.random() * 0.3;
        const rotate = (Math.random() - 0.5) * 6;

        // apply small CSS variable nudges for scale/rotation so pseudoelements follow
        el.style.setProperty('--s', scale.toFixed(2));
        el.style.setProperty('--r', `${rotate.toFixed(1)}deg`);

        // animate a slight translate/rotate to the flame element for visual movement
        el.animate([
            { transform: `translateX(-50%) scale(${scale}) rotate(${rotate}deg)`, opacity: 0.95 },
            { transform: `translateX(-50%) scale(${1 / scale}) rotate(${-rotate}deg)`, opacity: 0.72 }
        ], { duration: t, easing: 'ease-in-out' });

        // slightly sway the parent candle
        const parent = el.closest('.candle');
        if (parent) {
            const sway = (Math.random() - 0.5) * 6; // deg
            parent.style.transform = `rotate(${sway}deg)`;
            setTimeout(() => parent.style.transform = 'rotate(0deg)', t * 0.9);
        }

        setTimeout(() => flicker(el), t * (0.6 + Math.random() * 0.8));
    }

    // start each flame with a slightly offset time
    flames.forEach((f, i) => setTimeout(() => flicker(f), i * 120 + Math.random() * 300));

    // Periodically emit smoke puffs from random flames
    function emitSmokeFrom(flame) {
        const smoke = document.createElement('div');
        smoke.className = 'smoke';
        const candle = flame.closest('.candle');
        if (!candle) return;
        candle.appendChild(smoke);

        // remove after animation completes
        setTimeout(() => smoke.remove(), 2800);
    }

    // emit smoke occasionally from a random candle
    setInterval(() => {
        const idx = Math.floor(Math.random() * flames.length);
        emitSmokeFrom(flames[idx]);
    }, 1200 + Math.random() * 1200);

    // Attempt to autoplay — modern browsers often block autoplay with sound.
    const audio = document.getElementById('song');
    if (audio) {
        audio.muted = false; // leave this to user agent; controls allow unmute/pause
        audio.addEventListener('play', () => console.log('Happy Birthday playing'));
    }
})();
// candles.js — add subtle randomized flicker to each flame
(() => {
    const flames = Array.from(document.querySelectorAll('.flame'));
    if (!flames.length) return;

    function flicker(el) {
        const t = Math.random() * 900 + 300; // duration
        const scale = 0.9 + Math.random() * 0.3;
        const rotate = (Math.random() - 0.5) * 6;
        el.animate([
            { transform: `translateX(-50%) scale(${scale}) rotate(${rotate}deg)`, opacity: 0.95 },
            { transform: `translateX(-50%) scale(${1 / scale}) rotate(${-rotate}deg)`, opacity: 0.7 }
        ], { duration: t, easing: 'ease-in-out' });
        setTimeout(() => flicker(el), t * (0.6 + Math.random() * 0.8));
    }

    // start each flame with a slightly offset time
    flames.forEach((f, i) => setTimeout(() => flicker(f), i * 120 + Math.random() * 300));

    // Attempt to autoplay — modern browsers often block autoplay with sound.
    const audio = document.getElementById('song');
    if (audio) {
        audio.muted = false; // leave this to user agent; controls allow unmute/pause
        // if autoplay fails, user can press play
        audio.addEventListener('play', () => console.log('Happy Birthday playing'));
    }
})();
