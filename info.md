# Firemote
Super customizable universal remote card and integration for Home Assistant.
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
