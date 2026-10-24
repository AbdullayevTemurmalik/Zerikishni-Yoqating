/**
 * BMW M-Series 3D Simulator Core Types & Math Utilities
 */

export interface Vector3D {
  x: number;
  y: number;
  z: number;
}

export class PhysicsMath {
  public static clamp(val: number, min: number, max: number): number {
    return Math.max(min, Math.min(max, val));
  }

  public static lerp(start: number, end: number, alpha: number): number {
    return start + (end - start) * this.clamp(alpha, 0, 1);
  }

  public static kmhToMs(kmh: number): number {
    return kmh / 3.6;
  }

  public static msToKmh(ms: number): number {
    return ms * 3.6;
  }

  public static calculateRpm(speedKmh: number, gear: number): number {
    const baseIdle = 1050;
    const maxRpm = 8500;
    const gearSpan = 45;
    const progress = (speedKmh % gearSpan) / gearSpan;
    return Math.floor(baseIdle + progress * (maxRpm - baseIdle));
  }
}
