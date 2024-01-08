import Link from 'next/link'

import { Button } from '@/components/Button'
import { TextField } from '@/components/Fields'
import { Logo } from '@/components/Logo'
import { SlimLayout } from '@/components/SlimLayout'
import { type Metadata } from 'next'


export const metadata: Metadata = {
  title: 'Sign In',
}

export default function Login() {
  return (
    <SlimLayout>
      <div className="flex">
        <Link href="/" aria-label="Home">
          <Logo className="h-10 w-auto" />
        </Link>
      </div>
      <h2 className="mt-20 text-lg font-semibold text-gray-900">
        Поздравляем с регистрацией!

      </h2>
      <p className="mt-2 text-sm text-gray-700">
        Письмо с ссылкой для подтверждения аккаунта и подключения бота уже отправлено вам на почту <br/><b>simplemail@gmail.com</b>
          <br/><br/>
      </p>
        <hr/>
      <form action="#" className="mt-10 grid grid-cols-1 gap-y-8">
        <div>
            <a className="group inline-flex w-full items-center justify-center rounded-full py-2 px-4 text-sm font-semibold focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 bg-blue-600 text-white hover:text-slate-100 hover:bg-blue-500 active:bg-blue-800 active:text-blue-100 focus-visible:outline-blue-600"
               target="_blank"
               href="http://gmail.com"><span>Перейти в Gmail</span></a>
        </div>
      </form>
    </SlimLayout>
  )
}
