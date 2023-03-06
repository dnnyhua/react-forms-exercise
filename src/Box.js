import './Box.css'

const Box = ({ id, width, height, color, removeBox }) => {
    const boxStyle = {
        width: `${width}px`,
        height: `${height}px`,
        backgroundColor: color
    }
    const remove = () => removeBox(id)

    return (
        <div className="Box">
            <div style={boxStyle} ></div>
            <button onClick={remove}>X</button>
        </div>

    )
}

export default Box