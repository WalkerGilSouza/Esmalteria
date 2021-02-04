import Link from 'next/link'
import React, { useState } from 'react'
import useSWR from 'swr'

const fetcher = (...args) => fetch(...args).then(res => res.json())

const Home = () => {
    const { data, error } = useSWR('/api/get-proficionais', fetcher)
    const [ open, setOpen ] = useState(false)
    
    const includeCard = [0, 1,]

    const toggle = () => {
        setOpen(!open)
    }
    
    return (
        <div>
            <nav className='bg-purple-500'>
                <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
                    <div className='flex items-center justify-between h-20'>
                        <div className='flex items-center'>
                            <div className='flex-shrink-0'>
                                <img className='h-8 md:h-12' src='/logo.png' alt='logo' />
                            </div>                            
                        </div>
                        <div className='hidden md:block'>
                            <div className='ml-4 flex items-center md:ml-6'>
                                <h5>Bem vindo "Cliente"</h5>
                                <div className='ml-3 relative'>
                                    <div>
                                        <button className='max-w-xs bg-gray-800 rounded-full flex items-center text-sm focus:outline-none focus:ring-1 focus:ring-offset-1 focus:ring-offset-gray-800 focus:ring-white' onClick={toggle} id='user-menu' aria-haspopup='true'>
                                            <span className='sr-only'>Open User Menu</span>
                                            <img className='h-12 w-12 rounded-full' src='/rosto1.png' alt='rosto exemplo' />
                                        </button>
                                    </div>
                                    { open &&
                                        <div className='origin-top-right absolute right-0 mt-2 w-20 rounded-md shadow-lg py-2 bg-white ring-black ring-opacity-5' role='menu' aria-orientation='vertical' aria-labelledby='user-menu'>
                                            <Link href='/'>    
                                                <a className='block px-4 text-sm text-gray-700 hover:bg-gray-100' role='menuitem'>Sair</a>
                                            </Link>
                                        </div>
                                    }
                                </div>
                            </div>
                        </div>
                        <div className='-mr-2 flex md:hidden'>
                            <div>
                                <button className='bg-gray-800 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:offset-gray-800 focus:ring-white' onClick={toggle}>
                                {!open &&
                                    <svg className='block h-6 w-6' xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='currentColor' aria-hidden='true'>
                                        <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M4 6h16M4 12h16M4 18h16' />
                                    </svg>}
                                {open &&
                                    <svg className='block h-6 w-6' xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='currentColor' aria-hidden='true'>
                                        <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M6 18L18 6M6 6l12 12' />
                                    </svg>                                
                                }                       
                                </button>
                                {open && <div className='origin-top-right absolute right-0 mt-2 w-20 rounded-md shadow-lg py-2 bg-white ring-black ring-opacity-5' role='menu' aria-orientation='vertical' aria-labelledby='user-menu'>
                                <Link href='/'>    
                                    <a className='block px-4 text-sm text-gray-700 hover:bg-gray-100' role='menuitem'>Sair</a>
                                </Link>
                                </div>}
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
            <main>
                <div className='max-w-7xl mx-auto py-6 sm:px-6 lg:px-8'>
                    <div className='px-4 py-6 sm:px-0'>
                        <div className='flex border-4 border-dashed border-gray-200 rounded-lg h-80'>
                            <div className='flex flex-shrink-0 mx-auto'>
                                <div className='grid grid-cols-1 md:grid-cols-2 md:gap-4'>                                
                                    
                                        <div className='border-gray-600 border rounded-md px-2 text-center'>
                                            <h5 className='font-bold font-dosis py-2'>PROFISIONAIS</h5>
                                        {includeCard.map(() =>
                                            <div>
                                                {!data && <p>Carregando...</p>}
                                                {!error && data &&
                                                    <div className='mt-3 flex border border-gray-800 shadown-lg rounded-md p-2 bg-purple-100 hover:bg-purple-300'>
                                                        <img className='block h-12' src='/rosto1.png' />
                                                        <div className='sm:ml-3 sm:text-left text-center'>
                                                        <p className='text-md font-dosis font-semibold'>{data.nomeFunc}</p>
                                                        <p className='text-sm text-gray-400 '>{data.funFunc}</p>
                                                        </div>
                                                    </div>
                                                }
                                            </div>
                                            )
                                        }
                                        </div>                                        
                                    <div className='border-gray-600 border shadown-lg rounded-md px-2 text-center'>
                                        <h5 className='font-bold font-dosis py-2'>SERVIÇOS</h5>
                                        <div className='flex border border-gray-600 shadow-lg p-2 mt-3 rounded-md'>
                                            <img className='block h-12' src='/designerSombra.png' />
                                            <div className='sm:ml-3 sm:text-left text-center'>
                                                <p className='text-sm font-dosis'>Design Sombrancelha</p>
                                                <p className='text-gray-600 font-dosis'>R$ 45,00</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}
export default Home