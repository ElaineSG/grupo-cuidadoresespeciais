// ==============================================
// 1. INTERFACES - NOSSAS "FICHAS DE CADASTRO"
// ==============================================


// 1.1 INTERFACE PARA ANIMAIS - FICHA OBRIGATÓRIA
interface Animal {
    id: number;           //Número único para identificar cada animal
    nome: string;         //Nome do animal - deve ser texto
    especie: string;      //Tipo: "cachorro", "gato", "pássaro", etc
    idade: number;        //Idade em anos - deve ser número
    peso: number;         //Peso em kg - deve ser número  
    vacinado: boolean;    //true = já vacinado, false = não vacinado
}
// EXPLICAÇÃO: Esta interface é como um FORMULÁRIO que TODO animal deve preencher!
// 1.2 INTERFACE PARA SERVIÇOS - O QUE NOSSO PETSHOP OFERECE
interface Servico {
    id: number;           //Número único para cada serviços
    tipo: string;         //Tipo de serviços: "banho", "tosa", "consulta", etc
    animalId: number;     //ID do animal que vai receber o serviços
    preco: number;        //Preço em reais - deve ser número
    concluido: boolean;   //true = serviços feitos, false = ainda não feitos
}
// OPÇÃO A: ADICIONEM À INTERFACE ANIMAL (ESCOLHAM 1-2):
    cor: string;                    //Cor do animal: "preto", "branco", "marrom"
    raça: string;                   //Raça: "vira-lata", "siamês", "poodle"
    dono: string;                   //Nome do dono do animal
    ultimaVisita: string;           //Data da última visita: "15/03/2024"
    castrado: boolean;              //true = castrado, false = não castrado
    observacoes: string;            //Observações especiais sobre o animal

// OPÇÃO B: ADICIONEM À INTERFACE SERVIÇO (ESCOLHAM 1-2):

    data: string;                   //Data do serviço: "20/03/2024"
    horario: string;                //Horário: "14:30", "09:00"
    funcionario: string;            //Nome do funcionário responsável
    duracao: number;                //Duração em minutos: 30, 60, 90
    urgente: boolean;               //true = serviço urgente, false = normal
    observacoes: string;            //Observações sobre o serviço
    // ❌ ERRO: Esquecer de preencher TODOS os campos
// const animalErrado: Animal = { nome: "Rex", idade: 3 };
// ✅ SOLUÇÃO: Preencher TODOS os campos obrigatórios
const animalCorreto: Animal = {
    id: 1,
    nome: "Rex",
    especie: "cachorro",
    idade: 3,
    peso: 15.5,
    vacinado: true
};
// ==============================================
// 2. LISTAS - ONDE GUARDAMOS NOSSOS DADOS
// ==============================================

