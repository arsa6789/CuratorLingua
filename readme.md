# ShadowCustomTab

A minimal, performance-focused extension for Firefox and Google Chrome that replaces your default new tab page with a beautiful, distraction-free environment utilizing custom video backgrounds.

## File Structure

```text
CuratorLingua/
├── manifest.json      # Extension entry point & layout registration
├── content.html       # The fullscreen new tab webpage structure
├── app.js             # Local video storage, retrieval, and playback logic
├── example.mp4        # Default fallback video asset
└── readme.md          # Documentation
```

## Features

* **Zero Bloat:** Completely distraction-free workspace with no hidden tracking, ads, or analytics feeds.
* **Persistent Offline Storage:** Uses **IndexedDB** instead of typical storage API blocks, allowing you to save large `.mp4` video files directly within your browser cache without hitting a storage size quota.
* **Smart UI Overlay:** The control panel sits out of sight in the bottom right corner with a muted transparency layer, surfacing only when hovered.
* **Fallback Asset Built-in:** Includes an automatic fallback to `example.mp4` when no custom file has been specified yet.

## Installation

### 🦊 Firefox (Developer / Temporary Setup)
1. Open Firefox and type `about:debugging` into the address bar.
2. Select **This Firefox** from the left-hand navigation pane.
3. Click the **Load Temporary Add-on…** button.
4. Browse into your `CuratorLingua` folder and select the `manifest.json` file.

### 🌐 Google Chrome (Unpacked Developer Mode)
1. Open Google Chrome and head over to `chrome://extensions/`.
2. Toggle the **Developer mode** switch active in the top-right corner.
3. Click on the **Load unpacked** button located on the top left.
4. Select your root project directory (`CuratorLingua`).

## Storage Concept

Standard extension settings storage limits data sizes to small amounts (usually around 5MB to 10MB max). To bypass this structural bottleneck, this project routes the uploaded binary files through an offline **IndexedDB Object Store**, caching chunks directly on your hardware. This guarantees ultra-fast new tab loads with zero rendering latency.

## License

MIT License. Modify, share, and expand it as you like!
