import "./styles.css"
import city from '../../assets/city.png'
import imagem from '../../assets/foto-exemplo.jpg'
import { useNavigate } from "react-router-dom"

function LoginPage() {
    const navigate = useNavigate()

    function handleGoAdmin() {
        navigate('/admin/search')
    }

    return (
        <div className='login-container'>
            <main className="main-content">
                <section className="onequestion-content">
                    <div className='welcome-content-form'>
                        <div className='welcome-content-form-header'>
                            <h3>Login</h3>
                            <p>Acesse as informações das alocações</p>
                        </div>
                        <form className='welcome-content-form-body'>
                            <input placeholder="Nome Completo" />
                            <input type="password" placeholder="Senha" />
                        </form>
                        <button className="welcome-content-form-button" onClick={handleGoAdmin}>Avançar</button>
                    </div>
                </section>
            </main>
        </div>
    )
}

export default LoginPage;