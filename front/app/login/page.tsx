'use client'

import Input from "@/components/Input"
import Button from "@/components/Button"
import CheckBox from "@/components/CheckBox"
import Image from 'next/image'
import Link from "next/link";
import { useContext, useState } from "react";
import { login } from "@/services/auth";
import { UserContext } from "@/context/userContext"
import { useRouter } from "next/navigation"

export default function Login() {

	const {user, setUser} = useContext(UserContext);
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [rememberMe, setRememberMe] = useState(false);
	const router = useRouter();

	if(user){
		router.push('/');
	}

	const handleSubmit = async (e: any) => {
		e.preventDefault();
		const user = await login(email, password);
		setUser(user);
		router.push('/');

		if (rememberMe) {
			localStorage.setItem('token', JSON.stringify(user.token));
		}
	}

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
							<Input type="email" inputValue={email} setInputValue={setEmail} placeholder="Email" className="w-10/12"></Input>
							<Input type="password" inputValue={password} setInputValue={setPassword} placeholder="Mot de passe" className="w-10/12"></Input>
							<div className="flex justify-between items-center w-10/12 m-auto pt-4">
								<CheckBox checked={rememberMe} setChecked={setRememberMe} text="Se souvenir de moi" />
								<Link href="#">
									<h3 className="text-sm text-purple">Mot de passe oublié</h3>
								</Link>
							</div>
						</div>

						<div className="flex justify-center pt-6">
							<Button type="submit" onClick={handleSubmit} className="bg-slate-700 w-10/12">
								Se Connecter
							</Button>
						</div>
					</div>
				</form>
			</div>
		</div>

	)
}
