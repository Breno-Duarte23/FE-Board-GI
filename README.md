# Board Gente Inocente

Este é o **aplicativo mobile** do **Centro Educacional Gente Inocente**, desenvolvido com **React Native**. Nosso app busca proporcionar uma experiência digital moderna, intuitiva e eficiente para responsáveis por alunos e colaboradores da instituição.

##  Objetivo do Aplicativo

O principal objetivo do nosso aplicativo é facilitar o **acesso à comunicação escolar**.

---

##  Solução que propomos

Atualmente, muitos pais e responsáveis possuem dificuldades em manter uma comunicação eficiente com a escola, além de não terem fácil acesso às informações importantes dos alunos. Nosso app visa centralizar o acesso à **comunicação institucional** e - oferecer uma interface amigável, responsiva e adaptável..

---

##  Tecnologias e Dependências

Para rodar o projeto, você precisará ter o **Node.js** instalado.

### **Dependências principais:**

| Pacote | Finalidade |
| --- | --- |
| `react-native` | Desenvolvimento mobile cross-platform |
| `react-navigation` | Navegação entre telas |
| `@react-navigation/bottom-tabs` | Navegação por abas inferiores |
| `react-native-vector-icons` | Ícones nas abas e botões |
| `crypto-js` | Geração de hash SHA256 para integração com Gravatar |
| `@react-native-async-storage/async-storage` | Armazenamento local de dados (email e senha) |
| `firebase` | Autenticação de usuários |
| `expo` | Ambiente de desenvolvimento (caso utilize Expo) |

---

##  Como clonar e rodar o app

```bash
# Clone o repositório
git clone git@github.com:Breno-Duarte23/FE-Board-GI.git

# Acesse o diretório
cd FE-Board-GI

# Instale as dependências
npm install

# Rode o app
npx react-native run-android
# ou
npx react-native run-ios
```

** Importante:**  
- Configure o Firebase no arquivo `firebaseConfig.js`.  
- As imagens (`LogoGISemFundo.png`, `olhoAberto.png`, `olhoFechado.png`, `avatar-default.png`) devem estar dentro da pasta `assets`.  
- Caso utilize Expo, adapte os comandos de execução.  

---

##  Sobre a implementação do AsyncStorage

Para melhorar a **experiência do usuário** e evitar que ele tenha que digitar o e-mail e senha toda vez que abrir o app, implementamos uma **persistência local** utilizando o **AsyncStorage**.

### **Como funciona:**

1. Ao efetuar o login com sucesso, se o usuário marcar a opção "**Lembre de mim**", as informações de **e-mail e senha** são armazenadas localmente.
2. Quando o app é iniciado, ele verifica se essas credenciais estão salvas e, se sim, pré-preenche os campos automaticamente.
3. Caso o usuário desmarque a opção ou faça logout, as informações são removidas do armazenamento.
4. Essa abordagem **não substitui** boas práticas de segurança, mas proporciona **comodidade** em um ambiente escolar.

```js
// Exemplo de persistência com AsyncStorage
if (lembrar) {
  await AsyncStorage.setItem('email', emailTrimmed);
  await AsyncStorage.setItem('senha', senhaTrimmed);
} else {
  await AsyncStorage.removeItem('email');
  await AsyncStorage.removeItem('senha');
}
```

Além disso, a tela de **Perfil** consome o e-mail armazenado e gera automaticamente a **imagem do perfil** através da API do **Gravatar**, garantindo uma personalização rápida e elegante.

---
## Arquitetura do Software

![Diagrama da Arquitetura](image.png)

A arquitetura do Educa Notas segue o padrão de aplicações React Native modernas, utilizando navegação baseada em stacks e tabs. O app é dividido em módulos de telas (screens), componentes reutilizáveis e contexto de autenticação. A navegação é gerenciada pelo React Navigation, permitindo transições entre telas como Login, Recados, Comunicados, Ocorrências, Alunos, Calendário e Detalhes de Recados. O contexto de autenticação (`AuthContext`) controla o estado de login do usuário em todo o app. Componentes como Header, BottomTabs e RecadoCard são reutilizados para garantir consistência visual e funcionalidade.

---

## Manual do Usuário

### Navegação no App

- **Tela de Login:**  
  Ao abrir o app, você verá a tela de login. Insira suas credenciais para acessar as funcionalidades.

- **Menu Inferior (Bottom Tabs):**  
  Após o login, utilize o menu inferior para navegar entre as principais áreas:
  - **Início:** Visão geral e atalhos rápidos.
  - **Comunicados:** Veja comunicados importantes da escola.
  - **Calendário:** Visualize eventos e adicione novos à sua agenda.
  - **Perfil:** Acesse e edite suas informações pessoais.

- **Recados:**  
  Acesse a lista de recados. Toque em um recado para ver detalhes completos.

- **Ocorrências:**  
  Veja registros de ocorrências relacionadas ao aluno.

- **Alunos:**  
  Consulte informações dos alunos vinculados à sua conta.

- **Detalhes:**  
  Em qualquer lista, toque em um item para visualizar detalhes completos.

- **Adicionar Evento ao Calendário:**  
  Na tela de calendário, selecione uma data e toque em "Adicionar evento ao calendário" para criar um evento no seu Google Agenda.

- **Esqueci Minha Senha:**  
  Caso esqueça sua senha, utilize a opção na tela de login para recuperar o acesso.

---

Se precisar de mais informações, consulte a documentação técnica ou entre em contato com o suporte.

---

##  Funcionalidades atuais

- Autenticação com Firebase  
- Armazenamento local das credenciais  
- Exibição de imagem de perfil via Gravatar  
- Navegação entre telas com Bottom Tabs  
- Layout responsivo e intuitivo  

---

##  Próximos passos

- Integração com notificações push.  
- Implementação de módulo de comunicados escolares.  
- Tela de atualização de perfil.  
- Melhorias no design e usabilidade.

---

##  Centro Educacional Gente Inocente

**Todos os direitos reservados © 2025**  

Desenvolvido com 💛 por Breno Duarte, design criado por Leandro Belo.

---
