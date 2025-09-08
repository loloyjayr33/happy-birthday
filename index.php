<?php
// index.php — Happy 22th Birthday Francisco
?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <title>Happy 22th Birthday Francisco</title>
    <link rel="stylesheet" href="style.css">
</head>

<body>
    <div class="page">
        <div class="hero">
            <!-- Left side: Greeting + Photo -->
            <div class="left">
                <h1 class="greeting">🎉 Happy 22th Birthday Francisco 🎉</h1>
                <p class="sub">Wishing you all the best on your special day!</p>

                <div class="photo-wrap">
                    <img src="assets/francisco.jpg" alt="Francisco">
                </div>

                <div class="audio-row">
                    <audio id="song" controls>
                        <source src="assets/happy_birthday.mp3" type="audio/mpeg">
                        Your browser does not support the audio element.
                    </audio>
                </div>
            </div>

            <!-- Right side: Cake made with CSS layers + candles -->
            <div class="right">
                <div class="cake-scene">
                    <div class="cake">
                        <div class="layer layer-top"></div>
                        <div class="layer layer-middle"></div>
                        <div class="layer layer-bottom"></div>

                        <div class="candles">
                            <div class="candle">
                                <div class="flame"></div>
                            </div>
                            <div class="candle">
                                <div class="flame"></div>
                            </div>
                            <div class="candle">
                                <div class="flame"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <script src="candles.js"></script>
</body>

</html>