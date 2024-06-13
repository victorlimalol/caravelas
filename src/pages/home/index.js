import "./styles.css"
import city from '../../assets/city.png'
import imagem from '../../assets/foto-exemplo.jpg'
import { useNavigate } from "react-router-dom"

function HomePage() {
    const navigate = useNavigate()

    function handleGoSearch() {
        navigate('/search')
    }

    return (
        <div className='container'>
            <div className='welcome-area'>
                <div className='welcome-content'>
                    <h1 className='welcome-content-title'>Conheça nossos<br></br> espaços, aloque<br></br> com <span>facilidade</span></h1>
                    <div className='welcome-content-form'>
                        <div className='welcome-content-form-header'>
                            <h3>Quero ver mais de perto</h3>
                            <p>Preencha o formulário e veja informações do espaço que melhor lhe atende.</p>
                        </div>
                        <form className='welcome-content-form-body'>
                            <input placeholder="Nome Completo" />
                            <input placeholder="CPF" />
                            <input placeholder="Whatsapp" />
                            <input placeholder="Principal Serviço" />
                        </form>
                        <button className="welcome-content-form-button" onClick={handleGoSearch}>Avançar</button>
                    </div>
                </div>
            </div>
            <main className="main-content">
                <section className="onequestion-content">
                    <img className="onequestion-content-image" src={city} />
                    <h3 className="onequestion-content-text">
                        O quão importante é <br></br>estar <span>bem posicionado</span><br></br> para o seu negócio?
                    </h3>
                </section>
                <section className="characteristcs-content">
                    <h3 className="characteristcs-content-text">
                        Ambientes <br></br>pensados para <br></br> <span>melhor lhe atender</span>
                    </h3>
                    <ul className="characteristcs-content-list">
                        <li>Professores que desejam dar aulas particulares;</li>
                        <li>Psicanalistas e psicólogos que atendem em consultório;</li>
                        <li>Estudantes que precisam de um espaço tranquilo para estudar;</li>
                        <li>Profissionais que desejam realizar workshops ou treinamentos.</li>
                    </ul>
                </section>
                <section className="localization-content">
                    <div className="localization-content-header">
                        <h3 className="localization-content-header-title">Lugares projetados</h3>
                        <p className="localization-content-header-subtitle">Abaixo, algumas das nossas salas espalhadas em diferentes lugares. encontre a que melhor atende á sua necessidade</p>
                    </div>
                    <div className="localization-content-body">
                        <div className="image-container">
                            <img src={imagem} alt="Descrição da Imagem 1" />
                        </div>
                        <div className="image-container">
                            <img src={imagem} alt="Descrição da Imagem 2" />
                        </div>
                        <div className="image-container">
                            <img src={imagem} alt="Descrição da Imagem 3" />
                        </div>
                    </div>
                </section>
                <section className="contact-content">
                    <h3 className="contact-content-text">Vamos fazer acontecer?</h3>
                    <button className="welcome-content-form-button">Conhecer salas</button>
                </section>
            </main>
        </div>
    )
}

export default HomePage;