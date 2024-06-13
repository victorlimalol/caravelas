import './styles.css'
import foto from '../../assets/foto-exemplo.jpg'
import { Link, useNavigate } from 'react-router-dom'

function EditSchedule() {
    return (
        <div className='container'>
            <main className="main-content">
                <header className='admin-header'>
                    <Link to='/admin/search'><p className='selected'>Estabelecimentos </p></Link>
                    <Link to='/admin/schedule'><p>Agendamentos </p></Link>
                    <Link to='/admin/contacts'><p>Contatos</p></Link>
                </header>
                <section className="new-estabilishment-content">
                    <div style={{ margin: '50px', marginTop: '20px', display: 'flex', flexDirection: 'column', gap: '50px', width: '80%' }}>
                        <h1 className='logo'>Caravelas <span>Admin</span></h1>
                        <div className='new-estabilishment-form'>
                            <div>
                                <h1>Editar Agendamento</h1>
                                <input placeholder='Nome do cliente' />
                                <input placeholder='CPF' />
                                <input placeholder='Telefone' />
                                <input placeholder='Data Marcada' />
                                <input placeholder='Estabelecimento' />
                                <button className='welcome-content-form-button'>Salvar</button>
                                <button className='welcome-content-form-button' style={{ backgroundColor: '#e74c3c', color: '#fff' }}>Deletar</button>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    )
}

export default EditSchedule;