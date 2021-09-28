const basic = {
  fob: (n) => {
    if (n <= 2) return 1;
    return basic.fob(n -1) + basic.fob(n -2) ;
  }
};

export default basic;
