import "./App.css"

function App() {
  return (
    <div className="pai">
      <aside>
        <img src="./assets/logo.svg" />
        <img src="./assets/FotoMinha.jpg" />
        <p>
          Cápsula do Tempo de <br />
          <strong>Everton</strong>
        </p>
        <span>Feito com 💜 no NLW da RocketSeat!</span>
      </aside>
      <nav>
        <a
          href="https://www.youtube.com/watch?v=3nz5HkUJaVU"
          target="_blank"
          className="memory"
          rel="noreferrer"
        >
          <small>20 de Março de 2023</small>
          <h1>Jornada do Zero à Primeira Vaga</h1>
          <div>
            <img src="./assets/jornada.png" />
          </div>
          <p>
            At vero eos et accusamus et iusto odio dignissimos ducimus qui
            blanditiis praesentium voluptatum deleniti atque corrupti quos
            dolores et quas molestias excepturi sint occaecati cupiditate non
            provident, similique...
          </p>
        </a>
        <a
          href="https://www.youtube.com/watch?v=3nz5HkUJaVU"
          target="_blank"
          className="memory"
          rel="noreferrer"
        >
          <small>01 de Abril de 2023</small>
          <h1>Gato de Óculos</h1>
          <div>
            <img src="./assets/imagem.jpg" />
          </div>
          <p>
            At vero eos et accusamus et iusto odio dignissimos ducimus qui
            blanditiis praesentium voluptatum deleniti atque corrupti quos
            dolores et quas molestias excepturi sint occaecati cupiditate non
            provident, similique...
          </p>
        </a>
        <a
          href="https://www.youtube.com/watch?v=3nz5HkUJaVU"
          target="_blank"
          className="memory"
          rel="noreferrer"
        >
          <small>01 de Abril de 2023</small>
          <h1>Cachorro Ouvindo Música</h1>
          <div>
            <img src="./assets/CachorroDeFonejpg.jpg" />
          </div>
          <p>
            At vero eos et accusamus et iusto odio dignissimos ducimus qui
            blanditiis praesentium voluptatum deleniti atque corrupti quos
            dolores et quas molestias excepturi sint occaecati cupiditate non
            provident, similique...
          </p>
        </a>
      </nav>
    </div>
  )
}

export default App
