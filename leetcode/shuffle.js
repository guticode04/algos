function shuffle(numsArr, num) {
   let shuffledArr = [];
   let j = num;
   for (let i = 0; i < num; i++) {
      shuffledArr.push(numsArr[i]);
      shuffledArr.push(numsArr[j]);
      j++;
   }
   return shuffledArr;
}