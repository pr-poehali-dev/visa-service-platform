import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const HeroSection = () => {
  return (
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
  );
};

export default HeroSection;
