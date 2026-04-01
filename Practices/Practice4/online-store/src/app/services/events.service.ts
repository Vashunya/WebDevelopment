import { Injectable } from '@angular/core';
import { TicketonEvent } from '../models/event.model';

@Injectable({
  providedIn: 'root'
})
export class EventsService {

  getEvents(): TicketonEvent[] {
    return [
      {
        id: 1,
        name: 'Goat: Dream Big',
        description: 'Year of release:2026\n' +
            '\n' +
            'Country of manufacture:USA, Brazil, Japan, Singapore\n' +
            '\n' +
            'Director:Tyree Dillihay, Adam Rosette\n' +
            '\n' +
            'Genre:Cartoon, Comedy, Adventure\n' +
            '\n' +
            'The actors:David Harbour, Patton Oswalt, Aaron Pierre\n' +
            '\n' +
            'Premiere date: February 12, 2026',
        price: 1092,
        rating: 5,
        image: 'https://ticketon.kz/files/media/62956u57548_afisha-tiketon--2026-01-23t140016-739.jpg',
        images: [
          'https://ticketon.kz/files/media/62956u57548_afisha-tiketon--2026-01-23t140016-739.jpg'
        ],
        link: 'https://ticketon.kz/event/goat-mechtay-po-krupnomu-2026?utm_source=web&amp%3Butm_medium=slaider&amp%3Butm_campaign=goat-mechtay-po-krupnomu-2026&creative_slot=slider_1&promotion_name=Goat%3A+Мечтай+по-крупному+%282026%29&promotion_id=5545'
      },
      {
        id: 2,
        name: 'Exhibition Performances by the Stars of the Milan-Cortina 2026 Olympics',
        description: 'On April 5 at Almaty Arena, a special ice show will take place - an evening of pride, triumph, and real emotion.\n' +
            '\n' +
            'The main star of the night is Mikhail Shaidorov, the gold champion of the Milan-Cortina 2026 Winter Olympic Games.\n' +
            '\n' +
            'The Kazakh figure skater who raised the national flag to the top step of the podium will return to home ice to share this historic moment with his fans.\n' +
            '\n' +
            'Also performing on the ice will be our talented athlete Sofia Samodelkina, alongside some of the world’s strongest figure skaters:',
        price: 6240,
        rating: 5,
        image: 'https://ticketon.kz/media/upload/63347u57997_milan-kortina-2026_0.jpg',
        images: [
          'https://ticketon.kz/media/upload/63347u57997_milan-kortina-2026_0.jpg'
        ],
        link: 'https://ticketon.kz/en/event/vzezdy-milan-kortina-2026?item_list_name=Popular&item_list_id=popular&index=2'
      },
      {
        id: 3,
        name: 'Maher Zain',
        description: 'Maher Zain: Music that Unites Hearts\n' +
            '\n' +
            'One of the world’s most renowned artists is returning to Kazakhstan.\n' +
            'Maher Zain is a musician whose songs are listened to by millions around the globe for their sincerity, depth, and powerful emotion.\n' +
            '\n' +
            'His music tells stories of faith, hope, love, peace, and human values-understood by everyone, regardless of language or culture.\n' +
            '\n' +
            'Tickets are on sale now. Seating is limited.\n' +
            'Don’t wait-the best seats go first.',
        price: 7020,
        rating: 4.7,
        image: 'https://ticketon.kz/media/upload/55450u45664_maher-zain-v-astane261510.png',
        images: [
          'https://ticketon.kz/media/upload/55450u45664_maher-zain-v-astane261510.png'
        ],
        link: 'https://ticketon.kz/en/maher-zain-kz?creative_slot=slider_3&promotion_name=Maher+Zain&promotion_id=4328'
      },
      {
        id: 4,
        name: 'NonStop Music Fest',
        description: 'NonStop Music Fest is Almaty’s biggest musical blast, where sound, movement, and the energy of a new generation collide.\n' +
            '\n' +
            'On one stage: MC Kay, DLC, Kyle Ruh, Duisenbi, 6ellucci - plus secret guests whose appearance will be the night’s real surprise. The festival’s peak moment will be a powerful headline show by Ninety One. The program is amplified by the spectacular dance Big Love Show, packed with bold choreography, lights, and effects that turn the atmosphere into a true major music event. No pauses, emotions at full throttle, and a rhythm that won’t let go for a second.',
        price: 6240,
        rating: 4.5,
        image: 'https://ticketon.kz/media/upload/63171u53673_nonstop-music-fest.jpg',
        images: [
          'https://ticketon.kz/media/upload/63171u53673_nonstop-music-fest.jpg'
        ],
        link: 'https://ticketon.kz/en/event/nonstop-music-fest?utm_source=web&amp%3Butm_medium=slaider&amp%3Butm_campaign=nonstop-music-fest&creative_slot=slider_4&promotion_name=NonStop+Music+Fest&promotion_id=5530'
      },
      {
        id: 5,
        name: 'IL Canto «Grande Amore»',
        description: 'Venue: Almaty, Almaty Theatre\n' +
            '\n' +
            'Date: March 8, 2026\n' +
            '\n' +
            'Time: 19:00',
        price: 3900,
        rating: 4.6,
        image: 'https://ticketon.kz/media/upload/63499u57997_il-canto-grande-amore.jpg',
        images: [
          'https://ticketon.kz/media/upload/63499u57997_il-canto-grande-amore.jpg'
        ],
        link: 'https://ticketon.kz/en/event/il-canto-grande-amore?utm_source=web&amp%3Butm_medium=slaider&amp%3Butm_campaign=il-canto-grande-amore&creative_slot=slider_5&promotion_name=IL+Canto+«Grande+Amore»&promotion_id=5564'
      },
      {
        id: 6,
        name: 'LOBODA in Almaty',
        description: 'One of today’s most electrifying performers returns to Almaty with a major solo concert.\n' +
            '\n' +
            'LOBODA means powerful stage presence, live vocals, world-class visuals, and songs that resonate deeply.\n' +
            '\n' +
            'Expect the anthems thousands dance to, heartfelt ballads that give you chills, and new tracks that will sound especially powerful on this night.\n' +
            '\n' +
            'A LOBODA concert is never just a performance, it’s a full-scale show where light, sound, and emotion merge into one unforgettable ',
        price: 23000,
        rating: 4.3,
        image: 'https://ticketon.kz/media/upload/63393u54364_loboda-almaty10022026-2.jpg',
        images: [
          'https://ticketon.kz/media/upload/63393u54364_loboda-almaty10022026-2.jpg'
        ],
        link: 'https://ticketon.kz/en/event/loboda-almaty?utm_source=web&amp%3Butm_medium=slaider&amp%3Butm_campaign=loboda-almaty&creative_slot=slider_8&promotion_name=null&promotion_id=5570'
      },
      {
        id: 7,
        name: 'Festive concert',
        description: 'On March 11, the Palace of the Republic invites residents and guests of the city to a grand festive concert. The evening promises to be vibrant and dynamic, featuring some of the brightest stars of Kazakhstan’s pop scene, who will perform their greatest hits and create an uplifting atmosphere.\n' +
            '\n' +
            'It’s a wonderful opportunity to spend time with loved ones and enjoy live performances of your favorite songs.\n' +
            '\n' +
            'Concert lineup:\n' +
            '\n' +
            '• Kairat Nurtas - one of the country’s most popular artists.\n' +
            '• Nurbolat Abdullin - a well-known pop singer.',
        price: 5460,
        rating: 4.4,
        image: 'https://ticketon.kz/media/upload/62499u45664_1930nauryz-fest.jpeg',
        images: [
          'https://ticketon.kz/media/upload/62499u45664_1930nauryz-fest.jpeg',
        ],
        link: 'https://ticketon.kz/en/event/nauryz-fest?item_list_name=Popular&item_list_id=popular&index=4'
      },
      {
        id: 8,
        name: 'Elena Vaenga in Almaty',
        description: 'Elena Vaenga Concert in Almaty!\n' +
            '\n' +
            'On February 21, 2026, a grand solo concert by one of the brightest, most charismatic, and sincere artists of our time Elena Vaenga will take place on the main stage of the Palace of the Republic!\n' +
            '\n' +
            'Elena Vaenga is a unique phenomenon on stage. Her powerful voice and inimitable style, combining elements of chanson, folk-rock, singer-songwriter music, and pop ballads, have captured millions of hearts. Each of her performances is not just a concert, but a candid conversation with the audience through music and lyrics, filled with incredible energy, emotions, and life wisdom.',
        price: 11700,
        rating: 4.9,
        image: 'https://ticketon.kz/media/upload/57378u45664_57378u45664_elena-vaenga-v-almaty-1.jpg',
        images: [
          'https://ticketon.kz/media/upload/57378u45664_57378u45664_elena-vaenga-v-almaty-1.jpg'
        ],
        link: 'https://ticketon.kz/event/elena-vaenga-v-almaty?item_list_name=Popular&item_list_id=popular&index=10'
      },
      {
        id: 9,
        name: 'Einstein and Margarita',
        description: 'For the first time, Alena Khmelnitskaya and Aleksei Serebryakov share the same stage. The theatrical agency ENTRACTE presents a production about great love and the atomic bomb, staged by director Alexander Marin.\n' +
            '\n' +
            'In «Einstein and Margarita», a true story of two lives is revealed in a new light. A well-known fact: in 1935, the Princeton Institute commissioned the Russian émigré sculptor Sergey Konenkov to create a sculptural portrait of Albert Einstein. The sculptor’s wife, Margarita, met the famous physicist in the studio and became his only love for many years. Two extraordinary people found themselves together in a difficult situation - in a truly historic era.',
        price: 30000,
        rating: 4.1,
        image: 'https://ticketon.kz/media/upload/63125u45664_eynshteyn-i-margarita-v-almaty2026.png',
        images: [
          'https://ticketon.kz/media/upload/63125u45664_eynshteyn-i-margarita-v-almaty2026.png'
        ],
        link: 'https://ticketon.kz/event/eynshteyn-i-margarita-v-almaty?item_list_name=Popular&item_list_id=popular&index=5'
      },
      {
        id: 10,
        name: 'Aldaraspan',
        description: 'Aldaraspan has been in existence for more than ten years, this collective is well known in the republic. Their performance always gathers full halls. Kazakhstani collective working in the comedy genre.\n' +
            '\n' +
            'It consists of nine artists, many of whom used to play in the KVN, Now the ensemble spends almost all the time on tour around the country and everywhere it is welcomed. Special attention is paid to the Internet, where they post their finished works.',
        price: 5000,
        rating: 4.8,
        image: 'https://ticketon.kz/files/media/:aldaraspan-v-kz22.jpg',
        images: [
          'https://ticketon.kz/files/media/:aldaraspan-v-kz22.jpg'
        ],
        link: 'https://ticketon.kz/en/aldaraspan-v-kz?creative_slot=slider_2&promotion_name=Алдараспан&promotion_id=2054'
      }
    ];
  }
}

