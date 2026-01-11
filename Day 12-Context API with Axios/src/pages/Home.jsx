import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className='flex flex-col items-center justify-center h-screen gap-10'>
      <h1 className='text-7xl font-bold'>Home Page</h1>
      <Link to="/products" className='bg-blue-500 text-white px-4 py-2 rounded text-xl cursor-pointer active:scale-95'>Explore Products</Link>
    </div>
  )
}

export default Home
