import style from './Relogio.module.scss'

interface Props {
    tempo: number | undefined
}

export default function Relogio({tempo = 0}: Props){
    const minutos = Math.floor(tempo/60); // pega tudo que esta antes da virgula
    const segundos = tempo %60; //mod, pega tudo que está após a virgula
    const [minutoDezena, minutoUnidade] = String(minutos).padStart(2, '0'); //funciona como o LPAD do sql
    const [segundoDezena, segundoUnidade] = String(segundos).padStart(2, '0'); //funciona como o LPAD do sql
    return (
        <>
            <span className={style.relogioNumero}>{minutoDezena}</span>
            <span className={style.relogioNumero}>{minutoUnidade}</span>
            <span>:</span>
            <span className={style.relogioNumero}>{segundoDezena}</span>
            <span className={style.relogioNumero}>{segundoUnidade}</span>
        </>

    )
}