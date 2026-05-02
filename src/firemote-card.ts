import './universal-remote-card.ts';

const firemoteTag = 'firemote-card';
const editorTag = 'firemote-card-editor';

const UniversalCard = customElements.get('universal-remote-card');
const UniversalEditor = customElements.get('universal-remote-card-editor');

if (UniversalCard && !customElements.get(firemoteTag)) {
  customElements.define(firemoteTag, UniversalCard);
}

if (UniversalEditor && !customElements.get(editorTag)) {
  customElements.define(editorTag, UniversalEditor);
}
