import React from "react"
import PropTypes from "prop-types"
import { Button, Card, CardTitle, CardText, Container } from "reactstrap"

const ToDOLists = ({ data, deleteToDo, upDateToDO }) => {
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
            <div style={{ display: "flex", justifyContent: "space-around" }}>
              <Button color="secondary" id={v.id} onClick={deleteToDo}>
                Delete
              </Button>
              <Button color="secondary" id={v.id}>
                Update
              </Button>
            </div>
          </Card>
        ))}
      </div>
    </Container>
  )
}
export default ToDOLists

ToDOLists.propTypes = {
  data: PropTypes.array.isRequired,
  deleteToDo: PropTypes.func.isRequired,
  upDateToDo: PropTypes.func.isRequired
}
