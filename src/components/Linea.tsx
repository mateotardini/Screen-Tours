import React from 'react';

interface LineaProps {
    color: string;
    grosor: number;
    longitud: number;
}

const Linea: React.FC<LineaProps> = ({ color, grosor, longitud }) => {
    const centerX: number = longitud / 2; // Calcular la posición x del centro
    return (
        <svg width={longitud} height={grosor} viewBox={`0 0 ${longitud} ${grosor}`} preserveAspectRatio="none">
            <line x1={0} y1={0} x2={longitud} y2={0} stroke={color} strokeWidth={grosor} />
        </svg>
    );
};

export default Linea;