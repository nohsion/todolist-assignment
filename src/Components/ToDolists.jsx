import React, {useEffect, useState} from "react"
import PropTypes from "prop-types"
import {Button, Card, CardTitle, CardText, Container, Input} from "reactstrap"

const ToDOLists = ({data, deleteToDo, upDateToDo}) => {
    const handleOnClick = id => e => {
        deleteToDo(id)
    }
    const [toggle, setToggle] = useState(false)
    const editOnClick = id => e => {
        setToggle(true)
        upDateToDo(id, data)
    }

    /* update */
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")

    useEffect(() => {
        window.addEventListener("keypress", handleKeyPress)
        return () => {
            window.removeEventListener("keypress", handleKeyPress)
        }
    }, [title, description])

    const handleKeyPress = event => {
        console.log(event)
        if (event.code === "Enter") {
            if (title && description) {
                upDateToDo(Date.now(),
                    {
                    id: Date.now(),
                    title: title,
                    description: description
                }, setToggle(false))
            }
        }
    }
    const onChangeTitle = e => {
        setTitle(e.target.value)
    }

    const onChangeDescription = e => {
        setDescription(e.target.value)
    }
    /* ****** */

    return (
        <Container>
            <div
                style={{
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr 1fr",
                    gap: "10px"
                }}
            >
                {data.map((v, i) => (
                    <Card body inverse color="primary" key={v.id}>
                        <CardTitle tag="h5">{v.title}</CardTitle>
                        <CardText>{v.description}</CardText>
                        <div style={{display: "flex", justifyContent: "space-around"}}>
                            <Button color="secondary" onClick={handleOnClick(v.id)}>
                                Delete
                            </Button>
                            <Button color="secondary" onClick={editOnClick(v.id)}>
                                Update
                            </Button>
                        </div>
                    </Card>
                ))}
            </div>

            {toggle ? (<div>
                <Input
                    placeholder="Title"
                    value={title}
                    onChange={onChangeTitle}
                    valid={title.length > 0 ? true : false}
                />
                <Input
                    placeholder="Description"
                    value={description}
                    onChange={onChangeDescription}
                    valid={description.length > 0 ? true : false}
                />
            </div>) : (<></>) }

        </Container>
    )
}
export default ToDOLists

ToDOLists.propTypes = {
    data: PropTypes.array.isRequired,
    deleteToDo: PropTypes.func.isRequired,
    upDateToDo: PropTypes.func.isRequired
}
