const advance = {
  fob: (n, memo = {}) => {
    if (n in memo) return memo[n];
    if (n <= 2) return 1;
    memo[n] = advance.fob(n - 1, memo) + advance.fob(n - 2, memo);
    return memo[n];
  }
};

export default advance;
