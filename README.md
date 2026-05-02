# Firemote

Firemote is a Home Assistant custom integration and Lovelace card that exposes remote and media player entities for Fire TV and Apple TV devices.

## Installation

### HACS
1. Add custom repository:
   - URL: `https://github.com/bhartiNitish-1707/Fire-Tv`
   - Category: `Integration`
2. Install `Firemote`.
3. Restart Home Assistant.
4. Configure Firemote from Settings > Devices & Services > Integrations.

### Manual installation
1. Copy this repository into `<config>/custom_components/firemote`.
2. Restart Home Assistant.
3. Configure Firemote from the UI.

## Lovelace resource setup
Add this resource:
- Resource type: `Module`
- URL: `/hacsfiles/firemote/dist/firemote-card.js`

Use the card in Lovelace:
```yaml
type: custom:firemote-card
```

## Sample integration configuration
Firemote is configured through the Home Assistant UI integration setup. Add a Firemote integration instance and set the host/IP.

## Services
Use these services:
- `firemote.send_key`
- `firemote.power`
- `firemote.navigation`
- `firemote.volume`
- `firemote.play_pause`
- `firemote.launch_app`

## Supported entities
- `media_player.fire_tv_192_168_1_17`
- `remote.fire_tv_192_168_1_17`
- `media_player.apple_tv`
- `remote.apple_tv`
