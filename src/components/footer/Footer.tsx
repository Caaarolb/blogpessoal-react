import { InstagramLogo, LinkedinLogo } from '@phosphor-icons/react'

function Footer() {

    let data = new Date().getFullYear()

    return (
        <>
            <div className="flex justify-center bg-indigo-900 text-white">
                <div className="container flex flex-col items-center py-4">
                    <p className='text-xl font-bold'>
                            Blog Pessoal da Jeisa Boaventura | Copyright: {data}
                        </p>
                    <p className='text-lg'>Acesse minhas redes sociais</p>
                    <div className='flex gap-2'>
            <a href="https://www.linkedin.com/in/-caroline-boaventura/" target="_blank">
                <LinkedinLogo size={48} weight='bold' />
            </a>
            <a href="https://www.instagram.com/karolboav" target="_blank">
                <InstagramLogo size={48} weight='bold' />
            </a>
            
</div>
                </div>
            </div>
        </>
    )
}

export default Footer