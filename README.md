# Connect Four

3D Connect Four game made with Three.js, TypeScript and Vue for UI. Play against a minimax algorithm.

## [Live demo](https://cortezsmz.github.io/connectfour/)

## To Do

- [x] Implement minimax to play as yellow disc ([20face1](https://github.com/CortezSMz/connectfour/commit/20face16e1d886604b7f05538914b9f1c9781704))
- [x] Implement difficult settings ([53340e6](https://github.com/CortezSMz/connectfour/commit/53340e64af062feb9f6d143cd25b822e9a57d3cd))
- [ ] Optimize minimax algorithm ([Pascal Pons - Solving Connect 4: How to build a perfect AI](http://blog.gamesolver.org/solving-connect-four/01-introduction/))
  - [ ] Test protocol and position notation (need some rewrite)
  - [x] Alpha-beta algorithm ([fc5f088](https://github.com/CortezSMz/connectfour/commit/fc5f088db5827a81e5c3b6c67b1b0f379e425d48))
  - [x] Move exploration order ([b41266e](https://github.com/CortezSMz/connectfour/commit/b41266ed47b531b9c5569af2455d954a588f35d8))
  - [ ] Bitboard
  - [ ] Transposition Table
  - [ ] Iterative Deepening & Null Window
  - [ ] Anticipate direct losing moves
  - [ ] Better move ordering
  - [ ] Optimized transposition table
  - [ ] Lower bound transposition table
- [ ] Make it optional to play against minimax - to control both discs and play locally
- [ ] Polish UI
  - [ ] Include more animations
  - [ ] Better ending screen

## Inspiration

This app is inspired by [Areknawo's 2048](https://github.com/areknawo/2048).
