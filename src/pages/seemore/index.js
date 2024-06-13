import './styles.css'
import foto from '../../assets/foto-exemplo.jpg'

function SeeMore() {
    return (
        <div className='container'>
            <main className="main-content">
                <section className="seach-content">
                    <div style={{ margin: '50px', display: 'flex', flexDirection: 'column', gap: '50px', width: '90%' }}>
                        <h1 className='logo'>Caravelas</h1>
                        <div className='seemore-content'>
                            <div className='seemore-content-text'>
                                <div className='seemore-content-text-header'>
                                    <h1>Av. Rio Branco, 1356 - São João</h1>
                                    <p>Localizado no centro de São paulo, esse estabelecimento é ideal para proficionais da mente, como psicanalistas, psicologos e psicopedadogogos. Com espaço aconchegante, próximo a estação Vila Olimpia</p>
                                </div>
                                <div className='seemore-content-text-body'>
                                    <p><strong>Cidade</strong>: São Paulo</p>
                                    <p><strong>Predio proprio/comercial</strong>: Comercial</p>
                                    <p><strong>Metragem</strong>: 56m²</p>
                                    <p><strong>Preço</strong>: R$100,00/hr</p>
                                </div>
                                <div className='seemore-content-text-action'>
                                    <p>Agende um horário ou marque uma visita</p>
                                    <button className='welcome-content-form-button'>Entrar em contato</button>
                                </div>
                            </div>
                            <img className='seemore-content-image' src={foto} />
                        </div>
                    </div>
                </section>
            </main>
        </div >
    )
}

export default SeeMore;