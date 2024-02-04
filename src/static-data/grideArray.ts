export const gridArray = Array.from({ length: 5 }, (_, row) =>
  Array.from({ length: 5 }, (_, col) => `${col + 1},${5 - row}`)
);
