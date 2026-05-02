# Universal Remote Card

A super customizable universal remote card for Home Assistant Lovelace.

## Features

- Supports Android TV, Fire TV, Apple TV, Roku, LG webOS, Samsung TV, Kodi, and more
- Highly customizable button layout via YAML rows
- Touch/swipe pad, sliders, circle pad elements
- Hold, double-tap, momentary actions
- Haptic feedback
- Full HA service call support
- Built-in keyboard dialogs per platform

## Installation via HACS

1. Add this repository as a custom repository in HACS (category: **Lovelace**)
2. Install "Universal Remote Card"
3. Add to your Lovelace dashboard as `custom:universal-remote-card`

## Quick Start

```yaml
type: custom:universal-remote-card
platform: Fire TV
remote_id: remote.fire_tv
rows:
  - - back
    - power
    - home
    - menu
  - - touchpad
    - - volume_buttons
  - - rewind
    - previous
    - play_pause
    - next
    - fast_forward
```
