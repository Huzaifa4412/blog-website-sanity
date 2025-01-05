type RuleType = {
    min: (value: number) => RuleType;
    max: (value: number) => RuleType;
};
export default {
    name: 'featureProducts',
    title: 'Feature Products ',
    type: 'document',
    fields: [
        {
            name: 'name',
            title: 'Name',
            type: 'string',
        },

        {
            name: 'discountedPrice',
            title: 'Discounted Price',
            type: 'number',
        },

        {
            name: 'actualPrice',
            title: 'Actual Price',
            type: 'number',
        },
        {
            name: 'productImage',
            title: 'Product Image',
            type: 'image',
            options: {
                hotspot: true, // Allows cropping in the Sanity Studio
            },
        },
        {
            name: 'isOnSale',
            title: 'Is On sale',
            type: 'boolean', // Checkbox for marking the product as featured
            description: 'Mark this product as if it is on sale',
        },
        {
            name: 'discountPercent',
            title: 'Discount Percentage',
            type: 'number',
            description: 'Discount percentage for the sale.',
            hidden: ({ parent }: { parent: { isOnSale: boolean } }) => !parent?.isOnSale, // Show only if the product is on sale
            validation: (Rule: RuleType) => Rule.min(0).max(100), // Ensure valid discount percentage
        },
    ],
};

