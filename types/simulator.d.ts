/**
 * BMW M-Series 3D Ultimate Driving & Racing Simulator Pro
 * TypeScript Definitions & Architecture Types
 * @version 2.5.0
 * @license MIT
 */

export type GameMode = 'highway' | 'stadium' | 'drift' | 'timeattack';
export type TrafficDensity = 'low' | 'medium' | 'high';
export type TrafficDirection = 'oneway' | 'twoway' | 'oncoming';

export interface BmwModelDimensions {
  width: number;
  height: number;
  length: number;
}

export interface BmwModelSpec {
  id: string;
  name: string;
  badge: string;
  engine: string;
  hp: string;
  desc: string;
  baseTopSpeed: number;
  baseAccel: number;
  baseHandling: number;
  baseNitro: number;
  defaultPaintIndex: number;
  dimensions: BmwModelDimensions;
  grilleStyle: 'vertical_g82' | 'classic_cs' | 'e46_gtr' | 'wide_m8';
  spoilerDefault: number;
}

export interface PaintColor {
  name: string;
  hex: number;
  css: string;
  metalness: number;
  roughness: number;
}

export interface NeonOption {
  name: string;
  color: number;
  intensity: number;
}

export interface HeadlightOption {
  name: string;
  color: number;
}

export interface WeatherPreset {
  name: string;
  iconKey: string;
  sky: number;
  fog: number;
  ambient: number;
  dirLight: number;
  dirIntensity: number;
}

export interface TelemetryState {
  speed: number;
  maxSpeedMs: number;
  lateralVel: number;
  carX: number;
  carY: number;
  carZ: number;
  carYaw: number;
  carPitch: number;
  carRoll: number;
  verticalVel: number;
  steerAngle: number;
  driftAngle: number;
  driftFactor: number;
  nitroAmount: number;
  health: number;
  lap: number;
  trackProgress: number;
  raceRank: number;
  currentGear: number | string;
}

export interface SoundEngineInterface {
  init(): void;
  silenceImmediately(): void;
  updateEngine(rpmRatio: number, isNitro: boolean, isDrifting: boolean, activePlay: boolean): void;
  playBov(): void;
  playPop(): void;
  playEffect(type: 'bonus' | 'crash' | 'click'): void;
}
