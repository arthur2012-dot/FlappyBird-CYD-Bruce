# Flappy Bird Lite for CYD + Bruce

Simple Flappy Bird clone made for the Cheap Yellow Display (ESP32-2432S028) running Bruce Firmware.

Touch the screen to flap.

## Requirements

- Board: ESP32-2432S028 (CYD)
- Firmware: Bruce 1.16.1 or newer (needs the JS interpreter)

## How to install

1. Connect the CYD to WiFi (or use the Bruce hotspot)
2. Open the Bruce web interface
3. Go to File Manager and upload `FlappyBird-Lite.js` to the `/apps` folder (or root)
4. On the device, open Apps / Files and run the script

You can also just copy the file to a SD card and launch it from there.

## Controls

- Touch anywhere (or any button) = flap
- After game over, touch again to restart
- Select or Esc when dead = exit

## Notes

Physics is very basic. Gravity is constant, flap is a fixed upward force. Collision is simple AABB against the pipes and the ground.

Score and best score are only kept while the script is running (they reset when you leave the game).

Made this because I wanted a quick playable Flappy Bird on the CYD without any extra libraries.

---

File: `FlappyBird-Lite.js`
