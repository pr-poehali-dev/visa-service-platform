import { useState } from 'react';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Input } from '@/components/ui/input';

const Header = () => {
  const [chatMessages, setChatMessages] = useState<{text: string, sender: 'user' | 'support'}[]>([
    { text: 'Здравствуйте! Чем могу помочь?', sender: 'support' }
  ]);
  const [newMessage, setNewMessage] = useState('');

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
    <header className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b">
      <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
          VisaExpert
        </div>
        <div className="hidden md:flex gap-6">
          <a href="#services" className="hover:text-primary transition-colors">Услуги</a>
          <a href="#calculator" className="hover:text-primary transition-colors">Калькулятор</a>
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
  );
};

export default Header;
