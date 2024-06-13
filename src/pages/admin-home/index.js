import './styles.css'
import foto from '../../assets/foto-exemplo.jpg'
import { Link, useNavigate } from 'react-router-dom'

function AdminHome() {
    const navigate = useNavigate()

    function handleGoView() {
        navigate('/admin/edit-estabilishment')
    }

    function handleGoAdd() {
        navigate('/admin/new-estabilishment')
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
                            <input className='search-content-form-input' placeholder='Pesquisar por cidade' />
                            <button className='welcome-content-form-button'>Pesquisar</button>
                            <button className='welcome-content-form-button' style={{ border: '2px solid #000' }} onClick={handleGoAdd}>Novo Estabelecimento</button>
                        </div>
                        <div className='seach-content-list'>
                            <div className='search-content-list-item'>
                                <div className="search-content-list-item-image-container">
                                    <img src={foto} alt="Descrição da Imagem 3" />
                                </div>
                                <div className='search-content-list-props'>
                                    <p className='search-content-list-item-title'>Av. Rio Branco, 1356</p>
                                    <p className='search-content-list-item-prop'>Cidade: São Paulo - SP</p>
                                    <p className='search-content-list-item-prop'>Metragem: 56m²</p>
                                    <p className='search-content-list-item-prop'>Preço: R$100,00/hr</p>
                                </div>
                                <button className='welcome-content-form-button' onClick={handleGoView}>Ver mais</button>
                            </div>

                            <div className='search-content-list-item'>
                                <div className="search-content-list-item-image-container">
                                    <img src={foto} alt="Descrição da Imagem 3" />
                                </div>
                                <div className='search-content-list-props'>
                                    <p className='search-content-list-item-title'>Av. Rio Branco, 1356</p>
                                    <p className='search-content-list-item-prop'>Cidade: São Paulo - SP</p>
                                    <p className='search-content-list-item-prop'>Metragem: 56m²</p>
                                    <p className='search-content-list-item-prop'>Preço: R$100,00/hr</p>
                                </div>
                                <button className='welcome-content-form-button'>Ver mais</button>
                            </div>

                            <div className='search-content-list-item'>
                                <div className="search-content-list-item-image-container">
                                    <img src={foto} alt="Descrição da Imagem 3" />
                                </div>
                                <div className='search-content-list-props'>
                                    <p className='search-content-list-item-title'>Av. Rio Branco, 1356</p>
                                    <p className='search-content-list-item-prop'>Cidade: São Paulo - SP</p>
                                    <p className='search-content-list-item-prop'>Metragem: 56m²</p>
                                    <p className='search-content-list-item-prop'>Preço: R$100,00/hr</p>
                                </div>
                                <button className='welcome-content-form-button'>Ver mais</button>
                            </div>

                            <div className='search-content-list-item'>
                                <div className="search-content-list-item-image-container">
                                    <img src={foto} alt="Descrição da Imagem 3" />
                                </div>
                                <div className='search-content-list-props'>
                                    <p className='search-content-list-item-title'>Av. Rio Branco, 1356</p>
                                    <p className='search-content-list-item-prop'>Cidade: São Paulo - SP</p>
                                    <p className='search-content-list-item-prop'>Metragem: 56m²</p>
                                    <p className='search-content-list-item-prop'>Preço: R$100,00/hr</p>
                                </div>
                                <button className='welcome-content-form-button'>Ver mais</button>
                            </div>

                            <div className='search-content-list-item'>
                                <div className="search-content-list-item-image-container">
                                    <img src={foto} alt="Descrição da Imagem 3" />
                                </div>
                                <div className='search-content-list-props'>
                                    <p className='search-content-list-item-title'>Av. Rio Branco, 1356</p>
                                    <p className='search-content-list-item-prop'>Cidade: São Paulo - SP</p>
                                    <p className='search-content-list-item-prop'>Metragem: 56m²</p>
                                    <p className='search-content-list-item-prop'>Preço: R$100,00/hr</p>
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

export default AdminHome;