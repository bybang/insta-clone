import React from 'react'
import { signIn, getProviders } from "next-auth/react"
import Header from '../../components/Header';

// Running on the browser
function signin({ providers }) {
  return (
    <>
      <Header />

      <div className="flex flex-col items-center justify-center min-h-screen py-2 -mt-36 px-14 text-center">
        <img
          className="w-80"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/2880px-Instagram_logo.svg.png"
          alt=""
        />
        <p className="font-xs italic">
          This is not a REAL app, it is built for self educational purposes only
        </p>

        <div className="mt-40">
          {providers &&
            Object.values(providers).map((provider) => (
              <div key={provider.name}>
                <button
                  onClick={() => signIn(provider.id, { callbackUrl: '/' })}
                  className="p-3 bg-blue-500 rounded-lg text-white"
                >
                  Sign in with {provider.name}
                </button>
              </div>
            ))}
        </div>
      </div>
    </>
  )
}

export default signin

// Happening in middle server(server side render)
export async function getServerSideProps(props) {
  const providers = await getProviders();

  return {
    props: {
      providers
    }
  }
}