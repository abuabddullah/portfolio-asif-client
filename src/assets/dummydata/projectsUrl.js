const projects = [
    {
      title: "Medimart",
      description:
        "MediMart💊 is a next-gen online pharmacy that lets users search, order, and track medicines seamlessly. Built with Next.js, TypeScript, and MongoDB, it offers secure JWT authentication, bcrypt password protection, and role-based access. With intelligent search, real-time order tracking, and SSLCOMMERZ payments, it ensures efficiency, security, and scalability. The admin dashboard simplifies medicine, order, and user management, making it a powerful healthcare eCommerce solution.",
      image: "medimart",
      category: "fullstack",
      githubUrlClient: "https://github.com/abuabddullah/medimart-client",
      githubUrlServer: "https://github.com/abuabddullah/medimart-server",
      liveUrl: "https://medimart-client.vercel.app/",
    },
    {
      title: "BikeBaazar",
      description:
        "BikeBaazaar🚴‍♂️ is a full-stack e-commerce platform for cycling enthusiasts, built with React, Node.js, Express, and MongoDB. It offers secure JWT authentication, real-time shopping cart, and SSLCommerz-powered checkout. Admins can manage products with CRUD operations, while advanced security (CORS, Helmet, rate limiting) ensures data protection. Scalable and efficient, it delivers a seamless shopping experience for users.",
      image: "bikebaazar",
      category: "fullstack",
      githubUrlClient: "https://github.com/abuabddullah/l2a4-bikeBazaar-client",
      githubUrlServer: "https://github.com/abuabddullah/l2a4-bikeBazaar-server",
      liveUrl: "https://bikebazaar-client.vercel.app/",
    },
    {
      title: "Loyal Auto Parts",
      description: "This is the project description for Loyal Auto Parts.",
      image:
        "https://i.ibb.co/jTrn6Jz/Screenshot-2024-07-07-031334.png",
      category: "fullstack",
      githubUrlClient: "https://github.com/abuabddullah/loyalAutoParts-client.git",
      githubUrlServer: "https://github.com/abuabddullah/loyalAutoParts-server.git",
      liveUrl: "https://loyalautoparts.netlify.app/",
    },
    {
      title: "Thirsty Drinks",
      description: "This is the project description for Thirsty Drinks.",
      image:
        "https://i.ibb.co/61YdY9v/Screenshot-2024-07-07-031502.png",
      category: "fullstack",
      githubUrlClient:
        "https://github.com/abuabddullah/thirstDyrinksWareHouseManagement",
      githubUrlServer: "https://github.com/abuabddullah/thirstyDrinks-server.git",
      liveUrl: "https://thirstydrinks.netlify.app/",
    },
    {
      title: "Kormo kando",
      description: "This is the project description for Kormo Kando.",
      image: "https://i.ibb.co/YpPWQ14/image.png",
      category: "fullstack",
      githubUrlClient: "https://github.com/abuabddullah/kormoKandoFrontend.git",
      githubUrlServer: "https://github.com/abuabddullah/kormoKandoServer.git",
      liveUrl: "https://kormokando.netlify.app/",
    },
    {
      title: "BooKeVents",
      description: "This is the project description for BooKeVents.",
      image:
        "https://i.ibb.co/pR9Lw4B/Screenshot-2024-07-07-031721.png",
      category: "fullstack",
      githubUrlClient: "https://github.com/abuabddullah/booKeVents-client.git",
      githubUrlServer: "https://github.com/abuabddullah/booKeVents-server.git",
      liveUrl: "https://boo-ke-vents.netlify.app/",
    },
    {
      title: "Burger's Hub 1",
      description: "This is the project description for Burger's Hub 1.",
      image: "https://i.ibb.co/jztQMjQ/8.png",
      category: "fullstack",
      githubUrlClient:
        "https://github.com/abuabddullah/assignment8-burgerHub1-chooseRandomBurger-",
      githubUrlServer:
        "https://github.com/abuabddullah/assignment8-burgerHub1-server.git",
      liveUrl: "https://myassignment8.netlify.app/",
    },
    {
      title: "Insta-Sohor",
      description: "This is the project description for Insta-Sohor.",
      image:
        "https://i.ibb.co/QdpwwyV/screencapture-instashohorassignment7-netlify-app-2022-06-02-20-04-27.png",
      category: "fullstack",
      githubUrlClient: "https://github.com/abuabddullah/assignment7-instaShohor",
      githubUrlServer:
        "https://github.com/abuabddullah/assignment7-instaShohor-server.git",
      liveUrl: "https://instashohorassignment7.netlify.app/",
    },
    {
      title: "Phone Hub",
      description: "This is the project description for Phone Hub.",
      image:
        "https://i.ibb.co/xFHKtyN/screencapture-myassignments6-netlify-app-2022-06-02-20-09-11.png",
      category: "fullstack",
      githubUrlClient: "https://github.com/abuabddullah/assignment6-phoneHunter",
      githubUrlServer:
        "https://github.com/abuabddullah/assignment6-phoneHunter-server.git",
      liveUrl: "https://myassignments6.netlify.app/",
    },
    {
      title: "Bismillah Savings",
      description: "This is the project description for Bismillah Savings.",
      image:
        "https://i.ibb.co/K2PgCWf/screencapture-bismillahmoneymaster-netlify-app-2022-06-02-20-11-21.png",
      category: "fullstack",
      githubUrlClient: "https://github.com/abuabddullah/assignmetn5-moneyMaster",
      githubUrlServer:
        "https://github.com/abuabddullah/assignmetn5-moneyMaster-server.git",
      liveUrl: "https://bismillahmoneymaster.netlify.app/",
    },
    {
      title: "Party Convention",
      description: "This is the project description for Party Convention.",
      image:
        "https://i.ibb.co/88LS3Mf/screencapture-myprogrammingheroassignment3-netlify-app-2022-06-02-20-13-10.png",
      category: "fullstack",
      githubUrlClient: "https://github.com/abuabddullah/assignment3-partyConvention",
      githubUrlServer:
        "https://github.com/abuabddullah/assignment3-partyConvention-server.git",
      liveUrl: "https://myprogrammingheroassignment3.netlify.app/",
    },
    {
      title: "Burger's Hub 2",
      description: "This is the project description for Burger's Hub 2.",
      image: "https://i.ibb.co/nR951C2/9.png",
      category: "frontend",
      githubUrlClient:
        "https://github.com/abuabddullah/assignment9-burgerHub2-reactChart",
      githubUrlServer:null,
      liveUrl: "https://myassignment9.netlify.app/home",
    },
    {
      title: "Service Provider Asif",
      description: "This is the project description for Service Provider Asif.",
      image: "https://i.ibb.co/ZW0Y0PL/10.png",
      category: "frontend",
      githubUrlClient: "https://github.com/abuabddullah/assignment10-doctorAsif",
      githubUrlServer:null,
      liveUrl: "https://myassignment-10.web.app/",
    },
  ];