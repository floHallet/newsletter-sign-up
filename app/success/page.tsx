import Image from 'next/image'

export default function Home() {
    return (
        <main className="lg:grid lg:place-items-center lg:min-h-screen">
            <section className=" bg-white lg:p-5 lg:rounded-3xl shadow-2xl">
                <form action="" className='flex flex-col place-content-between min-h-screen lg:min-h-0 max-w-sm lg:max-w-md m-auto p-6 lg:py-7 lg:px-10 lg:pr-12'>
                    <div className='mt-40 lg:mt-0'>
                        <Image
                            className='pb-5'
                            src="/images/icon-success.svg" // Route of the image file
                            height={60} // Desired size with correct aspect ratio
                            width={60} // Desired size with correct aspect ratio
                            alt="a picture"
                        />

                        <h1 className="text-[2.5rem] lg:text-[3.2rem] py-3 tracking-[.015em] leading-[3rem] text-blue-950">Thanks for subscribing!</h1>

                        <p className="text-base py-2.5">A confirmation email has been sent to ash@loremcompany.com.
                            Please open it and click the button inside to confirm your subscription.</p>
                    </div>

                    <button className="rounded-md bg-gradient-to-r from-blue-950 tracking-wide to-blue-950 p-4 my-4 mt-6 text-sm font-semibold text-white hover:from-rose-500 hover:to-orange-600 hover:shadow-lg hover:shadow-orange-600 focus:shadow-blue-950" type="submit">Dismiss message</button>
                </form>
            </section>
        </main>
    )
}
