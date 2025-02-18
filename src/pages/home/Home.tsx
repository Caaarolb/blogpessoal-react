function Home() {
    return (
        <div className="h-screen w-screen bg-cover bg-center fixed top-0 left-0" 
            style={{ backgroundImage: "url('/telefone-samsung-y2k-e-baby-g-shock-iiign6yucuntb4do.webp')"}}>
            <div className="container grid grid-cols-2 text-black">
                <div className="flex flex-col items-center justify-center gap-4 py-4">
                    <h2 className="text-5xl font-Arial">
                        Seja Bem-Vindo(a)!
                    </h2>
                    <p className="text-xl">
                        Expresse aqui seus pensamentos e
                        opiniões
                    </p>

                    <div className="flex justify-around gap-4">
                        <div className="rounded border-black border-solid border-2 py-2 px-4 text-black">
                            Nova Postagem
                        </div>
                    </div>

                </div>
 
                <div className="flex left-10 mt-100">
                    <img
                        src="pngwing.com.png"
                        alt="Imagem da Página Home"
                        className="scale-"
                    />
                </div>
            </div>
        </div>
    )
    
}
 
export default Home