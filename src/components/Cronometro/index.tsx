import Botao from '../Botao'
import Relogio from './Relogio'
import style from './Cronometro.module.scss'
import { tempoParaSegundos } from '../../common/utils/time'
import { ITarefa } from '../../types/tarefa'
import { useEffect, useState } from 'react'

interface Props {
    selecionado: ITarefa | undefined
    finalizarTarefa: ()=>  void
}

export default function Cronometro({selecionado, finalizarTarefa}: Props){
    const [tempo, setTempo] = useState<number>();

    useEffect(() =>{
        if(selecionado?.tempo){
            setTempo(tempoParaSegundos(selecionado.tempo));
        }
    }, [selecionado])

    function regressiva(contador: number = 0){ //se for undefined ele coloca 0
        setTimeout(()=> {
            if(contador > 0 ){
                let newContador = contador-1;
                setTempo(newContador);
                return regressiva(newContador)
            }
        finalizarTarefa();
        }, 1000);
    }

    return(
        <div className={style.cronometro}>
            <p className={style.tituçp}>Escolha um card e inicie o cronômetro</p>
            <div className={style.relogioWrapper}>
                <Relogio tempo={tempo} />
            </div>
            <Botao texto="Começar" onClick={()=> regressiva(tempo)}/>
        </div>
    )


}