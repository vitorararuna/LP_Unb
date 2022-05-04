import React, { useState } from 'react';
import { Container, Title, InputContent, InputText, InputContents, Submit, ResultContent, ResultTitle, GridContent} from './styles';



export default function Home() {
    const [local, setLocal] = useState("qualquer")
    const [vaga, setVaga] = useState("qualquer")
    const [salario, setSalario] = useState("qualquer")
    const [data, setData] = useState("qualquer")
    const [result, setResult] = useState([]);

    async function teste() {
        setResult([1, 2, 3,4,5,6,7,8,9,0 ,11, 22, 33, 44, 55, 66, 77, 88,])
    }
    return (
        <Container>
            <Title>PROJETO LP Unb-2021</Title>

            <InputContents>
                <InputContent>
                    <InputText>LOCAL</InputText>
                    <select value={local} onChange={setLocal}>
                        <option value="qualquer">qualquer</option>
                        <option value="Brasília, DF">Brasília, DF</option>
                        <option value="Distrito Federal">Distrito Federal</option>
                        <option value="Val Paraíso de Goiás, GO">Val Paraíso de Goiás, GO</option>
                        <option value="Ceilandia, DF">Ceilandia, DF</option>
                        <option value="Águas Lindas de Goiás, GO">Águas Lindas de Goiás, GO</option>
                        <option value="Luziania, GO">Luziania, GO"</option>
                        <option value="Guará, DF">Guará, DF"</option>
                        <option value="Águas Claras, DF">Águas Claras, DF</option>
                        <option value="Lago Sul, DF">Lago Sul, DF</option>
                    </select>
                </InputContent>
                <InputContent>
                    <InputText>TIPO DE VAGA</InputText>
                    <select value={vaga} onChange={setVaga}>
                        <option value="qualquer">qualquer</option>
                        <option value="">Efetivo / CLT</option>
                        <option value="">Tempo Integral</option>
                        <option value="">Estágio</option>
                        <option value="">Meio Período</option>
                        <option value="">Temporário</option>
                        <option value="">Aprendiz</option>
                        <option value="">Autonomo</option>
                        <option value="">Feelancer</option>
                    </select>
                </InputContent>
                <InputContent>
                    <InputText>SALÁRIO ESTIMADO</InputText>
                    <select value={salario} onChange={setSalario}>
                        <option value="qualquer">qualquer</option>
                        <option value="">+ R$1.666,00/mês</option>
                        <option value="">+ R$3.333,00/mês</option>
                        <option value="">+ R$5.000,00/mês</option>
                        <option value="">+ R$6.666,00/mês</option>
                        <option value="">+ R$8.333,00/mês</option>
                    </select>
                </InputContent>
                <InputContent>
                    <InputText>DATA DO ANÚNCIO</InputText>
                    <select value={data} onChange={setData}>
                        <option value="qualquer">qualquer</option>
                        <option value="">últimas 24h</option>
                        <option value="">Últimos 3 dias</option>
                        <option value="">Últimos 7 dias</option>
                        <option value="">Últimos 14 dias</option>
                    </select>
                </InputContent>
            </InputContents>

            <Submit onClick={() => teste()} >PESQUISAR</Submit>

            <GridContent>
                {result.map((item) => (
                    <div key={item.id}>
                        <ResultContent>
                            <ResultTitle>Cargo: </ResultTitle>
                            <ResultTitle>Local: </ResultTitle>
                            <a href={`https://stackoverflow.com`}>
                                <ResultTitle>Acessar link da vaga</ResultTitle>
                            </a>
                        </ResultContent>
                    </div>
                ))}
            </GridContent>

        </Container>
    );
}