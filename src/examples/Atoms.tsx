import { useState } from "react"
import { atom, useRecoilState, useRecoilValue} from "recoil"

//create a new atom
const darkModeAtom = atom({
    key: 'darkMode',
    default: false
});

const DarkModeSwitch = () => {
    const [darkMode, setDarkMode] = useRecoilState(darkModeAtom);
    //const [darkMode, setDarkMode] = useState(false);
    console.log(darkMode);
    return (
        <input 
            type="checkbox"
            checked={darkMode}
            onChange={(event) => {
                setDarkMode(event.currentTarget.checked)
            }}
        />
    )
}

const Button = () => {
    const darkMode = useRecoilValue(darkModeAtom);
    //const [darkMode, setDarkMode] = useState(false);
    return <button style={{backgroundColor: darkMode ? 'black':'white', color: darkMode ? 'white':'black'}}>My UI Button</button>
}

export const Atoms = () => {
    return (
        <div>
            <div>
                <DarkModeSwitch />
            </div>
            <div>
                <Button />
            </div>
        </div>
    )
}