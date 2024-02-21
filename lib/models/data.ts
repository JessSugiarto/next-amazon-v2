import bcrypt from 'bcryptjs'
const data={
    users: [
        {
            name: 'John',
            email: 'admin@example.com',
            password: bcrypt.hashSync('123456'),
            isAdmin: true,
        },
         {
            name: 'Jane',
            email: 'user@example.com',
            password: bcrypt.hashSync('123456'),
            isAdmin: false,
        },
    ],
    products: [   
        { 
        name: 'Free Shirt',
        slug: 'free-shirt',
        category: 'Shirts',
        image: '/images/shirt1.jpg',
        price: 70,
        brand: 'Nike',
        rating: 4.5,
        numReviews: 8,
        countInStock: 20,
        description: 'A popular shirt',
        isFeatured: true,
        banner: '/images/banner1.jpg'
        },
        { 
        name: 'Fit Shirt',
        slug: 'fit-shirt',
        category: 'Shirts',
        image: '/images/shirt2.jpg',
        price: 80,
        brand: 'Adidas',
        rating: 3.2,
        numReviews: 10,
        countInStock: 20,
        description: 'A popular shirt',
        isFeatured: true,
        banner: '/images/banner2.jpg'
        },
        { 
        name: 'Slim Shirt',
        slug: 'slim-shirt',
        category: 'Shirts',
        image: '/images/shirt3.jpg',
        price: 90,
        brand: 'Fubu',
        rating: 4.5,
        numReviews: 3,
        countInStock: 20,
        description: 'A popular shirt',
        isFeatured: true,
        banner: '/images/banner3.jpg'
        },
        { 
        name: 'Golf Shirt',
        slug: 'golf-shirt',
        category: 'Shirts',
        image: '/images/shirt4.jpg',
        price: 60,
        brand: 'Puma',
        rating: 4.1,
        numReviews: 8,
        countInStock: 20,
        description: 'A popular shirt',
        isFeatured: true,
        banner: '/images/banner4.jpg'
        },
    ],
}
export default data