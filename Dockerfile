# Etapa 1: Imagem base para o ambiente de desenvolvimento
FROM node:18 AS development

# Diretório de trabalho dentro do container
WORKDIR /app

# Copiar arquivos de dependências
COPY package.json package-lock.json ./

# Instalar dependências de desenvolvimento
RUN npm install

# Copiar o restante do código da aplicação
COPY . .

# Expor a porta em que o Next.js vai rodar
EXPOSE 3000

# Rodar a aplicação no modo de desenvolvimento
CMD ["npm", "run", "dev"]
