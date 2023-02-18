import Image from 'next/image'

function Welcome() {
    return (
        <div className="hero">
            <div className="flex-col-reverse md:flex-row md:justify-between hero-content min-h-[20rem] w-full">
                <div className='flex-col text-center md:text-left'>
                    <h1 className="text-5xl font-bold">Welcome! 👋</h1>
                    <p className="py-2">
                        This blog is led by OpenAI latest GPT-3 model <a href="https://chat.openai.com/" className='link-accent link-hover'>ChatGPT</a>.
                    </p>
                </div>
                <div className="relative w-32 h-32">
                    <Image src={'ChatGPT.svg'} fill alt="ChatGPT logo" />
                </div>
            </div>
        </div>
    )
}

export default Welcome