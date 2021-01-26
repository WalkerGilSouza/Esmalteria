import React, { useState } from 'react'
import Header from '../components/header'

const Cadastrar = () => {
  const [ form, setForm ] = useState({
    NOME: '',
    EMAIL: '',
    WHATSAPP: '',
    SENHA: '',
    CONFSENHA: ''
  })
  const save = async () => {
    try {
      const response = await fetch('/api/save', {
        method: 'POST',
        body: JSON.stringify(form)
      })
      const data = await response.json()
      console.log(data)
    } catch (err) {

    }
  }
  const onChange = evt => {
    const value = evt.target.value
    const key = evt.target.name
    setForm(old => ({
      ...old,
      [key]: value
    }))
  }
  return (
    <div className='bg-gradient-to-l from-purple-500 to-purple-700 min-h-screen min-w-screen'>
      <div className=''>
        <Header />
      </div>
      <h1 className='text-center text-3xl md:text-6xl font-lobster mt-20'>Cadastro</h1>
      <div>
        <form>
          <div className='flex flex-col flex-grow items-center mt-6 font-dosis'>
            <input
              className='bg-pink-300 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-900
            rounded-lg p-2 placeholder-gray-600 mb-2 px-10' placeholder='NOME COMPLETO' onChange={onChange} name='NOME' value={form.NOME}>
            </input>
            
            <input
              className='bg-pink-300 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-900
            rounded-lg p-2 placeholder-gray-600 mb-2 px-10' placeholder='exemplo@exemplo.com' onChange={onChange} name='EMAIL' value={form.EMAIL}>
            </input>
            <input 
            className='bg-pink-300 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-900
            rounded-lg p-2 placeholder-gray-600 mb-2 px-10' placeholder='WHATSAPP' onChange={onChange} name='WHATSAPP' value={form.WHATSAPP}>
            </input>
            <input
              className='bg-pink-300 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-900
            rounded-lg p-2 placeholder-gray-600 mb-2 px-10' type='password' placeholder='SENHA' onChange={onChange} name='SENHA' value={form.SENHA}>
            </input>
            <input
              className='bg-pink-300 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-900
            rounded-lg p-2 placeholder-gray-600 mb-2 px-10' type='password' placeholder='CONFIRMAR SENHA' onChange={onChange} name='CONFSENHA' value={form.CONFSENHA}>
            </input>
            <div className='flex space-x-12 mb-10'>
              <button
                type='button'
                className='bg-red-500 font-bold hover:bg-gray-300 text-white rounded-lg px-4 py-2 hover:text-red-600
                        focus:outline-none  shadow-md font-dosis'>
                Cancelar
              </button>
              <button
                onClick={save}
                type='button'
                className='bg-indigo-800 rounded-lg px-6 py-2 text-white font-bold font-dosis hover:bg-gray-300 
                        focus:outline-none hover:text-indigo-800'>Salvar
              </button>
              
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Cadastrar