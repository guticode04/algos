//recursive

function digitalRoot(num) {
  return num < 10 ? num : digitalRoot(digitalRoot(Math.floor(num / 10)) + (num % 10));
}

// Redo with helper function

function digitalRoot(num) {
  while (num > 10) {
    num = digitalRootStep(num);
  }
  return num;
}

function digitalRootStep(num) {
  let root = 0;
  while (num > 0) {
    root += num % 10;
    num = Math.floor(num/10);
  }
  return root;
}

