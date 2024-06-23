import React, { useEffect } from 'react';

const RegiondoWidget = () => {
  useEffect(() => {
    // Verificar si el script ya existe para evitar duplicados
    if (!document.querySelector(`script[src="https://widgets.regiondo.net/product/v1/product-widget.min.js"]`)) {
      const script = document.createElement('script');
      script.src = 'https://widgets.regiondo.net/product/v1/product-widget.min.js';
      script.async = true;
      document.body.appendChild(script);

      // Limpiar el script cuando el componente se desmonte
      return () => {
        document.body.removeChild(script);
      };
    }
  }, []);

  return (
    <div>
      <product-details-widget widget-id="b66447ad-9f69-4337-a22b-e758fdd18c19"></product-details-widget>
    </div>
  );
};

export default RegiondoWidget;