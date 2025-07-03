
'use client';
import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"

const dados = [
  { nervo: "Musculocutâneo", musculos: "Bíceps, Braquial, Coracobraquial", funcao: "Flexão do cotovelo, supinação", sensitivo: "Antebraço lateral" },
  { nervo: "Axilar", musculos: "Deltoide, Redondo menor", funcao: "Abdução do ombro, rotação lateral", sensitivo: "Ombro superolateral" },
  { nervo: "Radial", musculos: "Tríceps, Anconeu, extensores, braquiorradial, supinador", funcao: "Extensão do cotovelo/punho/dedos, supinação", sensitivo: "Dorso do braço, antebraço e mão radial" },
  { nervo: "Mediano", musculos: "Flexores do antebraço, tenar, lumbricais 1 e 2", funcao: "Flexão punho/dedos, oposição do polegar", sensitivo: "Palma radial, dedos 1–3 e metade do 4" },
  { nervo: "Ulnar", musculos: "Flexor ulnar do carpo, FDP medial, intrínsecos da mão", funcao: "Movimentos finos da mão, adução/abdução digital", sensitivo: "Dedo 5 e metade do 4 (palmar/dorsal)" },
  { nervo: "Supraescapular", musculos: "Supraespinal, Infraespinal", funcao: "Abdução inicial, rotação lateral", sensitivo: "-" },
  { nervo: "Subescapular (sup e inf)", musculos: "Subescapular, Redondo maior", funcao: "Rotação medial do ombro", sensitivo: "-" },
  { nervo: "Toracodorsal", musculos: "Latíssimo do dorso", funcao: "Adução e extensão do braço", sensitivo: "-" },
  { nervo: "Torácico longo", musculos: "Serrátil anterior", funcao: "Fixação escapular, abdução acima de 90°", sensitivo: "-" },
  { nervo: "Peitoral lateral", musculos: "Peitoral maior", funcao: "Adução e rotação medial do braço", sensitivo: "-" },
  { nervo: "Peitoral medial", musculos: "Peitoral maior e menor", funcao: "Estabilização escapular, adução", sensitivo: "-" }
];

export default function AppNervos() {
  const [filtro, setFiltro] = useState("")
  const filtrados = dados.filter(item =>
    Object.values(item).some(val =>
      val.toLowerCase().includes(filtro.toLowerCase())
    )
  )

  return (
    <div className="p-4 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">App de Revisão - Nervos do Membro Superior</h1>
      <Input placeholder="Buscar por nervo, músculo, função..." value={filtro} onChange={(e) => setFiltro(e.target.value)} className="mb-6" />
      <Tabs defaultValue="todos">
        <TabsList className="mb-4">
          <TabsTrigger value="todos">Todos</TabsTrigger>
          <TabsTrigger value="sensitivos">Com sensibilidade</TabsTrigger>
          <TabsTrigger value="motores">Somente motores</TabsTrigger>
        </TabsList>
        <TabsContent value="todos">
          <div className="grid md:grid-cols-2 gap-4">
            {filtrados.map((item, i) => (
              <Card key={i}><CardContent className="p-4">
                <h2 className="font-semibold text-lg mb-1">{item.nervo}</h2>
                <p><strong>Músculos:</strong> {item.musculos}</p>
                <p><strong>Função:</strong> {item.funcao}</p>
                <p><strong>Sensitivo:</strong> {item.sensitivo}</p>
              </CardContent></Card>
            ))}
          </div>
        </TabsContent>
        <TabsContent value="sensitivos">
          <div className="grid md:grid-cols-2 gap-4">
            {filtrados.filter(n => n.sensitivo !== "-").map((item, i) => (
              <Card key={i}><CardContent className="p-4">
                <h2 className="font-semibold text-lg mb-1">{item.nervo}</h2>
                <p><strong>Músculos:</strong> {item.musculos}</p>
                <p><strong>Função:</strong> {item.funcao}</p>
                <p><strong>Sensitivo:</strong> {item.sensitivo}</p>
              </CardContent></Card>
            ))}
          </div>
        </TabsContent>
        <TabsContent value="motores">
          <div className="grid md:grid-cols-2 gap-4">
            {filtrados.filter(n => n.sensitivo === "-").map((item, i) => (
              <Card key={i}><CardContent className="p-4">
                <h2 className="font-semibold text-lg mb-1">{item.nervo}</h2>
                <p><strong>Músculos:</strong> {item.musculos}</p>
                <p><strong>Função:</strong> {item.funcao}</p>
                <p><strong>Sensitivo:</strong> {item.sensitivo}</p>
              </CardContent></Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
