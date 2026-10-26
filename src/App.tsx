import { useState } from 'react';
import {
  DEFAULT_TEMPERATURE,
  MIN_TEMPERATURE,
  MAX_TEMPERATURE,
  TEMPERATURE_STEP,
  getTemperatureColor,
} from './constants/temperature';
import { TemperatureCircle } from './components/TemperatureCircle/TemperatureCircle';
import { Controls } from './components/Controls/Controls';
import { RangesLegend } from './components/RangesLegend/RangesLegend';
import './App.css';

export function App() {
  const [temperature, setTemperature] = useState<number>(DEFAULT_TEMPERATURE);

  // Цвет круга вычисляется из текущей температуры
  const currentColor = getTemperatureColor(temperature);

  // Границы лимитов
  const isMinReached = temperature <= MIN_TEMPERATURE;
  const isMaxReached = temperature >= MAX_TEMPERATURE;

  // Обработчики кликов
  const handleIncrease = () => {
    if (!isMaxReached) setTemperature((prev) => prev + TEMPERATURE_STEP);
  };

  const handleDecrease = () => {
    if (!isMinReached) setTemperature((prev) => prev - TEMPERATURE_STEP);
  };

  return (
    <main className="temperature-card">
      <header className="temperature-header">
        <h1 className="temperature-title">Температуры</h1>
        {/* <p className="temperature-subtitle">
          Диапазон: {MIN_TEMPERATURE}°C — {MAX_TEMPERATURE}°C
        </p> */}
      </header>

      {/* Кнопки теперь расположены по бокам, а круг вложен внутрь как children */}
      <Controls
        onIncrease={handleIncrease}
        onDecrease={handleDecrease}
        disabledMinus={isMinReached}
        disabledPlus={isMaxReached}
      >
        <TemperatureCircle temperature={temperature} color={currentColor} />
      </Controls>

      {/* Шкала диапазонов */}
      <RangesLegend temperature={temperature} />
    </main>
  );
}

export default App;
