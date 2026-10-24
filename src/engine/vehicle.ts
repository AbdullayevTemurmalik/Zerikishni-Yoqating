/**
 * BMW M-Series 3D Vehicle Dynamics & Physics Module
 * TypeScript High-Performance Implementation
 */

export interface WheelConfig {
  x: number;
  y: number;
  z: number;
  radius: number;
  width: number;
  isFront: boolean;
  isLeft: boolean;
}

export class VehicleDynamics {
  public speedKmh: number = 0;
  public engineRpm: number = 1050;
  public currentGear: number = 1;
  public driftAngle: number = 0;
  public lateralGForce: number = 0;

  constructor(
    public readonly massKg: number = 1725,
    public readonly horsepower: number = 510,
    public readonly maxSpeedKmh: number = 325
  ) {}

  public calculateTireAngularVelocity(speedMs: number, tireRadius: number = 0.35): number {
    if (tireRadius <= 0) return 0;
    return speedMs / tireRadius;
  }

  public calculateGearRatio(speedKmh: number): { gear: number | string; rpm: number } {
    if (speedKmh < -0.5) {
      return { gear: 'R', rpm: Math.min(8500, 1100 + Math.abs(speedKmh) * 110) };
    }
    if (speedKmh < 2) {
      return { gear: 'N', rpm: 1050 };
    }

    const thresholds = [0, 48, 92, 142, 192, 245, 298, 348, 999];
    let selectedGear = 1;
    let rpm = 1050;

    for (let g = 1; g <= 8; g++) {
      if (speedKmh <= thresholds[g]) {
        selectedGear = g;
        const span = thresholds[g] - thresholds[g - 1];
        const prog = (speedKmh - thresholds[g - 1]) / span;
        rpm = Math.floor(2200 + prog * 6200);
        break;
      }
    }

    return { gear: selectedGear, rpm };
  }

  public computeDriftCounterSteer(steerInput: number, driftFactor: number): number {
    const rawCounter = -driftFactor * 0.65;
    return Math.max(-0.68, Math.min(0.68, steerInput * 0.56 + rawCounter));
  }
}

