import React from 'react';

interface RetrowaveItemProps {
    src: string;
    alt: string;
    width: string;
    translateX: string;
    translateY: string;
    filter: string;
    opacity: number;
}

const RetrowaveItem: React.FC<RetrowaveItemProps> = ({ src, alt, width, translateX, translateY, filter, opacity }) => {
    return (
        <img
            src={src}
            alt={alt}
            style={{
                position: "absolute",
                width: width,
                transform: `translate(${translateX}, ${translateY})`,
                filter: filter,
                opacity: opacity
            }}
        />
    );
}

export default RetrowaveItem;