import Image from "next/image";
import AuthForm from './components/AuthForm';

export default function Home() {
    return (
    <div className="
        flex
        min-h-full
        flex-col
        justify-center
        py-12
        sm:px-6
        md:px-8
        bg-gray-100
    ">

        <div className="sm:mx-auto sm:w-full sm:max-w-md">
            <Image
                alt="Logo"
                className="mx-auto w-auto"
                src="/images/logo.png"
                width="50"
                height="50"
            />
            <h2 className="
                text-center
                text-3xl
                text-gray-900
                tracking-tight
                mt-6
                font-bold
            ">
                Connectez vous
            </h2>

            {/* Formulaire d'authentification */}
            <AuthForm/>
        </div>
    </div>
    )
}
