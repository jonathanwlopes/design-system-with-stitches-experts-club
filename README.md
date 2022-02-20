# Instalações

- O que é design system?
  -- Pedro Duarte: "Biblioteca de componentes baseado em um bocado de regras".

- Quais são essas regras?
  -- Cores, nomes das cores(tokens), espaçamentos, componentes(botões, inputs).

```js
yarn add @stitches/react
```

# Linha do tempo

### Configuração do stitches e do tema.

-- ./src/styles/index.ts

- Injetar em nossa página pelo lado do servidor os estilos.
  -- Acessar o arquivo \_document, pois nele será renderizado apenas uma vez em tela, por exemplo estilos globais, fontes.

```tsx
<style id="stitches" dangerouslySetInnerHTML={{ __html: getCssText() }} />
```

-- Essa configuração é de extrema importância pois ao carregar os por exemplo as cores no documento, as mesmas não precisam ser recarregadas,
melhorando e muito a performance, pois a consulta será feita diretamente no browser.

### Elaboração dos componentes por exemplo Flex e Button

```tsx
const Flex = styled('div', {
  display: 'flex',
});
```

- Componente button com variants

```tsx
const Button = styled('button', {
  border: 0,
  appearance: 'none',
  cursor: 'pointer',
  fontWeight: '700',
  transition: 'background 0.2s',

  // O componente button vai receber como propriedade as variantes disponíveis
  variants: {
    color: {
      primary: {
        backgroundColor: '$primary',
        color: '#fff',
      },

      shape: {
        backgroundColor: '$shape',
        color: '#fff',
      },
    },

    size: {
      small: {
        padding: '$16 $32',
      },

      full: {
        padding: '$16 $32',
        flex: 1,
      },
    },

    radius: {
      default: {
        borderRadius: '$default',
      },

      full: {
        borderRadius: '$full',
      },
    },
  },

  // Posso definir para todos os componentes button, as variantes default
  defaultVariants: {
    color: 'primary',
    size: 'small',
    radius: 'default',
  },
});
```

```tsx
<Button color="primary">EXPERTS CLUB</Button>
<Button color="shape" radius="full">EXPERTS CLUB</Button>
```

### Utilizando compound variants

- Formas de unir duas variantes para trazer um resultado final diferente

```tsx
const Button = styled('button', {
  shadow: {
    true: {
      boxShadow: '0 0 8px $$shadowColor',
    },
  },

  compoundVariants: [
    {
      color: 'primary',
      shadow: true,
      css: {
        $$shadowColor: '$colors$primary',
      },
    },

    {
      color: 'shape',
      shadow: true,
      css: {
        $$shadowColor: '$colors$shape',
      },
    },
  ],

  defaultVariants: {
    shadow: true,
  },
});
```

# Ferramentas úteis

- Website stitches https://stitches.dev/
- Stitches é baseado em system-ui, servido o mesmo como base para consulta em termos de documentação.
- Dentro da tsconfig.json temos uma configuração chamada "paths" onde é renomeado nas importação referências a pasta .src para @/
- RadixUI - Acessibilidade


* Aula Rocketseat Experts Club - repositório base clonado, código reproduzido durante a aula.
Instrutor: https://github.com/josepholiveira
