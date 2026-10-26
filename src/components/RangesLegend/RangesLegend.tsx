import React from 'react';
import { TEMPERATURE_RANGES } from '../../constants/temperature';
import './RangesLegend.css';

interface RangesLegendProps {
  temperature: number; // Принимаем только число градусов
}

export const RangesLegend: React.FC<RangesLegendProps> = ({ temperature }) => {
  return (
    <footer className="ranges-legend">
      {/* Рендерим все элементы через .map() без копипасты кода! */}
      {TEMPERATURE_RANGES.map((range) => {
        const isActive = range.isMatch(temperature);

        return (
          <div
            key={range.id}
            className={`legend-item ${isActive ? 'active' : ''}`}
          >
            <span
              className="legend-dot"
              style={{ backgroundColor: range.color }}
            />
            <span>{range.label}</span>
          </div>
        );
      })}
    </footer>
  );
};
