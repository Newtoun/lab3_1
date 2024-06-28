import { hello } from "C:/Users/nilto/OneDrive/Área de Trabalho/project zumboid/lab03_01/hello_world";

describe("test hello", () => {
  it("should return hello world", () => {
    expect(hello()).toBe("Hello world!");
  });
});
