'use client'

import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { ChangeEvent, FormEvent, useState } from 'react'

export default function Home() {
  const router = useRouter()
  const [email, setEmail] = useState('');
  const [error, setError] = useState(false);


  function handleSubmit(event: FormEvent<HTMLFormElement>): void {
    event.preventDefault()
    if (!email || error) {
      setError(true)
      const emailInput = document.getElementById("email-address")
      if (emailInput && !emailInput.className.includes("invalid:")) {
        emailInput.classList.add("invalid:bg-rose-100")
        emailInput.classList.add("invalid:ring-rose-400")
        emailInput.classList.add("invalid:text-rose-400")
      }
    }
    else router.push(`/success?email=${email}`)
  }

  function handleChange(event: ChangeEvent<HTMLInputElement>): void {
    const emailInput = event.target
    if (emailInput.validity.valid) {
      setEmail(emailInput.value) 
      setError(false)
    } else {
      setError(true)
      if (!emailInput.className.includes("invalid:")) {
        emailInput.classList.add("invalid:bg-rose-100")
        emailInput.classList.add("invalid:ring-rose-400")
        emailInput.classList.add("invalid:text-rose-400")
      }
    }
  }

  return (
    <>
      <main className="grid place-items-center min-h-screen">
        <section className="flex flex-col-reverse lg:flex-row bg-white lg:p-5 lg:rounded-3xl shadow-2xl">
          <form noValidate onSubmit={handleSubmit} className='max-w-sm lg:max-w-md m-auto p-6 lg:py-7 lg:px-10 lg:pr-12 flex flex-col place-content-center'>
            <h1 className="text-[2.5rem] lg:text-[3.2rem] py-3 tracking-[.015em] text-blue-950">Stay updated!</h1>

            <p className="text-base py-2.5">Join 60,000+ product managers receiving monthly updates on:</p>

            <ul className='my-2'>
              <li className="text-base py-1 flex"><Image
                className='mr-4 mt-1 place-self-start'
                src="/images/icon-list.svg" // Route of the image file
                height={16} // Desired size with correct aspect ratio
                width={16} // Desired size with correct aspect ratio
                alt="a picture"
              />Product discovery and building what matters</li>
              <li className="text-base py-1 flex"><Image
                className='mr-4 mt-1 place-self-start'
                src="/images/icon-list.svg" // Route of the image file
                height={16} // Desired size with correct aspect ratio
                width={16} // Desired size with correct aspect ratio
                alt="a picture"
              />Measuring to ensure updates are a success</li>
              <li className="text-base py-1 flex"><Image
                className='mr-4 mt-1 place-self-start'
                src="/images/icon-list.svg" // Route of the image file
                height={16} // Desired size with correct aspect ratio
                width={16} // Desired size with correct aspect ratio
                alt="a picture"
              />And much more!</li>
            </ul>

            <div className="flex flex-col py-5 gap-5">
              <div className='flex flex-col'>
                <div>
                  <label className="float-left py-1.5 text-xs font-bold text-blue-950" htmlFor="email-address">Email address</label>
                  {error &&
                    <p className="float-right py-1.5 text-xs font-bold text-rose-400">
                      Valid email required
                    </p>
                  }
                </div>
                <input onChange={handleChange} className="min-w-0 flex-auto rounded-md outline-none text-blue-950 ring-gray-400 p-3 pl-5 shadow-sm ring-1 hover:ring-gray-600 placeholder:text-gray-400" name='email' id='email-address' type="email" autoComplete="email" required placeholder='email@company.com' />
              </div>
              <button className="rounded-md bg-gradient-to-r from-blue-950 tracking-wide to-blue-950 p-4 text-sm font-semibold text-white hover:from-rose-500 hover:to-orange-600 hover:shadow-lg hover:shadow-orange-600 active:shadow-blue-950" type="submit">Subscribe to monthly newsletter</button>
            </div>
          </form>

          <div className='max-h-72 overflow-hidden lg:max-h-none bg-orange-600 lg:rounded-2xl'>
            <Image
              src="/images/illustration-sign-up-desktop.svg" // Route of the image file
              height={593} // Desired size with correct aspect ratio
              width={400} // Desired size with correct aspect ratio
              alt="a picture"
            />
          </div>
        </section>
      </main>
    </>
  )
}
