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
              БизнесПро
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
                Заказать
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
                Продвигаем ваш бизнес на 
                <span className="gradient-text"> новый уровень</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Комплексные решения для роста вашего бизнеса. Профессиональная команда, 
                проверенные методы, гарантированный результат.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg" 
                  className="hover-scale text-lg px-8 py-6"
                  onClick={() => scrollToSection('order')}
                >
                  <Icon name="Rocket" className="mr-2" size={20} />
                  Начать проект
                </Button>
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="hover-scale text-lg px-8 py-6"
                  onClick={() => scrollToSection('portfolio')}
                >
                  <Icon name="Eye" className="mr-2" size={20} />
                  Посмотреть работы
                </Button>
              </div>
            </div>
            <div className="animate-scale-in">
              <img 
                src="/img/fb939ce1-b67a-468a-b85f-4a90230c575b.jpg" 
                alt="Современный бизнес" 
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
              Почему выбирают <span className="gradient-text">нас</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Мы предлагаем уникальные решения, которые действительно работают
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: 'Target',
                title: 'Точное попадание',
                description: 'Анализируем вашу нишу и находим самые эффективные решения'
              },
              {
                icon: 'Users',
                title: 'Команда экспертов',
                description: 'Профессионалы с опытом работы более 5 лет в digital-сфере'
              },
              {
                icon: 'TrendingUp',
                title: 'Рост результатов',
                description: 'Гарантируем увеличение конверсии на 40% в первые 3 месяца'
              },
              {
                icon: 'Shield',
                title: 'Полная гарантия',
                description: 'Возвращаем деньги, если не достигнем заявленных показателей'
              },
              {
                icon: 'Clock',
                title: '24/7 поддержка',
                description: 'Всегда на связи для решения любых вопросов и задач'
              },
              {
                icon: 'Award',
                title: 'Лучшие практики',
                description: 'Используем только проверенные инструменты и методологии'
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
              Примеры успешных проектов, которые приносят реальную прибыль
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Интернет-магазин электроники',
                description: 'Увеличили продажи на 180% за 6 месяцев',
                category: 'E-commerce',
                result: '+180% продаж'
              },
              {
                title: 'Медицинская клиника',
                description: 'Привлекли 500+ новых пациентов',
                category: 'Медицина',
                result: '+500 клиентов'
              },
              {
                title: 'Курсы программирования',
                description: 'Запустили онлайн-обучение с нуля',
                category: 'Образование',
                result: '1000+ студентов'
              },
              {
                title: 'Ресторанная сеть',
                description: 'Автоматизировали процесс заказов',
                category: 'HoReCa',
                result: '-30% затрат'
              },
              {
                title: 'Фитнес-клуб',
                description: 'Создали мобильное приложение',
                category: 'Спорт',
                result: '+90% удержания'
              },
              {
                title: 'Строительная компания',
                description: 'Полностью переработали сайт',
                category: 'Строительство',
                result: '+250% лидов'
              }
            ].map((project, index) => (
              <Card key={index} className="group hover-scale overflow-hidden animate-fade-in border-2 hover:border-primary/20 transition-all duration-300">
                <div className="aspect-video bg-gradient-to-br from-primary/10 to-secondary/10 relative">
                  <img 
                    src="/img/652c1438-40c1-4cdb-b33e-3a8a747e7712.jpg" 
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
              Что говорят о нас те, кто уже достиг успеха
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: 'Анна Петрова',
                position: 'CEO, TechStart',
                rating: 5,
                text: 'Благодаря команде БизнесПро наша выручка выросла в 3 раза! Профессиональный подход и отличные результаты.'
              },
              {
                name: 'Михаил Иванов',
                position: 'Директор, МедЦентр',
                rating: 5,
                text: 'Создали нам современный сайт и настроили рекламу. Поток пациентов увеличился на 200%!'
              },
              {
                name: 'Елена Сидорова',
                position: 'Основатель, EduPlatform',
                rating: 5,
                text: 'Запустили нашу образовательную платформу с нуля. Сейчас у нас более 1000 активных студентов.'
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
              Выберите оптимальный пакет для вашего бизнеса
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Стартовый',
                price: '50 000',
                period: 'за проект',
                features: [
                  'Анализ ниши и конкурентов',
                  'Создание сайта-визитки',
                  'Базовая SEO-оптимизация',
                  'Настройка аналитики',
                  '1 месяц поддержки'
                ],
                popular: false
              },
              {
                title: 'Бизнес',
                price: '120 000',
                period: 'за проект',
                features: [
                  'Полноценный интернет-магазин',
                  'Интеграция с CRM и 1С',
                  'Настройка рекламы в Яндекс и Google',
                  'SMM-продвижение',
                  '3 месяца поддержки',
                  'Обучение команды'
                ],
                popular: true
              },
              {
                title: 'Премиум',
                price: '250 000',
                period: 'за проект',
                features: [
                  'Комплексная цифровая экосистема',
                  'Мобильное приложение',
                  'Автоматизация бизнес-процессов',
                  'Персональный менеджер',
                  '6 месяцев поддержки',
                  'Консалтинг по развитию'
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
                    Выбрать тариф
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
              Готовы обсудить ваш проект и ответить на все вопросы
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="animate-fade-in">
              <img 
                src="/img/b1a29af5-8c7d-47f3-85ab-d74f45e4d20e.jpg" 
                alt="Команда БизнесПро" 
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
                    content: 'hello@biznespro.ru',
                    href: 'mailto:hello@biznespro.ru'
                  },
                  {
                    icon: 'MapPin',
                    title: 'Адрес',
                    content: 'Москва, ул. Тверская, 15',
                    href: '#'
                  },
                  {
                    icon: 'Clock',
                    title: 'Режим работы',
                    content: 'Пн-Пт: 9:00-20:00, Сб-Вс: 10:00-18:00',
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
                Оформить <span className="gradient-text">заказ</span>
              </h2>
              <p className="text-xl text-muted-foreground">
                Заполните форму и мы свяжемся с вами в течение часа
              </p>
            </div>

            <Card className="animate-scale-in shadow-2xl border-2">
              <CardHeader>
                <CardTitle className="text-2xl text-center">Бесплатная консультация</CardTitle>
                <CardDescription className="text-center text-lg">
                  Расскажите о вашем проекте и получите персональное предложение
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
                      Сообщение
                    </Label>
                    <Textarea
                      id="message"
                      placeholder="Расскажите о вашем проекте, целях и пожеланиях..."
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
                    <Icon name="Send" className="mr-2" size={20} />
                    Отправить заявку
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
              <div className="text-2xl font-bold mb-4 text-primary">БизнесПро</div>
              <p className="text-background/80 mb-4">
                Продвигаем ваш бизнес с помощью современных цифровых решений
              </p>
              <div className="flex space-x-4">
                {['Phone', 'Mail', 'MessageCircle'].map((icon, index) => (
                  <div key={index} className="w-10 h-10 bg-primary rounded-full flex items-center justify-center hover-scale cursor-pointer">
                    <Icon name={icon as any} size={20} className="text-white" />
                  </div>
                ))}
              </div>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Услуги</h3>
              <ul className="space-y-2 text-background/80">
                <li>Разработка сайтов</li>
                <li>Интернет-маркетинг</li>
                <li>SEO-продвижение</li>
                <li>Контекстная реклама</li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Компания</h3>
              <ul className="space-y-2 text-background/80">
                <li>О нас</li>
                <li>Наша команда</li>
                <li>Карьера</li>
                <li>Блог</li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Контакты</h3>
              <ul className="space-y-2 text-background/80">
                <li>+7 (495) 123-45-67</li>
                <li>hello@biznespro.ru</li>
                <li>Москва, ул. Тверская, 15</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-background/20 mt-8 pt-8 text-center text-background/60">
            <p>&copy; 2024 БизнесПро. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Index;