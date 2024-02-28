import type { Meta, StoryObj } from '@storybook/react'
import { Logo } from '@cromaui/react'
import LogoAgro from './agro.svg'
import { color } from '@cromaui/foundations'

const meta = {
  title: 'Assets/Logo',
  component: Logo,
  argTypes: {
    name: {
      control: { type: 'select' },
      options: [
        'Agro',
        'BankLimited',
        'BankLimitedVertical',
        'ClickDePago',
        'Fiducia',
        'Fondos',
        'Iso',
        'MacroHorizontal',
        'MacroTagLine',
        'MacroVertical',
        'Premia',
        'Securities',
        'SelectaPrivado',
        'Selecta',
        'Tagline',
        'Wink'
      ],
      description: 'La prop name indica el logo de Macro que se quiere mostrar',
      table: {
        defaultValue: { summary: "'MacroHorizontal'" },
        type: { summary: 'string' }
      }
    },
    height: {
      control: { type: 'number' },
      description: 'La prop height define el alto del Logo',
      table: {
        defaultValue: { summary: 40 },
        type: { summary: 'number' }
      }
    },
    colorPrimary: {
      control: { type: 'text' },
      description:
        'El color primary debe ser un string definido en la documentación de las foundations del Content Design System y respetando el color adecuado para cada Logo',
      table: {
        defaultValue: { summary: color.navy.main },
        type: { summary: 'string' }
      }
    },
    colorSecondary: {
      control: { type: 'text' },
      description:
        'El color secondary solo se debe usar en Logos que necesiten 2 colores, debe ser un string definido en la documentación de las foundations del Content Design System y respetando el color adecuado para cada Logo. Es importante aclarar que no todos los logos tienen color secundario',
      table: {
        defaultValue: { summary: color.green.main },
        type: { summary: 'string' }
      }
    },
    children: {
      control: { type: 'text' },
      description:
        'El children se debe usar en caso de no tener el Logo dentro del Content Design System. Puede ser un SVG o un link',
      table: {
        type: { summary: 'string' }
      }
    }
  }
} satisfies Meta<typeof Logo>

export default meta
type Story = StoryObj<typeof meta>

export const LogoDefault: Story = {
  name: 'Default',
  args: {
    name: 'MacroHorizontal',
    colorPrimary: color.navy.main,
    height: 40
  }
}

export const LogoWithColorSecondary: Story = {
  name: 'Logo con color secundario',
  args: {
    name: 'Premia',
    colorPrimary: color.gold.main,
    colorSecondary: color.black.main,
    height: 96
  }
}

export const LogoWithImportedSvg: Story = {
  name: 'Con svg importado',
  args: {
    children: LogoAgro
  }
}

