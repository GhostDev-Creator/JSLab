# 🎴 Interface de Desafios JS (Vitrine de Cards)

Uma interface interativa organizada em **Cards**, onde cada card representa um sistema lógico independente desenvolvido em JavaScript.

## 📌 Visão Geral
O projeto foi estruturado para ser uma vitrine de habilidades em lógica de programação. Ao invés de scripts isolados, cada algoritmo possui sua própria interface visual (Card), permitindo testar as validações em tempo real.

### 🧩 Estrutura do Projeto
- **Interface Visual:** Cada exercício é encapsulado em um card com inputs e botões específicos.
- **Lógica Modular:** Cada card aciona uma função JavaScript dedicada no arquivo principal.
- **Documentação Profissional:** Uso de **JSDoc** para descrever o funcionamento de cada sistema.



---

## 🛠️ Sistemas Implementados (Cards)

O projeto conta com 16 cards interativos, incluindo:

* **Card 01 - Polaridade:** Verifica números Positivos, Negativos ou Zero.
* **Card 04 - Triângulos:** Classifica triângulos por seus lados.
* **Card 06 - Palíndromos:** Analisador de palavras invertidas.
* **Card 12 - PDV Simples:** Cálculo de descontos progressivos.
* **Card 14 - Biometria Etária:** Classificador de faixas etárias.

---

## 🏗️ Clean Code & Estrutura
Para manter o projeto escalável e limpo, foram aplicados os seguintes princípios:

1.  **Manipulação Segura do DOM:**
    Uso de `instanceof HTMLInputElement` para garantir que o código só tente ler valores de campos válidos.
2.  **Responsabilidade Única:**
    Cada função `validar...` cuida exclusivamente da interação com seu card correspondente.
3.  **Documentação Viva:**
    Uso de JSDoc para facilitar a manutenção futura.

```javascript
/**
 * Manipula o Card de Palíndromo.
 * @description Inverte a string capturada e compara com a original.
 * @returns {void}
 */
```

---

## 👥 Desenvolvedores

| Nome | GitHub |
| :--- | :--- |
| **GhostDev** | [@GhostDev-Creator](https://github.com/GhostDev-Creator) |
