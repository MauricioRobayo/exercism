class ReverseString {
    static reverse(s: string): string {
        let reversedString = ''
        for (let i = s.length - 1; i >= 0; i--) {
            reversedString += s[i]
        }
        return reversedString
    }
}

export default ReverseString
