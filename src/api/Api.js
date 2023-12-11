import axios from "axios";

export async function productsData () {
    const products = await axios.get
    (
        "https://fakestoreapiserver.reactbd.com/products"
    );
    return products;
}

export const blogs = [
    {   id: 1, 
        title: 'Chic Elegance Unleashed', 
        excerpt: 'Dive into the world of timeless fashion where chic elegance meets modern trends. Discover how to elevate your style effortlessly.', 
        content:'In this post, we will guide you through the essential elements of chic elegance. From mastering the art of accessorizing to decoding the secrets of a well-fitted wardrobe, we will share practical tips and inspiring ideas to help you infuse your personal style with timeless charm.Join us on a journey where fashion becomes a form of self-expression, and elegance becomes a way of life.'
    },
    { 
        id: 2, 
        title: 'Street Style Extravaganza', 
        excerpt: 'Uncover the secrets of street style fashion and learn how to turn everyday looks into runway-worthy ensembles. Embrace the urban flair with confidence.',
        content:'In this post, we will delve deeper into the world of street style, exploring the influence of different subcultures and highlighting iconic street fashion moments. Learn how to incorporate street-inspired elements into your outfits, whether it is through statement sneakers, graphic tees, or unexpected pairings. Get ready to break the fashion rules and express your individuality in the vibrant landscape of street style.' 
    },
    { 
        id: 3, 
        title: 'Boho Bliss: Embracing Free-Spirited Fashion', 
        excerpt: 'Explore the bohemian world of fashion, where free-spirited vibes meet contemporary trends. Find inspiration for creating your own boho-chic wardrobe.',
        content:'In this post, we will guide you through the key elements of boho fashion, offering styling tips and outfit ideas to help you embrace the free-spirited, bohemian lifestyle. Discover the beauty of mixing and matching textures, patterns, and accessories to create a look that is uniquely yours. Join us as we celebrate the freedom and creativity that define the boho-chic aesthetic, inspiring you to infuse your wardrobe with a touch of boho bliss.' 
    },
    // Add more blog posts as needed
  ];