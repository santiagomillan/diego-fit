import React from 'react';

const GoogleMap = () => {
    return (
        <div className="md:my-4">
            <h3 className="text-3xl font-semibold text-center mb-4">Ubicación del Gimnasio</h3>
            <div className="max-w-full h-96 mx-auto">
                <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15906.833826294756!2d-74.14636611284179!3d4.645999400000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3f9d5cff238cfb%3A0x470d1d323204a178!2sAction%20Fitness%20C.C.%20El%20Ed%C3%A9n!5e0!3m2!1ses-419!2sco!4v1720390341356!5m2!1ses-419!2sco"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen="" 
                    loading="lazy" 
                    title = 'Google maps'
                    referrerPolicy="no-referrer-when-downgrade">
                </iframe>
            </div>
        </div>
    );
};

export default GoogleMap;