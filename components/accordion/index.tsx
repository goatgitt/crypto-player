import { Box } from "theme-ui";
import {SxStyleProp} from "theme-ui";
import { useState } from "react"
import AccordionItem from "./item"
import  {AccordionItemProps}   from "./item";


type Props = {
  items: AccordionItemProps[];
  pushSx?: SxStyleProp;
};

export default function Accordion({ items, pushSx }: Props) {
  const [currentlyToggled, setCurrentlyToggled] = useState<string>();

  return (
    <Box sx={pushSx}>
      {items.map((item) => (
        <AccordionItem
          key={`accordion-item-${item.heading}`}
          currentlyToggled={currentlyToggled}
          setCurrentlyToggled={setCurrentlyToggled}
          {...item}
        />
      ))}
    </Box>
  );
}
