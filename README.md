# Flappy Bird Lite — CYD ESP32-2432S028 + Bruce Firmware

Versão ultra-leve do clássico Flappy Bird escrita em JavaScript puro para o interpretador do **Bruce Firmware 1.16.1** no **Cheap Yellow Display (ESP32-2432S028)**.

Toque em qualquer lugar da tela (ou botões) para bater asa.

## Hardware

- **Placa:** ESP32-2432S028 (CYD) — tela 2.8" TFT 320x240 touch
- **Firmware:** Bruce 1.16.1 (ou superior com JS Interpreter)
- **Entrada:** Touch + teclado virtual do Bruce (`keyboard` module)

## Como instalar

1. Conecte o CYD ao Wi-Fi (ou use o hotspot do próprio Bruce).
2. Abra a **Bruce Web Interface** no navegador.
3. Vá em **File Manager** → pasta `/apps` (ou `/` se preferir).
4. Faça upload do arquivo `FlappyBird-Lite.js`.
5. No menu do dispositivo: **Apps / Files / Launcher** → selecione `FlappyBird-Lite.js`.

Alternativa rápida via SD card:
- Copie o `.js` para a raiz ou pasta `apps` do cartão SD e lance pelo menu de arquivos.

## Controles

| Ação              | Como                          |
|-------------------|-------------------------------|
| Bater asa         | Toque na tela ou qualquer botão |
| Reiniciar         | Toque após Game Over (espera 600 ms) |
| Sair              | Select ou Esc quando morto    |

## Características técnicas

- Física simples com gravidade constante (`bv += 0.27`)
- Impulso de asa fixo (`bv = -4`)
- Colisão AABB com canos e solo
- Score + Best score em memória (não persiste entre reinícios do script)
- Otimizado para tela pequena e heap limitado do CYD (sem PSRAM)
- Delay de 25 ms ≈ 40 FPS teóricos

## Estrutura do código

- `r()` — helper de retângulo preenchido com clipping
- `tapped()` — detecta qualquer pressão (touch ou botões)
- `bg()` / `pipe()` / `bird()` — desenho imediato (sem buffer de frame completo)
- Loop principal com erase seletivo para minimizar overdraw

## Licença

Código livre para uso pessoal e educacional. Baseado no clássico Flappy Bird (conceito original de Dong Nguyen).

---

Feito para o ecossistema Bruce + CYD.  
Divirta-se quebrando recordes, Senhor Arthur.
