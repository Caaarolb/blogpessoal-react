function Home() {
    return (
        <>
            <div style={{
                width: "100vw",
                display: "flex",
                justifyContent: "center",
                backgroundColor: "rgba(255,192,203)"    
            }}>
                <div>
                    <div style={{
                         width: "80vw",
                         display: "flex",
                         flexDirection: "column",
                         alignItems: "center",
                         backgroundColor: "rgba(219,112,147)",
                         borderRadius: "20px",
                        fontFamily: "Arial, sans-serif"
                    }}>
                        <h2>⭐ Blog Pessoal ⭐</h2>
                        <p>Expresse aqui seus pensamentos e opiniões</p>
                    </div>

                    <div style={{
                         width: "80vw",
                         display: "flex",
                         flexDirection: "column",
                         alignItems: "center"
                         
                    }}>
                        <img 
                            src="https://i.imgur.com/Xz1IrCf.png" 
                            alt="Imagem da Página Home" 
                            width="400px"
                        />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home