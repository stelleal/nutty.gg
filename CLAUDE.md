# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a collection of streaming widgets for content creators, designed to be used as Browser Sources in OBS Studio. The repository contains over 20 different widgets for various streaming platforms including Twitch, YouTube, Kick, and TikTok.

## Architecture

### Widget Structure
Each widget follows a consistent structure:
- `index.html` - Main widget HTML
- `script.js` - Widget logic and API connections
- `style.css` - Widget styling
- `configure/` folder (for complex widgets) - Configuration interface
- `settings/` folder (for some widgets) - Settings management

### Core Technologies
- **Frontend**: Vanilla HTML/CSS/JavaScript (no frameworks)
- **APIs**: 
  - Streamer.bot WebSocket connections for real-time events
  - YouTube Music Desktop App API (port 9863)
  - Spotify Web API
  - Various streaming platform APIs
- **Hosting**: GitHub Pages with custom domain `widgets.zinphes.com`

### Visual Style System
The repository implements the **Zinphes Design System** (see `zinphes_implementation_guide.md`):
- Nostalgic CRT aesthetic with scanlines
- Color palette: `#0f0f23` (primary), `#7aa3ff` (accent), `#cccccc` (text)
- Typography: JetBrains Mono, Space Mono, Orbitron fonts
- 4px border radius standard

## Development Commands

### Local Testing
Use `test-preview.html` for local testing of widgets with placeholder content.

### Widget Configuration
Most widgets use URL parameters for configuration:
- `?address=127.0.0.1&port=8080` - Streamer.bot connection
- `?token=...` - Authentication tokens (YouTube Music, Spotify)
- `?compact` - Enable compact mode (YouTube Music widget)
- `?crtEffect` - Enable CRT scanlines and flicker effects
- `?test` - Enable test mode with placeholder data
- Widget-specific parameters for colors, fonts, behavior

## Key Widget Types

### Music Widgets
- **YouTube Music**: Requires YouTube Music Desktop App running on port 9863
  - Single widget supports both standard and compact modes via `?compact` parameter
  - Standard mode: Full layout with album art
  - Compact mode: Condensed layout without album art
- **Spotify**: Uses OAuth flow with client ID/secret configuration
- Both have standard and compact versions

**IMPORTANT - DISABLED WIDGETS**: 
The following widgets are DISABLED and must NOT be modified under any circumstances:
- `apple-music-widget`
- `apple-music-widget-compact`
- `spotify-widget` 
- `spotify-widget-compact`

### Stream Alerts
- **multistream-alerts**: Handles follows, subs, donations across platforms with platform-specific styling
  - Features platform-specific username colors (Twitch: #9146ff, YouTube: #ff4444, Kick: #66d9a3, Ko-fi: #ff6b9d)
  - Robust avatar loading with fallback images for API failures
  - Supports multiple alert types with customizable backgrounds
- **multichat-overlay**: Multi-platform chat overlay
- Connect via Streamer.bot WebSocket (default 127.0.0.1:8080)

### Utility Widgets
- **obs-info-hud**: Stream information display
- **twitch-uptime-widget**: Show stream uptime
- **clock-widget**: Customizable clock display

## Important Implementation Details

### URL Generation
Widgets use dynamic base URL detection to support both local testing and deployed environments:
```javascript
const baseURL = window.location.origin + window.location.pathname.replace('/index.html', '').replace('index.html', '').replace(/\/$/, '');
```

### WebSocket Connections
Most alert widgets connect to Streamer.bot via WebSocket:
```javascript
const sbServerAddress = urlParams.get("address") || "127.0.0.1";
const sbServerPort = urlParams.get("port") || "8080";
```

### Platform-Specific Styling (multistream-alerts)
The multistream-alerts widget implements platform-specific username colors:
- CSS classes are applied based on platform (`.twitch`, `.youtube`, `.kick`, `.kofi`)
- Colors defined in `info.txt`: Twitch (#9146ff), YouTube (#ff4444), Kick (#66d9a3), Ko-fi (#ff6b9d)
- Other platforms default to accent color (#7aa3ff)
- Platform classes are always applied regardless of custom background settings

### Avatar Handling with Fallbacks (multistream-alerts)
Robust avatar loading system with error handling:
```javascript
// Example for Twitch API call with fallback
try {
    let response = await fetch('https://decapi.me/twitch/avatar/' + username);
    if (!response.ok) throw new Error(`HTTP error ${response.status}`);
    return await response.text();
} catch (error) {
    console.error(`Failed to fetch avatar:`, error.message);
    return 'icons/default-pfp/default-pfp-twitch.png';
}
```
- Fallback images located in `multistream-alerts/icons/default-pfp/`
- Supports Twitch, Kick, and YouTube avatar failures
- Uses platform-specific default images when API calls fail

### Clipboard Functionality
Configuration pages implement fallback clipboard methods for HTTP environments:
- Primary: `navigator.clipboard.writeText()`
- Fallback: `document.execCommand('copy')`

## Design System Application

When styling widgets, follow the Zinphes guidelines:
1. Apply CSS custom properties for colors
2. Use specified font hierarchy (JetBrains Mono for body, Orbitron for headers, Space Mono for highlights)
3. Add CRT scanline effects with low opacity
4. Implement proper border-radius and glow effects
5. Ensure all background images respect container border-radius

## Testing Strategy

Use the included `test-preview.html` for visual testing of styled widgets with placeholder content. This allows testing visual changes without requiring actual streaming setup or API connections.

## Widget Integration

Streamers typically:
1. Configure widget via its `/configure` page or settings
2. Copy generated Browser Source URL
3. Add as Browser Source in OBS Studio
4. Connect Streamer.bot for event-driven widgets (alerts, chat)