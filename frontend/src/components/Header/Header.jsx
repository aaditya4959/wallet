export default function Header(){
    return (
        <>
          <div className='bg-gray-500 p-4 flex flex-wrap justify-between text-white text-3xl font-bold'>
            BATUA v1.0
            <div className='flex flex-wrap justify-around gap-4 text-xl font-normal'>
              <button>SignIn</button>
              <button>SignUp</button>
            </div>
            
          </div>
        </>
      )
}