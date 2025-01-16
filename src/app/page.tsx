"use client"
import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { Brain, Cloud, Database, Cpu, Blocks, Calendar, Trophy, Sparkles, Clock } from 'lucide-react';
import { GitWashLogo } from '@/components/GitWashLogo';
import { InfoCard } from '@/components/InfoCard';
import { ChallengeCard } from '@/components/ChallengeCard';

const GitWashChallenges = () => {
  const [activeTab, setActiveTab] = useState('overview');

  const infoCards = [
    {
      icon: Clock,
      title: "Durée",
      status: "En cours de réflexion",
      description: "La durée exacte du challenge sera annoncée prochainement"
    },
    {
      icon: Trophy,
      title: "Enjeu",
      status: "En cours de réflexion",
      description: "Les récompenses et objectifs seront définis bientôt \n On verra bien..."
    },
    {
      icon: Sparkles,
      title: "Sponsors",
      status: "En cours de recherche",
      description: "Nous recherchons activement des partenaires pour soutenir l'événement"
    },
    {
      icon: Calendar,
      title: "Début",
      status: "En Février",
      description: "Le challenge démarrera en février, restez à l'écoute pour plus de détails"
    }
  ];

  const challenges = [
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

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="text-center mb-12 space-y-4">
        <GitWashLogo />
        <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-blue-800 text-transparent bg-clip-text">
          GitWash Challenge
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Une série de défis ludiques pour explorer différents domaines de l'informatique
          en construisant une application originale de suivi de lavage des mains.
        </p>
      </div>

      <Tabs 
        value={activeTab} 
        onValueChange={setActiveTab} 
        className="mb-8"
      >
        <TabsList className="grid w-full grid-cols-2 mb-8">
          <TabsTrigger 
            value="overview"
            className="data-[state=active]:bg-blue-100 data-[state=active]:text-blue-700"
          >
            Vue d'ensemble
          </TabsTrigger>
          <TabsTrigger 
            value="challenges"
            className="data-[state=active]:bg-blue-100 data-[state=active]:text-blue-700"
          >
            Les défis
          </TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="mt-6">
          <div className="space-y-8">
            <Card className="border-none shadow-lg bg-gradient-to-br from-blue-50 to-white">
              <CardContent className="pt-6">
                <h3 className="text-2xl font-semibold mb-4">À propos du challenge</h3>
                <div className="space-y-4">
                  <p className="text-gray-600">
                    Le GitWash Challenge est né d'une idée originale : créer une application
                    qui enregistre quand les développeurs se lavent les mains, inspiré d'une
                    statistique humoristique sur les habitudes d'hygiène des programmeurs.
                  </p>
                  <p className="text-gray-600">
                    Ce qui a commencé comme une blague s'est transformé en une série de défis
                    techniques couvrant différents domaines de l'informatique moderne :
                    du développement web au machine learning, en passant par l'IoT et la blockchain.
                  </p>
                  <h4 className="font-semibold mt-4">Objectifs :</h4>
                  <ul className="list-disc pl-4 space-y-2">
                    <li className="text-gray-600">Apprendre en s'amusant</li>
                    <li className="text-gray-600">Découvrir différentes technologies modernes</li>
                    <li className="text-gray-600">Construire une application originale étape par étape</li>
                    <li className="text-gray-600">Collaborer et partager ses connaissances</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {infoCards.map((card, idx) => (
                <InfoCard key={idx} {...card} />
              ))}
            </div>
          </div>
        </TabsContent>

        <TabsContent value="challenges" className="mt-6 space-y-6">
          {challenges.map((challenge, idx) => (
            <ChallengeCard key={idx} {...challenge} />
          ))}
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default GitWashChallenges;