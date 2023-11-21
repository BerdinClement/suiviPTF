import InputLogin from "@/components/InputLogin"
import Button from "@/components/Button"
import CheckBox from "@/components/CheckBox"
import Image from 'next/image'
import Link from "next/link";

export default function Login() {
  return (
    <div className="w-full h-full bg-back_login flex justify-center items-center">
      <div className="flex w-11/12 h-5/6 rounded-[37px] bg-blue_login flex m-auto p-3">

        <div className="hidden relative lg:block w-[700px] h-full m-auto">
          <Image src="/login-bg.jpeg" alt="PTF" layout='fill' objectFit='contain' className="rounded-[100px]" />
        </div>

        <form className="bg-white w-full lg:w-5/12 h-full rounded-[37px] p-4">
          <div className="flex flex-col justify-between gap-8">
            <div>
              <Image src="/logo.svg" alt="PTF" width={90} height={90} className="m-auto mt-25 pt-8" />
              <h1 className="text-center text-5xl p-4 pt-8">Bienvenue !</h1>
              <h3 className="text-center text-sm">Merci d'entrer vos informations</h3>
            </div>

            <div>
              <InputLogin type="email" placeholder="Email" className="w-10/12"></InputLogin>
              <InputLogin type="password" placeholder="Mot de passe" className="w-10/12"></InputLogin>
              <div className="flex justify-between items-center w-10/12 m-auto pt-4">
                <CheckBox checked={false} text="Se souvenir de moi" />
                <Link href="#">
                  <h3 className="text-sm text-purple">Mot de passe oublié</h3>
                </Link>
              </div>
            </div>

            <div className="flex justify-center pt-6">
              <Button type="submit" className="bg-slate-700 w-10/12">
                Se Connecter
              </Button>
            </div>
          </div>
        </form>
      </div>
    </div>

  )
}
