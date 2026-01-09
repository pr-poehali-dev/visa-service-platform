import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import Icon from '@/components/ui/icon';

const ContentSections = () => {
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

  return (
    <>
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
    </>
  );
};

export default ContentSections;