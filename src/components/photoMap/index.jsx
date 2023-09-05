import React, { useEffect, useState } from 'react';

const PhotoCoordinatesByColor = () => {

    const [coordinatesState, setCoordinatesState] = useState([])

    useEffect(() => {
        const image = new Image();
        image.src = require('../../assets/ActualPlan.png');

        image.onload = () => {
            const canvas = document.createElement('canvas');
            canvas.width = image.width;
            canvas.height = image.height;
            const ctx = canvas.getContext('2d');
            ctx.drawImage(image, 0, 0, image.width, image.height);

            const imageData = ctx.getImageData(0, 0, image.width, image.height);
            const pixelData = imageData.data;

            const targetColor = [255, 1, 1]; // Replace with your desired color (e.g., red)

            const coordinates = [];

            for (let y = 0; y < image.height; y++) {
                for (let x = 0; x < image.width; x++) {
                    const offset = (y * image.width + x) * 4; // 4 bytes per pixel (RGBA)
                    const r = pixelData[offset];
                    const g = pixelData[offset + 1];
                    const b = pixelData[offset + 2];

                    // console.log(r,g,b);

                    // if (r === targetColor[0] && g === targetColor[1] && b === targetColor[2]) {
                    //     coordinates.push({ x, y });
                    // }

                    if (r >= 190 && g <= 30 && b <= 30) {
                        coordinates.push({ x, y });

                    }
                }
            }

            // Now 'coordinates' contains the (x, y) coordinates of pixels with the desired color
            console.log('Coordinates with target color:', coordinates);
            setCoordinatesState(coordinates)
        };
    }, []);

    return (
        <div>
            <img alt='' src={require('../../assets/ActualPlan.png')} />
            {coordinatesState.map((e, i) => (
                <button style={{ position: 'absolute', top: e?.y - 3.5, left: e?.x - 3.5, width: '8px', height: '8px', borderRadius: '50%', border: 'none' }}>
                </button>
            ))}

        </div>
    );
};

export default PhotoCoordinatesByColor;
