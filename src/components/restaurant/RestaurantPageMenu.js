import {
  RestaurantPageAccordionHeader,
  RestaurantPageAccordionContent,
} from "./RestaurantPageAccordion";

const RestaurantPageMenu = ({ restaurantInfo }) => {
  return (
    <div className="mt-10 py-0 px-10 w-[80%] mx-auto">
      {restaurantInfo.restaurantPageDetails.category.map((item) => (
        <div
          key={item.id}
          className="bg-gray-300 mb-10 py-1 px-4 box-shadow-[0_6px_14px_rgba(0_0_0_0.06)]"
        >
          <RestaurantPageAccordionHeader item={item} firstDivCss={""} />
          <div className="flex flex-col gap-3">
            {item?.itemCards?.categories?.length
              ? item?.itemCards?.categories?.map((nestedCategory) => (
                  <div key={nestedCategory.id} className="bg-gray-800 px-5">
                    <RestaurantPageAccordionHeader
                      item={nestedCategory}
                      firstDivCss={"bg-gray-800"}
                      titleCss={"text-[18px] text-white"}
                    />
                    {nestedCategory?.itemCards?.length ? (
                      nestedCategory?.itemCards?.map(
                        (nestedItem) =>
                          nestedItem.price && (
                            <RestaurantPageAccordionContent
                              key={nestedItem.id}
                              item={nestedItem}
                              firstDivCss={"mb-3"}
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
                    option.price && (
                      <RestaurantPageAccordionContent
                        key={option.id}
                        item={option}
                      />
                    ),
                )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default RestaurantPageMenu;