// 2.1 LISTA DE ANIMAIS CADASTRADOS
let animais: Animal[] = [];
// EXPLICAÇÃO: Esta array (lista) vai guardar TODOS os animais do petshop!
// 2.2 LISTA DE SERVIÇOS AGENDADOS  
let servicos: Servico[ ] = [ ];
// EXPLICAÇÃO: Esta array vai guardar TODOS os serviços marcados!
// OPÇÃO C: LISTAS EXTRAS (ESCOLHAM 1):
let funcionarios: string[] = [];           // Lista de funcionários
let produtos: string[] = [];               //Lista de produtos à venda
let clientes: string[] = [];               //Lista de nomes dos clientes
let tiposServico: string[] = [];           //Lista de tipos de serviços
// ==============================================
// 3. FUNÇÕES PRINCIPAIS - O "MOTOR" DO SISTEMA
// ==============================================
// 3.1 FUNÇÃO PARA CALCULAR IDADE DO ANIMAL
function calcularIdade(anoNascimento: number): number {
    const anoAtual: number = 2024;        //Definimos o ano atual
    return anoAtual - anoNascimento;    //Cálculo: ano atual - nascimento
}
// EXPLICAÇÃO: Esta função RESOLVE o problema de confundir idades!
// 3.2 FUNÇÃO PARA CRIAR UM NOVO ANIMAL
function criarAnimal(nome: string, especie: string, idade: number, peso: number): Animal {
    return {
        id: Math.floor(Math.random() * 1000), //Gera ID aleatório de 0 a 999
        nome: nome,  //Usa o nome recebido
        especie: especie,   //Usa a espécie recebida  
        idade: idade,   //Usa a idade recebida
        peso: peso, //Usa o peso recebido
        vacinado: false //SEMPRE começa não vacinado
    };
}
// EXPLICAÇÃO: Esta função garante que todo animal tenha todos os dados!
// 3.3 FUNÇÃO PARA AGENDAR SERVIÇOS
function agendarServico(servico: Servico): string {
    servico.push(servico);    //Adiciona o serviços na lista
    return `✅ Servico de ${servico.tipo} agendado! Preco: R$ ${servico.preco}`;
}
//  EXPLICAÇÃO: Esta função organiza todos os serviços!
// OPÇÃO D: FUNÇÕES EXTRAS (ESCOLHAM 1-2):
// FUNÇÃO para calcular preço total de serviços
function calcularPrecoTotal(): number {
    let total: number = 0;
    servico.forEach(servico => {
        total += servico.preco;   //Soma todos os preços
    });
    return total;
}
//FUNÇÃO para encontrar animais vacinados
function filtrarAnimaisVacinados(): Animal[] {
    return animais.filter(animal => animal.vacinado === true);
    // filter = cria nova lista só com animais vacinados
}
// FUNÇÃO para marcar animal como vacinado
function marcarComoVacinado(idAnimal: number): void {
    const animal = animais.find(a => a.id === idAnimal);
    if (animal) {
        animal.vacinado = true;     //Muda para vacinado
    }
}
//FUNÇÃO para buscar animal pelo nome
function buscarAnimalPorNome(nome: string): Animal | undefined {
    return animais.find(animal => animal.nome.toLowerCase() === nome.toLowerCase());
    //find = procura animal com nome igual (ignorando maiúsculas/minúsculas)
}
// ❌ ERRO: Passar tipo errado para função
// calcularIdade("2020"); // ERRO! Espera número, recebeu texto
// ✅ SOLUÇÃO: Passar o tipo correto
calcularIdade(2020); // CERTO! Número

