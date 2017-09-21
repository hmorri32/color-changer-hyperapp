function newFunction() {
  return () => ({ color: `#${('000000', Math.random().toString(16).slice(2, 8).toUpperCase()).slice(-6)}` });
}
export default {
  add: ({ num }) => ({ num: num + 1 }),
  sub: ({ num }) => ({ num: num - 1 }),
  rando: newFunction(),
};
