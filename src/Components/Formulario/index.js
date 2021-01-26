import React, { useState } from 'react'
import * as S from './styles'

function Form(props) {

    const [tenThousand, setTenThousand] = useState(null)
    const [fiveThousand, setFiveThousand] = useState(null)
    const [oneThousand, setOneThousand] = useState(null)
    const [fiveHund, setFiveHund] = useState(null)
    const [oneHund, setOneHund] = useState(null)
    const [twentyFive, setTwentyFive] = useState(null)
    const [five, setFive] = useState(null)
    const [valorFinal, setValorFinal] = useState(null)

    const somaValor = ()=>{
        const dezMil = parseInt(tenThousand) * 10000; 
        const cincoMil = parseInt(fiveThousand) * 5000; 
        setValorFinal(dezMil)
    }

    

    return (
        <>     
         
        {/* aqui vc vai colocar os selects da forma que quiser       */}
            <select></select>
            <S.Div>
                <div>
                    <p>R$ 10.000</p>
                    <input value={tenThousand} onChange={(e)=>setTenThousand(e.target.value)} type='number'></input>
                </div>
                <div>
                <p>R$ 10.000</p>
                    <input value={fiveThousand} onChange={(e)=>setFiveThousand(e.target.value)} type='number'></input>
                </div>
                <div>
                <p>R$ 10.000</p>
                    <input value={oneThousand} onChange={(e)=>setOneThousand(e.target.value)} type='number'></input>
                </div>
                <div>
                <p>R$ 10.000</p>
                    <input value={fiveHund} onChange={(e)=>setFiveHund(e.target.value)} type='number'></input>
                </div>
                <div>
                <p>R$ 10.000</p>
                    <input value={oneHund} onChange={(e)=>setOneHund(e.target.value)} type='number'></input>
                </div>
                <div>
                <p>R$ 10.000</p>
                    <input value={twentyFive} onChange={(e)=>setFive(e.target.value)} type='number'></input>
                </div>
                <div>
                <p>R$ 10.000</p>
                    <input value={five} onChange={(e)=>setTenThousand(e.target.value)} type='number'></input>
                </div>
                <p>valor final: {valorFinal}</p>
                <button onClick={somaValor}>Salvar</button>
            </S.Div>
        </>
    )
}

export default Form