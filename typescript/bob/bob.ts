type BobResponses =
  | "Fine. Be that way!"
  | "Calm down, I know what I'm doing!"
  | "Sure."
  | "Whoa, chill out!"
  | "Whatever.";

class Bob {
  hey(message: string): BobResponses {
    if (this.isEmpty(message)) {
      return "Fine. Be that way!";
    }

    if (this.isAskingLoudly(message)) {
      return "Calm down, I know what I'm doing!";
    }

    if (this.isAsking(message)) {
      return "Sure.";
    }

    if (this.isYelling(message)) {
      return "Whoa, chill out!";
    }

    return "Whatever.";
  }

  private isEmpty(message: string): boolean {
    return message.trim().length === 0;
  }

  private isYelling(message: string): boolean {
    return message.toUpperCase() === message && /[a-z]/i.test(message);
  }

  private isAsking(message: string): boolean {
    return message.trim().endsWith("?");
  }

  private isAskingLoudly(message: string): boolean {
    return this.isAsking(message) && this.isYelling(message);
  }
}

export default Bob;
