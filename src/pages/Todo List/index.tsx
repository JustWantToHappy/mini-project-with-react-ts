import React from 'react'

type Task = {
  id: string;
  content: string;
  finished: boolean;
}

const Index = () => {
  const [input, setInput] = React.useState('')
  const [data, setData] = React.useState<Array<Task>>([])

  const handleChange = (event: React.ChangeEvent) => {
    const inputEle = event.target as HTMLInputElement
    setInput(inputEle.value)
  }

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.code === 'Enter' && input !== '') {
      event.preventDefault()
      const task: Task = {
        id: Math.random().toString().slice(2),
        content: input,
        finished: false,
      }
      data.push(task)
      setData([...data])
      setInput('')
    }
  }
  const toggleTask = (id: string) => setData([...data.map(item => {
    if (item.id === id) item.finished = !item.finished;
    return item;
  })])

  const handleMouseDown = (event: React.MouseEvent, id: string) => {
    if (event.button === 2) {
      event.preventDefault()
      setData(data.filter(item => item.id !== id))
    }
  }

  return (
    <div className='bg-[#f5f5f5] text-[#444] flex items-center min-h-screen justify-center flex-col'>
      <h1 className='text-[rgba(179,131,226)] text-[10rem] opacity-40 mb-28 mt-12'>todos</h1>
      <form
        className='shadow-2xl w-[400px] max-w-full'>
        <input
          value={input}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          type="text"
          className="px-8 py-4 block w-full placeholder:text-[#d5d5d5] outline-none  focus:outline-[#B383E2]"
          placeholder="Enter your todo" />
        <ul
          className="bg-white p-0 m-0 list-none">
          {data.map(item => <li
            key={item.id}
            onClick={() => toggleTask(item.id)}
            onMouseDown={(event) => handleMouseDown(event, item.id)}
            className={`${item.finished ? 'complete' : ''}`}>
            {item.content}
          </li>)}
        </ul>
      </form>
      <small className='text-[#b5b5b5] text-center text-base block mt-5'>
        Left click to toggle completed.
        <br />
        Right click to delete todo
      </small>
      <style>
        {`
        li{
          cursor:pointer;
          padding:1rem 2rem;
          border-bottom:1px solid #d4d4d4;
        }
        .complete{
          color:#b6b6b6;
          text-decoration:line-through;
        }`}
      </style>
    </div>
  )
}

export default Index