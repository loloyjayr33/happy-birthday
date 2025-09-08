<?php
// index.php
?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <title>Happy Birthday</title>
    <link rel="stylesheet" href="style.css">
</head>

<body>
    <div class="page">
        <div class="hero">
            <!-- Left column -->
            <div class="left">
                <h1 class="greeting">🎉 Happy 22th Birthday Francisco 🎉</h1>
                <p class="sub">Wishing you all the best on your special day!</p>

                <!-- Francisco photo -->
                <div class="photo-wrap">
                    <img src="assets/francisco.jpg" alt="Francisco"
                        onerror="this.onerror=null; this.src='assets/placeholder.svg';">
                </div>

                <!-- Birthday song -->
                <div class="audio-row">
                    <audio id="song" src="assets/happy_birthday.mp3" autoplay loop></audio>
                </div>
            </div>

            <!-- Right column -->
            <div class="right">
                <!-- Cake image with placeholder fallback -->
                <div class="cake-scene">
                    <div class="cake-wrap"
                        style="width:280px; border-radius:12px; overflow:hidden; border:6px solid #fff; box-shadow:0 6px 18px rgba(0,0,0,0.12); background:#f6f0ff;">
                        <img src="assets/cake.gif" alt="Birthday Cake"
                            onerror="this.onerror=null; this.src='assets/placeholder.svg';"
                            style="width:100%; height:auto; display:block;">
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- Autoplay fallback for browsers -->
    <script>
    document.addEventListener("DOMContentLoaded", function() {
        const song = document.getElementById("song");
        if (song) {
            song.play().catch(() => {
                // if autoplay is blocked, unmute on first user click
                document.body.addEventListener("click", () => song.play(), {
                    once: true
                });
            });
        }
    });
    </script>
</body>

</html>