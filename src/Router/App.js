import React, { useState } from "react"
//
import Header from "../Components/Header"
import ToDolists from "../Components/ToDolists"

function App() {
  const [toDos, setToDos] = useState([
    {
      id: 213213421,
      title: "코딩하기",
      description: "나는 오늘 리액트에 대해 배웠다. 정말 재미가 있었다."
    },
    {
      id: 12421424,
      title: "밥먹기",
      description: "밥을 먹었다 정말 맛있다."
    },
    {
      id: 2143261,
      title: "운동하기",
      description: "나는 복싱한다. 고로 생각한다."
    }
  ])

  const addToDo = data => {
    setToDos([...toDos, data])
  }

  const deleteToDo = id => {
    const deleteToDos = toDos.filter(item => item.id !== id)
    setToDos(deleteToDos)
  }

  const upDateToDo = (id, data) => {}

  return (
    <>
      <Header addToDo={addToDo} />
      <ToDolists data={toDos} deleteToDo={deleteToDo} upDateToDo={upDateToDo} />
    </>
  )
}

export default App
