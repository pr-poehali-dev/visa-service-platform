import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const VisaCalculator = () => {
  const [selectedCountry, setSelectedCountry] = useState('');
  const [visaType, setVisaType] = useState('tourist');
  const [urgency, setUrgency] = useState('standard');
  const [persons, setPersons] = useState('1');

  const visaPrices: Record<string, {base: number, tourist: number, business: number, work: number}> = {
    'США': { base: 15000, tourist: 15000, business: 18000, work: 22000 },
    'Шенген': { base: 8000, tourist: 8000, business: 10000, work: 15000 },
    'Великобритания': { base: 12000, tourist: 12000, business: 15000, work: 20000 },
    'Канада': { base: 13000, tourist: 13000, business: 16000, work: 21000 },
    'Австралия': { base: 16000, tourist: 16000, business: 19000, work: 24000 },
    'ОАЭ': { base: 5000, tourist: 5000, business: 7000, work: 12000 },
  };

  const calculatePrice = () => {
    if (!selectedCountry) return 0;
    const country = visaPrices[selectedCountry];
    const basePrice = country[visaType as keyof typeof country] as number;
    const urgencyMultiplier = urgency === 'urgent' ? 1.5 : 1;
    const personCount = parseInt(persons) || 1;
    return Math.round(basePrice * urgencyMultiplier * personCount);
  };

  return (
    <section id="calculator" className="py-20 px-4 bg-gradient-to-br from-purple-50 via-blue-50 to-pink-50">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">Калькулятор стоимости</h2>
        <p className="text-center text-muted-foreground mb-12 text-lg">Рассчитайте стоимость оформления визы за 1 минуту</p>
        <Card className="border-2 shadow-2xl">
          <CardHeader className="bg-gradient-to-r from-primary/10 to-accent/10">
            <CardTitle className="text-2xl">Узнайте точную стоимость</CardTitle>
            <CardDescription>Выберите параметры и получите мгновенный расчет</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6 pt-6">
            <div className="space-y-2">
              <Label htmlFor="country" className="text-base font-semibold">Страна назначения</Label>
              <Select value={selectedCountry} onValueChange={setSelectedCountry}>
                <SelectTrigger id="country" className="h-12 text-base">
                  <SelectValue placeholder="Выберите страну" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="США">🇺🇸 США</SelectItem>
                  <SelectItem value="Шенген">🇪🇺 Шенген</SelectItem>
                  <SelectItem value="Великобритания">🇬🇧 Великобритания</SelectItem>
                  <SelectItem value="Канада">🇨🇦 Канада</SelectItem>
                  <SelectItem value="Австралия">🇦🇺 Австралия</SelectItem>
                  <SelectItem value="ОАЭ">🇦🇪 ОАЭ</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-3">
              <Label className="text-base font-semibold">Тип визы</Label>
              <RadioGroup value={visaType} onValueChange={setVisaType}>
                <div className="flex items-center space-x-3 p-3 rounded-lg border hover:bg-accent/5 cursor-pointer">
                  <RadioGroupItem value="tourist" id="tourist" />
                  <Label htmlFor="tourist" className="cursor-pointer flex-1">
                    <div className="flex items-center gap-2">
                      <Icon name="Palmtree" size={20} className="text-primary" />
                      <span className="font-medium">Туристическая</span>
                    </div>
                  </Label>
                </div>
                <div className="flex items-center space-x-3 p-3 rounded-lg border hover:bg-accent/5 cursor-pointer">
                  <RadioGroupItem value="business" id="business" />
                  <Label htmlFor="business" className="cursor-pointer flex-1">
                    <div className="flex items-center gap-2">
                      <Icon name="Briefcase" size={20} className="text-primary" />
                      <span className="font-medium">Бизнес</span>
                    </div>
                  </Label>
                </div>
                <div className="flex items-center space-x-3 p-3 rounded-lg border hover:bg-accent/5 cursor-pointer">
                  <RadioGroupItem value="work" id="work" />
                  <Label htmlFor="work" className="cursor-pointer flex-1">
                    <div className="flex items-center gap-2">
                      <Icon name="Building" size={20} className="text-primary" />
                      <span className="font-medium">Рабочая</span>
                    </div>
                  </Label>
                </div>
              </RadioGroup>
            </div>

            <div className="space-y-3">
              <Label className="text-base font-semibold">Срочность</Label>
              <RadioGroup value={urgency} onValueChange={setUrgency}>
                <div className="flex items-center space-x-3 p-3 rounded-lg border hover:bg-accent/5 cursor-pointer">
                  <RadioGroupItem value="standard" id="standard" />
                  <Label htmlFor="standard" className="cursor-pointer flex-1">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Icon name="Clock" size={20} className="text-primary" />
                        <span className="font-medium">Стандартное оформление</span>
                      </div>
                      <Badge variant="outline">10-21 день</Badge>
                    </div>
                  </Label>
                </div>
                <div className="flex items-center space-x-3 p-3 rounded-lg border hover:bg-accent/5 cursor-pointer">
                  <RadioGroupItem value="urgent" id="urgent" />
                  <Label htmlFor="urgent" className="cursor-pointer flex-1">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Icon name="Zap" size={20} className="text-accent" />
                        <span className="font-medium">Срочное оформление</span>
                      </div>
                      <Badge className="bg-gradient-to-r from-accent to-primary">3-7 дней (+50%)</Badge>
                    </div>
                  </Label>
                </div>
              </RadioGroup>
            </div>

            <div className="space-y-2">
              <Label htmlFor="persons" className="text-base font-semibold">Количество человек</Label>
              <Input 
                id="persons"
                type="number" 
                min="1" 
                max="10" 
                value={persons}
                onChange={(e) => setPersons(e.target.value)}
                className="h-12 text-base"
                placeholder="1"
              />
            </div>

            <div className="bg-gradient-to-br from-primary/10 to-accent/10 p-6 rounded-xl border-2 border-primary/20">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Итоговая стоимость</p>
                  <p className="text-4xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                    {calculatePrice().toLocaleString()} ₽
                  </p>
                  {selectedCountry && (
                    <p className="text-sm text-muted-foreground mt-2">
                      {persons} {parseInt(persons) === 1 ? 'человек' : 'человека'} × {visaType === 'tourist' ? 'Туристическая' : visaType === 'business' ? 'Бизнес' : 'Рабочая'} виза
                    </p>
                  )}
                </div>
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                  <Icon name="Calculator" size={36} className="text-white" />
                </div>
              </div>
            </div>

            <Dialog>
              <DialogTrigger asChild>
                <Button 
                  className="w-full bg-gradient-to-r from-primary to-accent hover:opacity-90 text-lg py-6"
                  disabled={!selectedCountry}
                >
                  <Icon name="Send" size={20} className="mr-2" />
                  Оформить заявку
                </Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Заявка на оформление визы</DialogTitle>
                  <DialogDescription>
                    Оставьте контактные данные, и мы свяжемся с вами в течение 15 минут
                  </DialogDescription>
                </DialogHeader>
                <div className="space-y-4 pt-4">
                  <div>
                    <Label>Ваше имя</Label>
                    <Input placeholder="Иван Иванов" className="mt-2" />
                  </div>
                  <div>
                    <Label>Телефон</Label>
                    <Input placeholder="+7 (999) 123-45-67" className="mt-2" />
                  </div>
                  <div>
                    <Label>Email</Label>
                    <Input type="email" placeholder="email@example.com" className="mt-2" />
                  </div>
                  <div className="bg-accent/10 p-4 rounded-lg">
                    <p className="text-sm font-semibold mb-2">Ваш расчет:</p>
                    <p className="text-sm">{selectedCountry} • {visaType === 'tourist' ? 'Туристическая' : visaType === 'business' ? 'Бизнес' : 'Рабочая'}</p>
                    <p className="text-2xl font-bold text-primary mt-2">{calculatePrice().toLocaleString()} ₽</p>
                  </div>
                  <Button className="w-full bg-gradient-to-r from-primary to-accent">
                    Отправить заявку
                  </Button>
                </div>
              </DialogContent>
            </Dialog>

            <p className="text-center text-sm text-muted-foreground">
              <Icon name="Shield" size={16} className="inline mr-1" />
              Гарантируем конфиденциальность ваших данных
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default VisaCalculator;
