import Titulo from '../../components/Titulo'
import Paragrafo from '../../components/Paragrafo'
import { GitHubSecao } from './styles'

const Sobre = () => (
  <section>
    <Titulo fontSize={16}>Sobre mim </Titulo>
    <Paragrafo tipo="principal">
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem tempore
      voluptates dicta ab aliquid doloremque temporibus, consequuntur
      accusantium debitis obcaecati iste illo, sapiente laborum corrupti ducimus
      quasi ipsam culpa voluptatibus!
    </Paragrafo>
    <GitHubSecao>
      <img src="https://github-readme-stats.vercel.app/api?username=GDFgustavo&show_icons=true&theme=dracula&include_all_commits=true&count_private=true" />
      <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=GDFgustavo&layout=compact&langs_count=7&theme=dracula" />
    </GitHubSecao>
  </section>
)

export default Sobre
