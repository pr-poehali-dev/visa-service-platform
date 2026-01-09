import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { ScrollArea } from '@/components/ui/scroll-area';

const Index = () => {
  const [chatMessages, setChatMessages] = useState<{text: string, sender: 'user' | 'support'}[]>([
    { text: 'Здравствуйте! Чем могу помочь?', sender: 'support' }
  ]);
  const [newMessage, setNewMessage] = useState('');

  const services = [
    { id: 1, country: 'США', price: 'от 15 000 ₽', time: '14-21 день', icon: 'Flag', gradient: 'from-blue-500 to-cyan-400' },
    { id: 2, country: 'Шенген', price: 'от 8 000 ₽', time: '5-10 дней', icon: 'Map', gradient: 'from-purple-500 to-pink-400' },
    { id: 3, country: 'Великобритания', price: 'от 12 000 ₽', time: '10-15 дней', icon: 'Crown', gradient: 'from-red-500 to-orange-400' },
    { id: 4, country: 'Канада', price: 'от 13 000 ₽', time: '14-30 дней', icon: 'MapPin', gradient: 'from-green-500 to-emerald-400' },
    { id: 5, country: 'Австралия', price: 'от 16 000 ₽', time: '14-21 день', icon: 'Palmtree', gradient: 'from-yellow-500 to-amber-400' },
    { id: 6, country: 'ОАЭ', price: 'от 5 000 ₽', time: '3-5 дней', icon: 'Building2', gradient: 'from-indigo-500 to-blue-400' },
  ];

  const stats = [
    { value: '15 000+', label: 'Оформленных виз', icon: 'FileCheck' },
    { value: '98%', label: 'Одобренных заявок', icon: 'TrendingUp' },
    { value: '12 лет', label: 'На рынке', icon: 'Calendar' },
    { value: '50+', label: 'Стран', icon: 'Globe' },
  ];

  const process = [
    { step: 1, title: 'Консультация', desc: 'Бесплатная консультация по подбору визы и требованиям', icon: 'MessageCircle' },
    { step: 2, title: 'Документы', desc: 'Помогаем собрать и оформить необходимые документы', icon: 'FileText' },
    { step: 3, title: 'Подача', desc: 'Подаем документы в консульство или визовый центр', icon: 'Send' },
    { step: 4, title: 'Получение', desc: 'Получаете готовую визу в указанные сроки', icon: 'CheckCircle' },
  ];

  const testimonials = [
    { name: 'Анна Смирнова', text: 'Быстро оформили визу в США! Все прошло гладко, спасибо команде за профессионализм.', rating: 5, avatar: 'АС' },
    { name: 'Дмитрий Козлов', text: 'Отличный сервис! Помогли со всеми документами для шенгенской визы. Рекомендую!', rating: 5, avatar: 'ДК' },
    { name: 'Елена Волкова', text: 'Оперативно и качественно. Получили визы всей семьей в Канаду за 3 недели.', rating: 5, avatar: 'ЕВ' },
  ];

  const portfolio = [
    { country: 'США', count: 3500, flag: '🇺🇸' },
    { country: 'Шенген', count: 5200, flag: '🇪🇺' },
    { country: 'Великобритания', count: 1800, flag: '🇬🇧' },
    { country: 'Канада', count: 2100, flag: '🇨🇦' },
  ];

  const handleSendMessage = () => {
    if (!newMessage.trim()) return;
    setChatMessages([...chatMessages, { text: newMessage, sender: 'user' }]);
    setNewMessage('');
    setTimeout(() => {
      setChatMessages(prev => [...prev, { 
        text: 'Спасибо за ваше сообщение! Специалист свяжется с вами в ближайшее время.', 
        sender: 'support' 
      }]);
    }, 1000);
  };

  return (
    <div className="min-h-screen">
      <header className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b">
        <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            VisaExpert
          </div>
          <div className="hidden md:flex gap-6">
            <a href="#services" className="hover:text-primary transition-colors">Услуги</a>
            <a href="#about" className="hover:text-primary transition-colors">О нас</a>
            <a href="#portfolio" className="hover:text-primary transition-colors">Портфолио</a>
            <a href="#process" className="hover:text-primary transition-colors">Процесс</a>
            <a href="#testimonials" className="hover:text-primary transition-colors">Отзывы</a>
            <a href="#contacts" className="hover:text-primary transition-colors">Контакты</a>
          </div>
          <Sheet>
            <SheetTrigger asChild>
              <Button className="bg-gradient-to-r from-primary to-accent hover:opacity-90">
                <Icon name="MessageCircle" size={18} className="mr-2" />
                Онлайн-консультация
              </Button>
            </SheetTrigger>
            <SheetContent className="w-[400px] sm:w-[540px]">
              <SheetHeader>
                <SheetTitle>Онлайн-консультация</SheetTitle>
                <SheetDescription>
                  Задайте вопрос нашему специалисту
                </SheetDescription>
              </SheetHeader>
              <div className="flex flex-col h-[calc(100vh-200px)] mt-6">
                <ScrollArea className="flex-1 pr-4">
                  <div className="space-y-4">
                    {chatMessages.map((msg, idx) => (
                      <div key={idx} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                        <div className={`max-w-[80%] p-3 rounded-2xl ${
                          msg.sender === 'user' 
                            ? 'bg-gradient-to-r from-primary to-accent text-white' 
                            : 'bg-muted'
                        }`}>
                          {msg.text}
                        </div>
                      </div>
                    ))}
                  </div>
                </ScrollArea>
                <div className="flex gap-2 mt-4">
                  <Input 
                    placeholder="Введите сообщение..." 
                    value={newMessage}
                    onChange={(e) => setNewMessage(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                  />
                  <Button onClick={handleSendMessage} size="icon" className="bg-gradient-to-r from-primary to-accent">
                    <Icon name="Send" size={18} />
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </nav>
      </header>

      <section className="pt-32 pb-20 px-4 bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50 animate-gradient-shift bg-[length:200%_200%]">
        <div className="container mx-auto text-center">
          <Badge className="mb-6 text-lg px-6 py-2 bg-gradient-to-r from-primary to-accent animate-scale-in">
            🌍 Оформление виз по всему миру
          </Badge>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
            Визы без хлопот
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto animate-fade-in">
            Помогаем оформить визы, страховки и туры в любую точку мира. Быстро, надежно, профессионально.
          </p>
          <div className="flex flex-wrap gap-4 justify-center animate-fade-in">
            <Button size="lg" className="bg-gradient-to-r from-primary to-accent hover:opacity-90 text-lg px-8">
              <Icon name="Phone" size={20} className="mr-2" />
              Заказать консультацию
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8">
              <Icon name="FileText" size={20} className="mr-2" />
              Узнать подробнее
            </Button>
          </div>
        </div>
      </section>

      <section id="services" className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">Наши услуги</h2>
          <p className="text-center text-muted-foreground mb-12 text-lg">Оформляем визы в более 50 стран мира</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <Card key={service.id} className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2 overflow-hidden">
                <div className={`h-2 bg-gradient-to-r ${service.gradient}`} />
                <CardHeader>
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                    <Icon name={service.icon as any} size={32} className="text-white" />
                  </div>
                  <CardTitle className="text-2xl">{service.country}</CardTitle>
                  <CardDescription className="text-lg">Виза от {service.price}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Icon name="Clock" size={18} />
                    <span>Срок: {service.time}</span>
                  </div>
                  <Button className="w-full mt-4 bg-gradient-to-r from-primary to-accent hover:opacity-90">
                    Оформить визу
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="py-20 px-4 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">Почему выбирают нас</h2>
          <p className="text-center text-muted-foreground mb-12 text-lg">Надежный партнер в оформлении виз</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, idx) => (
              <Card key={idx} className="text-center hover:shadow-xl transition-shadow border-2">
                <CardHeader>
                  <div className="w-20 h-20 mx-auto rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center mb-4">
                    <Icon name={stat.icon as any} size={36} className="text-white" />
                  </div>
                  <CardTitle className="text-4xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                    {stat.value}
                  </CardTitle>
                  <CardDescription className="text-base">{stat.label}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="portfolio" className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">Наше портфолио</h2>
          <p className="text-center text-muted-foreground mb-12 text-lg">Успешно оформленные визы</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {portfolio.map((item, idx) => (
              <Card key={idx} className="hover:shadow-xl transition-shadow">
                <CardHeader>
                  <div className="text-6xl mb-4 text-center">{item.flag}</div>
                  <CardTitle className="text-center">{item.country}</CardTitle>
                  <CardDescription className="text-center text-2xl font-bold text-primary">
                    {item.count.toLocaleString()}+
                  </CardDescription>
                  <p className="text-center text-sm text-muted-foreground">оформленных виз</p>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="process" className="py-20 px-4 bg-gradient-to-br from-pink-50 to-blue-50">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">Процесс работы</h2>
          <p className="text-center text-muted-foreground mb-12 text-lg">Простые шаги к вашей визе</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((step) => (
              <div key={step.step} className="relative">
                <Card className="hover:shadow-xl transition-all hover:-translate-y-2">
                  <CardHeader>
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white text-2xl font-bold mb-4">
                      {step.step}
                    </div>
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-secondary to-accent flex items-center justify-center mb-4">
                      <Icon name={step.icon as any} size={24} className="text-white" />
                    </div>
                    <CardTitle>{step.title}</CardTitle>
                    <CardDescription>{step.desc}</CardDescription>
                  </CardHeader>
                </Card>
                {step.step < 4 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-1 bg-gradient-to-r from-primary to-accent" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="testimonials" className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">Отзывы клиентов</h2>
          <p className="text-center text-muted-foreground mb-12 text-lg">Что говорят о нас наши клиенты</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((review, idx) => (
              <Card key={idx} className="hover:shadow-xl transition-shadow">
                <CardHeader>
                  <div className="flex items-center gap-4 mb-4">
                    <Avatar className="w-16 h-16 border-4 border-primary">
                      <AvatarFallback className="bg-gradient-to-br from-primary to-accent text-white text-lg">
                        {review.avatar}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <CardTitle className="text-lg">{review.name}</CardTitle>
                      <div className="flex gap-1 mt-1">
                        {[...Array(review.rating)].map((_, i) => (
                          <Icon key={i} name="Star" size={16} className="fill-yellow-400 text-yellow-400" />
                        ))}
                      </div>
                    </div>
                  </div>
                  <CardDescription className="text-base leading-relaxed">"{review.text}"</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="contacts" className="py-20 px-4 bg-gradient-to-br from-purple-50 to-pink-50">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">Свяжитесь с нами</h2>
          <p className="text-center text-muted-foreground mb-12 text-lg">Оставьте заявку и мы свяжемся с вами</p>
          <Card className="border-2">
            <CardHeader>
              <CardTitle>Форма обратной связи</CardTitle>
              <CardDescription>Заполните форму и мы перезвоним вам в течение 15 минут</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium mb-2 block">Ваше имя</label>
                  <Input placeholder="Иван Иванов" />
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">Телефон</label>
                  <Input placeholder="+7 (999) 123-45-67" />
                </div>
              </div>
              <div>
                <label className="text-sm font-medium mb-2 block">Email</label>
                <Input type="email" placeholder="email@example.com" />
              </div>
              <div>
                <label className="text-sm font-medium mb-2 block">Сообщение</label>
                <Textarea placeholder="Расскажите, какая виза вам нужна..." rows={5} />
              </div>
              <Button className="w-full bg-gradient-to-r from-primary to-accent hover:opacity-90 text-lg py-6">
                <Icon name="Send" size={20} className="mr-2" />
                Отправить заявку
              </Button>
            </CardContent>
          </Card>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            <Card className="text-center hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 mx-auto rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center mb-4">
                  <Icon name="Phone" size={28} className="text-white" />
                </div>
                <CardTitle className="text-lg">Телефон</CardTitle>
                <CardDescription>+7 (495) 123-45-67</CardDescription>
              </CardHeader>
            </Card>
            <Card className="text-center hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 mx-auto rounded-full bg-gradient-to-br from-secondary to-accent flex items-center justify-center mb-4">
                  <Icon name="Mail" size={28} className="text-white" />
                </div>
                <CardTitle className="text-lg">Email</CardTitle>
                <CardDescription>info@visaexpert.ru</CardDescription>
              </CardHeader>
            </Card>
            <Card className="text-center hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 mx-auto rounded-full bg-gradient-to-br from-accent to-primary flex items-center justify-center mb-4">
                  <Icon name="MapPin" size={28} className="text-white" />
                </div>
                <CardTitle className="text-lg">Адрес</CardTitle>
                <CardDescription>Москва, ул. Тверская, д. 1</CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      <footer className="bg-gradient-to-r from-primary via-accent to-secondary text-white py-12 px-4">
        <div className="container mx-auto text-center">
          <div className="text-3xl font-bold mb-4">VisaExpert</div>
          <p className="mb-6">Ваш надежный партнер в оформлении виз</p>
          <div className="flex justify-center gap-4 mb-6">
            <Button variant="outline" size="icon" className="rounded-full bg-white/10 border-white/20 hover:bg-white/20">
              <Icon name="Phone" size={20} />
            </Button>
            <Button variant="outline" size="icon" className="rounded-full bg-white/10 border-white/20 hover:bg-white/20">
              <Icon name="Mail" size={20} />
            </Button>
            <Button variant="outline" size="icon" className="rounded-full bg-white/10 border-white/20 hover:bg-white/20">
              <Icon name="MessageCircle" size={20} />
            </Button>
          </div>
          <p className="text-white/70 text-sm">© 2024 VisaExpert. Все права защищены.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
