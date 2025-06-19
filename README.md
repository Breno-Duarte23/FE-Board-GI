
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
