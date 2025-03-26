// jest.config.js
const config = {
    preset: "ts-jest/presets/js-with-babel", // Usando ts-jest com preset de Babel
    testEnvironment: "jsdom", // Ambiente do Jest para simular o DOM no navegador
    setupFilesAfterEnv: [
      "@testing-library/jest-dom/extend-expect", // Para estender as asserções com jest-dom
      "<rootDir>/jest.setup.js" // Arquivo para configurações adicionais de teste, se necessário
    ],
    transform: {
      "^.+\\.(ts|tsx)$": "ts-jest", // Usar ts-jest para processar arquivos TypeScript
      "^.+\\.(js|jsx)$": "babel-jest", // Se for usar JS/JSX, transformar com Babel
    },
    transformIgnorePatterns: [
      "/node_modules/(?!(@testing-library)/)." // Permite transformar as dependências do @testing-library
    ],
    moduleNameMapper: {
      "^@/(.*)$": "<rootDir>/src/$1", // Configura a resolução de módulos no estilo do Next.js
    },
    moduleFileExtensions: ["ts", "tsx", "js", "jsx"], // Para Jest reconhecer arquivos .ts e .tsx
};

export default config;
