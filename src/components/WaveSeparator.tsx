import React from 'react';

interface WaveSeparatorProps {
    topColor: string;
    bottomColor: string;
}

const WaveSeparator: React.FC<WaveSeparatorProps> = ({ topColor, bottomColor }) => {
    return (
        <div className="wave-separator">
            <svg
                viewBox="0 0 1440 160" // Cambiamos la altura del viewBox a la mitad
                xmlns="http://www.w3.org/2000/svg"
                style={{ display: 'block', width: '100%', height: '50%' }}
            >
                <path
                    fill={topColor}
                    fillOpacity="1"
                    d="M0,96L48,106.7C96,117,192,139,288,136C384,133,480,106,576,88C672,69,768,58,864,53.3C960,48,1056,48,1152,61.3C1248,75,1344,101.5,1392,114.7L1440,128L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z" // Ajustamos las coordenadas 'y' a la mitad
                ></path>
            </svg>
            <style jsx>{`
                .wave-separator {
                    position: relative;
                    width: 100%;
                    overflow: hidden;
                    line-height: 0;
                    background-color: ${bottomColor};
                }
            `}</style>
        </div>
    );
};

export default WaveSeparator;