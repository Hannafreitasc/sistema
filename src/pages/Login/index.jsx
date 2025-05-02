import { Link, useNavigate } from "react-router-dom"
import svg from "/public/imagem-animada.svg"
export default function LoginPage(){
    const navigate = useNavigate()

    return(
        <div className="w-full h-screen flex">
            <div className="w-[40%] h-full flex items-center justify-center">
                <Link to="/cadastro">Cadastrar</Link>
                {/* links externos */}
                <button onClick={() => navigate("/cadastro")}>Cadastrar</button> 
                {/* ele é uma biblioteca */}
                <button  onClick={() => window.location.href = "/cadastro"} > Cadastrar</button> {/* o mais leve que pega em todos  */}
            </div>
            <div className="w-[60%] h-full bg-[#9b413e] flex items-center justify-center rounded-l-lg flex-col" >
                <img width={600} src={svg} alt="imagem-animada" />
                <p className="text-white font-bold w-[300px] text-[20px] text-center">A melhor experiência de login que você já teve na sua vida!</p>
            </div>
        </div>
    )
}