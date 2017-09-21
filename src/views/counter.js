import { h } from 'hyperapp';

function updateBackground(state) {
  document.body.style = `background: ${state.color}`;
}

export default (state, msg) => (
  <div class="counter">
    <section>
      <button
        class="sub"
        onclick={msg.newNumber}
      >
      {updateBackground(state)}
      COLOR
      </button>
    </section>
  </div>
);
