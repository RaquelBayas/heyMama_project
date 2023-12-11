import { useState, ChangeEvent, useEffect } from "react";
import styles from './ToggleSwitch.module.css';

function ToggleSwitch() {
    const [switchState, setSwitchState] = useState(true);

    useEffect(() => {
        const label = document.querySelector(`.${styles.switch}`) as HTMLLabelElement
        const privacyState = document.querySelector('.profile') as HTMLSpanElement

        if (switchState) {
            label.classList.add(styles.on)
            label.classList.remove(styles.off)
            privacyState.innerText = 'Perfil privado'
        } else {
            label.classList.add(styles.off)
            label.classList.remove(styles.on)
            privacyState.innerText = 'Perfil público'
        }

    }, [switchState])

    function handleOnChange(e: ChangeEvent<HTMLInputElement>) {
        console.log("---", e.target.checked);
        setSwitchState(!switchState);
    }

    return (
        <div >
            <label className={`flex flex-col gap-2`} htmlFor="checkbox">
                Politica de privacidad
                <span className={`profile block text-gray-500`}>
                    Perfil público
                </span>
                <label htmlFor="checkbox" className={`${styles.switch} ${switchState ? styles.on : styles.off}`}>
                    <input
                        id="checkbox"
                        type="checkbox"
                        checked={switchState}
                        onChange={handleOnChange}
                    />
                </label>
            </label>
        </div>
    );
}

export default ToggleSwitch;