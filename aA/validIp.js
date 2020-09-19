function validIp(string) {
   let arr = string.split(".").map((ele) => Number(ele));

   return arr.every((ele) => ele >= 0 && ele <= 255);
}
