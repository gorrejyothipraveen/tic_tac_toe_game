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

export const isOnVerticalAxis = (locations) => {
  const verticalLocations = [[1, 4, 7], [2, 5, 7], [3, 6, 9]];
  return verticalLocations.some((verticalAxis) =>
    locations.every((position) => verticalAxis.includes(position))
  );
}

export const isOnHorizontalAxis = (locations) => {
  const horizontalLocations = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
  return horizontalLocations.some((horizontalAxis) =>
    locations.every((position) => horizontalAxis.includes(position))
  );
};

export const isOnDiagonalAxis = (locations) => {
  const diagonalPositions = [[1, 5, 9], [3, 5, 7]];
  return diagonalPositions.some((diagonal) =>
    locations.every((position) => diagonal.includes(position))
  );
};

const coordinates = [
  isOnDiagonalAxis,
  isOnHorizontalAxis,
  isOnVerticalAxis
]

export const isOnAnyOfAxis = (locations) => {
  return coordinates.some(fnTocall => fnTocall(locations))
}