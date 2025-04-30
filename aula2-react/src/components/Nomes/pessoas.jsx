function Nomes({nome, cidade, idade}){
  const idadeNum = parseInt(idade);
  const maiorIdade = idadeNum >= 18 ? "Maior de Idade" : "Menor de Idade";

  return ( 
  <div>
    <h2>Nome: {nome}</h2>
    <h2>CIDADE: {cidade}</h2>
    <h2>IDADE: {idade}</h2>
    <h2>VALIDAÇÃO: {maiorIdade}</h2>
  </div>
  )
}
export default Nomes;