// ❌ ERRO: Esquecer de retornar o tipo certo
// function criarAnimal(): Animal { return "animal"; } // ERRO!
// ✅ SOLUÇÃO: Retornar o tipo correto
function criarAnimal(): Animal { 
    return { id: 1, nome: "Rex", especie: "cachorro", idade: 3, peso: 10, vacinado: false };
}
// ==============================================
// 4. FUNÇÕES DOS BOTÕES - CONECTAM COM O HTML
// ==============================================
// BOTÃO 1: MOSTRAR TIPOS BÁSICOS DO TYPESCRIPT
function mostrarTipos(): void {
    const resultado = document.getElementById('resultado'); //Encontra a área de resultados
    if (!resultado) return;  // Se não encontrar, para aqui
       resultado.innerHTML = ` // Altera o HTML da área
        <div class="animal-card">
            <h3>📝 Tipos do TypeScript</h3>
            <p><strong>string:</strong> para textos → "Rex", "gato"</p>
            <p><strong>number:</strong> para numeros → 5, 15.5, 2024</p>
            <p><strong>boolean:</strong> para verdadeiro/falso → true, false</p>
            <p><strong>string[]:</strong> para listas de texto → ["banho", "tosa"]</p>
            <small>✨ O TypeScript não deixa misturar tipos!</small>
        </div>
    `;
}
// EXPLICAÇÃO: Mostra os 4 tipos principais que usamos!
// BOTÃO 2: MOSTRAR EXEMPLOS DE ANIMAIS
function mostrarAnimais(): void {
    const resultado = document.getElementById('resultado');
    if (!resultado) return;
    // CRIEM 2 ANIMAIS DO SEU PETSHOP AQUI!
    const animal1: Animal = {
        id: 1,
        nome: "Rex",                    // MUDEM PARA NOME DO GRUPO
        especie: "cachorro",              // MUDEM A ESPÉCIE
        idade: 3,                         // MUDEM A IDADE
        peso: 15.5,                       // MUDEM O PESO
        vacinado: true                    // ESCOLHAM: true OU false
    };
    const animal2: Animal = {
        id: 2,
        nome: "Mimi",                     // MUDEM PARA NOME DO GRUPO  
        especie: "gato",                  //MUDAM A ESPÉCIE
        idade: 2,                         // MUDEM A IDADE
        peso: 4.2,                        // MUDEM O PESO
        vacinado: false                   // ESCOLHAM: true OU false
    };
    resultado.innerHTML = `
        <div class="animal-card">
            <h3>🐕 ${animal1.nome}</h3>
            <p><strong>Especie:</strong> ${animal1.especie}</p>
            <p><strong>Idade:</strong> ${animal1.idade} anos</p>
            <p><strong>Peso:</strong> ${animal1.peso} kg</p>
         <p><strong>Vacinado:</strong> ${animal1.vacinado ? '✔ Sim' : '✖ Não'}</p>
        </div>
        <div class="animal-card">
            <h3>🐈 ${animal2.nome}</h3>
            <p><strong>Especie:</strong> ${animal2.especie}</p>
            <p><strong>Idade:</strong> ${animal2.idade} anos</p>
            <p><strong>Peso:</strong> ${animal2.peso} kg</p>
          <p><strong>Vacinado:</strong> ${animal2.vacinado ? '✔ Sim' : '✖ Não'}</p>  
        </div>
    `;
}
//EXPLICAÇÃO: Mostra animais EXEMPLO do seu petshop!
//BOTÃO 3: TESTAR NOSSAS FUNÇÕES
function testarFuncoes(): void {
    const resultado = document.getElementById('resultado');
    if (!resultado) return;
    resultado.innerHTML = `
        <div class="animal-card">
            <h3>⚙️ Testando Nossas Funções</h3>
            <p>Aguarde 1 segundo para ver os resultados...</p>
        </div>
    `;
    // setTimeout = espera X milissegundos antes de executar
    setTimeout(() => {
        // TESTANDO função calcular Idade
        const idadeCalculada = calcularIdade(2020); // Animal nascido em 2020
       //TESTANDO função criarAnimal  
        const novoAnimal = criarAnimal("Bobby", "cachorro", 2, 8.5);      
        //TESTANDO função agendarServiços
        const servico: Servico = {
            id: 1,
            tipo: 'banho',
            animalId: novoAnimal.id,
            preco: 45.90,
            concluido: false
        };
        const mensagemServico = agendarServico(servico);
        //  MOSTRANDO RESULTADOS NA TELA
        resultado.innerHTML += `
            <div class="animal-card">
                <h4>📅 Cálculo de Idade</h4>
                <p>Animal nascido em 2020 tem <strong>${idadeCalculada} anos</strong> em 2024</p>
            </div>
            <div class="animal-card">
                <h4>🐕 Animal Criado</h4>
                <p><strong>Nome:</strong> ${novoAnimal.nome}</p>
                <p><strong>Espécie:</strong> ${novoAnimal.especie}</p>
                <p><strong>Idade:</strong> ${novoAnimal.idade} anos</p>
            </div>
            <div class="animal-card">
                <h4>📋 Servico Agendado</h4>
                <p>${mensagemServico}</p>
            </div>
        `;
    }, 1000); //  Espera 1000ms = 1 segundo
}
// EXPLICAÇÃO: Testa TODAS as funções principais juntas!
// BOTÃO 4: MOSTRAR ERROS QUE TYPESCRIPT EVITA
function mostrarErros(): void {
    const resultado = document.getElementById('resultado');
    if (!resultado) return;
    resultado.innerHTML = `
        <div class="erro-card">
            <h3>🚨 Erros que o TypeScript Previne</h3>
            <p>Estes códigos <strong>NÃO COMPILAM</strong> no TypeScript:</p>
        </div>
        <div class="erro-card">
            <h4>❌ ERRO 1: Tipo Incorreto</h4>
            <p><code>let idade: number = "5";</code></p>
            <small>🚫 Não pode colocar texto em variável de número</small>
            <small>💡 <strong>Problema do Petshop:</strong> "5 anos" vira "51" na soma</small>
        </div>
        <div class="erro-card">
            <h4>❌ ERRO 2: Ficha Incompleta</h4>
            <p><code>let animal: Animal = { nome: "Rex" };</code></p>
            <small>🚫 Tem que preencher TODAS as informações do animal</small>
            <small>💡 <strong>Problema do Petshop:</strong> Fichas de animais incompletas</small>
        </div>
        <div class="erro-card">
            <h4>❌ ERRO 3: Parâmetro Errado</h4>
            <p><code>calcularIdade("2020");</code></p>
            <small>🚫 A função espera número, não texto</small>
            <small>💡 <strong>Problema do Petshop:</strong> Cálculos errados de idade</small>
        </div>
        <div class="animal-card">
            <h4>✅ Vantagem do TypeScript</h4>
            <p>Estes erros são descobertos <strong>ANTES</strong> de executar o código!</p>
            <p>No JavaScript normal, o CLIENTE é que descobriria esses erros! 😱</p>
        </div>
    `;
}
// BOTÃO 5: CADASTRAR NOVO ANIMAL
function cadastrarAnimal(): void {
    const resultado = document.getElementById('resultado');
    if (!resultado) return;
    resultado.innerHTML = `
        <div class="animal-card">
            <h3>➕ Cadastrando Novo Animal...</h3>
            <p>Aguarde 2 segundos enquanto nós cadastramos...</p>
        </div>
    `;
    // Simula cadastro automático após 2 segundos
    setTimeout(() => {
        //CRIANDO um animal automaticamente
        const novoAnimal = criarAnimal("Luna", "gato", 1, 3.2);
   animais.push(novoAnimal); // Adiciona na lista de animais
        // MOSTRANDO CONFIRMAÇÃO NA TELA
        resultado.innerHTML = `
            <div class="animal-card">
                <h3>✅ Animal Cadastrado com Sucesso!</h3>
                <p><strong>Nome:</strong> ${novoAnimal.nome}</p>
                <p><strong>Especie:</strong> ${novoAnimal.especie}</p>
                <p><strong>Idade:</strong> ${novoAnimal.idade} ano</p>
                <p><strong>Peso:</strong> ${novoAnimal.peso} kg</p>
                <p><strong>ID:</strong> ${novoAnimal.id}</p>
                <p><strong>Vacinado:</strong> ${novoAnimal.vacinado ? '✅ Sim' : '❌ Não'}</p>
                <small>✨ Total de animais cadastrados: ${animais.length}</small>
            </div>
        `;
    }, 2000); // Espera 2000ms = 2 segundos
}
// EXPLICAÇÃO: Demonstra como cadastrar animais no sistema!
// OPÇÃO E: FUNÇÕES EXTRAS PARA BOTÕES (ESCOLHAM 1):
// FUNÇÃO para mostrar serviços agendados
function mostrarServico(): void {
    const resultado = document.getElementById('resultado');
    if (!resultado) return;  
   let html = '<div class="animal-card"><h3>📋 Servico Agendado</h3>'; 
    servico.forEach(servico => {
        html += `<p>${servico.tipo} - R$ ${servico.preco} - ${servico.concluido ? '✅ Concluido' : '⏳ Pendente'}</p>`;
    });
        html += `</div>`;
    resultado.innerHTML = html;
}
// FUNÇÃO para mostrar estatísticas
function mostrarEstatisticas(): void {
    const resultado = document.getElementById('resultado');
    if (!resultado) return;
    const totalAnimais = animais.length;
    const animaisVacinados = animais.filter(a => a.vacinado).length;
    const totalServico = serviços.length;   
    resultado.innerHTML = `
        <div class="animal-card">
            <h3>📊 Estatísticas do Petshop</h3>
            <p><strong>Total de Animais:</strong> ${totalAnimais}</p>
            <p><strong>Animais Vacinados:</strong> ${animaisVacinados}</p>
            <p><strong>Serviços Agendados:</strong> ${totalServiços}</p>
        </div>
    `;
}
// ==============================================
// 5. MENSAGEM INICIAL - EXECUTADA AO CARREGAR
// ==============================================
// MENSAGENS QUE APARECEM NO CONSOLE DO NAVEGADOR
console.log("🚀 Sistema PetShop carregado com sucesso!");
console.log("🐾 Desenvolvido com TypeScript para evitar erros!");
console.log("💡 Dica: Abra o Console (F12) para ver mensagens!");
console.log("👉 Clique nos botões para testar as funcionalidades!");
// EXPLICAÇÃO: Estas mensagens ajudam no desenvolvimento e teste!
// ❌ ERRO COMUM: Esquecer de fechar chaves ou parênteses
interface Animal {
    id: number
    // FALTA: } ← isso causa erro!
// ✅ SOLUÇÃO: Verificar se todas as { } e ( ) estão fechadas
// ❌ ERRO COMUM: Vírgulas faltando
const animal = {
    id: 1
    nome: "Rex" // FALTA: , ← depois do 1
// ✅ SOLUÇÃO: Verificar vírgulas entre propriedades
// ❌ ERRO COMUM: Tipos incompatíveis  
let idade: number = "5"; // ERRO! string em number
// ✅ SOLUÇÃO: Usar tipos compatíveis: let idade: number = 5;
