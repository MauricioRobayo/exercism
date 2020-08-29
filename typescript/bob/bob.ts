import { transcode } from "buffer";

type BobResponses =
  | "Fine. Be that way!"
  | "Calm down, I know what I'm doing!"
  | "Sure."
  | "Whoa, chill out!"
  | "Whatever.";

class Bob {
  hey(message: string): BobResponses {
    const trimmedMessage = message.trim();

    if (trimmedMessage.length === 0) {
      return "Fine. Be that way!";
    }

    if (this.isAskingLoudly(trimmedMessage)) {
      return 'Calm down, I know what I\'m doing!';
    }

    if (this.isAsking(trimmedMessage)) {
      return "Sure.";
    }

    if (this.isYelling(trimmedMessage, message)) {
      return "Whoa, chill out!";
    }

    return "Whatever.";
  }

  private isYelling(trimmedMessage: string, message: string): boolean {
    return trimmedMessage.toUpperCase() === message && /[a-z]/i.test(trimmedMessage);
  }

  private isAsking(message: string): boolean {
    return message.endsWith("?");
  }

  private isAskingLoudly(message: string): boolean {
    return message.endsWith("?") &&
      message.toUpperCase() === message &&
      /[a-z]/i.test(message);
  }
}

export default Bob;
