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

export const isOnVerticalAxis = (locations) => {
  const verticalLocations = [[1, 4, 7], [2, 5, 7], [3, 6, 9]];
  return verticalLocations.some((verticalAxis) =>
    locations.every((position) => verticalAxis.includes(position))
  );
};

export const isOnHorizontalAxis = (locations) => {
  const horizontalLocations = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
  return horizontalLocations.some((horizontalAxis) =>
    locations.every((position) => horizontalAxis.includes(position))
  );
};

export const isOnDiagonalAxis = (locations) => {
  const diagonalLocations = [[1, 5, 9], [3, 5, 7]];
  return diagonalLocations.some((diagonal) =>
    locations.every((position) => diagonal.includes(position))
  );
};

const coordinates = [
  isOnDiagonalAxis,
  isOnHorizontalAxis,
  isOnVerticalAxis,
];

export const isOnAnyOfAxis = (locations) => {
  return coordinates.some((fnTocall) => fnTocall(locations));
};

// /============================================

export const isOnAxis = (locations) => {
  const winningLocations = [
    [1, 4, 7],
    [2, 5, 8],
    [3, 6, 9],
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [1, 5, 9],
    [3, 5, 7],
  ];
  return winningLocations.some((winlocation) =>
    locations.every((location) => winlocation.includes(location))
  );
};

export const areOnWinningLocations = (input) => {
  const landedPositions = subSetsOfInput(input);
  return landedPositions.some(landedLoction => isOnAxis(landedLoction));
}

export const subSetsOfInput = (inputList) => {
  const actualSubSets = inputList.reduce((subSets, ele) => {
    const subset = subSets.map(([...set]) => {
      set.push(ele);
      return set;
    });
    subSets.push(...subset);
    return subSets;
  }, [[]]).filter(subSet => subSet.length === 3);
  return actualSubSets;
};


const participators = () => {
  const firstPerson = prompt('enter 1st person name : ');
  const secondPerson = prompt('enter 2nd person name : ');
  return [firstPerson, secondPerson]
}

const moveValidator = (entry, entries) => {
  if(!Boolean(entry)) {
    console.log('enter the proper input');
  }

  if(entries.includes(entry)) {
    console.log('that move is not possible');
    return false;
  }
  return Boolean(entry)
}
 
const move = (person, entries) => {
  const entry = parseInt(prompt(`${person} enter your move : `));
  if(moveValidator(entry, entries)) {
    return entry;
  }
  return move(person, entries);
}

export const ticTacToe = (firstPersonEntries, secondPersonEntries) => {
  const [firstPerson, secondPerson] = participators();
  for(let index = 0; index < 9; index++) {
    const firstPersonMove = move(firstPerson, firstPersonEntries);
    firstPersonEntries.push(firstPersonMove);

    if(areOnWinningLocations(firstPersonEntries)) {
      return `${firstPerson} won the match`;
    }
    
    const secondPersonMove = move(secondPerson, secondPersonEntries);
    secondPersonEntries.push(secondPersonMove);
    if(areOnWinningLocations(secondPersonEntries))
      {
        return `${secondPerson} won the match`;
      }
      console.log(firstPersonEntries, secondPersonEntries);
  }
  return "tie";
};

console.log(ticTacToe([], []));