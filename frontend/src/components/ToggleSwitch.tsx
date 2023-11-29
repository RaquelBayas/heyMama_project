import { useState, ChangeEvent, useEffect } from "react";
import './switch.css'

export default function ToggleSwitch() {
    const [switchState, setSwitchState] = useState(true);

    useEffect(() => {
        const label = document.querySelector('label.switch') as HTMLLabelElement
        const privacyState = document.querySelector('span.profile') as HTMLSpanElement

        if (switchState) {
            label.classList.add('on')
            label.classList.remove('off')
            privacyState.innerText = 'Perfil privado'
        } else {
            label.classList.add('off')
            label.classList.remove('on')
            privacyState.innerText = 'Perfil público'
        }

    }, [switchState])

    function handleOnChange(e: ChangeEvent<HTMLInputElement>) {
        console.log("---", e.target.checked);
        setSwitchState(!switchState);
    }
    return (
        <label htmlFor="checkbox">Politica de privacidad
            <span className="profile block text-gray-500 my-1">Perfil público</span>
            <label htmlFor="checkbox" className="switch on">
                <input
                    id="checkbox"
                    type="checkbox"
                    checked={switchState}
                    onChange={handleOnChange}
                />
            </label>
        </label>
    );
}