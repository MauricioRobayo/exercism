type OldFormat = Record<string, string[]>;
type NewFormat = Record<string, number>;

function transform(old: OldFormat): NewFormat {
  const transformed: NewFormat = {};

  Object.entries(old).forEach(([key, values]) => {
    values.forEach((value) => {
      transformed[value.toLowerCase()] = Number(key);
    });
  });
  
  return transformed;
}

export default transform;
