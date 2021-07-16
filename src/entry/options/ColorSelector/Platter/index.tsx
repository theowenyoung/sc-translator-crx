import React, { useCallback } from 'react';
import './style.css';
import { pointerDrag } from '../utils';
import { RGB } from '..';
import { Position } from '../../../../types';

const platterPointerOffsetPos = { x: -6, y: -6 };

type PlatterProps = {
    mainColor: RGB;
    posChange: (x: number, y: number) => void;
    pos: Position;
    width: number;
    height: number;
};

const Platter: React.FC<PlatterProps> = ({ mainColor, posChange, pos, width, height }) => {
    const handlePointerDrag = useCallback(({ x, y }) => {
        posChange(x, y);
    }, [posChange]);

    const handleMouseDown = useCallback((e) => {
        handlePointerDrag({ x: e.nativeEvent.offsetX, y: e.nativeEvent.offsetY });
        pointerDrag(e.target, { maxX: e.target.offsetWidth - 1, maxY: e.target.offsetHeight - 1 }, handlePointerDrag);
    }, [handlePointerDrag]);

    return (
        <div className='color-selector-platter' style={{width: `${width}px`, height: `${height}px`}} onMouseDown={handleMouseDown}>
            <div className='color-selector-platter-back' style={{background: `rgb(${mainColor.r}, ${mainColor.g}, ${mainColor.b})`}}></div>
            <div className='color-selector-platter-front' style={{background: 'linear-gradient(to right, #fff, transparent)'}}></div>
            <div className='color-selector-platter-front' style={{background: 'linear-gradient(to bottom, transparent, #000)'}}></div>
            <div
                className='color-selector-platter-pointer'
                style={{top: `${pos.y + platterPointerOffsetPos.y}px`, left: `${pos.x + platterPointerOffsetPos.x}px`}}
            >
                <div className='color-selector-platter-pointer-inside'></div>
            </div>
        </div>
    );
};

export default Platter;