export const LogoWithChildren: Story = {
  name: 'Con svg children',
  args: {
    children: (
      <svg
        width="150"
        height="150"
        viewBox="0 0 177 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clipPath="url(#clip0_4920_1081)">
          <path
            d="M37.4219 13.0837C24.5798 13.0837 13.9458 23.0212 13.2145 35.7057C13.1944 36.0244 13.3096 36.3285 13.531 36.5599C13.7523 36.7936 14.0643 36.9267 14.3885 36.9267H22.9407C23.5478 36.9267 24.0498 36.4638 24.1068 35.8499C24.7531 29.0096 30.4765 23.853 37.4219 23.853C44.3674 23.853 50.0864 29.0096 50.7315 35.8499C50.7907 36.4638 51.2928 36.9267 51.9021 36.9267H60.4475C60.7695 36.9267 61.0837 36.7936 61.3051 36.5599C61.5265 36.3274 61.6416 36.0232 61.6215 35.7057C60.8903 23.0212 50.2608 13.0837 37.4219 13.0837Z"
            fill="#053575"
          />
          <path
            d="M37.4219 26.2054C31.3586 26.2054 26.4212 31.0937 26.4212 37.0988C26.4212 43.104 31.3586 48 37.4219 48C43.4852 48 48.4182 43.1107 48.4182 37.0988C48.4182 31.087 43.4852 26.2054 37.4219 26.2054Z"
            fill="#053575"
          />
          <path
            d="M37.4219 0C27.6623 0 18.4247 3.6997 11.4077 10.4149C4.40857 17.1132 0.35667 26.0992 4.76418e-06 35.7124C-0.011176 36.0355 0.105104 36.3407 0.329836 36.5711C0.553451 36.8025 0.853095 36.9266 1.17398 36.9266H9.66463C10.2896 36.9266 10.8028 36.4425 10.833 35.8231C11.5072 21.7488 23.1877 10.7246 37.4219 10.7246C51.6561 10.7246 63.331 21.7488 64.0086 35.8231C64.0365 36.4414 64.5497 36.9266 65.1747 36.9266H73.6654C73.9851 36.9266 74.2859 36.8003 74.5106 36.5711C74.7343 36.3407 74.8505 36.0355 74.8382 35.7124C74.4827 26.0992 70.4308 17.1132 63.435 10.4149C56.4157 3.6997 47.1782 0 37.4219 0Z"
            fill="#053575"
          />
          <path
            d="M105.799 0H99.7489C99.6605 0 99.5845 0.0592579 99.5622 0.144231L95.7797 14.8771H95.7283L92.089 0.14535C92.0677 0.0592579 91.9894 0 91.9011 0H85.5974C85.4968 0 85.4118 0.0782651 85.4062 0.178892L84.1037 19.6155C84.0992 19.668 84.1182 19.7195 84.154 19.7586C84.192 19.7977 84.2423 19.819 84.2949 19.819H87.5608C87.6636 19.819 87.7475 19.7407 87.7542 19.6401L88.7045 3.45149H88.7381L93.0449 19.677C93.0673 19.7608 93.1444 19.819 93.2316 19.819H97.7397C97.8258 19.819 97.9018 19.7608 97.9242 19.6792L102.381 3.45037H102.409L103.108 19.6356C103.111 19.7385 103.197 19.8178 103.3 19.8178H107.104C107.157 19.8178 107.209 19.7966 107.244 19.7575C107.281 19.7195 107.299 19.6669 107.297 19.6144L105.991 0.178892C105.983 0.0782651 105.901 0 105.799 0Z"
            fill="#053575"
          />
          <path
            d="M115.553 4.5539C113.993 4.5539 111.598 4.79876 110.324 5.08722C110.236 5.10735 110.174 5.18449 110.174 5.27394V8.0244C110.174 8.08254 110.201 8.13733 110.246 8.17422C110.292 8.21 110.352 8.22565 110.409 8.21112C111.282 8.01546 113.301 7.68562 115.328 7.68562C118.678 7.68562 118.774 8.48505 118.777 10.606H118.484C115.456 10.6038 112.029 10.5926 110.289 12.3133C109.562 13.0311 109.194 14.005 109.194 15.2091C109.194 19.4355 112.545 20.0683 116.166 20.1208C116.496 20.1298 116.825 20.1343 117.157 20.1343C118.85 20.1343 120.614 20.0191 122.971 19.7597C123.07 19.7485 123.145 19.668 123.145 19.5696V9.602C123.145 8.12503 122.724 6.96447 121.896 6.15051C120.433 4.71379 117.981 4.53825 115.554 4.55278M118.778 13.5063V17.0718C118.022 17.1714 117.398 17.2127 116.672 17.2127C114.964 17.2127 113.757 17.0797 113.757 15.35C113.757 13.6204 114.965 13.4851 116.672 13.4851C117.678 13.4851 118.385 13.4929 118.778 13.5063Z"
            fill="#053575"
          />
          <path
            d="M137.829 16.6347L137.573 16.6694C136.86 16.7644 136.188 16.8539 135.025 16.8539C131.199 16.8539 129.639 15.5256 129.639 12.2698C129.639 9.01393 131.15 7.7684 135.025 7.7684C135.896 7.7684 136.672 7.83772 137.722 7.95959C137.776 7.96406 137.83 7.94841 137.872 7.91151C137.913 7.87573 137.937 7.8243 137.937 7.76951V5.16217C137.937 5.07272 137.874 4.99557 137.786 4.97657C136.531 4.69705 135.084 4.55505 133.484 4.55505C127.682 4.55505 125.083 8.33302 125.083 12.0763C125.083 17.1155 128.287 20.1231 133.653 20.1231C135.256 20.1231 136.605 19.971 137.901 19.6468C137.987 19.6244 138.048 19.5484 138.048 19.4612V16.827C138.048 16.77 138.024 16.7186 137.982 16.6839C137.941 16.6481 137.884 16.6302 137.83 16.637"
            fill="#053575"
          />
          <path
            d="M149.897 4.93968C149.897 4.83458 149.809 4.7496 149.704 4.7496H149.442C148.13 4.73842 146.509 4.73283 144.152 6.05216V5.05148C144.152 4.9475 144.065 4.86141 143.959 4.86141H140.431C140.326 4.86141 140.239 4.9475 140.239 5.05148V19.6256C140.239 19.7318 140.326 19.8179 140.431 19.8179H144.409C144.518 19.8179 144.601 19.7329 144.601 19.6256V9.20513C145.921 8.34085 148.06 8.35315 149.481 8.34868H149.704C149.809 8.34868 149.897 8.26371 149.897 8.15749V4.93856V4.93968Z"
            fill="#053575"
          />
          <path
            d="M157.924 4.5271C152.965 4.5271 149.885 7.51459 149.885 12.3257C149.885 17.1367 152.965 20.1231 157.924 20.1231C162.624 20.1231 165.904 16.9165 165.904 12.3257C165.904 7.73485 162.846 4.5271 157.924 4.5271ZM161.369 12.3804C161.369 15.7168 160.363 17.0786 157.898 17.0786C155.432 17.0786 154.39 15.7168 154.39 12.3804C154.39 9.04412 155.407 7.65659 157.898 7.65659C160.389 7.65659 161.369 9.02511 161.369 12.3804Z"
            fill="#053575"
          />
          <path
            d="M97.1673 28.6283H88.9036L87.7363 35.3054H90.6702C92.7062 35.3054 95.1916 35.1858 95.7898 35.0661L95.8502 35.216C95.4611 36.7723 94.5331 37.4912 92.9756 37.4912H87.3472L85.5807 47.5215H82.5272L86.2694 26.3832H97.5575L97.1684 28.6283H97.1673Z"
            fill="#053575"
          />
          <path
            d="M101.689 44.2578C101.659 44.4971 101.599 44.7666 101.599 45.0058C101.599 45.5146 101.929 45.8746 102.438 45.8746C102.647 45.8746 102.827 45.8142 103.007 45.7248L103.127 45.8444C102.947 46.9826 101.988 47.7608 100.851 47.7608C99.5633 47.7608 98.6957 47.0128 98.6957 45.6946C98.6957 45.3357 98.7561 44.9466 98.8153 44.5866L101.091 31.6516H103.905L101.689 44.2567V44.2578ZM103.096 28.389C102.348 28.389 101.749 27.8501 101.749 27.1021C101.749 25.9639 102.468 25.0057 103.725 25.0057C104.473 25.0057 105.072 25.5446 105.072 26.2938C105.072 27.432 104.353 28.389 103.096 28.389Z"
            fill="#053575"
          />
          <path
            d="M118.666 44.2579C118.635 44.4972 118.576 44.7666 118.576 45.0059C118.576 45.5448 118.876 45.8746 119.415 45.8746C119.625 45.8746 119.804 45.8142 119.984 45.7248L120.103 45.8444C119.923 47.0117 118.995 47.7608 117.828 47.7608C116.511 47.7608 115.762 47.0128 115.762 45.6946C115.762 45.0361 115.912 44.3473 116.062 43.719H116.001C114.654 45.5459 112.528 48.0001 110.043 48.0001C107.288 48.0001 106.42 44.8561 106.42 42.611C106.42 36.1138 110.103 31.4135 116.87 31.4135C117.289 31.4135 117.678 31.4135 118.098 31.4437L119.236 25.0662H122.05L118.667 44.2579H118.666ZM115.641 33.4193C111.091 33.4193 109.503 37.8804 109.503 41.7132C109.503 43.0302 109.772 45.2161 111.509 45.2161C113.245 45.2161 115.431 42.3415 116.389 41.1139L117.706 33.6586C117.018 33.5087 116.329 33.4193 115.64 33.4193H115.641Z"
            fill="#053575"
          />
          <path
            d="M136.061 44.2579C136.03 44.4971 135.971 44.7666 135.971 45.0059C135.971 45.5146 136.241 45.8746 136.81 45.8746C137.02 45.8746 137.199 45.8142 137.379 45.7248L137.498 45.8444C137.318 47.0117 136.39 47.7608 135.223 47.7608C133.906 47.7608 133.157 47.0128 133.157 45.6946C133.157 45.1255 133.337 44.1673 133.457 43.719H133.367C131.9 45.7248 130.014 48.0001 127.439 48.0001C125.463 48.0001 124.206 46.6226 124.206 44.6771C124.206 44.0186 124.295 43.3601 124.416 42.7306L126.422 31.6527H129.236L127.289 42.4019C127.2 42.8211 127.139 43.2706 127.139 43.719C127.139 44.7666 127.648 45.3961 128.696 45.3961C130.402 45.3961 131.99 43.4204 133.846 40.9942L135.462 31.6527H138.277L136.061 44.2579Z"
            fill="#053575"
          />
          <path
            d="M152.199 34.108C151.271 33.7189 150.252 33.5691 149.265 33.5691C145.612 33.5691 143.756 36.7433 143.756 41.5633C143.756 43.9884 145.403 45.8746 147.889 45.8746C149.056 45.8746 150.403 45.5157 151.183 44.5877L151.392 44.7074C151.422 44.827 151.422 44.9466 151.422 45.0663C151.422 47.4321 148.847 48.0001 146.961 48.0001C143.158 48.0001 140.822 45.1557 140.822 41.4728C140.822 35.964 144.206 31.4124 150.014 31.4124C151.003 31.4124 152.02 31.4727 153.008 31.6516L152.2 34.1069L152.199 34.108Z"
            fill="#053575"
          />
          <path
            d="M158.037 44.2578C158.007 44.4971 157.948 44.7666 157.948 45.0058C157.948 45.5146 158.278 45.8746 158.787 45.8746C158.996 45.8746 159.176 45.8142 159.356 45.7248L159.475 45.8444C159.295 46.9826 158.337 47.7608 157.2 47.7608C155.912 47.7608 155.044 47.0128 155.044 45.6946C155.044 45.3357 155.105 44.9466 155.164 44.5866L157.439 31.6516H160.253L158.037 44.2567V44.2578ZM159.445 28.389C158.697 28.389 158.098 27.8501 158.098 27.1021C158.098 25.9639 158.817 25.0057 160.073 25.0057C160.821 25.0057 161.421 25.5446 161.421 26.2938C161.421 27.432 160.702 28.389 159.445 28.389Z"
            fill="#053575"
          />
          <path
            d="M174.774 44.2579C174.744 44.4971 174.684 44.7666 174.684 45.0059C174.684 45.5448 174.984 45.8746 175.523 45.8746C175.732 45.8746 175.912 45.8142 176.092 45.7248L176.212 45.8444C176.032 47.0117 175.104 47.7608 173.936 47.7608C172.619 47.7608 171.87 47.0128 171.87 45.6946C171.87 45.0361 172.02 44.3473 172.17 43.719H172.109C170.823 45.5157 168.726 48.0001 166.301 48.0001C163.607 48.0001 162.768 44.7968 162.768 42.611C162.768 36.1138 166.451 31.4135 173.217 31.4135C174.475 31.4135 175.792 31.4738 176.99 31.6527L174.774 44.2579ZM171.96 33.4193C167.618 33.4193 165.852 37.6109 165.852 41.7131C165.852 43.0012 166.121 45.2161 167.827 45.2161C169.384 45.2161 171.63 42.2822 172.499 41.1139L173.816 33.6585C173.277 33.5087 172.588 33.4193 171.96 33.4193Z"
            fill="#053575"
          />
        </g>
        <defs>
          <clipPath id="clip0_4920_1081">
            <rect width="176.99" height="48" fill="white" />
          </clipPath>
        </defs>
      </svg>
    )
  }
}

/* ----------  DOC STORIES ---------- */

export const DocLogoDefault: Story = {
  name: 'Logo component',
  tags: ['docs-only'],
  parameters: {
    docs: {
      source: {
        format: 'dedent',
        language: 'tsx',
        dark: true,
        code: `
        return (
          <Logo name="MacroHorizontal" height={40} colorPrimary={color.navy.main} />
        )
        `
      }
    }
  },
  args: {
    children: 'text'
  },

  render: function Render() {
    return (
      <div style={{ width: '50%', padding: '1rem' }}>
        <Logo name="MacroHorizontal" height={40} colorPrimary={color.navy.main} />
      </div>
    )
  }
}

export const DocLogoColorSecondary: Story = {
  name: 'Logo component with colorSecondary',
  tags: ['docs-only'],
  parameters: {
    docs: {
      source: {
        format: 'dedent',
        language: 'tsx',
        dark: true,
        code: `
        return (
          <Logo name="Agro" height={56} colorPrimary={color.navy.main} colorSecondary={color.green.main} />
          <Logo name="Premia" height={96} colorPrimary={color.black.main} colorSecondary={color.gold.main} />
        )
        `
      }
    }
  },
  args: {
    children: 'text'
  },

  render: function Render() {
    return (
      <div style={{ width: '50%', padding: '1rem', display: 'flex', gap: 24 }}>
        <Logo
          name="Agro"
          height={56}
          colorPrimary={color.navy.main}
          colorSecondary={color.green.main}
        />
        <Logo
          name="Premia"
          height={96}
          colorPrimary={color.black.main}
          colorSecondary={color.gold.main}
        />
      </div>
    )
  }
}

export const DocLogoWithImportedSvg: Story = {
  name: 'Logo con children SVG importado',
  tags: ['docs-only'],
  parameters: {
    docs: {
      source: {
        format: 'dedent',
        language: 'tsx',
        dark: true,
        code: `
        import LogoAgro from './path/to/logo.svg'
        return (
          <Logo>{LogoAgro}</Logo>
        )
        `
      }
    }
  },
  args: {
    children: 'text'
  },

  render: function Render() {
    return (
      <div style={{ width: '50%', padding: '1rem' }}>
        <Logo>{LogoAgro}</Logo>
      </div>
    )
  }
}

export const DocLogoWithChildren: Story = {
  name: 'Logo con SVG incrustrado',
  tags: ['docs-only'],
  parameters: {
    docs: {
      source: {
        format: 'dedent',
        language: 'tsx',
        dark: true,
        code: `

        return (
          <Logo>
          <svg
            width="142"
            height="40"
            viewBox="0 0 142 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clipPath="url(#clip0_2542_5506)">
              <path
                d="M23.5312 14.1094C15.4572 14.1094 8.77223 20.3577 8.31005 28.3347C8.29728 28.5339 8.36878 28.7254 8.50922 28.871C8.64966 29.0165 8.84628 29.1008 9.048 29.1008H14.4256C14.8086 29.1008 15.1227 28.8097 15.1584 28.4241C15.5644 24.1241 19.1648 20.8812 23.5312 20.8812C27.8977 20.8812 31.4955 24.1241 31.9015 28.4241C31.9372 28.8097 32.2539 29.1008 32.6369 29.1008H38.0119C38.2136 29.1008 38.4128 29.0165 38.5533 28.871C38.6937 28.7254 38.7626 28.5339 38.7524 28.3347C38.2928 20.3577 31.6078 14.1094 23.5363 14.1094"
                fill="#111111"
              />
              <path
                d="M23.531 22.36C19.7187 22.36 16.6162 25.4344 16.6162 29.211C16.6162 32.9875 19.7187 36.0644 23.531 36.0644C27.3433 36.0644 30.4458 32.9901 30.4458 29.211C30.4458 25.4318 27.3433 22.36 23.531 22.36Z"
                fill="#111111"
              />
              <path
                d="M23.5307 5.88235C17.3947 5.88235 11.5856 8.20856 7.17321 12.432C2.77105 16.6426 0.225245 22.2935 0.000540209 28.3375C-0.00712018 28.5418 0.0669302 28.7333 0.207371 28.8788C0.347811 29.0244 0.536767 29.1035 0.738491 29.1035H6.07778C6.47101 29.1035 6.7953 28.7997 6.81318 28.409C7.23705 19.5587 14.5808 12.6286 23.5307 12.6286C32.4806 12.6286 39.8218 19.5613 40.2482 28.409C40.2661 28.7971 40.5878 29.1035 40.9811 29.1035H46.3203C46.5221 29.1035 46.7085 29.0244 46.8515 28.8788C46.9919 28.7333 47.0659 28.5418 47.0583 28.3375C46.8336 22.2935 44.2878 16.6426 39.8856 12.4294C35.4732 8.20856 29.6667 5.88235 23.5307 5.88235Z"
                fill="#111111"
              />
              <path
                d="M77.8364 7.77466H71.4603C71.3673 7.77466 71.2876 7.83576 71.2637 7.92609L67.2759 23.452H67.2228L63.3865 7.92609C63.3652 7.83576 63.2829 7.772 63.1899 7.772H56.5454C56.4391 7.772 56.3488 7.85436 56.3435 7.96063L54.97 28.444C54.9673 28.4998 54.9859 28.5529 55.0231 28.5954C55.063 28.6353 55.1161 28.6592 55.1719 28.6592H58.615C58.7239 28.6592 58.8116 28.5768 58.8169 28.4705L59.8212 11.4091H59.8557L64.396 28.5104C64.4199 28.5981 64.4996 28.6592 64.5926 28.6592H69.3429C69.4332 28.6592 69.5129 28.5981 69.5394 28.5104L74.2339 11.4091H74.2658L75.0017 28.4679C75.007 28.5768 75.0947 28.6592 75.2036 28.6592H79.2126C79.2684 28.6592 79.3215 28.6379 79.3614 28.5954C79.4012 28.5556 79.4198 28.4998 79.4172 28.444L78.041 7.96063C78.033 7.85436 77.9453 7.772 77.8391 7.772"
                fill="#111111"
              />
              <path
                d="M88.115 12.5723C86.4732 12.5723 83.9493 12.83 82.605 13.1355C82.512 13.1568 82.4482 13.2391 82.4482 13.3321V16.2306C82.4482 16.2917 82.4775 16.3502 82.5253 16.3874C82.5731 16.4245 82.6369 16.4405 82.6953 16.4272C83.6145 16.2226 85.7426 15.8746 87.8786 15.8746C91.4094 15.8746 91.5103 16.7168 91.513 18.9511H91.2021C88.0088 18.9511 84.3983 18.9378 82.5651 20.7524C81.8 21.5095 81.4121 22.535 81.4121 23.8049C81.4121 28.2576 84.9429 28.9244 88.7579 28.9802C89.106 28.9909 89.454 28.9935 89.802 28.9935C91.5847 28.9935 93.4444 28.8713 95.9285 28.6003C96.0321 28.5897 96.1091 28.5047 96.1091 28.4011V17.8964C96.1091 16.3395 95.6654 15.1174 94.794 14.2593C93.2531 12.745 90.6681 12.5617 88.1097 12.575M91.5077 22.0116V25.7682C90.7106 25.8745 90.0544 25.917 89.2866 25.917C87.488 25.917 86.2155 25.7762 86.2155 23.9537C86.2155 22.1312 87.488 21.9877 89.2866 21.9877C90.3493 21.9877 91.0932 21.9957 91.5077 22.009"
                fill="#111111"
              />
              <path
                d="M111.592 25.3033L111.321 25.3405C110.569 25.4388 109.862 25.5345 108.635 25.5345C104.604 25.5345 102.96 24.1344 102.96 20.7019C102.96 17.2694 104.551 15.957 108.635 15.957C109.551 15.957 110.369 16.0314 111.477 16.1589C111.536 16.1642 111.592 16.1456 111.637 16.1084C111.679 16.0712 111.706 16.0154 111.706 15.9596V13.2126C111.706 13.1196 111.639 13.0372 111.546 13.016C110.223 12.7211 108.698 12.5723 107.011 12.5723C100.896 12.5723 98.1592 16.5547 98.1592 20.5C98.1592 25.8108 101.536 28.9802 107.189 28.9802C108.879 28.9802 110.3 28.8208 111.669 28.4781C111.759 28.4569 111.823 28.3745 111.823 28.2815V25.5052C111.823 25.4468 111.796 25.391 111.754 25.3538C111.711 25.3166 111.65 25.298 111.594 25.3033"
                fill="#111111"
              />
              <path
                d="M124.308 12.9791C124.308 12.8675 124.218 12.7772 124.106 12.7772H123.83C122.448 12.7665 120.74 12.7612 118.256 14.1507V13.096C118.256 12.9844 118.166 12.8941 118.051 12.8941H114.335C114.223 12.8941 114.133 12.9844 114.133 13.096V28.4571C114.133 28.5687 114.223 28.6591 114.335 28.6591H118.527C118.639 28.6591 118.729 28.5687 118.729 28.4571V17.4743C120.118 16.5657 122.374 16.5763 123.87 16.571H124.106C124.218 16.571 124.308 16.4806 124.308 16.3691V12.9764V12.9791Z"
                fill="#111111"
              />
              <path
                d="M132.768 12.543C127.542 12.543 124.296 15.6912 124.296 20.7629C124.296 25.8346 127.542 28.9802 132.768 28.9802C137.72 28.9802 141.177 25.6008 141.177 20.7629C141.177 15.925 137.954 12.543 132.768 12.543ZM136.4 20.8187C136.4 24.3335 135.34 25.7682 132.739 25.7682C130.138 25.7682 129.043 24.3335 129.043 20.8187C129.043 17.3039 130.114 15.84 132.739 15.84C135.364 15.84 136.4 17.2826 136.4 20.8187Z"
                fill="#111111"
              />
            </g>
            <defs>
              <clipPath id="clip0_2542_5506">
                <rect width="141.176" height="40" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </Logo>
        )
        `
      }
    }
  },
  args: {
    children: 'text'
  },

  render: function Render() {
    return (
      <div style={{ width: '50%', padding: '1rem' }}>
        <Logo>
          <svg
            width="142"
            height="40"
            viewBox="0 0 142 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clipPath="url(#clip0_2542_5506)">
              <path
                d="M23.5312 14.1094C15.4572 14.1094 8.77223 20.3577 8.31005 28.3347C8.29728 28.5339 8.36878 28.7254 8.50922 28.871C8.64966 29.0165 8.84628 29.1008 9.048 29.1008H14.4256C14.8086 29.1008 15.1227 28.8097 15.1584 28.4241C15.5644 24.1241 19.1648 20.8812 23.5312 20.8812C27.8977 20.8812 31.4955 24.1241 31.9015 28.4241C31.9372 28.8097 32.2539 29.1008 32.6369 29.1008H38.0119C38.2136 29.1008 38.4128 29.0165 38.5533 28.871C38.6937 28.7254 38.7626 28.5339 38.7524 28.3347C38.2928 20.3577 31.6078 14.1094 23.5363 14.1094"
                fill="#111111"
              />
              <path
                d="M23.531 22.36C19.7187 22.36 16.6162 25.4344 16.6162 29.211C16.6162 32.9875 19.7187 36.0644 23.531 36.0644C27.3433 36.0644 30.4458 32.9901 30.4458 29.211C30.4458 25.4318 27.3433 22.36 23.531 22.36Z"
                fill="#111111"
              />
              <path
                d="M23.5307 5.88235C17.3947 5.88235 11.5856 8.20856 7.17321 12.432C2.77105 16.6426 0.225245 22.2935 0.000540209 28.3375C-0.00712018 28.5418 0.0669302 28.7333 0.207371 28.8788C0.347811 29.0244 0.536767 29.1035 0.738491 29.1035H6.07778C6.47101 29.1035 6.7953 28.7997 6.81318 28.409C7.23705 19.5587 14.5808 12.6286 23.5307 12.6286C32.4806 12.6286 39.8218 19.5613 40.2482 28.409C40.2661 28.7971 40.5878 29.1035 40.9811 29.1035H46.3203C46.5221 29.1035 46.7085 29.0244 46.8515 28.8788C46.9919 28.7333 47.0659 28.5418 47.0583 28.3375C46.8336 22.2935 44.2878 16.6426 39.8856 12.4294C35.4732 8.20856 29.6667 5.88235 23.5307 5.88235Z"
                fill="#111111"
              />
              <path
                d="M77.8364 7.77466H71.4603C71.3673 7.77466 71.2876 7.83576 71.2637 7.92609L67.2759 23.452H67.2228L63.3865 7.92609C63.3652 7.83576 63.2829 7.772 63.1899 7.772H56.5454C56.4391 7.772 56.3488 7.85436 56.3435 7.96063L54.97 28.444C54.9673 28.4998 54.9859 28.5529 55.0231 28.5954C55.063 28.6353 55.1161 28.6592 55.1719 28.6592H58.615C58.7239 28.6592 58.8116 28.5768 58.8169 28.4705L59.8212 11.4091H59.8557L64.396 28.5104C64.4199 28.5981 64.4996 28.6592 64.5926 28.6592H69.3429C69.4332 28.6592 69.5129 28.5981 69.5394 28.5104L74.2339 11.4091H74.2658L75.0017 28.4679C75.007 28.5768 75.0947 28.6592 75.2036 28.6592H79.2126C79.2684 28.6592 79.3215 28.6379 79.3614 28.5954C79.4012 28.5556 79.4198 28.4998 79.4172 28.444L78.041 7.96063C78.033 7.85436 77.9453 7.772 77.8391 7.772"
                fill="#111111"
              />
              <path
                d="M88.115 12.5723C86.4732 12.5723 83.9493 12.83 82.605 13.1355C82.512 13.1568 82.4482 13.2391 82.4482 13.3321V16.2306C82.4482 16.2917 82.4775 16.3502 82.5253 16.3874C82.5731 16.4245 82.6369 16.4405 82.6953 16.4272C83.6145 16.2226 85.7426 15.8746 87.8786 15.8746C91.4094 15.8746 91.5103 16.7168 91.513 18.9511H91.2021C88.0088 18.9511 84.3983 18.9378 82.5651 20.7524C81.8 21.5095 81.4121 22.535 81.4121 23.8049C81.4121 28.2576 84.9429 28.9244 88.7579 28.9802C89.106 28.9909 89.454 28.9935 89.802 28.9935C91.5847 28.9935 93.4444 28.8713 95.9285 28.6003C96.0321 28.5897 96.1091 28.5047 96.1091 28.4011V17.8964C96.1091 16.3395 95.6654 15.1174 94.794 14.2593C93.2531 12.745 90.6681 12.5617 88.1097 12.575M91.5077 22.0116V25.7682C90.7106 25.8745 90.0544 25.917 89.2866 25.917C87.488 25.917 86.2155 25.7762 86.2155 23.9537C86.2155 22.1312 87.488 21.9877 89.2866 21.9877C90.3493 21.9877 91.0932 21.9957 91.5077 22.009"
                fill="#111111"
              />
              <path
                d="M111.592 25.3033L111.321 25.3405C110.569 25.4388 109.862 25.5345 108.635 25.5345C104.604 25.5345 102.96 24.1344 102.96 20.7019C102.96 17.2694 104.551 15.957 108.635 15.957C109.551 15.957 110.369 16.0314 111.477 16.1589C111.536 16.1642 111.592 16.1456 111.637 16.1084C111.679 16.0712 111.706 16.0154 111.706 15.9596V13.2126C111.706 13.1196 111.639 13.0372 111.546 13.016C110.223 12.7211 108.698 12.5723 107.011 12.5723C100.896 12.5723 98.1592 16.5547 98.1592 20.5C98.1592 25.8108 101.536 28.9802 107.189 28.9802C108.879 28.9802 110.3 28.8208 111.669 28.4781C111.759 28.4569 111.823 28.3745 111.823 28.2815V25.5052C111.823 25.4468 111.796 25.391 111.754 25.3538C111.711 25.3166 111.65 25.298 111.594 25.3033"
                fill="#111111"
              />
              <path
                d="M124.308 12.9791C124.308 12.8675 124.218 12.7772 124.106 12.7772H123.83C122.448 12.7665 120.74 12.7612 118.256 14.1507V13.096C118.256 12.9844 118.166 12.8941 118.051 12.8941H114.335C114.223 12.8941 114.133 12.9844 114.133 13.096V28.4571C114.133 28.5687 114.223 28.6591 114.335 28.6591H118.527C118.639 28.6591 118.729 28.5687 118.729 28.4571V17.4743C120.118 16.5657 122.374 16.5763 123.87 16.571H124.106C124.218 16.571 124.308 16.4806 124.308 16.3691V12.9764V12.9791Z"
                fill="#111111"
              />
              <path
                d="M132.768 12.543C127.542 12.543 124.296 15.6912 124.296 20.7629C124.296 25.8346 127.542 28.9802 132.768 28.9802C137.72 28.9802 141.177 25.6008 141.177 20.7629C141.177 15.925 137.954 12.543 132.768 12.543ZM136.4 20.8187C136.4 24.3335 135.34 25.7682 132.739 25.7682C130.138 25.7682 129.043 24.3335 129.043 20.8187C129.043 17.3039 130.114 15.84 132.739 15.84C135.364 15.84 136.4 17.2826 136.4 20.8187Z"
                fill="#111111"
              />
            </g>
            <defs>
              <clipPath id="clip0_2542_5506">
                <rect width="141.176" height="40" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </Logo>
      </div>
    )
  }
}

export const DocAllLogos: Story = {
  name: 'Logos disponibles',
  tags: ['docs-only'],
  parameters: {
    docs: {}
  },
  args: {
    children: 'text'
  },

  render: function Render() {
    return (
      <div style={{ width: '50%', padding: '1rem', display: 'flex', gap: 24 }}>
        <Logo
          name="Agro"
          height={56}
          colorPrimary={color.navy.main}
          colorSecondary={color.green.main}
        />
        <Logo
          name="Premia"
          height={96}
          colorPrimary={color.black.main}
          colorSecondary={color.gold.main}
        />
        <Logo
          name="Agro"
          height={56}
          colorPrimary={color.navy.main}
          colorSecondary={color.green.main}
        />
        <Logo
          name="Premia"
          height={96}
          colorPrimary={color.black.main}
          colorSecondary={color.gold.main}
        />
        <Logo
          name="Agro"
          height={56}
          colorPrimary={color.navy.main}
          colorSecondary={color.green.main}
        />
        <Logo
          name="Premia"
          height={96}
          colorPrimary={color.black.main}
          colorSecondary={color.gold.main}
        />
      </div>
    )
  }
}
