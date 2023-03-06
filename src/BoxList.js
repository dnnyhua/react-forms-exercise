import { useState } from "react";
import Box from './Box'
import NewBoxForm from "./NewBoxForm";
import { v4 as uuid } from 'uuid';

const BoxList = () => {
    const INITIAL_STATE = [
        { id: uuid(), width: 200, height: 200, color: 'blue' },
        { id: uuid(), width: 400, height: 200, color: 'green' }
    ]
    const [boxes, setBoxes] = useState(INITIAL_STATE);
    // a parent function that will be passed down as a prop to the boxForm so that data can be passed up to update the state and re-render
    const addBox = (newBox) => {
        setBoxes(boxes => [...boxes, { ...newBox, id: uuid() }])
    }
    // this will be passed down as a prop to the Box component
    const removeBox = (id) => {
        setBoxes(boxes => boxes.filter(box => box.id !== id))
    }

    return (
        <div>
            <NewBoxForm addBox={addBox} />
            {boxes.map(({ id, width, height, color }) =>
                <Box
                    key={id}
                    id={id}
                    width={width}
                    height={height}
                    color={color}
                    removeBox={removeBox}
                />
            )}
        </div>

    )
}

export default BoxList