const positions = {
  "1": [0, 0],
  "2": [0, 1],
  "3": [0, 2],
  "4": [1, 0],
  "5": [1, 1],
  "6": [1, 2],
  "7": [2, 0],
  "8": [2, 1],
  "9": [2, 2],
};

export const ticTacToe = () => {
  return "";
};

export const areOnHorizontalLine = (locations) => {
  const areOnHorizontal = [[1, 2, 3], [4, 5, 6]];
  return areOnHorizontal.some((horizontalLine) =>
    locations.every((position) => horizontalLine.includes(position))
  );
};

export const areOnDiagonal = (locations) => {
  const diagonalPositions = [[1, 5, 9], [3, 5, 7]];
  return diagonalPositions.some((diagonal) =>
    locations.every((position) => diagonal.includes(position))
  );
};
