import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Product } from '../product';


@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private games =[

        {
          "image":"assets/games/game1.webp",
          "id": 1,
          "name":"PUBG:Battleground",
          "price": 0,
          "description": "Play PUBG: BATTLEGROUNDS for free.Land on strategic locations, loot weapons and supplies, and survive to become the last team standing across various, diverse Battlegrounds.Squad up and join the Battlegrounds for the original Battle Royale experience that only PUBG: BATTLEGROUNDS can."
        },
        {
          "image":"assets/games/game2.jpg",
          "id":2,
          "name":"Arena of Valor",
          "price":499,
          "description":"Arena of Valor, brought to you by Level Infinite and TiMi Studio Group, is the ultimate real-time 5v5 MOBA experience! Join your friends, create a guild, and master over 100 unique heroes from internationally acclaimed franchises. The future of mobile MOBAs has arrived."
        },
        {
          "image":"assets/games/game3.jpg",
          "id":3,
          "name": "Synced",
          "price":799,
          "description": "SYNCED is a match-based Rogue-Looter shooter developed by NExT Studios. In a techno-apocalyptic future, you are a Runner who joins the war with deadly techno-creatures called Nanos inside the sealed exclusion zone known as the Meridian."
        },
        {
          "image":"assets/games/game4.png",
          "id":4,
          "name" : "Samurai Spirit",
          "price" : 949,
          "description": "Samurai Spirit is a co-operative game in which each player is a fierce samurai defending a village surrounded by a horde of bandits. The game plays out over three turns during which each player takes turns drawing bandit cards, then choosing whether they want to fight the bandit, defend the village, or let the bandit pass in order to help the other samurai."
        },
        {
          "image":"assets/games/game5.jpg",
          "id":5,
          "name":"FIFA 14",
          "price":0,
          "description":"Fuelled by EA SPORTS IGNITE, FIFA 14 will feel alive with players who think, move, and behave like world-class footballers, and dynamic stadiums that come to life. Players have four times the decision making ability and feel alive with human like reactions, anticipation, and instincts."
        },
        {
          "image":"assets/games/game6.jpg",
          "id":6,
          "name": "IGI 2 : Covert Strike",
          "price":0,
          "description": "Ex-SAS soldier David Jones is once again a man with a mission, to infiltrate key airbases, harbors and secret government installations spread across Russia, Libya and into China.Jones continues to rely on stealth, rather than firepower, to penetrate and destroy the enemy. Cunning and careful tactics are the name of the game."
        },
        {
          "image":"assets/games/game7.jpg",
          "id":7,
          "name": "Wo Long",
          "price":3974,
          "description":"Wo Long: Fallen Dynasty is a dramatic, action-packed story of a nameless militia soldier fighting for survival in a dark fantasy version of the Later Han Dynasty where demons plague the Three Kingdoms. Players fight off deadly creatures and enemy soldiers using swordplay based on the Chinese martial arts."
        },
        {
          "image":"assets/games/game8.jpg",
          "id":8,
          "name" : "Madden 23",
          "price":1199,
          "description":"The League drops you into your fifth NFL season at a skill position of your choice (QB, WR, RB, CB, MLB) and you’re seeking a fresh start with a new team. Negotiate a one-year “prove-it” contract with one of 32 NFL teams and show out with great on-field performance to earn rewards and level up."
        },
        {
          "image":"assets/games/game9.jpg",
          "id":9,
          "name": "Horizon 5",
          "price":1599,
          "description":"Explore the vibrant open world landscapes of Mexico with limitless, fun driving action in the world’s greatest cars. Blast off to Hot Wheels Park and experience the most extreme tracks ever devised."
        },
        {
          "image":"assets/games/game10.jpg",
          "id":10,
          "name":"Halo Infinite",
          "price": 0,
          "description":"Halo Infinite is a first-person shooter akin to past Halo games. Players use weapons and vehicles commonly found in the Halo series, such as the Warthog.The Multiplayer and Academy components of Halo Infinite are free to play, Campaign needs to be purchased"
        },
        {
          "image":"assets/games/game11.jpg",
          "id":11,
          "name":"Honor of Kings",
          "price":799,
          "description":" immersed in the battlefield as you squad up with your friends, choose from unique heroes with amazing skills, and enjoy the extreme fun of fierce teamfights. In each battle, a team of five players advance along three lanes, with the goal of taking down nine towers, and ultimate"
        },
        {
          "image":"assets/games/game12.jpg",
          "id":12,
          "name":"Archeage",
          "price":949,
          "description":"ArcheAge is a thrilling fantasy sandbox MMORPG set in a world where players forge their own path, telling a story unique to them. Craft your hero and enter in battlefield, developers say is a hybrid of the open content style of a 'sandbox' game and the more structured play experience of a 'themepark' game"
        },
        {
          "image":"assets/games/game13.webp",
          "id":13,
          "name":"Dengeki Bunko",
          "price":0,
          "description":"Have you ever imagined such a world?Where Asuna walks in Academy City with her sword in hand; Shana eats her favorite melon bread in a forest of Aincrad; Mikoto stares at a vending machine placed in Ikebukuro"
        },
        {
          "image":"assets/games/game14.jpg",
          "id":14,
          "name":"SMITE: Battle of Gods",
          "price":1199,
          "description":"Smite pits players in 5v5 matches against each other in a confined arena. The goal of the game is to destroy the other team's base, in this case represented by the enemy Titan, a large boss that must be defeated for the match to end. The first team to destroy the enemy team's Titan wins."
        },
        {
          "image": "assets/games/game15.png",
          "id" : 15,
          "name" : "GTA : Grand Theft Auto 5",
          "price" : 2549,
          "description": "Set within the fictional state of San Andreas, based on Southern California, the single-player story follows three protagonists—retired bank robber Michael De Santa, street gangster Franklin Clinton, and drug dealer and gunrunner Trevor Philips—and their attempts to commit heists while under pressure"
        }


  ]

  constructor(private http : HttpClient) { }
  getProducts(): Observable <Product[]>{
    return this.http.get<Product[]>(`http://localhost:3000/products`)
  }

  getGames(){
    return this.games;
  }

  searchGames(query:string){
    return this.games.filter(game=>game.name.toLowerCase().includes(query.toLowerCase()));
  }

}
