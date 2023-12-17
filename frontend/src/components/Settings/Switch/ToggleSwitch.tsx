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

    async function handleOnChange(e: ChangeEvent<HTMLInputElement>) {
        console.log("---", e.target.checked);
        setSwitchState(!switchState);

        const isPrivateValue = e.target.checked ? 1 : 0;

        const user = JSON.parse(localStorage.getItem("user")!);
        const userId = user!.id;

        const baseUrl = `http://localhost:5000/users/setting/account/privacy/${userId}`;

        try {
            const resp = await fetch(baseUrl, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ isPrivate: isPrivateValue }),
            });

            if(resp.ok){
                await resp.json();
            }
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <div>
            <label className={`flex flex-col gap-4`} htmlFor="checkbox">
                Politica de privacidad:
                <span className={`ml-5 profile block text-gray-500`}>
                    Perfil público
                </span>
                <label htmlFor="checkbox" className={`ml-5 ${styles.switch} ${switchState ? styles.on : styles.off}`}>
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