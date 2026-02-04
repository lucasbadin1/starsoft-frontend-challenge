import type { Config } from "jest";
import nextJest from "next/jest";

const createJestConfig = nextJest({
  dir: "./",
});

const config: Config = {
  testEnvironment: "jsdom",

  setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],

  clearMocks: true,

  // COBERTURA DE CÓDIGO (COVERAGE) ---
  collectCoverage: true,
  collectCoverageFrom: [
    // Inclui:
    "src/store/**/*.{ts,tsx}", // Redux (Lógica de estado)
    "src/utils/**/*.{ts,tsx}", // Funções auxiliares
    "src/hooks/**/*.{ts,tsx}", // Hooks customizados
    "src/services/**/*.{ts,tsx}", // Chamadas de API
    "src/components/**/*.{ts,tsx}", // Componentes visuais (Header, Cards, etc)

    // Exclui :
    "!src/**/*.d.ts", // Definições de tipo
    "!src/**/index.ts", // Arquivos de exportação (Barrel files)
    "!src/app/layout.tsx", // Layout raiz
    "!src/app/providers.tsx", // Configuração de providers
  ],
  coverageDirectory: "coverage",

  // Garante que o Jest entenda o atalho "@/"
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/src/$1",
  },
};

export default createJestConfig(config);
