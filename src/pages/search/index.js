import './styles.css'
import foto from '../../assets/foto-exemplo.jpg'
import { useNavigate } from 'react-router-dom';

function SearchPage() {
    const navigate = useNavigate()

    function handleGoView() {
        navigate('/seemore/1')
    }

    return (
        <div className='container'>
            <main className="main-content">
                <section className="seach-content">
                    <div style={{ margin: '50px', display: 'flex', flexDirection: 'column', gap: '50px' }}>
                        <h1 className='logo'>Caravelas</h1>
                        <div className='search-content-form'>
                            <input className='search-content-form-input' placeholder='Pesquisar por cidade' />
                            <button className='welcome-content-form-button'>Pesquisar</button>
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

export default SearchPage;