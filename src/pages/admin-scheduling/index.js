import './styles.css'
import { Link, useNavigate } from 'react-router-dom'

function SchedulingPage() {
    const navigate = useNavigate()

    function handleGoNew() {
        navigate('/admin/new-schedule')
    }

    function handleGoEdit() {
        navigate('/admin/edit-schedule')
    }

    return (
        <div className='container'>
            <main className="main-content">
                <header className='admin-header'>
                    <Link to='/admin/search'><p className='selected'>Estabelecimentos </p></Link>
                    <Link to='/admin/schedule'><p>Agendamentos </p></Link>
                    <Link to='/admin/contacts'><p>Contatos</p></Link>
                </header>
                <section className="seach-content">
                    <div style={{ margin: '50px', marginTop: '20px', display: 'flex', flexDirection: 'column', gap: '50px' }}>
                        <h1 className='logo'>Caravelas <span>Admin</span></h1>
                        <div className='admin-search-content-form'>
                            <input className='search-content-form-input' placeholder='Pesquisar por estabelecimento' />
                            <button className='welcome-content-form-button'>Pesquisar</button>
                            <button className='welcome-content-form-button' style={{ border: '2px solid #000' }} onClick={handleGoNew}>Novo Agendamento</button>
                        </div>
                        <p>Agendamentos mais próximos:</p>
                        <div className='seach-content-list'>
                            <div className='search-content-list-item'>
                                <div className='search-content-list-props'>
                                    <p className='search-content-list-item-title'>Rubens da Silva</p>
                                    <p className='search-content-list-item-prop'>CPF: 465.933.968-85</p>
                                    <p className='search-content-list-item-prop'>Telefone: 75991790928</p>
                                    <p className='search-content-list-item-prop'>Data Marcada: 10/10/2003</p>
                                    <p className='search-content-list-item-prop'>Estabelecimento: Av.Rio Branco, 130</p>
                                </div>
                                <button className='welcome-content-form-button' onClick={handleGoEdit}>Ver mais</button>
                            </div>

                            <div className='search-content-list-item'>
                                <div className='search-content-list-props'>
                                    <p className='search-content-list-item-title'>Rubens da Silva</p>
                                    <p className='search-content-list-item-prop'>CPF: 465.933.968-85</p>
                                    <p className='search-content-list-item-prop'>Telefone: 75991790928</p>
                                    <p className='search-content-list-item-prop'>Data Marcada: 10/10/2003</p>
                                    <p className='search-content-list-item-prop'>Estabelecimento: Av.Rio Branco, 130</p>
                                </div>
                                <button className='welcome-content-form-button'>Ver mais</button>
                            </div>

                            <div className='search-content-list-item'>
                                <div className='search-content-list-props'>
                                    <p className='search-content-list-item-title'>Rubens da Silva</p>
                                    <p className='search-content-list-item-prop'>CPF: 465.933.968-85</p>
                                    <p className='search-content-list-item-prop'>Telefone: 75991790928</p>
                                    <p className='search-content-list-item-prop'>Data Marcada: 10/10/2003</p>
                                    <p className='search-content-list-item-prop'>Estabelecimento: Av.Rio Branco, 130</p>
                                </div>
                                <button className='welcome-content-form-button'>Ver mais</button>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    )
}

export default SchedulingPage;