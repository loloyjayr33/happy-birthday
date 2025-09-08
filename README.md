# happy-birthday
Webpage for Francisco's  Birthday

## What I added

- `index.php` — main PHP page that outputs the greeting, cake, candles, photo placeholder, and audio player.
- `css/style.css` — styles for layout, colors, and responsiveness.
- `js/candles.js` — script to animate candle flames with randomized flicker.
- `assets/placeholder.svg` — placeholder image used until you upload `assets/francisco.jpg`.

## How to run

Run a local PHP server from the project folder and open the page in a browser:

```powershell
cd "C:\Users\USER\Desktop\web system\happy-birthday"; php -S localhost:8000
```

Then open http://localhost:8000 in your browser.

Notes:
- To include Francisco's photo, save it as `assets/francisco.jpg`.
- To add the song file, place an MP3 at `assets/happy_birthday.mp3`. Modern browsers may block autoplay with sound; the player includes controls so you can start/pause the song.
