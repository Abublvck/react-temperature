// Настройки температурных лимитов и шага
export const MIN_TEMPERATURE = 0;
export const MAX_TEMPERATURE = 50;
export const DEFAULT_TEMPERATURE = 20;
export const TEMPERATURE_STEP = 1;

// Палитра цветов по диапазонам:
export const TEMPERATURE_COLORS = {
  HOT: '#ef4444',        // ≥ 37 °C (яркий красный)
  WARM: '#f97316',       // 30–36 °C (сочный оранжевый)
  MODERATE: '#854d0e',   // 25–29 °C (тёплый коричневый / карамельный)
  COOL: '#06b6d4',       // ≤ 24 °C (ледяной голубой / циан)
} as const;

export interface TemperatureRange {
  id: string;
  label: string;
  color: string;
  isMatch: (temp: number) => boolean;
}

/**
 * Единый источник правды (Single Source of Truth) для шкалы диапазонов.
 * Теперь нам не нужно дублировать вёрстку 4 раза!
 */
export const TEMPERATURE_RANGES: TemperatureRange[] = [
  { id: 'cool', label: '≤24°', color: TEMPERATURE_COLORS.COOL, isMatch: (t) => t <= 24 },
  { id: 'moderate', label: '25-29°', color: TEMPERATURE_COLORS.MODERATE, isMatch: (t) => t >= 25 && t <= 29 },
  { id: 'warm', label: '30-36°', color: TEMPERATURE_COLORS.WARM, isMatch: (t) => t >= 30 && t <= 36 },
  { id: 'hot', label: '≥37°', color: TEMPERATURE_COLORS.HOT, isMatch: (t) => t >= 37 },
];

/**
 * Чистая функция для определения цвета по текущей температуре.
 */
export function getTemperatureColor(temp: number): string {
  if (temp >= 37) return TEMPERATURE_COLORS.HOT;
  if (temp >= 30) return TEMPERATURE_COLORS.WARM;
  if (temp >= 25) return TEMPERATURE_COLORS.MODERATE;
  return TEMPERATURE_COLORS.COOL;
}
