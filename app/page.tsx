import Image from 'next/image'

export default function Home() {
  return (
    <>
      <main className="grid place-items-center min-h-screen">
        <section className="flex bg-white p-5 rounded-3xl">
          <form action="" className='max-w-md py-7 px-10 pr-12 flex flex-col place-content-center'>
            <h1 className="text-5xl py-4 tracking-normal text-blue-950">Stay updated!</h1>

            <p className="text-base py-2.5">Join 60,000+ product managers receiving monthly updates on:</p>

            <ul className='my-2'>
              <li className="text-base py-1"><Image
                className='inline mr-4'
                src="/images/icon-list.svg" // Route of the image file
                height={16} // Desired size with correct aspect ratio
                width={16} // Desired size with correct aspect ratio
                alt="a picture"
              />Product discovery and building what matters</li>
              <li className="text-base py-1"><Image
                className='inline mr-4'
                src="/images/icon-list.svg" // Route of the image file
                height={16} // Desired size with correct aspect ratio
                width={16} // Desired size with correct aspect ratio
                alt="a picture"
              />Measuring to ensure updates are a success</li>
              <li className="text-base py-1"><Image
                className='inline mr-4'
                src="/images/icon-list.svg" // Route of the image file
                height={16} // Desired size with correct aspect ratio
                width={16} // Desired size with correct aspect ratio
                alt="a picture"
              />And much more!</li>
            </ul>

            <div className="flex flex-col py-5 gap-5">
              <div className='flex flex-col'>
                <label className="py-1.5 text-xs font-bold" htmlFor="email-address">Email address</label>
                
                <input className="peer min-w-0 flex-auto rounded-md ring-gray-300 p-3 pl-5 shadow-sm ring-2 ring-inset ring-white/10 hover:ring-gray-500 focus:ring-2 focus:ring-inset focus:ring-black invalid:ring-rose-500 invalid:text-rose-600" name='email' id='email-address' type="email" autoComplete="email" required placeholder='email@company.com' />
                <p className="mt-2 invisible peer-invalid:visible text-rose-500 text-sm">
                  Please provide a valid email address.
                </p>
              </div>
              <button className=" flex-none rounded-md bg-gradient-to-r from-blue-950 to-blue-950 p-3 text-sm font-semibold text-white shadow-sm hover:from-rose-500 hover:to-orange-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500" type="submit">Subscribe to monthly newsletter</button>
            </div>
          </form>
          <Image
            className='rounded-none'
            src="/images/illustration-sign-up-desktop.svg" // Route of the image file
            height={384} // Desired size with correct aspect ratio
            width={384} // Desired size with correct aspect ratio
            alt="a picture"
          />
        </section>
        <div id="success">
          <h1>Thanks for subscribing!</h1>

          <p>A confirmation email has been sent to ash@loremcompany.com.
            Please open it and click the button inside to confirm your subscription.</p>

          <button>Dismiss message</button>
        </div>
      </main>

      <div className="attribution">
        Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>.
        Coded by <a href="#">floHal</a>.
      </div>
    </>
  )
}
