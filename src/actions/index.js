function randomHex() {
  return () => ({ color: `#${('000000', Math.random().toString(16).slice(2, 8).toUpperCase()).slice(-6)}` });
}
export default {
  newNumber: randomHex(),
};
