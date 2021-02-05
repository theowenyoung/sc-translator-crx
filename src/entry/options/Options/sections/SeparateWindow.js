import React from 'react';
import { getMessage } from '../../../../public/i18n';
import OptionToggle from '../../OptionToggle';

const initSizeAndPosition = { width: 286, height: 439, left: 550, top: 250 };

const SeparateWindow = ({ updateStorage, rememberStwSizeAndPosition }) => {
    return (
        <div className='opt-item'>
            <div className='item-description'>{getMessage('optionsStwDescription')}</div>
            <div className='mt10-mb10'>
                <OptionToggle
                    id='remember-separate-window-size-and-position'
                    message='optionsRememberStwSizeAndPosition'
                    checked={rememberStwSizeAndPosition}
                    onClick={() => updateStorage('rememberStwSizeAndPosition', !rememberStwSizeAndPosition)}
                />
            </div>
            <button onClick={() => updateStorage('stwSizeAndPosition', initSizeAndPosition)}>
                {getMessage('optionsResetSizeAndPosition')}
            </button>  
        </div>
    );
};

export default SeparateWindow;