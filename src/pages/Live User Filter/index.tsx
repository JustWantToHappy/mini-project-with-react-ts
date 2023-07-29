import React from 'react'

type User = {
  email: string;
  gender: 'female' | 'male',
  name: {
    first: string;
    last: string;
  },
  location: {
    country: string;
    city: string;
  },
  picture: { large: string }
}

const Index = () => {
  const [data, setData] = React.useState<User[]>([]);
  const [filterData, setFilterData] = React.useState<User[]>([]);

  const getData = async () => {
    const res = await fetch('https://randomuser.me/api?results=50')
    const { results } = await res.json()
    setData(results);
    setFilterData(results)
  }

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value.toUpperCase();
    const filterData = data.filter(item => (item.name.first + " " + item.name.last).toUpperCase().includes(value))
    setFilterData(filterData)
  }

  React.useEffect(() => {
    getData();
  }, []);


  return (
    <div className='bg-[#f8f9fd] flex items-center w-full h-screen overflow-hidden justify-center'>
      <div className='rounded-md w-[300px] overflow-hidden shadow-lg h-screen'>
        <header className='bg-[#3e57db] border-0 text-white text-lg px-3 py-4 w-full overflow-hidden h-[180px]' >
          <h4 className=' font-extrabold text-md mt-4'>Live User Filter</h4>
          <small className='inline-block opacity-80 my-2'>Search by name and/or location</small>
          <input
            onChange={handleChange}
            className='bg-[rgba(0,0,0,.3)] py-2 px-4 rounded-full w-full text-sm'
            type='text'
            placeholder='Search' />
        </header>

        <ul
          style={{ maxHeight: 'calc(100vh - 180px)' }}
          className='p-3 overflow-auto '>
          {data.length > 0 ?
            filterData.map(item => <li
              className='h-20 overflow-hidden flex py-4 gap-x-4 border-b border-b-gray-200'
              key={item.email}>
              <img
                className='rounded'
                src={item.picture.large}
                alt={item.picture.large}
                title={item.name.first + " " + item.name.last} />
              <div>
                <strong>{item.name.first + " " + item.name.last}</strong>
                <br />
                <small>{item.location.country + " " + item.location.city}</small>
              </div>
            </li>) :
            <li>
              <h3>Loading...</h3>
            </li>}
        </ul>
      </div>
    </div>
  )
}

export default Index