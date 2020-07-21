class CollatzConjecture {
    static steps(n: number): number {
        if (n < 1) {
            throw new Error('Only positive numbers are allowed')
        }

        if (n === 1) {
            return 0;
        }

        return CollatzConjecture.steps(n % 2 ? n * 3 + 1 : n / 2) + 1;
    }
}

export default CollatzConjecture