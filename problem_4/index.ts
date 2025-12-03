function sum_to_n_a(n: number): number {
	// your code here
    // using for loop
    // for me this is more efficient
    let sum = 0
    for (let i = 1; i <= n ; i++) {
        sum += i;
    }
    return sum;
}

function sum_to_n_b(n: number): number {
	// your code here
    // using recursive
    if (n <= 1)
        return n;
    return n + sum_to_n_b(n - 1)
}

function sum_to_n_c(n: number): number {
	// your code here
    // using arithmetic
    // 1 + 2 + 3 + 4 + 5 => 15
    return (n * (n + 1)) / 2
}