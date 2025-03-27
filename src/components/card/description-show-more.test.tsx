import { render, screen, fireEvent } from "@testing-library/react";
import DescriptionShowMore from "./description-show-more";

describe("DescriptionShowMore", () => {
  const text = "Este é um texto de exemplo para testar a funcionalidade de expandir e colapsar.";

  it("deve renderizar corretamente o texto e o botão \"Ler mais\"", () => {
    render(<DescriptionShowMore text={text} />);

    // Verifique se o texto está presente no componente
    const paragraph = screen.getByText(text);
    expect(paragraph).toBeInTheDocument();

    // Verifique se o botão "Ler mais" está presente
    const button = screen.getByText("Ler mais");
    expect(button).toBeInTheDocument();

    // Verifique se o texto está inicialmente colapsado com a classe "clamp-3"
    expect(paragraph).toHaveClass("clamp-3");
  });

  it("deve expandir o texto quando o botão \"Ler mais\" for clicado", () => {
    render(<DescriptionShowMore text={text} />);

    // Encontre o botão "Ler mais"
    const button = screen.getByText("Ler mais");

    // Clique no botão para expandir o texto
    fireEvent.click(button);

    // Verifique se o botão agora diz "Ler menos"
    expect(button).toHaveTextContent("Ler menos");

    // Verifique se o texto está expandido com a classe "clamp-6"
    const paragraph = screen.getByText(text);
    expect(paragraph).toHaveClass("clamp-6");
  });

  it("deve colapsar o texto quando o botão \"Ler menos\" for clicado", () => {
    render(<DescriptionShowMore text={text} />);

    // Clique no botão "Ler mais" para expandir o texto
    const button = screen.getByText("Ler mais");
    fireEvent.click(button);

    // Clique no botão "Ler menos" para colapsar o texto
    fireEvent.click(button);

    // Verifique se o botão agora diz "Ler mais" novamente
    expect(button).toHaveTextContent("Ler mais");

    // Verifique se o texto está colapsado com a classe "clamp-3"
    const paragraph = screen.getByText(text);
    expect(paragraph).toHaveClass("clamp-3");
  });
});
