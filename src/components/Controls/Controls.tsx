import React from 'react';
import './Controls.css';

interface ControlsProps {
  onIncrease: () => void;
  onDecrease: () => void;
  disabledMinus?: boolean;
  disabledPlus?: boolean;
  children?: React.ReactNode; // Вложенный компонент (наш центральный круг)
}

export const Controls: React.FC<ControlsProps> = ({
  onIncrease,
  onDecrease,
  disabledMinus = false,
  disabledPlus = false,
  children,
}) => {
  return (
    <div className="controls-container">
      {/* 1. Кнопка «−» СЛЕВА */}
      <button
        type="button"
        className="control-btn minus-btn"
        onClick={onDecrease}
        disabled={disabledMinus}
        aria-label="Уменьшить температуру на 1 градус"
        title={disabledMinus ? 'Достигнут минимум' : 'Уменьшить на 1°C'}
      >
        −
      </button>

      {/* 2. Круг с температурой ПО ЦЕНТРУ (передан через children) */}
      {children}

      {/* 3. Кнопка «+» СПРАВА */}
      <button
        type="button"
        className="control-btn plus-btn"
        onClick={onIncrease}
        disabled={disabledPlus}
        aria-label="Увеличить температуру на 1 градус"
        title={disabledPlus ? 'Достигнут максимум' : 'Увеличить на 1°C'}
      >
        +
      </button>
    </div>
  );
};
