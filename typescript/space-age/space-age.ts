type Planet =
  | 'mercury'
  | 'venus'
  | 'earth'
  | 'mars'
  | 'jupiter'
  | 'saturn'
  | 'uranus'
  | 'neptune'

const orbitalPeriodsRelativeToEarth: Record<Planet, number> = {
  mercury:  0.2408467,
  venus: 0.61519726,
  earth: 1,
  mars: 1.8808158,
  jupiter: 11.862615,
  saturn: 29.447498,
  uranus: 84.016846,
  neptune:164.79132,
}


class SpaceAge {
  private EARTH_ORBITAL_PERIOD = 31557600;
  public readonly seconds: number;
  constructor(seconds: number) {
    this.seconds = seconds
  }

  onEarth(): number {
    return this.getAgeInYears('earth');
  }

  onMercury(): number {
    return this.getAgeInYears('mercury');
  }

  onVenus(): number {
    return this.getAgeInYears('venus');
  }

  onMars(): number {
    return this.getAgeInYears('mars');
  }

  onJupiter(): number {
    return this.getAgeInYears('jupiter');
  }

  onSaturn(): number {
    return this.getAgeInYears('saturn');
  }

  onUranus(): number {
    return this.getAgeInYears('uranus');
  }

  onNeptune(): number {
    return this.getAgeInYears('neptune');
  }

  private getAgeInYears(planet: Planet): number {
    return this.roundToTwoDecimals(
      this.seconds / this.EARTH_ORBITAL_PERIOD / orbitalPeriodsRelativeToEarth[planet]
    );
  }

  private roundToTwoDecimals(n: number): number {
    return Math.round(n * 100) / 100;
  }
}

export default SpaceAge;
