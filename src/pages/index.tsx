import { styled } from '@/styles';

const Flex = styled('div', {
  display: 'flex',
});

const Button = styled('button', {
  border: 0,
  appearance: 'none',
  cursor: 'pointer',
  fontWeight: '700',
  transition: 'background 0.2s',

  // Variável escopada
  $$shadowColor: '',

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

    shadow: {
      true: {
        boxShadow: '0 0 8px $$shadowColor',
      },
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

  // Posso definir para todos os componentes button, as variantes default
  defaultVariants: {
    color: 'primary',
    size: 'small',
    radius: 'default',
    shadow: true,
  },
});

export default function Home() {
  return (
    <Flex css={{ gap: '$16', padding: '$16' }}>
      <Button color="primary">EXPERTS CLUB</Button>
      <Button color="shape" radius="full">
        EXPERTS CLUB
      </Button>
    </Flex>
  );
}
