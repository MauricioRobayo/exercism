class SpaceAge {
  private ORBITAL_PERIOD = 31557600;
  readonly seconds: number;
  constructor(seconds: number) {
    this.seconds = seconds;
  }

  onEarth(): number {
    return this.years();
  }

  onMercury(): number {
    const orbitalPeriod = 0.2408467;
    return this.years(orbitalPeriod);
  }

  onVenus(): number {
    const orbitalPeriod = 0.61519726;
    return this.years(orbitalPeriod);
  }

  onMars(): number {
    const orbitalPeriod = 1.8808158;
    return this.years(orbitalPeriod);
  }

  onJupiter(): number {
    const orbitalPeriod = 11.862615;
    return this.years(orbitalPeriod);
  }

  onSaturn(): number {
    const orbitalPeriod = 29.447498;
    return this.years(orbitalPeriod);
  }

  onUranus(): number {
    const orbitalPeriod = 84.016846;
    return this.years(orbitalPeriod);
  }

  onNeptune(): number {
    const orbitalPeriod = 164.79132;
    return this.years(orbitalPeriod);
  }

  private years(periodInEarthYears: number = 1): number {
    return this.roundToTwoDecimals(
      this.seconds / this.ORBITAL_PERIOD / periodInEarthYears
    );
  }

  private roundToTwoDecimals(n: number): number {
    return Math.round(n * 100) / 100;
  }
}

export default SpaceAge;
