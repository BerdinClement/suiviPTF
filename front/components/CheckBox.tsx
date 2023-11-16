interface CheckBoxProps {
    text: string,
    checked: boolean,
}

const Checkbox = ({ text, checked }: CheckBoxProps) => {
    return (
        <label className="cl-checkbox">
            <input checked={checked} type="checkbox" />
            <span className="pl-2">{text}</span>
        </label>
    );
};

export default Checkbox;