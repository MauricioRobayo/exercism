const GIGASECOND = 1e9

export const gigasecond = (date) => {
  const gigamillisecond = GIGASECOND * 1000

  return new Date(date.getTime() + gigamillisecond)
};
