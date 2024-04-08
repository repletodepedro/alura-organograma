import './ListaSuspensa.css'

const ListaSuspensa = (props) => {
    return (
        <div>
            <label>
                {props.label}
            </label>
            <select>
                <option>
                    {props.item.map(item => <option>{item}</option>)}
                </option>
            </select>
        </div>
    )

}

export default ListaSuspensa