import React from 'react';

const GoogleMap = () => {
  return (
    <div className="my-8">
      <h3 className="text-3xl font-semibold text-center mb-4">Ubicación del Gimnasio</h3>
      <div className="max-w-full h-96 mx-auto">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3164.980756155063!2d-122.08424968469242!3d37.42199977982419!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fb5d6eafc2e0f%3A0x9f579f16b23cf71c!2sGoogleplex!5e0!3m2!1ses!2s!4v1634851964821!5m2!1ses!2s"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
};

export default GoogleMap;