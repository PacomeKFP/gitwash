import { Blocks, Database, Brain, Cpu, Cloud } from "lucide-react";

export const challenges = [
  {
    icon: Database,
    title: "Défi 1: GL - Gestion des Logs 📝",
    domain: "Développement d'application",
    description: "Une petite app ludique pour suivre tes habitudes de lavage de mains ! Note chaque lavage en un clic, suis ton évolution et reçois des rappels pour garder le rythme. Ensemble, on rend l'hygiène des mains fun et régulière ! 🚰✨",
    learnings: [
      "Construire une interface utilisateur simple et conviviale",
      "Mettre en place un système de stockage de données",
      "Créer des rappels intelligents et motivants"
    ],
    keywords: ["Frontend", "Backend", "API REST", "Base de données", "Authentification"]
  },
  {
    icon: Brain,
    title: "Défi 2: ML - Machine Learning 🤖",
    domain: "Intelligence Artificielle",
    description: "On va rendre ton app super intelligente ! À partir d'un jeu de données fourni sur les habitudes de lavage de mains, on va explorer, nettoyer et analyser ces données pour prédire les meilleurs moments pour se laver les mains. C'est comme avoir un assistant personnel qui devine tes besoins ! 🔮",
    learnings: [
      "Explorer et nettoyer des données réelles comme un data scientist",
      "Créer un modèle d'IA qui comprend les habitudes d'hygiène",
      "Concevoir des recommandations personnalisées et intelligentes"
    ],
    keywords: ["Data Science", "Machine Learning", "Prédiction", "Analyse de données"]
  },
  {
    icon: Cloud,
    title: "Défi 3: CL - Cloud Computing ☁️",
    domain: "Cloud Computing",
    description: "On passe à la vitesse supérieure ! Découvre comment déployer ton app sur le cloud (AWS, Google Cloud ou Azure), configure ton propre serveur, et entraîne tes modèles d'IA en production. C'est l'occasion de voir ton projet prendre son envol ! 🚀",
    learnings: [
      "Configurer et déployer une application web dans le cloud",
      "Mettre en place un environnement d'entraînement pour l'IA",
      "Gérer un serveur en production comme un pro"
    ],
    keywords: ["AWS", "Azure", "Google Cloud", "Déploiement", "DevOps"]
  },
  {
    icon: Cpu,
    title: "Défi 4: IoT - Prototype Virtuel 🔌",
    domain: "Internet des Objets",
    description: "On plonge dans l'IoT ! Simule des capteurs temps réel pour détecter automatiquement les lavages de mains, traite les données avec un OS temps réel, et connecte tout ça à ton app. Le futur de l'hygiène connectée, c'est maintenant ! 🎮",
    learnings: [
      "Simuler des capteurs IoT temps réel",
      "Traiter des données sur un OS temps réel",
      "Intégrer des données IoT à une application web"
    ],
    keywords: ["RTOS", "Capteurs", "Temps réel", "Acquisition de données", "Edge Computing"]
  },
  {
    icon: Blocks,
    title: "Défi 5: Blockchain ⛓️",
    domain: "Blockchain",
    description: "Et si on transformait les lavages de mains en crypto ? À chaque fois que tu te laves les mains, tu mines des tokens ! Plus tu es propre, plus tu es riche. C'est la révolution de l'hygiène 2.0 ! 💎",
    learnings: [
      "Créer des smart contracts sur Ethereum comme un chef",
      "Lancer ta propre crypto (qui va peut-être exploser 🚀)",
      "Intégrer le minage par activité dans l'app"
    ],
    keywords: ["Ethereum", "Smart Contracts", "Web3", "DeFi", "Tokenisation"]
  }
];