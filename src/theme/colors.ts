export interface ColorsInterface {
  active: string;
  homeBackground: string;
  cartBackground: string;
  linkBlue: string;
  buttonOff: string;
  buttonActive: string;
  primaryBlue: string;
  secondaryBlue: string;
  white: string;
  dark: string;
}

const colors: ColorsInterface = {
  active: "#e67a00",
  homeBackground: "#edeeee",
  cartBackground: "#e9eded",
  linkBlue: "#017185",

  buttonOff: "#FEE6B0",
  buttonActive: "#eeba37",
  primaryBlue: "#131921",
  secondaryBlue: "#222f3e",
  white: "#FFFFFF",
  dark: "#000000",
};

// export const darkColors: ColorsInterface = {
//   active: "#f3a846",
//   primaryBlue: "#131921",
//   secondaryBlue: "#222f3e",
//   whiteText: "#FFFFFF",
//   darkText: "#000000",
// };

export const chooseColor = (color: string) => {
  switch (color) {
    case "active": {
      return colors.active;
    }

    case "homeBackground": {
      return colors.homeBackground;
    }

    case "cartBackground": {
      return colors.cartBackground;
    }

    case "linkBlue": {
      return colors.linkBlue;
    }

    case "primary": {
      return colors.primaryBlue;
    }

    case "secondary": {
      return colors.secondaryBlue;
    }

    case "white": {
      return colors.white;
    }

    case "dark": {
      return colors.dark;
    }

    case "buttonOff": {
      return colors.buttonOff;
    }

    case "buttonActive": {
      return colors.buttonActive;
    }

    default:
      return colors.primaryBlue;
  }
};

export default colors;
