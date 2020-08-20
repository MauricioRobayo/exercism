import { transcode } from "buffer";

type BobResponses =
  | "Fine. Be that way!"
  | "Calm down, I know what I'm doing!"
  | "Sure."
  | "Whoa, chill out!"
  | "Whatever.";

class Bob {
  hey(s: string): BobResponses {
    const trimmedS = s.trim();

    if (trimmedS.length === 0) {
      return "Fine. Be that way!";
    }

    if (
      trimmedS.endsWith("?") &&
      trimmedS.toUpperCase() === trimmedS &&
      /[a-z]/i.test(trimmedS)
    ) {
      return 'Calm down, I know what I\'m doing!';
    }

    if (trimmedS.endsWith("?")) {
      return "Sure.";
    }

    if (trimmedS.toUpperCase() === s && /[a-z]/i.test(trimmedS)) {
      return "Whoa, chill out!";
    }

    return "Whatever.";
  }
}

export default Bob;
