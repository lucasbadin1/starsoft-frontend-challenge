# Etapa 1: Imagem base para o ambiente de build
FROM node:18 AS build

# Diretório de trabalho dentro do container
WORKDIR /app

# Copiar arquivos de dependências
COPY package.json package-lock.json ./

# Instalar dependências
RUN npm install

# Copiar o restante do código da aplicação
COPY . .

# Rodar o build do Next.js
RUN npm run build

# Etapa 2: Imagem para o ambiente de produção
FROM node:18 AS production

WORKDIR /app

# Copiar dependências e o build gerado
COPY --from=build /app/package.json /app/package-lock.json ./
COPY --from=build /app/.next ./.next
COPY --from=build /app/public ./public
COPY --from=build /app/node_modules ./node_modules

# Expor a porta em que a aplicação vai rodar
EXPOSE 3000

# Rodar a aplicação no modo produção
CMD ["npm", "start"]