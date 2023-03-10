exports.typeDefs = `#graphql
    type Query {
        hello: String
        products(filter: ProductsFilterInput): [Product]!
        product(id: ID!): Product
        categories: [Category!]!
        category(id: ID!): Category
    }
    type Product {
        id: ID!
        name: String!
        description: String!
        quantity: Int!
        image: String!
        price: Float!
        onSale: Boolean!
        category: Category!
        reviews: [Review]!
    }
    type Category {
        name: String!
        id: ID!
        products(filter: ProductsFilterInput): [Product!]!
    }
    type Review {
        id: ID!
        date: String!
        title: String!
        comment: String!
        rating: Int!
    }
    input ProductsFilterInput {
        onSale: Boolean
        avgRating: Int
    }
`
