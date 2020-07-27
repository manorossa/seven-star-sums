import { getRandomNumber } from './helpers';

export const correctText = ['Excellent!', 'Epic!', 'Yay!', 'Great!', 'Awesome!', 'Cool!', 'Sick!', 'Nice!', 'Woohoo!'];

export const wrongText = ['Oh dear!', 'Unlucky!', 'Ouch!', 'Eek!', 'Aaagh!', 'Oops!', 'Fail!'];

export const getRandomText = (textArray: string[]): string => {
  return textArray[getRandomNumber(textArray.length)];
};
