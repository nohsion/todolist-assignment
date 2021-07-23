import React, { useEffect, useRef, useState } from "react"
import {
  Button,
  Input,
  InputGroup,
  InputGroupAddon,
  Jumbotron
} from "reactstrap"
import PropTypes from "prop-types"

const Header = ({ addToDo }) => {
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")

  useEffect(() => {
    window.addEventListener("keypress", handleKeyPress)
    return () => {
      window.removeEventListener("keypress", handleKeyPress)
    }
  }, [title, description])

  const onClickBtn = () => {
    window.location.href = "https://github.com/namlulu/todolist-assignment"
  }

  const handleKeyPress = event => {
    if (event.code === "Enter") {
      if (title && description) {
        addToDo({
          id: Date.now(),
          title: title,
          description: description
        })
      }
    }
  }

  const onChangeTitle = e => {
    setTitle(e.target.value)
  }

  const onChangeDescription = e => {
    setDescription(e.target.value)
  }

  return (
    <div>
      <Jumbotron>
        <h1 className="display-3">내 손으로 만들어보는 일정 관리 앱</h1>
        <p className="lead">일정 관리 앱을 통해 컴포넌트 상태 컨트롤</p>
        <hr className="my-2" />
        <p>CRUD 작업을 통해서 한 번 배워보자고 친구들 ㅎㅎ</p>
        <p className="lead">
          <Button color="primary" onClick={onClickBtn}>
            소스코드 확인
          </Button>
        </p>
      </Jumbotron>
      <InputGroup>
        <InputGroupAddon addonType="prepend"></InputGroupAddon>
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
      </InputGroup>
    </div>
  )
}

Header.propTypes = {
  addToDo: PropTypes.func.isRequired
}

export default Header
