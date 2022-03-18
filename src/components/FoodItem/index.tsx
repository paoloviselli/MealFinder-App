import Image from "next/image";
import { Meal } from "../../types/meals";
import Text from "../shared/Text";
import { FoodItemContainer, ImageContainer, TitleContainer } from "./styles";

interface FoodItemProps {
  meal: Meal;
}

const FoodItem: React.FunctionComponent<FoodItemProps> = ({ meal }) => {
  return (
    <FoodItemContainer>
      <ImageContainer>
        {/* <Image src={meal.image} alt="This is a meal item" layout="fill" /> */}
      </ImageContainer>
      <TitleContainer>
        <Text fontSize={14} color="primary">
          {meal.title}
        </Text>
      </TitleContainer>
    </FoodItemContainer>
  );
};

export default FoodItem;
