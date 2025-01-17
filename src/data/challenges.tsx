import { Blocks, Database, Brain, Cpu, Cloud  } from "lucide-react";

export   const challenges = [
    {
      icon: Database,
      title: "Défi 1: GL - Gestion des Logs",
      domain: "Développement d'application",
      description: "Créer une petite application qui permet à un utilisateur d'enregistrer chaque fois qu'il se lave les mains. L'application doit offrir une interface simple où l'utilisateur appuie sur un bouton pour enregistrer chaque lavage.",
      learnings: [
        "Développer une interface simple avec React ou Flutter",
        "Mettre en place un backend avec Firebase ou MongoDB",
        "Gérer l'authentification des utilisateurs"
      ]
    },
    {
      icon: Brain,
      title: "Défi 2: ML - Machine Learning",
      domain: "Intelligence Artificielle",
      description: "Utiliser les données collectées pour prédire quand un utilisateur se lavera les mains la prochaine fois en entraînant un modèle de machine learning sur les données historiques.",
      learnings: [
        "Collecter et préparer des données pour l'apprentissage machine",
        "Utiliser scikit-learn ou TensorFlow pour l'entraînement",
        "Appliquer des techniques de régression et séries temporelles"
      ]
    },
    {
      icon: Cloud,
      title: "Défi 3: CL - Cloud Computing",
      domain: "Cloud Computing",
      description: "Déployer l'application et le modèle de machine learning dans le cloud en utilisant des services comme Heroku, AWS, ou Google Cloud.",
      learnings: [
        "Mettre en place des services cloud pour l'hébergement",
        "Déployer des modèles ML sur des plateformes cloud",
        "Comprendre les bases du CI/CD"
      ]
    },
    {
      icon: Cpu,
      title: "Défi 4: IoT - Simulation",
      domain: "Internet des Objets",
      description: "Simuler des capteurs physiques pour enregistrer les événements de lavage sans matériel physique, en créant des données simulées.",
      learnings: [
        "Comprendre le fonctionnement des capteurs IoT",
        "Utiliser Node-RED pour simuler des flux de données",
        "Travailler avec le protocole MQTT"
      ]
    },
    {
      icon: Blocks,
      title: "Défi 5: Blockchain",
      domain: "Blockchain",
      description: "Créer un smart contract sur la blockchain pour enregistrer chaque lavage et mettre en place un système de récompenses sous forme de tokens.",
      learnings: [
        "Comprendre les smart contracts sur Ethereum",
        "Développer des contrats en Solidity",
        "Interagir avec la blockchain via Web3.js"
      ]
    }
  ];
