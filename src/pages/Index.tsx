import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

function Index() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Заявка отправлена:', formData);
    alert('Спасибо! Ваша заявка отправлена. Мы свяжемся с вами в ближайшее время.');
    setFormData({ name: '', phone: '', email: '', message: '' });
  };

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Навигация */}
      <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-md z-50 border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-bold gradient-text">
              НейроФото
            </div>
            <div className="hidden md:flex items-center space-x-6">
              {['Главная', 'Преимущества', 'Портфолио', 'Отзывы', 'Цены', 'Контакты'].map((item, index) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(['hero', 'advantages', 'portfolio', 'reviews', 'pricing', 'contacts'][index])}
                  className="text-foreground hover:text-primary transition-colors font-medium"
                >
                  {item}
                </button>
              ))}
              <Button onClick={() => scrollToSection('order')} className="hover-scale">
                Записаться
              </Button>
            </div>
            <button className="md:hidden">
              <Icon name="Menu" size={24} />
            </button>
          </div>
        </div>
      </nav>

      {/* Главная секция */}
      <section id="hero" className="section-padding pt-32 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                Создаем портреты будущего с 
                <span className="gradient-text"> нейрофотографией</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Уникальные портреты, созданные с помощью ИИ. Профессиональная съемка 
                с креативной обработкой, которая подчеркнет вашу индивидуальность.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg" 
                  className="hover-scale text-lg px-8 py-6"
                  onClick={() => scrollToSection('order')}
                >
                  <Icon name="Camera" className="mr-2" size={20} />
                  Записаться на съемку
                </Button>
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="hover-scale text-lg px-8 py-6"
                  onClick={() => scrollToSection('portfolio')}
                >
                  <Icon name="Image" className="mr-2" size={20} />
                  Посмотреть портфолио
                </Button>
              </div>
            </div>
            <div className="animate-scale-in">
              <img 
                src="/img/44819ea1-7555-4a47-81d2-f1ea12d71659.jpg" 
                alt="Студия нейрофотографии" 
                className="w-full h-auto rounded-2xl shadow-2xl hover-scale"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Преимущества */}
      <section id="advantages" className="section-padding">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Почему выбирают <span className="gradient-text">НейроФото</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Мы создаем уникальные портреты, которые невозможно повторить
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: 'Sparkles',
                title: 'ИИ-технологии',
                description: 'Используем новейшие нейросети для создания уникальных портретов'
              },
              {
                icon: 'Camera',
                title: 'Профессиональная съемка',
                description: 'Опытные фотографы с премиальным оборудованием'
              },
              {
                icon: 'Palette',
                title: 'Креативная обработка',
                description: 'Каждый портрет - произведение искусства с авторским стилем'
              },
              {
                icon: 'Heart',
                title: 'Индивидуальный подход',
                description: 'Учитываем ваши пожелания и создаем уникальный образ'
              },
              {
                icon: 'Zap',
                title: 'Быстрый результат',
                description: 'Готовые портреты через 2-3 дня после съемки'
              },
              {
                icon: 'Award',
                title: 'Гарантия качества',
                description: 'Переснимаем бесплатно, если результат вас не устроит'
              }
            ].map((advantage, index) => (
              <Card key={index} className="hover-scale h-full animate-fade-in border-2 hover:border-primary/20 transition-all duration-300">
                <CardHeader className="text-center pb-4">
                  <div className="w-16 h-16 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon name={advantage.icon as any} size={32} className="text-white" />
                  </div>
                  <CardTitle className="text-xl">{advantage.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-center leading-relaxed">
                    {advantage.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Портфолио */}
      <section id="portfolio" className="section-padding bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Наши <span className="gradient-text">работы</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Портреты, которые покорили сердца наших клиентов
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Бизнес-портреты',
                description: 'Элегантные корпоративные снимки в стиле sci-fi',
                category: 'Бизнес',
                result: '50+ кадров'
              },
              {
                title: 'Креативные портреты',
                description: 'Художественные образы с фантастическими элементами',
                category: 'Арт',
                result: '30+ вариантов'
              },
              {
                title: 'Семейная съемка',
                description: 'Волшебные семейные портреты в сказочном стиле',
                category: 'Семья',
                result: '40+ фото'
              },
              {
                title: 'Fashion-портреты',
                description: 'Модные образы с футуристическими деталями',
                category: 'Мода',
                result: '60+ снимков'
              },
              {
                title: 'Детские портреты',
                description: 'Сказочные образы для самых маленьких',
                category: 'Дети',
                result: '25+ кадров'
              },
              {
                title: 'Свадебная съемка',
                description: 'Романтические портреты молодоженов',
                category: 'Свадьба',
                result: '100+ фото'
              }
            ].map((project, index) => (
              <Card key={index} className="group hover-scale overflow-hidden animate-fade-in border-2 hover:border-primary/20 transition-all duration-300">
                <div className="aspect-video bg-gradient-to-br from-primary/10 to-secondary/10 relative">
                  <img 
                    src="/img/18da991f-640b-4335-9127-e6f774119e96.jpg" 
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge variant="secondary" className="bg-white/90 text-primary">
                      {project.category}
                    </Badge>
                  </div>
                  <div className="absolute bottom-4 right-4">
                    <Badge className="bg-primary text-white font-semibold">
                      {project.result}
                    </Badge>
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="text-lg">{project.title}</CardTitle>
                  <CardDescription className="text-base">
                    {project.description}
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Отзывы */}
      <section id="reviews" className="section-padding">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Отзывы <span className="gradient-text">клиентов</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Что говорят те, кто уже получил свои нейропортреты
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: 'Анна Петрова',
                position: 'Модель',
                rating: 5,
                text: 'Невероятные портреты! Такого результата я не ожидала. Каждый кадр - как из фантастического фильма!'
              },
              {
                name: 'Михаил Громов',
                position: 'Предприниматель',
                rating: 5,
                text: 'Сделал корпоративные фото для LinkedIn. Коллеги в восторге! Выглядит стильно и современно.'
              },
              {
                name: 'Елена Смирнова',
                position: 'Художница',
                rating: 5,
                text: 'Это не просто фотография - это искусство! Команда НейроФото превзошла все мои ожидания.'
              }
            ].map((review, index) => (
              <Card key={index} className="hover-scale animate-fade-in border-2 hover:border-primary/20 transition-all duration-300">
                <CardHeader>
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <CardTitle className="text-lg">{review.name}</CardTitle>
                      <CardDescription>{review.position}</CardDescription>
                    </div>
                    <div className="flex">
                      {[...Array(review.rating)].map((_, i) => (
                        <Icon key={i} name="Star" size={20} className="text-yellow-500 fill-current" />
                      ))}
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed italic">
                    "{review.text}"
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Цены */}
      <section id="pricing" className="section-padding bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Тарифы и <span className="gradient-text">цены</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Выберите подходящий пакет для вашей нейрофотосессии
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Базовый',
                price: '15 000',
                period: 'за съемку',
                features: [
                  '1 час съемки в студии',
                  '15 обработанных нейропортретов',
                  '3 стиля на выбор',
                  'Готовые фото через 3 дня',
                  'Файлы в высоком разрешении'
                ],
                popular: false
              },
              {
                title: 'Премиум',
                price: '25 000',
                period: 'за съемку',
                features: [
                  '2 часа съемки + консультация',
                  '30 обработанных нейропортретов',
                  '5 уникальных стилей',
                  'Готовые фото через 2 дня',
                  'Печатные версии в подарок',
                  'Дополнительные образы'
                ],
                popular: true
              },
              {
                title: 'VIP',
                price: '45 000',
                period: 'за съемку',
                features: [
                  '4 часа съемки + стилист',
                  '50+ обработанных портретов',
                  'Безлимитные стили',
                  'Экспресс-доставка за 24 часа',
                  'Эксклюзивная фотокнига',
                  'Персональный куратор'
                ],
                popular: false
              }
            ].map((plan, index) => (
              <Card key={index} className={`hover-scale animate-fade-in relative overflow-hidden border-2 transition-all duration-300 ${
                plan.popular 
                  ? 'border-primary scale-105 bg-gradient-to-b from-primary/5 to-secondary/5' 
                  : 'hover:border-primary/20'
              }`}>
                {plan.popular && (
                  <div className="absolute top-0 left-0 right-0 bg-gradient-to-r from-primary to-secondary text-white text-center py-2 text-sm font-semibold">
                    Популярный выбор
                  </div>
                )}
                <CardHeader className={plan.popular ? 'pt-12' : ''}>
                  <CardTitle className="text-2xl text-center">{plan.title}</CardTitle>
                  <div className="text-center">
                    <span className="text-4xl font-bold gradient-text">{plan.price}</span>
                    <span className="text-muted-foreground ml-2">{plan.period}</span>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <ul className="space-y-3">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center gap-3">
                        <Icon name="Check" size={16} className="text-primary flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button 
                    className="w-full mt-6 hover-scale" 
                    variant={plan.popular ? 'default' : 'outline'}
                    onClick={() => scrollToSection('order')}
                  >
                    Выбрать пакет
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Контакты */}
      <section id="contacts" className="section-padding">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Свяжитесь с <span className="gradient-text">нами</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Готовы создать ваш уникальный нейропортрет?
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="animate-fade-in">
              <img 
                src="/img/647e57a9-2597-4f4e-9716-d236e8fd1f54.jpg" 
                alt="Фотограф за работой" 
                className="w-full h-auto rounded-2xl shadow-2xl hover-scale"
              />
            </div>
            <div className="space-y-8 animate-fade-in">
              <div className="grid gap-6">
                {[
                  {
                    icon: 'Phone',
                    title: 'Телефон',
                    content: '+7 (495) 123-45-67',
                    href: 'tel:+74951234567'
                  },
                  {
                    icon: 'Mail',
                    title: 'Email',
                    content: 'hello@neirofoto.ru',
                    href: 'mailto:hello@neirofoto.ru'
                  },
                  {
                    icon: 'MapPin',
                    title: 'Студия',
                    content: 'Москва, ул. Арбат, 25',
                    href: '#'
                  },
                  {
                    icon: 'Clock',
                    title: 'Режим работы',
                    content: 'Ежедневно: 10:00-22:00',
                    href: '#'
                  }
                ].map((contact, index) => (
                  <div key={index} className="flex items-center gap-4 p-4 rounded-lg hover:bg-muted/50 transition-colors">
                    <div className="w-12 h-12 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center">
                      <Icon name={contact.icon as any} size={20} className="text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold">{contact.title}</h3>
                      <a href={contact.href} className="text-muted-foreground hover:text-primary transition-colors">
                        {contact.content}
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Форма заказа */}
      <section id="order" className="section-padding bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-12 animate-fade-in">
              <h2 className="text-3xl md:text-5xl font-bold mb-6">
                Записаться на <span className="gradient-text">съемку</span>
              </h2>
              <p className="text-xl text-muted-foreground">
                Заполните форму и мы свяжемся с вами для уточнения деталей
              </p>
            </div>

            <Card className="animate-scale-in shadow-2xl border-2">
              <CardHeader>
                <CardTitle className="text-2xl text-center">Бронирование нейрофотосессии</CardTitle>
                <CardDescription className="text-center text-lg">
                  Расскажите о желаемом стиле и мы подготовим персональное предложение
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-base font-semibold">
                        Имя *
                      </Label>
                      <Input
                        id="name"
                        type="text"
                        placeholder="Ваше имя"
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                        required
                        className="h-12 text-base"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone" className="text-base font-semibold">
                        Телефон *
                      </Label>
                      <Input
                        id="phone"
                        type="tel"
                        placeholder="+7 (___) ___-__-__"
                        value={formData.phone}
                        onChange={(e) => setFormData({...formData, phone: e.target.value})}
                        required
                        className="h-12 text-base"
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-base font-semibold">
                      Email *
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="your@email.com"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      required
                      className="h-12 text-base"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-base font-semibold">
                      Пожелания к съемке
                    </Label>
                    <Textarea
                      id="message"
                      placeholder="Опишите желаемый стиль, образ или особые пожелания к фотосессии..."
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                      rows={4}
                      className="text-base"
                    />
                  </div>
                  
                  <Button 
                    type="submit" 
                    size="lg" 
                    className="w-full text-lg py-6 hover-scale"
                  >
                    <Icon name="Calendar" className="mr-2" size={20} />
                    Записаться на съемку
                  </Button>
                  
                  <p className="text-sm text-muted-foreground text-center">
                    Нажимая кнопку, вы соглашаетесь с обработкой персональных данных
                  </p>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Футер */}
      <footer className="bg-foreground text-background py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="text-2xl font-bold mb-4 text-primary">НейроФото</div>
              <p className="text-background/80 mb-4">
                Создаем уникальные портреты с помощью нейрофотографии и современных технологий
              </p>
              <div className="flex space-x-4">
                {['Phone', 'Mail', 'Instagram'].map((icon, index) => (
                  <div key={index} className="w-10 h-10 bg-primary rounded-full flex items-center justify-center hover-scale cursor-pointer">
                    <Icon name={icon as any} size={20} className="text-white" />
                  </div>
                ))}
              </div>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Услуги</h3>
              <ul className="space-y-2 text-background/80">
                <li>Бизнес-портреты</li>
                <li>Креативная съемка</li>
                <li>Семейные фото</li>
                <li>Fashion-портреты</li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Информация</h3>
              <ul className="space-y-2 text-background/80">
                <li>О нас</li>
                <li>Портфолио</li>
                <li>Отзывы</li>
                <li>Блог</li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Контакты</h3>
              <ul className="space-y-2 text-background/80">
                <li>+7 (495) 123-45-67</li>
                <li>hello@neirofoto.ru</li>
                <li>Москва, ул. Арбат, 25</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-background/20 mt-8 pt-8 text-center text-background/60">
            <p>&copy; 2024 НейроФото. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Index;