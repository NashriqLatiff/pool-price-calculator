export const POOL_CATEGORY_THRESHOLDS = {
  small: 80,
  medium: 128,
  large: 200,
  ultraLarge: 240,
} as const

export const POOL_PRICING = {
  skimmer: {
    minimum: {
      small: {
        melaka: { rate: 380, discount: 30 },
        outsideMelaka: { rate: 450, discount: 30 },
      },

      medium: {
        melaka: { rate: 350, discount: 30 },
        outsideMelaka: { rate: 430, discount: 30 },
      },

      large: {
        melaka: { rate: 330, discount: 20 },
        outsideMelaka: { rate: 380, discount: 20 },
      },

      ultraLarge: {
        melaka: { rate: 310, discount: 20 },
        outsideMelaka: { rate: 350, discount: 20 },
      },
    },

    maximum: {
      small: {
        melaka: { rate: 400, discount: 30 },
        outsideMelaka: { rate: 470, discount: 30 },
      },

      medium: {
        melaka: { rate: 370, discount: 30 },
        outsideMelaka: { rate: 460, discount: 30 },
      },

      large: {
        melaka: { rate: 350, discount: 20 },
        outsideMelaka: { rate: 400, discount: 20 },
      },

      ultraLarge: {
        melaka: { rate: 320, discount: 20 },
        outsideMelaka: { rate: 370, discount: 20 },
      },
    },
  },

  overflow: {
    minimum: {
      small: {
        melaka: { rate: 400, discount: 30 },
        outsideMelaka: { rate: 470, discount: 0 },
      },

      medium: {
        melaka: { rate: 370, discount: 30 },
        outsideMelaka: { rate: 450, discount: 0 },
      },

      large: {
        melaka: { rate: 350, discount: 20 },
        outsideMelaka: { rate: 400, discount: 0 },
      },

      ultraLarge: {
        melaka: { rate: 330, discount: 20 },
        outsideMelaka: { rate: 370, discount: 0 },
      },
    },

    maximum: {
      small: {
        melaka: { rate: 420, discount: 30 },
        outsideMelaka: { rate: 490, discount: 0 },
      },

      medium: {
        melaka: { rate: 390, discount: 30 },
        outsideMelaka: { rate: 480, discount: 0 },
      },

      large: {
        melaka: { rate: 370, discount: 20 },
        outsideMelaka: { rate: 420, discount: 0 },
      },

      ultraLarge: {
        melaka: { rate: 340, discount: 20 },
        outsideMelaka: { rate: 390, discount: 0 },
      },
    },
  },
} as const