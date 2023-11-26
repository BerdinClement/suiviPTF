interface CheckBoxProps {
    text: string,
    checked: boolean,
    setChecked: (newChecked: boolean) => void
}

const Checkbox = ({ text, checked, setChecked}: CheckBoxProps) => {
    return (
        <label className="cl-checkbox">
            <input defaultChecked={checked} checked={checked} onClick={() => setChecked(!checked)} type="checkbox" />
            <span className="pl-2">{text}</span>
        </label>
    );
};

export default Checkbox;