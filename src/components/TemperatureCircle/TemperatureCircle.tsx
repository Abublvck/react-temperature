import React from 'react';
import './TemperatureCircle.css';

/**
 * Props (пропсы) — это входные параметры, которые родитель (App)
 * передаёт дочернему компоненту (TemperatureCircle).
 */
interface TemperatureCircleProps {
  temperature: number; // Текущее число градусов
  color: string;       // HEX-код цвета для круга
}

export const TemperatureCircle: React.FC<TemperatureCircleProps> = ({
  temperature,
  color,
}) => {
  // Форматируем отображение: если больше 0, добавляем знак «+» (+20°C)
  const formattedTemperature =
    temperature > 0 ? `+${temperature}` : `${temperature}`;

  // Свечение в тон текущему цвету (динамический стиль)
  const dynamicStyle = {
    backgroundColor: color,
    boxShadow: `0 0 50px ${color}66, 0 0 90px ${color}33, inset 0 0 25px rgba(255, 255, 255, 0.2)`,
  };

  return (
    <div className="temperature-circle-wrapper">
      <div className="temperature-circle" style={dynamicStyle}>
        <span className="temperature-value">{formattedTemperature} °C </span>
        {/* <span className="temperature-unit">°C</span> */}
      </div>
    </div>
  );
};
