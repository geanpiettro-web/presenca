
import './App.css'
import EventCard from './components/EventCard'

function App() {
  return (
    <main>  
<header className="topbar"> 

  <h1>Presença</h1>
  <nav><a href="#eventos">Eventos</a>
  <button type='button'>Entrar</button>
  </nav>
</header>
<section className='hero'>
  <p className='subtitle'>Eventos Simples. Presenças reais.</p>
<h2>Organize eventos e confirme presenças sem complicações</h2>
<p>Crie eventos, gerencie inscrições e registre check-ins de maneira rápida e organizada</p>
<div className='hero-actions'>
<button type='button'>Criar evento</button>
<a href="#como-funciona">Como funciona</a>
</div>
</section>

<section id="eventos">
  <h2>Próximos Eventos</h2>
  <EventCard
  titulo="Encontro de desenvolvedores"
  data="25/01/2026"
  local="Local não informado"
  />
</section>
    </main>
  )
}

export default App
