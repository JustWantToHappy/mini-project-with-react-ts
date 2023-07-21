import React from 'react'

const initSettings = { uppercase: true, lowercase: true, numbers: true, symbols: true };

type Settings = {
  uppercase: boolean;
  lowercase: boolean;
  numbers: boolean;
  symbols: boolean;
  [x: string]: boolean;
}

const Index = () => {
  const reducer = (state: Settings, type: "uppercase" | "lowercase" | "numbers" | "symbols") => {
    switch (type) {
      case 'uppercase':
        return { ...state, uppercase: !state.uppercase }
      case 'lowercase':
        return { ...state, lowercase: !state.lowercase }
      case 'numbers':
        return { ...state, numbers: !state.numbers }
      case 'symbols':
        return { ...state, symbols: !state.symbols }
      default:
        return state;
    }
  }

  const [pwd, setPwd] = React.useState('');
  const [length, setLength] = React.useState(20);
  const [setting, dispatch] = React.useReducer(reducer, initSettings);

  const getRandomLower = () => {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97)
  }

  const getRandomUpper = () => {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65)
  }

  const getRandomNumber = () => {
    return String.fromCharCode(Math.floor(Math.random() * 10) + 48)
  }

  const getRandomSymbol = () => {
    const symbols = '!@#$%^&*(){}[]=<>/,.'
    return symbols[Math.floor(Math.random() * symbols.length)]
  }

  const generatePwd = () => {
    let newPwd = "";
    const types: string[] = [];
    const actions: { [key: string]: () => string } = { uppercase: getRandomUpper, lowercase: getRandomLower, numbers: getRandomNumber, symbols: getRandomSymbol }
    for (const key of Object.keys(setting)) {
      if (setting[key]) {
        types.push(key)
      }
    }
    while (types.length > 0 && newPwd.length != length) {
      types.sort(() => Math.random() < 0.5 ? -1 : 1);
      newPwd += actions[types[0]]()
    }
    setPwd(newPwd);
  }

  const copyPwd = () => {
    navigator.clipboard.writeText(pwd);
    alert('Password copied to clipboard!')
  }

  return (
    <div className='overflow-hidden bg-[#3b3b98] w-full h-screen flex items-center justify-center'>
      <div
        className='bg-[rgba(0,0,0,.4)] text-white px-8 py-6 text-center rounded-md text-sm' style={{ lineHeight: '2.5rem' }}>
        <h2 className='font-extrabold text-2xl'>Password Generator</h2>
        <div className="w-80 text-left flex justify-between gap-x-4 p-2 my-2 bg-[rgba(0,0,0,.4)]">
          <span >{pwd}</span>
          <button onClick={copyPwd}>
            <i className='iconfont icon-fuzhidaima hover:text-blue-400'></i>
          </button>
        </div>
        <div className="text-left">
          <div className="flex justify-between gap-x-4">
            <label>Password Length</label>
            <input
              type="number"
              onChange={e => {
                const number = parseInt(e.target.value)
                if (!isNaN(number) && 4 <= number && number <= 20) {
                  setLength(number)
                }
              }}
              min="4"
              max="20"
              value={length}
              className='text-[#3b3b98]' />
          </div>
          <div className="flex justify-between gap-x-4">
            <label>Include uppercase letters</label>
            <input type="checkbox" onChange={() => dispatch('uppercase')} defaultChecked />
          </div>
          <div className="flex justify-between gap-x-4">
            <label>Include lowercase letters</label>
            <input type="checkbox" onChange={() => dispatch('lowercase')} defaultChecked />
          </div>
          <div className="flex justify-between gap-x-4">
            <label>Include numbers</label>
            <input type="checkbox" onChange={() => dispatch('numbers')} defaultChecked />
          </div>
          <div className="flex justify-between gap-x-4">
            <label>Include symbols</label>
            <input type="checkbox" onChange={() => dispatch('symbols')} defaultChecked />
          </div>
        </div>
        <button
          onClick={generatePwd}
          className="mt-4 bg-[#3b3b98] text-xl rounded-md w-full py-2 transition-all linear active:scale-95 active:text-blue-600">
          Generate Password
        </button>
      </div>
    </div>
  )
}

export default Index