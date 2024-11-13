function changeLanguage() {
    const language = document.getElementById("languageSelector").value;

    if (language === "en") {
        // Traduction en anglais
        document.getElementById('rooms_suites').innerText = "Rooms and Suites";
        document.getElementById('reservation_form').innerText = "Hotel Reservation Form";
        document.getElementById('label_location').innerText = "Location";
        document.getElementById('label_arrival').innerText = "Arrival";
        document.getElementById('label_departure').innerText = "Departure";
        document.getElementById('label_adults').innerText = "Adults";
        document.getElementById('label_children').innerText = "Children";
        document.getElementById('check_availability').innerText = "Check Availability";

        // Traductions pour la section des informations de réservation
        document.querySelector('.col-md-5.mb-30.mt-30 h5').innerText = "Each of our rooms has a private bathroom, Wi-Fi, cable TV, and breakfast.";
        document.querySelector('.reservations .text p').innerText = "Booking";
        document.querySelector('.col-md-5.mb-30.mt-30 p small').innerText = "Call us.";

        // Traductions pour le pied de page
        document.querySelector('.footer-title').innerText = "About";
        document.querySelector('.footer-about-text').innerText = "Welcome! Our hotel offers a refined setting where every detail is designed for your comfort, with modern facilities and top-notch service for an exceptional stay.";
        document.querySelector('.footer-explore-list li:nth-child(1) a').innerText = "Home";
        document.querySelector('.footer-explore-list li:nth-child(2) a').innerText = "About";
        document.querySelector('.footer-explore-list li:nth-child(3) a').innerText = "Rooms";
        document.querySelector('.footer-explore-list li:nth-child(4) a').innerText = "Restaurant";
        document.querySelector('.footer-explore-list li:nth-child(5) a').innerText = "Contact";
        document.querySelector('.footer-contact h3').innerText = "Contact";
        document.querySelector('.footer-contact-text').innerText = "Hamdallaye ACI\Bamako Mali";
        document.querySelector('.footer-bottom-copy-right').innerText = "© Copyright 2024 Micasa, all rights reserved";

        // Traductions pour la section Expériences
        document.getElementById('exp_title').innerText = "Experiences";
        document.getElementById('health_club_title').innerText = "Health Club and Pool";
        document.getElementById('health_description').innerText = "The health club & pool offers top facilities with a tranquil ambiance, perfect for relaxation and rejuvenation.";
        document.getElementById('more_button').innerText = "More";
        
        //section modern
        document.getElementById('moderne_title').innerText = "Modern";
        document.getElementById('fitness_center_title').innerText = "Fitness Center";
        document.getElementById('fitness_center_description').innerText = "Restaurant inilla duiman at elit finibus viverra nec a lacus themo the nesudea seneoice misuscipit non sagie the fermen ziverra tristiue duru the ivite dianne onen nivami acsestion augue artine.";
        document.getElementById('more_button_fitness').innerText = "More";

        // salle de conférence
        document.getElementById('experiences_title').innerText = "Experiences";
        document.getElementById('conference_center_title').innerText = "Conference Room Center";
        document.getElementById('conference_center_description').innerText = "Conference room inilla duiman at elit finibus viverra nec a lacus themo the nesudea seneoice misuscipit non sagie the fermen ziverra tristiue duru the ivite dianne onen nivami acsestion augue artine.";
        document.getElementById('more_button_conference').innerText = "More";

        // restaurant
        document.getElementById('discover_title').innerText = "Discover";
        document.getElementById('restaurant_title').innerText = "Restaurant";
        document.getElementById('restaurant_description').innerText = "Restaurant inilla duiman at elit finibus viverra nec a lacus themo the nesudea seneoice misuscipit non sagie the fermen ziverra tristiue duru the ivite dianne onen nivami acsestion augue artine.";
        document.getElementById('more_button_restaurant').innerText = "More";

        // Traduction des témoignages 1, 2, et 3
        document.getElementById('testimonials_title').innerText = "Testimonials";
        document.getElementById('client_reviews_title').innerText = "What do clients say?";

        document.getElementById('testimonial_1').innerText = "Hotel dapibus asue metus the nec feusiate eraten miss hendreri net ve ante the lemon sanleo nectan feugiat erat hendrerit necuis ve ante otel inilla duiman at finibus viverra neca the sene on satien the miss drana inc fermen norttito sit space, mus nellentesque habitan.";
        document.getElementById('author_1').innerText = "Emily Brown";
        document.getElementById('review_1').innerText = "Guest review";

        document.getElementById('testimonial_2').innerText = "Hotel dapibus asue metus the nec feusiate eraten miss hendreri net ve ante the lemon sanleo nectan feugiat erat hendrerit necuis ve ante otel inilla duiman at finibus viverra neca the sene on satien the miss drana inc fermen norttito sit space, mus nellentesque habitan.";
        document.getElementById('author_2').innerText = "Nolan White";
        document.getElementById('review_2').innerText = "Guest review";

        document.getElementById('testimonial_3').innerText = "Hotel dapibus asue metus the nec feusiate eraten miss hendreri net ve ante the lemon sanleo nectan feugiat erat hendrerit necuis ve ante otel inilla duiman at finibus viverra neca the sene on satien the miss drana inc fermen norttito sit space, mus nellentesque habitan.";
        document.getElementById('author_3').innerText = "Olivia Martin";
        document.getElementById('review_3').innerText = "Guest review";

        // Traduction en anglais
        document.getElementById('best_prices').innerText = "Best prices";
        document.getElementById('additional_services').innerText = "Additional Services";
        document.getElementById('service_description_1').innerText = "The best prices for your relaxing vacation.";
        document.getElementById('service_description_2').innerText = "Orci varius natoque penatibus et magnis disney parturient.";
        document.getElementById('more_info').innerText = "For more information";
        document.getElementById('phone_numbers').innerHTML = "+223 20 29 08 08 ACI <br>+223 20 28 38 80 Golf";

        // services supplementaires
        document.getElementById('room_cleaning').innerText = "Room Cleaning";
        document.getElementById('service_1_free').innerText = "Free";
        document.getElementById('service_1_additional').innerText = "Orci miss natoque vasa ince";
        document.getElementById('service_1_unavailable').innerText = "Unavailable";

        document.getElementById('shuttle_service').innerText = "Shuttle Service";
        document.getElementById('service_2_paid').innerText = "Paid";
        document.getElementById('service_2_additional').innerText = "Orci miss natoque vasa ince";
        document.getElementById('service_2_unavailable').innerText = "Unavailable";

        document.getElementById('car_rental').innerText = "Car Rental";
        document.getElementById('service_3_paid').innerText = "Paid";
        document.getElementById('service_3_additional').innerText = "Orci miss natoque vasa ince";
        document.getElementById('service_3_unavailable').innerText = "Unavailable";

        document.getElementById('tour_guide').innerText = "Tour Guide";
        document.getElementById('service_4_paid').innerText = "Paid";
        document.getElementById('service_4_additional').innerText = "Orci miss natoque vasa ince";
        document.getElementById('service_4_unavailable').innerText = "Unavailable";

        document.getElementById('breakfast').innerText = "Breakfast";
        document.getElementById('service_5_paid').innerText = "Paid";
        document.getElementById('service_5_additional').innerText = "Orci miss natoque vasa ince";
        document.getElementById('service_5_unavailable').innerText = "Unavailable";

        document.getElementById('security').innerText = "Safe & Secure";
        document.getElementById('service_6_safe').innerText = "Safe Deposit Box";
        document.getElementById('service_6_free').innerText = "Free";
        document.getElementById('service_6_unavailable').innerText = "Unavailable";

        //video
        document.getElementById('residence_title').innerText = "MiCasa Residence";
        document.getElementById('promo_video').innerText = "Promotional Video";

        // Services et commodités de l'hôtel
        document.getElementById('subtitle_services').innerText = "Our Services";
        document.getElementById('title_services').innerText = "Hotel Services and Amenities";
        document.getElementById('service_shuttle').innerText = "Shuttle Service";
        document.getElementById('service_shuttle_desc').innerText = "We will pick you up from the airport, ensuring a comfortable journey.";
        document.getElementById('service_room').innerText = "Room Service";
        document.getElementById('service_room_desc').innerText = "Room service once a day. Swimming pool, peaceful space, comfortable stay.";
        document.getElementById('service_pool').innerText = "Swimming Pool";
        document.getElementById('service_pool_desc').innerText = "Enjoy our pool, an oasis of relaxation and leisure.";
        document.getElementById('service_wifi').innerText = "Fiber Internet";
        document.getElementById('service_wifi_desc').innerText = "High-speed Wi-Fi, keeping you connected at all times.";
        document.getElementById('service_breakfast').innerText = "Breakfast";
        document.getElementById('service_breakfast_desc').innerText = "Start your day with a delicious breakfast, served fresh.";

        // Services et commodités de l'hôtel
        document.getElementById('servicesSubtitle').innerText = "Our Services";
        document.getElementById('servicesTitle').innerText = "Hotel Services and Amenities";
        document.getElementById('service1Title').innerText = "Shuttle";
        document.getElementById('service1Desc').innerText = "We will pick you up at the airport while you are comfortably seated during your journey, mus nellentesque habitant.";
        document.getElementById('service2Title').innerText = "Room Service";
        document.getElementById('service2Desc').innerText = "Room service once a day. Swimming pool tincidunt nise ace park norttito sit space, mus nellentesque habitant.";
        document.getElementById('service3Title').innerText = "Swimming Pool";
        document.getElementById('service3Desc').innerText = "Swimming pool tincidunt nise ace park norttito sit space, mus nellentesque habitant.";
        document.getElementById('service4Title').innerText = "Fiber Internet";
        document.getElementById('service4Desc').innerText = "WiFi tincidunt nis ace park norttito sit amet space, mus nellentesque habitant.";
        document.getElementById('service5Title').innerText = "Breakfast";
        document.getElementById('service5Desc').innerText = "Eat tincidunt nisa ace park norttito sit amet space, mus nellentesque habitant.";

    } else if (language === "fr") {
        // Revenir au texte en français
        document.getElementById('rooms_suites').innerText = "Chambres et suites";
        document.getElementById('reservation_form').innerText = "Formulaire de réservation d'hôtel";
        document.getElementById('label_location').innerText = "Location";
        document.getElementById('label_arrival').innerText = "Arrivée";
        document.getElementById('label_departure').innerText = "Départ";
        document.getElementById('label_adults').innerText = "Adultes";
        document.getElementById('label_children').innerText = "Enfants";
        document.getElementById('check_availability').innerText = "Vérifier la disponibilité";

        // Informations de réservation en français
        document.querySelector('.col-md-5.mb-30.mt-30 h5').innerText = "Chacune de nos chambres dispose d’une salle de bain privée, d’une connexion Wi-Fi, de la télévision par câble et d’un petit déjeuner.";
        document.querySelector('.reservations .text p').innerText = "Réservation";
        document.querySelector('.col-md-5.mb-30.mt-30 p small').innerText = "Appelez-nous.";

        // Pied de page en français
        document.querySelector('.footer-title').innerText = "A propos";
        document.querySelector('.footer-about-text').innerText = "Bienvenue ! Notre hôtel offre un cadre raffiné où chaque détail est pensé pour votre confort, avec des installations modernes et un service de premier ordre pour un séjour exceptionnel.";
        document.querySelector('.footer-explore-list li:nth-child(1) a').innerText = "Accueil";
        document.querySelector('.footer-explore-list li:nth-child(2) a').innerText = "A propos";
        document.querySelector('.footer-explore-list li:nth-child(3) a').innerText = "Appartements";
        document.querySelector('.footer-explore-list li:nth-child(4) a').innerText = "Restaurant";
        document.querySelector('.footer-explore-list li:nth-child(5) a').innerText = "Contact";
        document.querySelector('.footer-contact h3').innerText = "Contact";
        document.querySelector('.footer-contact-text').innerText = "Hamdallaye ACI\Bamako Mali";
        document.querySelector('.footer-bottom-copy-right').innerText = "© Copyright 2024 Micasa, tous droits réservés";

        // Section Expériences en français
        document.getElementById('exp_title').innerText = "Expériences";
        document.getElementById('health_club_title').innerText = "Le club de santé et la piscine";
        document.getElementById('health_description').innerText = "Le club de santé et la piscine offrent des installations de qualité dans une ambiance paisible, parfaites pour la détente et le bien-être.";
        document.getElementById('more_button').innerText = "Plus";

        //section modern
        document.getElementById('moderne_title').innerText = "Moderne";
        document.getElementById('fitness_center_title').innerText = "Centre de remise en forme";
        document.getElementById('fitness_center_description').innerText = "Restaurant inilla duiman at elit finibus viverra nec a lacus themo the nesudea seneoice misuscipit non sagie the fermen ziverra tristiue duru the ivite dianne onen nivami acsestion augue artine.";
        document.getElementById('more_button_fitness').innerText = "Plus";

        // salle de conférence
        document.getElementById('experiences_title').innerText = "Expériences";
        document.getElementById('conference_center_title').innerText = "Centre de Salle de conférence";
        document.getElementById('conference_center_description').innerText = "Salle de conférence inilla duiman at elit finibus viverra nec a lacus themo the nesudea seneoice misuscipit non sagie the fermen ziverra tristiue duru the ivite dianne onen nivami acsestion augue artine.";
        document.getElementById('more_button_conference').innerText = "Plus";

        // Revenir au texte en français pour la section 4 (restaurant)
        document.getElementById('discover_title').innerText = "Découvrir";
        document.getElementById('restaurant_title').innerText = "Le restaurant";
        document.getElementById('restaurant_description').innerText = "Restaurant inilla duiman at elit finibus viverra nec a lacus themo the nesudea seneoice misuscipit non sagie the fermen ziverra tristiue duru the ivite dianne onen nivami acsestion augue artine.";
        document.getElementById('more_button_restaurant').innerText = "Plus";

        // Revenir au texte en français pour la section des témoignages
        document.getElementById('testimonials_title').innerText = "Témoignages";
        document.getElementById('client_reviews_title').innerText = "Que disent les clients ?";

        // Revenir aux témoignages en français
        document.getElementById('testimonial_1').innerText = "Hotel dapibus asue metus the nec feusiate eraten miss hendreri net ve ante the lemon sanleo nectan feugiat erat hendrerit necuis ve ante otel inilla duiman at finibus viverra neca the sene on satien the miss drana inc fermen norttito sit space, mus nellentesque habitan.";
        document.getElementById('author_1').innerText = "Emily Brown";
        document.getElementById('review_1').innerText = "Avis client";

        document.getElementById('testimonial_2').innerText = "Hotel dapibus asue metus the nec feusiate eraten miss hendreri net ve ante the lemon sanleo nectan feugiat erat hendrerit necuis ve ante otel inilla duiman at finibus viverra neca the sene on satien the miss drana inc fermen norttito sit space, mus nellentesque habitan.";
        document.getElementById('author_2').innerText = "Nolan White";
        document.getElementById('review_2').innerText = "Avis client";

        document.getElementById('testimonial_3').innerText = "Hotel dapibus asue metus the nec feusiate eraten miss hendreri net ve ante the lemon sanleo nectan feugiat erat hendrerit necuis ve ante otel inilla duiman at finibus viverra neca the sene on satien the miss drana inc fermen norttito sit space, mus nellentesque habitan.";
        document.getElementById('author_3').innerText = "Olivia Martin";
        document.getElementById('review_3').innerText = "Avis client";

         // Services supplémentaires
         document.getElementById('best_prices').innerText = "Meilleurs prix";
         document.getElementById('additional_services').innerText = "Services supplémentaires";
         document.getElementById('service_description_1').innerText = "Les meilleurs prix pour vos vacances relaxantes.";
         document.getElementById('service_description_2').innerText = "Orci varius natoque penatibus et magnis disney parturient.";
         document.getElementById('more_info').innerText = "Pour plus d’informations";
         document.getElementById('phone_numbers').innerHTML = "+223 20 29 08 08 ACI <br>+223 20 28 38 80 Golf";

         // Traduction des services
         document.getElementById('room_cleaning').innerText = "Nettoyage des chambres";
         document.getElementById('service_1_free').innerText = "Gratuit";
         document.getElementById('service_1_additional').innerText = "Orci miss natoque vasa ince";
         document.getElementById('service_1_unavailable').innerText = "Non disponible";

         document.getElementById('shuttle_service').innerText = "Navette";
         document.getElementById('service_2_paid').innerText = "Payante";
         document.getElementById('service_2_additional').innerText = "Orci miss natoque vasa ince";
         document.getElementById('service_2_unavailable').innerText = "Non disponible";

         document.getElementById('car_rental').innerText = "Location de voiture";
         document.getElementById('service_3_paid').innerText = "Payante";
         document.getElementById('service_3_additional').innerText = "Orci miss natoque vasa ince";
         document.getElementById('service_3_unavailable').innerText = "Non disponible";

         document.getElementById('tour_guide').innerText = "Guide touristique";
         document.getElementById('service_4_paid').innerText = "Payante";
         document.getElementById('service_4_additional').innerText = "Orci miss natoque vasa ince";
         document.getElementById('service_4_unavailable').innerText = "Non disponible";

         document.getElementById('breakfast').innerText = "Petit déjeuner";
         document.getElementById('service_5_paid').innerText = "Payante";
         document.getElementById('service_5_additional').innerText = "Orci miss natoque vasa ince";
         document.getElementById('service_5_unavailable').innerText = "Non disponible";

         document.getElementById('security').innerText = "Sûr et sécurisé";
         document.getElementById('service_6_safe').innerText = "Coffre Fort";
         document.getElementById('service_6_free').innerText = "Gratuit";
         document.getElementById('service_6_unavailable').innerText = "Non disponible";

        //video
        document.getElementById('residence_title').innerText = "Résidence MiCasa";
        document.getElementById('promo_video').innerText = "Vidéo promotionnelle";

        //Services et commodités de l'hôtel
        document.getElementById('subtitle_services').innerText = "Nos Services";
        document.getElementById('title_services').innerText = "Services et commodités de l'hôtel";
        document.getElementById('service_shuttle').innerText = "Navette";
        document.getElementById('service_shuttle_desc').innerText = "Nous viendrons vous chercher à l'aéroport pendant que vous serez confortablement installé pendant votre trajet, habitant mus nellentesque.";
        document.getElementById('service_room').innerText = "Service de chambre";
        document.getElementById('service_room_desc').innerText = "Service de chambre 1 fois/jours Swimming pool tincidunt nise ace park norttito sit space, mus nellentesque habitant.";
        document.getElementById('service_pool').innerText = "Piscine";
        document.getElementById('service_pool_desc').innerText = "Swimming pool tincidunt nise ace park norttito sit space, mus nellentesque habitant.Swimming pool";
        document.getElementById('service_wifi').innerText = "Internet fibre";
        document.getElementById('service_wifi_desc').innerText = "Wifi tincidunt nis ace park norttito sit amet space, mus nellentesque habitant.";
        document.getElementById('service_breakfast').innerText = "Petit-déjeuner";
        document.getElementById('service_breakfast_desc').innerText = "Eat tincidunt nisa ace park norttito sit amet space, mus nellentesque habitant";

        // Services et commodités de l'hôtel
        document.getElementById('servicesSubtitle').innerText = "Nos Services";
        document.getElementById('servicesTitle').innerText = "Services et commodités de l'hôtel";
        document.getElementById('service1Title').innerText = "Navette";
        document.getElementById('service1Desc').innerText = "Nous viendrons vous chercher à l'aéroport pendant que vous serez confortablement installé pendant votre trajet, habitant mus nellentesque.";
        document.getElementById('service2Title').innerText = "Service de chambre";
        document.getElementById('service2Desc').innerText = "Service de chambre 1 fois/jours Swimming pool tincidunt nise ace park norttito sit space, mus nellentesque habitant.";
        document.getElementById('service3Title').innerText = "Piscine";
        document.getElementById('service3Desc').innerText = "Swimming pool tincidunt nise ace park norttito sit space, mus nellentesque habitant.";
        document.getElementById('service4Title').innerText = "Internet fibre";
        document.getElementById('service4Desc').innerText = "Wifi tincidunt nis ace park norttito sit amet space, mus nellentesque habitant.";
        document.getElementById('service5Title').innerText = "Petit-déjeuner";
        document.getElementById('service5Desc').innerText = "Eat tincidunt nisa ace park norttito sit amet space, mus nellentesque habitant";
    }
}