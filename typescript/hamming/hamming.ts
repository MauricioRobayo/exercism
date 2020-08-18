import { SSL_OP_SSLEAY_080_CLIENT_DH_BUG } from "constants"

class Hamming {
  compute(strand1: string, strand2: string): number {
    if (strand1.length !== strand2.length) {
      throw new Error('DNA strands must be of equal length.')
    }

    let hammingDistance = 0
    
    for (let i = 0; i < strand1.length; i++) {
      if (strand1[i] !== strand2[i]) {
        hammingDistance++
      }
    }
    
    return hammingDistance
  }
}

export default Hamming