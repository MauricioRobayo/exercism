export function hey(message: string): string {
  if (isEmpty(message)) {
    return "Fine. Be that way!";
  }

  if (isAskingLoudly(message)) {
    return "Calm down, I know what I'm doing!";
  }

  if (isAsking(message)) {
    return "Sure.";
  }

  if (isYelling(message)) {
    return "Whoa, chill out!";
  }

  return "Whatever.";
}

function isEmpty(message: string): boolean {
  return message.trim().length === 0;
}

function isYelling(message: string): boolean {
  return message.toUpperCase() === message && /[a-z]/i.test(message);
}

function isAsking(message: string): boolean {
  return message.trim().endsWith("?");
}

function isAskingLoudly(message: string): boolean {
  return isAsking(message) && isYelling(message);
}
