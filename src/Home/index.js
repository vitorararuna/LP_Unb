import React, { useState, useEffect } from 'react';
import { Container, Title, InputContent, InputText, InputContents, Submit, ResultContent, ResultTitle, GridContent, Loading} from './styles';
import api from "../services/api"


export default function Home() {
    const [urlBase, setUrlbase] = useState("https://br.indeed.com/empregos?l=Brasília")

    const [local, setLocal] = useState("qualquer")
    const [vaga, setVaga] = useState("qualquer")
    const [salario, setSalario] = useState("qualquer")
    
    const [result, setResult] = useState([]);

    const [loading, setLoading] = useState(false);


    useEffect(() => { // esse é responsável em pegar as alterações
        setUrlbase(`https://br.indeed.com/empregos?${salario !== "qualquer" ? salario : ""}l=Brasília${local !== "qualquer" ? local : ""}${vaga !== "qualquer" ? vaga : ""}`)
      }, [local, vaga, salario])

    async function teste() {
        console.log(urlBase)
        searchApi()
    }

    const searchApi = async (data) => {
        setLoading(true);
        
        await api
          .get("/vagas")
          .then((response) => {
            setResult(response.data)
          })
          .catch((error) => console.error(error));

          setLoading(false);
      };
    


    return (
        <Container>
            <Title>PROJETO LP Unb-2021</Title>

            <InputContents>
                <InputContent>
                    <InputText>SALÁRIO ESTIMADO</InputText>
                    <select type="text" name="salario" value={salario} onChange={(e) => setSalario(e.target.value)}>
                        <option value="qualquer">qualquer</option>
                        <option value="q=R$+20.000&">+ R$1.666,00/mês</option>
                        <option value="q=R$+60.000&">+ R$5.000,00/mês</option>
                        <option value="q=R$+100.000&">+ R$8.333,00/mês</option>
                    </select>
                </InputContent>
                <InputContent>
                    <InputText>LOCAL</InputText>
                    <select type="text" name="local" value={local} onChange={(e) => setLocal(e.target.value)}>
                        <option value="qualquer">qualquer</option>
                        <option value="&rbl=Taguatinga%2C%20DF&jlid=43e531c4e0eba731">Taguatinga, DF</option>
                        <option value="&rbl=Guará%2C%20DF&jlid=7752245a540e2543 ">Guará, DF"</option>
                        <option value="&rbl=%C3%81guas%20Claras%2C%20DF&jlid=82829dd0c30932c4">Águas Claras, DF</option>
                        <option value="&rbl=Lago%20Sul%2C%20DF&jlid=f21a72a9247300c5">Lago Sul, DF</option>
                        <option value="&rbl=Sobradinho%2C%20DF&jlid=db071a0df6a3c6f4">Sobradinho, DF"</option>
                    </select>
                </InputContent>
                <InputContent>
                    <InputText>TIPO DE VAGA</InputText>
                    <select type="text" name="vaga" value={vaga} onChange={(e) => setVaga(e.target.value)}>
                        <option value="qualquer">qualquer</option>
                        <option value="&jt=permanent&vjk=e6552bf109667842">Efetivo / CLT</option>
                        <option value="&jt=fulltime&vjk=14a055e9217c8726">Tempo Integral</option>
                        <option value="&jt=internship&vjk=fa0b84773ee24af2">Estágio</option>
                    </select>
                </InputContent>
            </InputContents>

            <Submit onClick={() => teste()} >PESQUISAR</Submit>

            {loading && <Loading>CARREGANDO RESULTADOS ...</Loading>}

            <GridContent>
                {result.map((item) => (
                    <div key={item}>
                        <ResultContent>
                            <ResultTitle>Titulo da vaga: {item.Titulo}</ResultTitle>
                            <ResultTitle>Local: {item.Local}</ResultTitle>
                            <a href={item.Link}>
                                <ResultTitle>Acessar link da vaga</ResultTitle>
                            </a>
                        </ResultContent>
                    </div>
                ))}
            </GridContent>

        </Container>
    );
}