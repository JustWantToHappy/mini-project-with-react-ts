import React from 'react'
import './index.css'

const Index = () => {
  const [codes, setCodes] = React.useState<number[]>([])
  const codeContainerRef = React.useRef<HTMLDivElement>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
    e.target.value = e.target.value.slice(e.target.value.length - 1)
    const length = codeContainerRef.current?.children.length as number;
    if (e.target.value === '' && index > 0) {
      setCodes(codes => codes.filter(code => code !== index))
      const code = codeContainerRef.current?.children[index - 1] as HTMLInputElement
      code.focus()
      return;
    }
    if (e.target.value !== '' && index + 1 < length) {
      const nextCode = codeContainerRef.current?.children[index + 1] as HTMLInputElement;
      nextCode?.focus()
    } else if (e.target.value !== '' && index + 1 === length) {
      const code = codeContainerRef.current?.children[index] as HTMLInputElement;
      code.blur();
    }
    if (!codes.includes(index)) {
      setCodes(codes => [...codes, index])
    }
  }

  const disabled = React.useMemo(() => {
    const length = codeContainerRef.current?.children.length as number;
    if (!length || codes.length < length) {
      return true
    } else {
      return false;
    }
  }, [codes]);

  React.useEffect(() => {
    const firstCode = codeContainerRef.current?.children[0] as HTMLInputElement
    firstCode?.focus()
  }, [])


  return (
    <div className='flex items-center justify-center w-full h-screen bg-[#fbfcfe]'>
      <div className='bg-white max-w-[1000px] rounded-lg border-2 border-solid border-black p-7 text-center'>
        <h2 className='font-extrabold'>Verify Your Account</h2>
        <p>
          We emailed you the six digit code to cool_guy@email.com
          <br />
          Enter the code below to confirm your email address.</p>
        <div
          ref={codeContainerRef}
          className="flex items-center justify-center gap-x-4 my-4" >
          {Array(6).fill(1).map((_, index) =>
            <input
              key={index}
              min="0"
              max="9"
              type="number"
              style={codes.includes(index) ? { borderColor: '#3498db' } : {}}
              onChange={e => handleChange(e, index)}
              className="h-[120px] w-[100px] rounded-md text-[75px] border border-[#eee] focus:border-black text-center focus:border-2"
              placeholder="0"
              required />)}
        </div>
        <button
          disabled={disabled}
          className='disabled:bg-gray-200 p-4 rounded-md text-white disabled:cursor-not-allowed bg-[#3498db] active:scale-95 transition-all duration-200 ease' >
          Verify Your Account
        </button>
      </div>
    </div>
  )
}

export default Index