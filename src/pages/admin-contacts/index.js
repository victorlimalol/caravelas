import './styles.css'
import foto from '../../assets/foto-exemplo.jpg'
import { Link, useNavigate } from 'react-router-dom'

function SchedulingPage() {
    return (
        <div className='container'>
            <main className="main-content">
                <header className='admin-header'>
                    <Link to='/admin/search'><p className='selected'>Estabelecimentos </p></Link>
                    <Link to='/admin/schedule'><p>Agendamentos </p></Link>
                    <Link to='/admin/contacts'><p>Contatos</p></Link>
                </header>
                <section className="seach-content">
                    <div style={{ margin: '50px', display: 'flex', flexDirection: 'column', gap: '50px' }}>
                        <h1 className='logo'>Caravelas <span>Admin</span></h1>
                        <p>Contatos mais recentes:</p>
                        <div className='seach-content-list'>
                            <div className='search-content-list-item'>
                                <div className='search-content-list-props'>
                                    <p className='search-content-list-item-title'>Rubens da Silva</p>
                                    <p className='search-content-list-item-prop'>CPF: 465.933.968-85</p>
                                    <p className='search-content-list-item-prop'>Whatsapp: 75991790928</p>
                                    <p className='search-content-list-item-prop'>Principal Serviço: 10/10/2003</p>
                                </div>
                            </div>

                            <div className='search-content-list-item'>
                                <div className='search-content-list-props'>
                                    <p className='search-content-list-item-title'>Rubens da Silva</p>
                                    <p className='search-content-list-item-prop'>CPF: 465.933.968-85</p>
                                    <p className='search-content-list-item-prop'>Whatsapp: 75991790928</p>
                                    <p className='search-content-list-item-prop'>Principal Serviço: 10/10/2003</p>
                                </div>
                            </div>

                            <div className='search-content-list-item'>
                                <div className='search-content-list-props'>
                                    <p className='search-content-list-item-title'>Rubens da Silva</p>
                                    <p className='search-content-list-item-prop'>CPF: 465.933.968-85</p>
                                    <p className='search-content-list-item-prop'>Whatsapp: 75991790928</p>
                                    <p className='search-content-list-item-prop'>Principal Serviço: 10/10/2003</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    )
}

export default SchedulingPage;