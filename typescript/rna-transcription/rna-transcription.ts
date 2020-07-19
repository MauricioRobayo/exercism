type DNA = "G" | "C" | "T" | "A";
type RNA = "C" | "G" | "A" | "U";

class Transcriptor {
  toRna(dna: string): string {
    const complements: Record<DNA, RNA> = {
      G: "C",
      C: "G",
      T: "A",
      A: "U",
    };

    const dnaArray = [...dna];

    if (!dnaArray.every((e) => Object.keys(complements).includes(e))) {
      throw new Error("Invalid input DNA.");
    }

    return (<DNA[]>dnaArray).map((e) => complements[e]).join("");
  }
}

export default Transcriptor;
