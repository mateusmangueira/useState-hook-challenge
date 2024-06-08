import { FormEvent, useState } from 'react'
import './App.css'

function App() {

  interface ResultProps {
    name: string
    age: number
  }

  const [name, setName] = useState('')
  const [year, setYear] = useState('')
  const [result, setResult] = useState<ResultProps>()


  function handleSubmitForm(e: FormEvent) {
    e.preventDefault();

    const currentYear = new Date().getUTCFullYear();
    setResult({
      name: name,
      age: currentYear - Number(year)
    });

    setName("")
    setYear("")

  }

  return (
    <div className="container">
      <h1>Descubra sua idade</h1>

      <form className="form" onSubmit={handleSubmitForm}>
        <label className="label">Digite seu nome?</label>
        <input
          className="input"
          placeholder="Digite seu nome..."
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <label className="label">Digite o ano que nasceu?</label>
        <input
          className="input"
          type='number'
          placeholder="Digite seu ano de nascimento..."
          value={year}
          onChange={(e) => setYear(e.target.value)}
        />

        <button type="submit">
          Descobrir idade
        </button>
      </form>

      {result && result.name !== '' && (
        <section className="result">
          <h2>{result?.name} você tem: <span>{result?.age} anos</span> </h2>
        </section>
      )}

    </div>
  )
}

export default App
