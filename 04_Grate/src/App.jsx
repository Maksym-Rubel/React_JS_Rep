import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import GrateForm from './components/GrateForm.jsx'
import CreateGreate from './components/CreateGreate.jsx'
import CreateList from './components/GreateList.jsx'



function App() {
  const reviews = [
    {
      id: 1,
      rating: 5,
      text1: "Дуже зручно користуватись. Інтерфейс інтуїтивно зрозумілий.",
      text2: "Швидка робота, гарний дизайн.",
      text3: "Іноді зависає при великій кількості даних."
    },
    {
      id: 2,
      rating: 3,
      text1: "Це найкраще, що я пробувала за останній рік!",
      text2: "Висока точність, стабільна робота.",
      text3: "Хотілося б більше інструкцій для новачків."
    },
    {
      id: 3,
      rating: 2,
      text1: "Загалом непогано, але є над чим попрацювати.",
      text2: "Добре оптимізовано під мобільні пристрої.",
      text3: "Деякі функції не працюють у Firefox."
    }
  ];
  return (
    <>
      <div className='AppText'>
        <CreateList tasksList={reviews}></CreateList>
      </div>
    </>
  )
}

export default App
