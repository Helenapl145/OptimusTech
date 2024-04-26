import world from './assets/worldwide.png'
import image from './assets/Image.png'
import avatar from './assets/Avatar.png'

function App() {
  return (
    <div className='overflow-x-hidden'>
      <nav className='flex flex-col gap-5 items-center justify-around mx-10 py-10 lg:flex-row lg:gap-0'>
        <div className='flex items-center gap-2'>
          <img src={world} alt="logo worldwide" />
          <h1 className='text-gray-600 font-semibold text-3xl lg:text-2xl'>OptimusTech</h1>
        </div>
        <ul className='flex items-center gap-4 text-gray-500 cursor-pointer '>
          <li className='hover:text-red-800 hover:font-bold'>Sobre nós</li>
          <li className='hover:text-red-800 hover:font-bold'>Vagas</li>
          <li className='hover:text-red-800 hover:font-bold'>Depoimentos</li>
        </ul>
        <div className='flex gap-5 items-center'>
          <a href="#" className='text-gray-500 hover:text-red-800 hover:font-bold'>Entrar</a>
          <button className='text-white font-bold bg-red-800 px-4 h-8 lg:h-10 rounded-xl hover:bg-red-900'>Cadastro</button>
        </div>
      </nav>

      <main className='mt-10 lg:mt-20 flex flex-col justify-center items-center'>
        <header className='m-auto text-center flex flex-col items-center gap-8'>
          <h3 className='text-red-800 font-bold text-2xl'>Sobre nós</h3>
          <h2 className='text-4xl font-bold'>Por que somos diferentes?</h2>
          <p className='px-3 lg:w-[700px]'>Nós focamos nos detalhes de tudo que fazemos. Tudo para ajudar as empresas de todo o mundo a se concentrarem naquilo que é realmente importante para elas.</p>
        </header>

        <section className='flex items-start justify-center gap-6 px-5 w-[100vw] lg:gap-10 lg:px-28 mt-20 lg:w-[90vw]'>
          <div className='w-1/5 lg:w-[400px]'>
            <h2 className='text-red-800 font-bold text-5xl'>400+</h2>
            <h3 className='font-bold text-1xl'>Projetos concluídos</h3>
            <p className='text-gray-600 text-justify lg:w-[300px]'>Nós ajudamos a construir mais de 400 projetos incriveis.</p>
          </div>
          <div className='w-1/5 lg:w-[400px]'>
            <h2 className='text-red-800 font-bold text-5xl'>100+</h2>
            <h3 className='font-bold text-1xl'>Colaboradores</h3>
            <p className='text-gray-600 text-justify lg:w-[300px]'>Temos mais de 100 colaboradores no nosso time que se precupam com nossos clientes.</p>
          </div>
          <div className='w-1/5 lg:w-[400px]'>
            <h2 className='text-red-800 font-bold text-5xl'>20k</h2>
            <h3 className='font-bold text-1xl'>Downloads</h3>
            <p className='text-gray-600 text-justify lg:w-[300px]'>Nossos projetos que estão disponíveis em lojas já foram baixados mais de 20.000 vezes.</p>
          </div>
          <div className='w-1/5 lg:w-[400px]'>
            <h2 className='text-red-800 font-bold text-5xl'>500+</h2>
            <h3 className='font-bold text-1xl'>Reviews 5 estrelas</h3>
            <p className='text-gray-600 text-justify lg:w-[300px]'>Estamos orgulhosos de contar com mais de 500 reviews 5 estrelas em nossos produtos.</p>
          </div>
        </section>

        <section className='flex flex-col items-center gap-4 mt-20'> 
          <h4 className='bg-red-50 text-red-800 font-semibold w-[150px] text-center rounded-lg'>Vagas abertas!</h4>
          <h2 className='text-4xl font-semibold text-center'>Estamos procurando por talentos</h2>
          <p className='text-gray-600 text-base'>Somos uma equipe 100% remota com pessoas do Brasil inteiro.</p>
          <img className='h-[300px]' src={image} alt="Image de uma reunião com um grupo de pessoas" />
        </section>

        <section className='mt-20'>
          <div className='flex flex-col gap-4'>
            <h2 className='text-3xl font-bold'>Design</h2>
            <div className='border-gray-200 border rounded-lg p-4 w-[80vw] h-[150px] flex flex-col justify-center gap-4 lg:w-[50vw]'>
              <h3 className='text-2xl font-semibold'>Product Designer</h3>
              <p className='text-base'>Full-time / Faixa salarial: R$7.000</p>
            </div>
            <div className='border-gray-200 border rounded-lg p-4 w-[80vw] h-[150px] flex flex-col justify-center gap-4 lg:w-[50vw]'>
              <h3>UX Designer</h3>
              <p>Full-time / Faixa salarial: R$6.000</p>
            </div>
          </div>

          <div className='flex flex-col gap-4 mt-8'>
            <h2 className='text-3xl my-4 font-bold'>Desenvolvimento de Software</h2>
            <div className='border-gray-200 border rounded-lg p-4 w-[80vw] h-[150px] flex flex-col justify-center gap-4 lg:w-[50vw]'>
              <h3>Desenvolvedor(a) IOS</h3>
              <p>Full-time / Faixa salarial: R$8.000</p>
            </div>
            <div className='border-gray-200 border rounded-lg p-4 w-[80vw] h-[150px] flex flex-col justify-center gap-4 lg:w-[50vw]'>
              <h3>Desenvolvedor(a) Front-end</h3>
              <p>Full-time / Faixa salarial: R$7.000</p>
            </div>
            <div className='border-gray-200 border rounded-lg p-4 w-[80vw] h-[150px] flex flex-col justify-center gap-4 lg:w-[50vw]'>
              <h3>Desenvolvedor(a) Back-end</h3>
              <p>Full-time / Faixa salarial: R$8.000</p>
            </div>
          </div>
        </section>

        <section className='bg-red-50 mt-20 flex flex-col items-center p-10 gap-5 rounded-lg'>
          <h4 className='text-red-800 font-bold'>Veja o que nossos colaboradores falam sobre nós</h4>
          <h2 className='font-bold text-xl text-center lg:w-[900px] lg:text-2xl'>OptimusTech se importa com a saúde dos seus colaboradores e sempre procura nos dar todo tipo de auxílio possível.</h2>
          <div className='flex flex-col items-center gap-2'>
            <img src={avatar} alt="Um mulher usando um computador" />
            <h3 className='text-lg font-bold'>Júlia Castro</h3>
            <p className='text-sm'>Desenvolvedora Web</p>
          </div>
        </section>

        <section className='mt-20 bg-gray-100 w-[100vw] flex flex-col items-center p-10 gap-5'>
          <h2 className='font-bold text-4xl text-center'>Acompanhe as nossas oportunidades</h2>
          <p className='text-gray-600'>Seja o primeiro a saber quando novas vagas serão abertas!</p>
          <form className='flex gap-2 items-center'>
            <input className='h-[50px] w-[300px] pl-2 rounded-lg border-gray-300 border outline-none' type="text" placeholder='Seu e-email'/>
            <button className='bg-red-800 h-[50px] text-white font-bold rounded-lg px-8 hover:bg-red-900'>Cadastrar</button>
          </form>
        </section>

        <footer className='mt-20'>
          <p className='text-gray-600'>&copy; 2024 <a className='text-red-800 font-bold hover:text-red-500' href="https://github.com/Helenapl145" target='_blank'>Helena Lima</a> </p>
        </footer>

      </main>
    </div>
  );
}

export default App;
