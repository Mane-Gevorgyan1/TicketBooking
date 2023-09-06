import React, { useEffect, useState } from 'react';

const PhotoCoordinatesByColor = () => {

    const [coordinatesState, setCoordinatesState] = useState([])
    const Price = [
        [10, 20, 10, 20],
        [24, 33, 11, 24],
    ]

    const getPrice = (y, i) => {
        let row = null
        let price = null
        let set = null
        if (y === 50) {
            row = 0
        }
        else {
            row = 1
        }
        price = Price[row][i]
        console.log(`sharq ${row + 1}, gin ${price}, nstaran ${i + 1}`)
    }

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
            const coordinates = [];

            for (let y = 0; y < image.height; y++) {
                for (let x = 0; x < image.width; x++) {
                    const offset = (y * image.width + x) * 4; // 4 bytes per pixel (RGBA)
                    const r = pixelData[offset];
                    const g = pixelData[offset + 1];
                    const b = pixelData[offset + 2];

                    if (r >= 100 && g <= 30 && b <= 30) {
                        coordinates.push({ x, y });

                    }
                }
            }

            setCoordinatesState(coordinates)
        };
    }, []);

    return (
        <div>
            <img alt='' src={require('../../assets/ActualPlan.png')} />
            {coordinatesState.map((e, i) => (
                <button key={i} onClick={() => getPrice(e.y, i)} style={{ position: 'absolute', top: e?.y - 3.5, left: e?.x - 3.5, width: '8px', height: '8px', borderRadius: '50%', border: 'none' }} />
            ))}

        </div>
    );
};

export default PhotoCoordinatesByColor;
