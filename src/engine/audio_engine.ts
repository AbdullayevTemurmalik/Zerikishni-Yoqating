/**
 * BMW M-Series Web Audio Synthesizer Interface
 * Pure Web Audio API DSP Architecture
 */

export interface SoundProfile {
  baseFrequency: number;
  exhaustResonance: number;
  turboSpoolFrequency: number;
  blowOffDecaySeconds: number;
}

export class BmwAudioDsp {
  public static readonly S58_PROFILE: SoundProfile = {
    baseFrequency: 52,
    exhaustResonance: 480,
    turboSpoolFrequency: 2400,
    blowOffDecaySeconds: 0.28
  };

  public static readonly S63_V8_PROFILE: SoundProfile = {
    baseFrequency: 44,
    exhaustResonance: 390,
    turboSpoolFrequency: 2100,
    blowOffDecaySeconds: 0.32
  };

  public static computeHarmonics(rpmRatio: number, profile: SoundProfile): number[] {
    const fundamental = profile.baseFrequency + rpmRatio * 165;
    return [
      fundamental,
      fundamental * 1.5,
      fundamental * 2.0,
      fundamental * 0.5
    ];
  }
}
