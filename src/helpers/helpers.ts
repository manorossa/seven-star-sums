import { SumState, AnswerMethodsObj, DefineSumResult } from '../types/types';

export const getRandomNumber = (base: number): number => {
  return Math.floor(Math.random() * Math.floor(base));
};

export const definePossibleNums = (baseNum: SumState['baseNum'], op1: SumState['op1']): number[] => {
  const numLimit = op1 === '+' ? baseNum : 12;
  return Array.from(new Array(numLimit), (_, index) => index + 1);
};

export const defineSum = (
  possibleNums: SumState['possibleNums'],
  baseNum: SumState['baseNum'],
  op1: SumState['op2']
): DefineSumResult => {
  // Choose a random number from the possible numbers array,
  // based on the length of the possible numbers array
  const randomNum = possibleNums[getRandomNumber(possibleNums.length)];
  // Define how to get answers based on the operator
  // @todo add other methods when needed
  const answerMethod: AnswerMethodsObj = {
    '+': (a, b) => a - b,
    x: (a, b) => a * b
  };
  // Define correct answer, and two incorrect other possibles, +/- up to 3 to the correct answer
  const answer1 = answerMethod[op1](baseNum, randomNum);
  let answer2 = answer1 + (getRandomNumber(3) + 1);
  if (op1 === '+') {
    answer2 = answer2 > baseNum ? baseNum : answer2; // Don't allow random answer to be higher than the baseNum
  }
  let answer3 = answer1 - (getRandomNumber(3) + 1);
  answer3 = answer3 < 0 ? 0 : answer3; // Don't allow random answer to be negative
  // Put the possible answers into an array, ready to be shuffled
  const answerArray = [answer1, answer2, answer3];
  // Create a random order of indices of 0, 1 and 2
  const answerSet: Set<number> = new Set();
  let i = 0;
  let a;
  while (i < 3) {
    a = getRandomNumber(3);
    answerSet.add(a);
    i = answerSet.size;
  }
  // shuffle the possible answer array according to the random order of indices
  const possibleAns = [...answerSet].map((x) => answerArray[x]);

  return { randomNum, possibleAns, answer1 };
};
