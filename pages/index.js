import React from 'react'
import Link from 'next/link'
import useSWR from 'swr'

const fetcher = (...args) => fetch(...args).then(res => res.json())

const Index = () => {
  const { data, error } = useSWR('/api/get-login', fetcher)

  return (
    <section className='min-h-screen bg-pink-300'>
      <div className='flex flex-col items-center'>
        <div className='text-center rounded-3xl bg-gray-50 mt-32'>
          <div className='py-8 border-b-2 border-black'>
            <img className='mx-auto w-4/5' src='/logo.png'></img>
          </div>
          <div className='p-4 text-base'>
            <p className='text-md md:text-xl font-lobster'>Cadastre-se para agendamento<br />ou faça login</p>
            <form>
              <div className='flex flex-col items-center'>
                <input
                  className='my-2 p-2 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none bg-pink-100 hover:bg-purple-300'
                  type='email'
                  placeholder='exemplo@exemplo.com'>
                </input>
                <input
                  className='my-2 p-2 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none bg-pink-100 hover:bg-purple-300'
                  type='password'
                  placeholder='SENHA'>
                </input>
              </div>
              <div className='space-x-10'>
                <Link href='/cadastro'>
                  <button
                    type='button' className='flex-shrink-0 font-dosis bg-blue-400 hover:bg-blue-600 rounded p-1 focus:outline-none'>Cadastrar
                </button>
                </Link>
                <button
                  type='button' className='flex-shrink-0 font-dosis bg-blue-400 hover:bg-blue-600 rounded py-1 px-4 focus:outline-none'>Entrar
              </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Index