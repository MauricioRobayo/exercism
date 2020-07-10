

export const gigasecond = (date) => {
  const GIGASECOND = 1_000_000_000
  const gigamillisecond = GIGASECOND * 1000

  return new Date(date.getTime() + gigamillisecond)
};
