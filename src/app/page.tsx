"use client"
import React, { useEffect, useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { GitWashLogo } from '@/components/GitWashLogo';
import { InfoCard } from '@/components/InfoCard';
import { ChallengeCard } from '@/components/ChallengeCard';
import { challenges } from '@/data/challenges';
import { infoCards } from '@/data/info-cards';

const GitWashChallenges = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [applications, setApplications] = useState([]);

  useEffect(() => {
    const fetchApplications = async () => {
      const response = await fetch('/api/applications');
      const data = await response.json();
      setApplications(data);
    };

    fetchApplications();
  }, []);
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
        <TabsList className="grid w-full grid-cols-3 mb-8">
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
          <TabsTrigger
            value="more"
            className="data-[state=active]:bg-blue-100 data-[state=active]:text-blue-700"
          >
            Ateliers
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

        <TabsContent value="more" className="mt-6 space-y-6">
          <div className="space-y-4">
            {applications.length == 0 ? <>Pourquoi ne pas rajouter des ateliers pratiques et des miniconferences... ?</> :
            applications.map((app: any) => (
              <Card key={app.id} className="border shadow-sm">
                <CardHeader>
                  <CardTitle className="text-xl font-bold">{app.name}</CardTitle>
                  <CardDescription>Domaine: {app.domain}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p>
                    <span className="font-semibold">Thème:</span> {app.workshop}
                  </p>
                  <p>
                    <span className="font-semibold">Description:</span> {app.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default GitWashChallenges;