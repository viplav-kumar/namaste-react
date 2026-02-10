import {
  RestaurantPageAccordionHeader,
  RestaurantPageAccordionContent,
} from "./RestaurantPageAccordion";
import { useState } from "react";

const RestaurantPageMenu = ({ restaurantInfo }) => {
  const [openCategoryId, setOpenCategoryId] = useState(null);
  const [openSubCategoryId, setOpenSubCategoryId] = useState(null);

  const handleCategoryClick = (id) => {
    setOpenCategoryId((prev) => {
      prev === id ? setOpenCategoryId(null) : setOpenCategoryId(id);
      setOpenSubCategoryId(null);
    });
  };

  const handleSubCategoryClick = (id) => {
    setOpenSubCategoryId((prev) => (prev === id ? null : id));
  };

  return (
    <div className="mt-10 py-0 px-10 w-[80%] mx-auto">
      {restaurantInfo.restaurantPageDetails.category.map((item) => (
        <div
          key={item.id}
          className="bg-gray-300 mb-5 py-1 px-4 box-shadow-[0_6px_14px_rgba(0_0_0_0.06)]"
        >
          <RestaurantPageAccordionHeader
            isOpen={true}
            item={item}
            firstDivCss={"p-1 mb-2"}
            onClick={() => handleCategoryClick(item.id)}
          />
          {item?.itemCards?.categories?.length
            ? item?.itemCards?.categories?.map((nestedCategory) => (
                <div key={nestedCategory.id} className="bg-gray-800 px-5">
                  {openCategoryId === item.id && (
                    <RestaurantPageAccordionHeader
                      isOpen={openCategoryId === item.id}
                      item={nestedCategory}
                      firstDivCss={"p-1 mb-2 bg-gray-800"}
                      titleCss={"text-[18px] text-white"}
                      onClick={() => handleSubCategoryClick(nestedCategory.id)}
                    />
                  )}

                  {nestedCategory?.itemCards?.length ? (
                    nestedCategory?.itemCards?.map(
                      (nestedItem) =>
                        openSubCategoryId === nestedCategory.id && (
                          <RestaurantPageAccordionContent
                            isOpen={openSubCategoryId === nestedCategory.id}
                            key={nestedItem.id}
                            item={nestedItem}
                            firstDivCss={"p-3 mb-3"}
                          />
                        ),
                    )
                  ) : (
                    <></>
                  )}
                </div>
              ))
            : item.itemCards.map(
                (option) =>
                  openCategoryId === item.id && (
                    <RestaurantPageAccordionContent
                      isOpen={openCategoryId === item.id}
                      key={option.id}
                      item={option}
                      firstDivCss={"p-3 mb-3"}
                    />
                  ),
              )}
        </div>
      ))}
    </div>
  );
};

export default RestaurantPageMenu;
