import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import { useState } from "react";

const Index = () => {
  const [hoveredService, setHoveredService] = useState<number | null>(null);
  const [hoveredCase, setHoveredCase] = useState<number | null>(null);

  const services = [
    {
      icon: "Sparkles",
      title: "Брендинг",
      description: "Создаём уникальные айдентики, которые запоминаются и выделяют ваш бизнес среди конкурентов"
    },
    {
      icon: "Palette",
      title: "Графический дизайн",
      description: "Разрабатываем визуальные решения для любых задач: от баннеров до полиграфии"
    },
    {
      icon: "Layout",
      title: "Веб-дизайн и сайты",
      description: "Проектируем современные сайты с фокусом на UX и конверсию"
    },
    {
      icon: "Target",
      title: "Digital-маркетинг",
      description: "Комплексные стратегии продвижения в digital-среде с измеримым результатом"
    },
    {
      icon: "Lightbulb",
      title: "Креатив для рекламы",
      description: "Создаём цепляющие рекламные концепции, которые продают"
    }
  ];

  const approach = [
    {
      number: "01",
      title: "Аналитика и погружение",
      description: "Изучаем ваш бизнес, аудиторию и конкурентов. Определяем цели и метрики успеха"
    },
    {
      number: "02",
      title: "Идея и креатив",
      description: "Генерируем сильные концепции и выбираем лучшее решение вместе с вами"
    },
    {
      number: "03",
      title: "Дизайн и реализация",
      description: "Воплощаем идеи в жизнь с вниманием к каждой детали и вашим правкам"
    },
    {
      number: "04",
      title: "Результат и рост",
      description: "Запускаем проект, анализируем эффективность и помогаем расти дальше"
    }
  ];

  const cases = [
    {
      client: "TechNova",
      task: "Ребрендинг IT-компании и создание нового сайта",
      solution: "Разработали современную айдентику и лендинг с акцентом на инновации",
      result: "+340% заявок за первый месяц, 89% положительных отзывов о новом бренде"
    },
    {
      client: "GreenLife",
      task: "Запуск нового экопродукта на рынок",
      solution: "Создали полный бренд-бук, упаковку и креативную рекламную кампанию",
      result: "12 000+ продаж за 2 месяца, охват 2.5 млн человек"
    },
    {
      client: "FinPro",
      task: "Увеличение конверсии сайта финансовых услуг",
      solution: "Редизайн с упором на доверие, простоту и понятность сложных продуктов",
      result: "Конверсия выросла с 1.2% до 4.8%, +210% лидов"
    }
  ];

  const benefits = [
    {
      icon: "Zap",
      title: "Креатив + стратегия",
      description: "Не просто красиво, а эффективно для бизнеса"
    },
    {
      icon: "Clock",
      title: "Скорость и качество",
      description: "Соблюдаем дедлайны без потери качества"
    },
    {
      icon: "Smartphone",
      title: "Современный дизайн",
      description: "Следим за трендами и адаптируемся под любые устройства"
    },
    {
      icon: "TrendingUp",
      title: "Фокус на конверсии",
      description: "Каждое решение направлено на рост ваших показателей"
    }
  ];

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToCases = () => {
    document.getElementById('cases')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-1/2 -left-1/4 w-[800px] h-[800px] bg-primary/20 rounded-full blur-[120px] animate-pulse" />
          <div className="absolute top-1/3 -right-1/4 w-[600px] h-[600px] bg-secondary/20 rounded-full blur-[100px] animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="absolute bottom-0 left-1/3 w-[500px] h-[500px] bg-accent/20 rounded-full blur-[80px] animate-pulse" style={{ animationDelay: '2s' }} />
        </div>

        <div className="relative z-10 max-w-6xl mx-auto text-center animate-fade-in">
          <div className="mb-8 inline-block">
            <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold tracking-tight gradient-text mb-4">
              Avance
            </h1>
            <div className="h-1 w-32 mx-auto bg-gradient-to-r from-primary via-secondary to-accent rounded-full" />
          </div>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold mb-6 text-foreground/90">
            Креативное рекламное агентство
          </h2>
          
          <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-12 leading-relaxed">
            Создаём дизайн, бренды и digital-решения, которые выделяют и продают
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              onClick={scrollToContact}
              className="group text-lg px-8 py-6 bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 hover-glow"
            >
              Обсудить проект
              <Icon name="ArrowRight" className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              onClick={scrollToCases}
              className="text-lg px-8 py-6 border-2 border-primary/50 hover:border-primary hover:bg-primary/10"
            >
              Смотреть кейсы
            </Button>
          </div>
        </div>
      </section>

      <section className="py-24 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-up">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
                О нас
              </h2>
              <div className="space-y-4 text-lg text-muted-foreground">
                <p>
                  <span className="font-semibold text-foreground">Avance</span> — это команда профессионалов, которая помогает бизнесу двигаться вперёд через силу дизайна и креатива.
                </p>
                <p>
                  Мы не просто создаём красивые картинки. Мы разрабатываем стратегические решения, которые работают на ваш результат: привлекают клиентов, повышают узнаваемость и увеличивают продажи.
                </p>
                <p>
                  Наш подход — прозрачность, партнёрство и фокус на измеримых показателях. Мы берём ответственность за результат и растём вместе с вашим бизнесом.
                </p>
              </div>
            </div>
            
            <div className="relative h-[400px] rounded-2xl overflow-hidden gradient-bg border border-primary/20 animate-fade-in-scale" style={{ animationDelay: '0.2s' }}>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="text-7xl font-bold gradient-text mb-4">5+</div>
                  <p className="text-xl text-muted-foreground">лет опыта</p>
                  <div className="mt-8 text-6xl font-bold gradient-text mb-4">200+</div>
                  <p className="text-xl text-muted-foreground">успешных проектов</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-card/30">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 gradient-text">
            Услуги
          </h2>
          <p className="text-center text-muted-foreground text-lg mb-16 max-w-2xl mx-auto">
            Комплексные решения для развития вашего бренда в digital-пространстве
          </p>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <Card 
                key={index}
                className={`p-8 bg-card/50 backdrop-blur border-border/50 cursor-pointer transition-all duration-300 animate-fade-in ${
                  hoveredService === index ? 'border-primary shadow-[0_0_30px_rgba(139,92,246,0.3)] scale-105' : ''
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
                onMouseEnter={() => setHoveredService(index)}
                onMouseLeave={() => setHoveredService(null)}
              >
                <div className={`mb-6 inline-block p-4 rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20 transition-transform duration-300 ${
                  hoveredService === index ? 'scale-110 rotate-3' : ''
                }`}>
                  <Icon name={service.icon as any} size={32} className="text-primary" />
                </div>
                <h3 className="text-2xl font-semibold mb-3">{service.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{service.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 gradient-text">
            Наш подход
          </h2>
          <p className="text-center text-muted-foreground text-lg mb-16 max-w-2xl mx-auto">
            Прозрачная работа от аналитики до результата
          </p>
          
          <div className="grid md:grid-cols-2 gap-8">
            {approach.map((step, index) => (
              <div 
                key={index}
                className="relative p-8 rounded-2xl bg-card/30 border border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-lg animate-slide-up group"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <div className="absolute -top-6 -left-6 w-16 h-16 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-2xl font-bold shadow-lg group-hover:scale-110 transition-transform">
                  {step.number}
                </div>
                <h3 className="text-2xl font-semibold mb-3 mt-4">{step.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="cases" className="py-24 px-4 sm:px-6 lg:px-8 bg-card/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 gradient-text">
            Кейсы
          </h2>
          <p className="text-center text-muted-foreground text-lg mb-16 max-w-2xl mx-auto">
            Реальные результаты для реальных брендов
          </p>
          
          <div className="space-y-8">
            {cases.map((caseItem, index) => (
              <Card 
                key={index}
                className={`p-8 bg-card/50 backdrop-blur border-border/50 hover:border-primary/50 transition-all duration-500 animate-fade-in-scale cursor-pointer ${
                  hoveredCase === index ? 'shadow-[0_0_40px_rgba(139,92,246,0.4)] scale-[1.02]' : ''
                }`}
                style={{ animationDelay: `${index * 0.2}s` }}
                onMouseEnter={() => setHoveredCase(index)}
                onMouseLeave={() => setHoveredCase(null)}
              >
                <div className="grid md:grid-cols-3 gap-6">
                  <div>
                    <h3 className="text-2xl font-bold gradient-text mb-3">{caseItem.client}</h3>
                    <div className="space-y-4">
                      <div>
                        <p className="text-sm text-muted-foreground uppercase tracking-wider mb-1">Задача</p>
                        <p className="text-foreground/90">{caseItem.task}</p>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <p className="text-sm text-muted-foreground uppercase tracking-wider mb-1">Решение</p>
                    <p className="text-foreground/90">{caseItem.solution}</p>
                  </div>
                  
                  <div>
                    <p className="text-sm text-muted-foreground uppercase tracking-wider mb-1">Результат</p>
                    <p className="font-semibold text-primary text-lg">{caseItem.result}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 gradient-text">
            Почему Avance
          </h2>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <div 
                key={index}
                className="text-center p-8 rounded-2xl bg-card/30 border border-border/50 hover:border-primary/50 transition-all duration-300 hover:scale-105 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="inline-block p-4 rounded-full bg-gradient-to-br from-primary/30 to-secondary/30 mb-4">
                  <Icon name={benefit.icon as any} size={32} className="text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8 relative">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[600px] bg-gradient-to-r from-primary/20 via-secondary/20 to-accent/20 rounded-full blur-[120px]" />
        </div>
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 gradient-text animate-fade-in">
            Готовы вывести ваш бренд на новый уровень?
          </h2>
          <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto animate-slide-up" style={{ animationDelay: '0.2s' }}>
            Расскажите о своём проекте, и мы предложим эффективное решение
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-scale" style={{ animationDelay: '0.4s' }}>
            <Button 
              size="lg"
              className="group text-xl px-12 py-8 bg-gradient-to-r from-primary via-secondary to-accent hover:shadow-[0_0_50px_rgba(139,92,246,0.6)] transition-all duration-300 animate-glow-pulse"
            >
              Связаться с Avance
              <Icon name="Send" className="ml-2 group-hover:translate-x-1 transition-transform" size={24} />
            </Button>
          </div>
          
          <div className="mt-12 flex flex-wrap justify-center gap-8 text-muted-foreground animate-fade-in" style={{ animationDelay: '0.6s' }}>
            <div className="flex items-center gap-2">
              <Icon name="Mail" size={20} />
              <span>hello@avance.agency</span>
            </div>
            <div className="flex items-center gap-2">
              <Icon name="Phone" size={20} />
              <span>+7 (495) 123-45-67</span>
            </div>
          </div>
        </div>
      </section>

      <footer className="py-12 px-4 sm:px-6 lg:px-8 border-t border-border/50">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div>
              <h3 className="text-3xl font-bold gradient-text mb-2">Avance</h3>
              <p className="text-sm text-muted-foreground">Креативное рекламное агентство</p>
            </div>
            
            <div className="flex gap-6">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Icon name="Instagram" size={24} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Icon name="Facebook" size={24} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Icon name="Linkedin" size={24} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Icon name="Twitter" size={24} />
              </a>
            </div>
          </div>
          
          <div className="mt-8 pt-8 border-t border-border/30 text-center text-sm text-muted-foreground">
            <p>© 2024 Avance. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
