import React from 'react';

interface RetrowaveItemProps {
    src: string;
    alt: string;
    width: string;
    translateX: string;
    translateY: string;
    filter: string;
    opacity: number;
    zIndex: number;
    responsiveWidth?: string;
    responsiveTranslateX?: string;
    responsiveTranslateY?: string;
    responsiveFilter?: string;
    responsiveOpacity?: number;
    responsivePosition?: string;
}

const RetrowaveItem: React.FC<RetrowaveItemProps> = ({
    src,
    alt,
    width,
    translateX,
    translateY,
    filter,
    opacity,
    zIndex,
    responsiveWidth,
    responsiveTranslateX,
    responsiveTranslateY,
    responsiveFilter,
    responsiveOpacity,
    responsivePosition
}) => {
    const isResponsive = window.innerWidth <= 768;

    return (
        <img
            src={src}
            alt={alt}
            style={{
                position: isResponsive && responsivePosition ? responsivePosition : "absolute",
                top: "50%",
                left: "50%",
                width: isResponsive && responsiveWidth ? responsiveWidth : width,
                transform: `translate(${isResponsive && responsiveTranslateX ? responsiveTranslateX : translateX}, ${isResponsive && responsiveTranslateY ? responsiveTranslateY : translateY})`,
                filter: isResponsive && responsiveFilter ? responsiveFilter : filter,
                opacity: isResponsive && responsiveOpacity !== undefined ? responsiveOpacity : opacity,
                zIndex: zIndex
            }}
        />
    );
};

export default RetrowaveItem;