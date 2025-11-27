🚀 Sidebar App com Tema DinâmicoEste é um projeto de estudo do React (criado com Vite) que implementa uma estrutura de aplicação básica com uma barra de navegação lateral fixa (Sidebar) e um sistema de Tema Claro/Escuro (Light/Dark Mode) utilizando o Material UI (MUI) para os componentes e estilização.✨ Visão Geral do ProjetoO objetivo deste projeto é fornecer uma base sólida para aplicações que exigem uma navegação lateral persistente e a capacidade de alternar entre temas de cor para melhorar a experiência do usuário.🖼️ Estrutura da Aplicação (Componentes Principais)ComponenteFunçãoTecnologias ChaveAppThemeProviderGerencia o estado do tema (light ou dark) e aplica o ThemeProvider do MUI para definir as cores globais.Context API, useMemo, useCallbackMenuLateralImplementa a barra lateral fixa usando o componente Drawer do MUI. Contém um avatar e itens de navegação.Drawer, List, ListItemButton, useThemeAppRoutesDefine as rotas da aplicação (ex: /pagina-inicial) usando react-router-dom. Demonstra a alternância de tema.react-router-dom (Routes, Route)DarkThemeObjeto de tema que define as cores (primárias, secundárias e de fundo) para o Tema Escuro.createTheme, @mui/material/colors⚙️ Configuração e InstalaçãoSiga estas etapas para configurar e executar o projeto em sua máquina local.Pré-requisitosNode.js (versão LTS recomendada)npm ou yarn1. Clonar o RepositórioBashgit clone <URL_DO_SEU_REPOSITORIO>
cd <nome-do-seu-projeto> 2. Instalar DependênciasInstale as dependências do projeto (Material UI, React Router, etc.):Bashnpm install

# ou

yarn 3. Iniciar o Servidor de DesenvolvimentoExecute o projeto usando o comando dev do Vite:Bashnpm run dev

# ou

yarn dev
O aplicativo estará acessível em http://localhost:5173 (ou a porta exibida no seu console).🎨 Gerenciamento de Tema (Light/Dark Mode)A aplicação utiliza o React Context API para gerenciar o estado do tema.ThemeContext.tsxO ThemeContext armazena o nome atual do tema (themeName) e a função toggleTheme.O hook useAppThemeContext é fornecido para consumir o contexto em qualquer componente.O componente AppThemeProvider envolve toda a aplicação, garantindo que a troca de tema re-renderize o tema do MUI corretamente.🖼️ Definição dos TemasOs temas são definidos em arquivos separados para clareza:DarkTheme: Configurado para um esquema de cores escuras, usando cores como #202124 (fundo) e #303134 (superfícies), com destaques em yellow[700] e cyan[500].(O código para LightTheme não foi fornecido, mas presume-se que siga uma estrutura semelhante com cores mais claras.)Exemplo de Uso (no AppRoutes.tsx):TypeScript// Dentro de um componente...
const { toggleTheme } = useAppThemeContext();

// ...em um botão:
<Button onClick={toggleTheme}>Toggle theme</Button>
🧭 Barra de Navegação Lateral (MenuLateral.tsx)A barra de navegação lateral é um componente fixo (Drawer variant="permanent").Largura: A largura é definida programaticamente usando o espaçamento do tema do MUI: width={theme.spacing(28)}.Estrutura: Consiste em uma seção superior para o Avatar, um Divider, e uma seção de navegação (List) que se expande para preencher o restante da altura (flex={1}).Conteúdo Principal: O conteúdo principal da aplicação é envolvido por uma Box que aplica uma margem esquerda (marginLeft={theme.spacing(28)}) correspondente à largura do Drawer, garantindo que o conteúdo não fique escondido sob a barra lateral.TypeScript// No MenuLateral.tsx
// ...
<Drawer variant="permanent"> {/_ A barra lateral fixa _/}
// ...
</Drawer>
;
<Box height="100vh" marginLeft={theme.spacing(28)}> {/_ Onde o conteúdo é renderizado _/}
{children}
</Box>
🛣️ Rotas da Aplicação (AppRoutes.tsx)Utiliza o react-router-dom para gerenciar a navegação.A rota principal é /pagina-inicial.Qualquer rota não reconhecida (path="_") redireciona o usuário para a página inicial usando o componente Maps.TypeScript// No AppRoutes.tsx
<Routes>
<Route
path="/pagina-inicial"
element={
// Exemplo de componente na página inicial
<Button onClick={toggleTheme}>Toggle theme</Button>
}
/>
<Route path="_" element={<Navigate to="/pagina-inicial" />} />
</Routes>
