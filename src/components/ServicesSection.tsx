import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const ServicesSection = () => {
  const services = [
    { id: 1, country: 'США', price: 'от 15 000 ₽', time: '14-21 день', icon: 'Flag', gradient: 'from-blue-500 to-cyan-400' },
    { id: 2, country: 'Шенген', price: 'от 8 000 ₽', time: '5-10 дней', icon: 'Map', gradient: 'from-purple-500 to-pink-400' },
    { id: 3, country: 'Великобритания', price: 'от 12 000 ₽', time: '10-15 дней', icon: 'Crown', gradient: 'from-red-500 to-orange-400' },
    { id: 4, country: 'Канада', price: 'от 13 000 ₽', time: '14-30 дней', icon: 'MapPin', gradient: 'from-green-500 to-emerald-400' },
    { id: 5, country: 'Австралия', price: 'от 16 000 ₽', time: '14-21 день', icon: 'Palmtree', gradient: 'from-yellow-500 to-amber-400' },
    { id: 6, country: 'ОАЭ', price: 'от 5 000 ₽', time: '3-5 дней', icon: 'Building2', gradient: 'from-indigo-500 to-blue-400' },
  ];

  return (
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
  );
};

export default ServicesSection;
