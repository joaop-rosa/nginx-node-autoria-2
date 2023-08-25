# Faz o download da imagem do Node
FROM node:alpine

# Cria o diretório dentro do container
WORKDIR /usr/src/api

# Copia o package.json que possui as configurações do projeto
COPY package*.json ./

# Instala as dependência
RUN npm install

# Copia todos os arquivos para dentro do container
COPY . .

# Deixa exposta a porta da API
EXPOSE 3000

# Inicia a API
CMD ["node", "index.js"]