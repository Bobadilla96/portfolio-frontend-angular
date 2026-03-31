import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

interface ProfileInfo {
  name: string;
  role: string;
  location: string;
  email: string;
  phone: string;
  linkedin: string;
  github: string;
  summary: string;
}

interface SkillGroup {
  title: string;
  items: string[];
}

interface CareerEntry {
  period: string;
  role: string;
  company: string;
  highlights: string[];
}

interface CodeEvidence {
  label: string;
  url: string;
}

interface ValuePillar {
  title: string;
  description: string;
}

type ProjectFramework = 'Angular' | 'Next.js' | 'React';
type FrameworkFilter = 'Todos' | ProjectFramework;

interface ProjectShowcase {
  id: string;
  title: string;
  subtitle: string;
  framework: ProjectFramework;
  description: string;
  impact: string;
  tech: string[];
  demoUrl: string;
  demoLabel?: string;
  repoUrl: string;
  highlights: string[];
  evidence: CodeEvidence[];
  screenshotUrl: string;
  featured?: boolean;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  readonly profile: ProfileInfo = {
    name: 'Enrique Junior Bobadilla Ruiz Diaz',
    role: 'Frontend Developer especializado en Angular, Next.js y React',
    location: 'Ciudad del Este, Paraguay',
    email: 'enribobadill96@gmail.com',
    phone: '+595 994 321 813',
    linkedin: 'https://www.linkedin.com/in/enriquejbrdyop007n',
    github: 'https://github.com/Bobadilla96',
    summary:
      'Diseño y construyo productos frontend listos para producción: dashboards, CRUDs complejos, flujos autenticados, integraciones con APIs y experiencias enfocadas en claridad, rendimiento y mantenibilidad.'
  };

  readonly valuePillars: ValuePillar[] = [
    {
      title: 'Interfaces de negocio',
      description: 'Pantallas que resuelven operaciones reales: pedidos, reservas, monitoreo, inventario y analítica.'
    },
    {
      title: 'Código con estructura',
      description: 'Arquitectura modular, componentes reutilizables, estados claros y evidencia técnica enlazada por proyecto.'
    },
    {
      title: 'Humildad técnica',
      description: 'Trabajo con foco en iterar bien, corregir rápido y entregar soluciones útiles sin sobrecomplicar.'
    }
  ];

  readonly skillGroups: SkillGroup[] = [
    {
      title: 'Frontend Core',
      items: ['Angular 17/19/20', 'Next.js 16', 'React 19', 'TypeScript', 'JavaScript', 'HTML5', 'CSS3', 'SCSS', 'Tailwind CSS']
    },
    {
      title: 'Arquitectura y Calidad',
      items: ['RxJS', 'NgRx', 'Lazy Loading', 'Componentes standalone', 'Testing unitario', 'Guards RBAC', 'SSR/App Router']
    },
    {
      title: 'Integración y Entrega',
      items: ['REST APIs', 'Supabase', 'JWT mock', 'Git/GitHub', 'CI con GitHub Actions', 'GitHub Pages', 'Vercel']
    }
  ];

  readonly career: CareerEntry[] = [
    {
      period: '2024 - 2026',
      role: 'Backend / Full Stack Developer',
      company: 'Parque Tecnológico Itaipu',
      highlights: [
        'Implementación de módulos web con integración de APIs para monitoreo técnico.',
        'Trabajo colaborativo con equipos multidisciplinarios bajo metodología ágil.',
        'Evolución de interfaces y soporte funcional en proyectos de software.'
      ]
    },
    {
      period: '2024 - 2025',
      role: 'Full Stack Developer',
      company: 'Agrotec S.A.',
      highlights: [
        'Desarrollo de funcionalidades web para procesos de negocio.',
        'Integración frontend con APIs REST y flujos de autenticación.',
        'Entregas iterativas enfocadas en estabilidad y experiencia de usuario.'
      ]
    },
    {
      period: '2023',
      role: 'Full Stack Developer',
      company: 'Tips S.A. / Software Empresarial',
      highlights: [
        'Participación en módulos de interfaz y mantenimiento evolutivo.',
        'Integración cliente-servidor con datos relacionales.',
        'Resolución de bugs y soporte de funcionalidades existentes.'
      ]
    },
    {
      period: '2017 - 2024',
      role: 'Licenciatura en Análisis de Sistemas',
      company: 'Universidad Nacional del Este',
      highlights: [
        'Formación en ingeniería de software, bases de datos y análisis de sistemas.',
        'Aplicación práctica en proyectos web y arquitectura de aplicaciones.',
        'Enfoque continuo en mejora técnica y aprendizaje autodidacta.'
      ]
    }
  ];

  readonly frameworkFilters: FrameworkFilter[] = ['Todos', 'Angular', 'Next.js', 'React'];
  selectedFramework: FrameworkFilter = 'Todos';

  readonly projects: ProjectShowcase[] = [
    {
      id: 'professional-language-coach',
      title: 'Professional Language Coach',
      subtitle: 'Plataforma de idiomas profesionales con IA, BBC y Supabase',
      framework: 'Next.js',
      description:
        'Aplicación Next.js para aprendizaje de inglés profesional con rutas personalizadas, progreso sincronizado, biblioteca BBC, writing lab y módulo conversacional.',
      impact: 'Demuestra un producto más completo: autenticación real, sincronización cloud, contenido didáctico y despliegue en Vercel.',
      tech: ['Next.js App Router', 'React 19', 'TypeScript', 'Tailwind CSS', 'Supabase', 'OpenRouter'],
      demoUrl: 'https://professional-language-coach.vercel.app',
      demoLabel: 'Demo en Vercel',
      repoUrl: 'https://github.com/Bobadilla96/professional-language-coach',
      screenshotUrl: this.buildScreenshotUrl('https://professional-language-coach.vercel.app'),
      featured: true,
      highlights: [
        'Autenticación real con Supabase y sincronización de progreso por usuario.',
        'Módulos de speaking, writing, practice y conversación con fallback de voz.',
        'Biblioteca BBC embebida para uso local/privado sin publicar materiales sensibles.'
      ],
      evidence: [
        {
          label: 'Supabase Progress Sync',
          url: 'https://github.com/Bobadilla96/professional-language-coach/blob/main/src/components/common/progress-sync.tsx'
        },
        {
          label: 'BBC Archive Service',
          url: 'https://github.com/Bobadilla96/professional-language-coach/blob/main/src/lib/bbc-archive.server.ts'
        },
        {
          label: 'Conversation Coach API',
          url: 'https://github.com/Bobadilla96/professional-language-coach/blob/main/src/app/api/ai/conversation-coach/route.ts'
        }
      ]
    },
    {
      id: 'gestion-de-pedidos',
      title: 'Gestión de Pedidos',
      subtitle: 'Sistema operativo de pedidos con estado global',
      framework: 'Angular',
      description:
        'Aplicación Angular para flujo completo de pedidos: login, dashboard, tabla avanzada, formularios dinámicos, store global y fake API controlada.',
      impact: 'Expone dominio de Angular para escenarios de negocio con estado, errores simulados y testing endurecido.',
      tech: ['Angular', 'NgRx', 'Tailwind', 'Jest', 'Fake API'],
      demoUrl: 'https://bobadilla96.github.io/gestion-de-pedidos/',
      repoUrl: 'https://github.com/Bobadilla96/gestion-de-pedidos',
      screenshotUrl: this.buildScreenshotUrl('https://bobadilla96.github.io/gestion-de-pedidos/'),
      featured: true,
      highlights: [
        'Tabla con filtros, ordenamiento y paginación.',
        'Arquitectura store + effects para estado global.',
        'Interceptor de backend mock con errores simulados.'
      ],
      evidence: [
        {
          label: 'Order List Component',
          url: 'https://github.com/Bobadilla96/gestion-de-pedidos/blob/main/src/app/features/orders/order-list/order-list.component.ts'
        },
        {
          label: 'Fake Backend Interceptor',
          url: 'https://github.com/Bobadilla96/gestion-de-pedidos/blob/main/src/app/api/interceptors/fake-backend.interceptor.ts'
        },
        {
          label: 'Orders Reducer',
          url: 'https://github.com/Bobadilla96/gestion-de-pedidos/blob/main/src/app/store/orders/orders.reducer.ts'
        }
      ]
    },
    {
      id: 'monitor-iot',
      title: 'Monitor IoT Industrial',
      subtitle: 'Monitoreo de dispositivos y alertas en tiempo real',
      framework: 'Angular',
      description:
        'Dashboard industrial con simulación de sensores, alertas configurables y detalle de dispositivos con visualización de datos en vivo.',
      impact: 'Representa bien escenarios B2B: métricas técnicas, umbrales y visualización orientada a operaciones.',
      tech: ['Angular', 'RxJS', 'Tailwind', 'ngx-charts'],
      demoUrl: 'https://bobadilla96.github.io/monitor-iot-industrial/',
      repoUrl: 'https://github.com/Bobadilla96/monitor-iot-industrial',
      screenshotUrl: this.buildScreenshotUrl('https://bobadilla96.github.io/monitor-iot-industrial/'),
      featured: true,
      highlights: [
        'Streaming simulado de métricas con RxJS.',
        'Gestión de alertas con umbrales configurables.',
        'Detalle por dispositivo con export de datos.'
      ],
      evidence: [
        {
          label: 'Sensor Simulator API',
          url: 'https://github.com/Bobadilla96/monitor-iot-industrial/blob/main/src/app/api/simulator/sensor-simulator.api.ts'
        },
        {
          label: 'Device Detail Component',
          url: 'https://github.com/Bobadilla96/monitor-iot-industrial/blob/main/src/app/features/devices/device-detail/device-detail.component.ts'
        },
        {
          label: 'Alert Config Component',
          url: 'https://github.com/Bobadilla96/monitor-iot-industrial/blob/main/src/app/features/alerts/alert-config/alert-config.component.ts'
        }
      ]
    },
    {
      id: 'dashboard-financiero',
      title: 'Dashboard Financiero',
      subtitle: 'KPIs, presupuestos y reportes operativos',
      framework: 'Next.js',
      description:
        'Aplicación Next.js para control financiero personal/pyme con dashboard de indicadores, gestión de transacciones, metas y reportes exportables.',
      impact: 'Combina producto visual fuerte con tablas, gráficos y vistas de seguimiento financiero.',
      tech: ['Next.js App Router', 'React 19', 'TypeScript', 'Tailwind CSS', 'Recharts'],
      demoUrl: 'https://bobadilla96.github.io/dashboard-financiero/',
      repoUrl: 'https://github.com/Bobadilla96/dashboard-financiero',
      screenshotUrl: this.buildScreenshotUrl('https://bobadilla96.github.io/dashboard-financiero/'),
      featured: true,
      highlights: [
        'Panel financiero con KPIs y gráficos por categoría.',
        'Flujos de presupuesto, metas y seguimiento mensual.',
        'Reportes con filtros por fecha y exportación CSV.'
      ],
      evidence: [
        {
          label: 'Reports Dashboard Page',
          url: 'https://github.com/Bobadilla96/dashboard-financiero/blob/master/src/app/dashboard/reports/page.tsx'
        },
        {
          label: 'Finance Store',
          url: 'https://github.com/Bobadilla96/dashboard-financiero/blob/master/src/store/finance.store.ts'
        },
        {
          label: 'Transactions Table',
          url: 'https://github.com/Bobadilla96/dashboard-financiero/blob/master/src/components/transaction-table.tsx'
        }
      ]
    },
    {
      id: 'tickets-soporte',
      title: 'Tickets de Soporte',
      subtitle: 'Help Desk estilo Kanban con SLA',
      framework: 'Angular',
      description:
        'Mesa de ayuda con tickets, SLA por prioridad, board drag and drop y auditoría de acciones por rol.',
      impact: 'Buen ejemplo de flujo operativo interno con estados, trazabilidad y UX de soporte técnico.',
      tech: ['Angular', 'CDK DragDrop', 'SCSS', 'BehaviorSubject'],
      demoUrl: 'https://bobadilla96.github.io/tickets-soporte/',
      repoUrl: 'https://github.com/Bobadilla96/tickets-soporte',
      screenshotUrl: this.buildScreenshotUrl('https://bobadilla96.github.io/tickets-soporte/'),
      highlights: [
        'Board Kanban con transiciones de estado.',
        'Timeline de auditoría por ticket y global.',
        'Configuración SLA diferenciada por prioridad.'
      ],
      evidence: [
        {
          label: 'Ticket Board Component',
          url: 'https://github.com/Bobadilla96/tickets-soporte/blob/main/src/app/features/tickets/ticket-board/ticket-board.component.ts'
        },
        {
          label: 'Audit API Service',
          url: 'https://github.com/Bobadilla96/tickets-soporte/blob/main/src/app/api/audit/audit.api.ts'
        },
        {
          label: 'Ticket Detail Component',
          url: 'https://github.com/Bobadilla96/tickets-soporte/blob/main/src/app/features/tickets/ticket-detail/ticket-detail.component.ts'
        }
      ]
    },
    {
      id: 'inventario-control',
      title: 'Inventario Control',
      subtitle: 'CRUD de stock, movimientos y reportes',
      framework: 'Angular',
      description:
        'Sistema de inventario con productos, movimientos de stock, alertas reactivas y exportación de reportes CSV/PDF.',
      impact: 'Aterriza un caso clásico de negocio con formularios, reportes y decisiones de UX administrativas.',
      tech: ['Angular', 'NgRx', 'jsPDF', 'SCSS'],
      demoUrl: 'https://bobadilla96.github.io/inventario-control/',
      repoUrl: 'https://github.com/Bobadilla96/inventario-control',
      screenshotUrl: this.buildScreenshotUrl('https://bobadilla96.github.io/inventario-control/'),
      highlights: [
        'Flujo completo de inventario con validaciones.',
        'Selectores NgRx para KPIs y alertas.',
        'Exportes PDF/CSV orientados a reporte operativo.'
      ],
      evidence: [
        {
          label: 'Product List Component',
          url: 'https://github.com/Bobadilla96/inventario-control/blob/main/src/app/features/inventory/product-list/product-list.component.ts'
        },
        {
          label: 'Inventory Service',
          url: 'https://github.com/Bobadilla96/inventario-control/blob/main/src/app/core/services/inventory.service.ts'
        },
        {
          label: 'Inventory Report Component',
          url: 'https://github.com/Bobadilla96/inventario-control/blob/main/src/app/features/reports/inventory-report/inventory-report.component.ts'
        }
      ]
    },
    {
      id: 'admin-usuarios-rbac',
      title: 'Admin Usuarios RBAC',
      subtitle: 'Panel administrativo con roles y permisos',
      framework: 'Angular',
      description:
        'Panel administrativo con JWT mock, directiva estructural de permisos, guards por permiso y auditoría de acciones.',
      impact: 'Expone criterio para seguridad UI, autorización y control granular de acceso en frontend.',
      tech: ['Angular', 'RBAC', 'Directivas', 'Guards'],
      demoUrl: 'https://bobadilla96.github.io/admin-usuarios-rbac/',
      repoUrl: 'https://github.com/Bobadilla96/admin-usuarios-rbac',
      screenshotUrl: this.buildScreenshotUrl('https://bobadilla96.github.io/admin-usuarios-rbac/'),
      highlights: [
        'Control granular de UI con *hasPermission.',
        'Guards de rutas por rol y permiso.',
        'Gestión de permisos heredados e individuales.'
      ],
      evidence: [
        {
          label: 'Has Permission Directive',
          url: 'https://github.com/Bobadilla96/admin-usuarios-rbac/blob/main/src/app/shared/directives/has-permission.directive.ts'
        },
        {
          label: 'Token Service',
          url: 'https://github.com/Bobadilla96/admin-usuarios-rbac/blob/main/src/app/core/auth/token.service.ts'
        },
        {
          label: 'User Permissions Component',
          url: 'https://github.com/Bobadilla96/admin-usuarios-rbac/blob/main/src/app/features/users/user-permissions/user-permissions.component.ts'
        }
      ]
    },
    {
      id: 'cursos-online-lms',
      title: 'Cursos Online LMS',
      subtitle: 'Plataforma e-learning con rutas por rol',
      framework: 'Next.js',
      description:
        'Aplicación Next.js con catálogo de cursos, rutas dinámicas, dashboards por rol y tutor IA local para apoyar aprendizaje.',
      impact: 'Muestra manejo de App Router, rutas dinámicas y experiencia de producto en una plataforma más amplia.',
      tech: ['Next.js App Router', 'React 19', 'TypeScript', 'Tailwind CSS', 'GitHub Pages'],
      demoUrl: 'https://bobadilla96.github.io/cursos-online-lms/',
      repoUrl: 'https://github.com/Bobadilla96/cursos-online-lms',
      screenshotUrl: this.buildScreenshotUrl('https://bobadilla96.github.io/cursos-online-lms/'),
      highlights: [
        'Catálogo y detalle de cursos con filtros y páginas estáticas.',
        'Perfiles student, mentor y super admin con vistas separadas.',
        'Recomendaciones y chatbot tutor IA local sin servicios pagos.'
      ],
      evidence: [
        {
          label: 'Learning Route SSG',
          url: 'https://github.com/Bobadilla96/cursos-online-lms/blob/main/src/app/courses/%5Bslug%5D/learn/%5BlessonId%5D/page.tsx'
        },
        {
          label: 'Recommendation Engine',
          url: 'https://github.com/Bobadilla96/cursos-online-lms/blob/main/src/lib/recommendations.ts'
        },
        {
          label: 'AI Tutor Chat Component',
          url: 'https://github.com/Bobadilla96/cursos-online-lms/blob/main/src/components/ai-tutor-chat.tsx'
        }
      ]
    },
    {
      id: 'marketplace-nextjs',
      title: 'Marketplace Next.js',
      subtitle: 'Compra/venta con carrito y panel de vendedor',
      framework: 'Next.js',
      description:
        'Marketplace con Next.js App Router: catálogo, detalle de producto, favoritos persistentes, carrito con checkout demo, mensajería y panel de vendedor.',
      impact: 'Buen caso de e-commerce funcional con múltiples flujos: compra, favoritos, seller dashboard y mensajes.',
      tech: ['Next.js App Router', 'React 19', 'TypeScript', 'Tailwind CSS', 'GitHub Pages'],
      demoUrl: 'https://bobadilla96.github.io/07-marketplace/',
      repoUrl: 'https://github.com/Bobadilla96/07-marketplace',
      screenshotUrl: this.buildScreenshotUrl('https://bobadilla96.github.io/07-marketplace/'),
      highlights: [
        'Carrito con gestión de cantidades, resumen y flujo de pago demo.',
        'Dashboard de vendedor con listados, mensajes y estadísticas.',
        'Deploy estático en Pages con workflow de GitHub Actions.'
      ],
      evidence: [
        {
          label: 'Cart Checkout Page',
          url: 'https://github.com/Bobadilla96/07-marketplace/blob/main/src/app/cart/page.client.tsx'
        },
        {
          label: 'Marketplace Navbar',
          url: 'https://github.com/Bobadilla96/07-marketplace/blob/main/src/components/layout/navbar.tsx'
        },
        {
          label: 'Cart Storage Service',
          url: 'https://github.com/Bobadilla96/07-marketplace/blob/main/src/lib/cart.ts'
        }
      ]
    },
    {
      id: 'turnos-reservas',
      title: 'Turnos y Reservas',
      subtitle: 'Agenda médica con flujo de reserva',
      framework: 'Next.js',
      description:
        'Plataforma de reservas con selección por servicio, profesional y horario, confirmación de turnos y panel administrativo con calendario.',
      impact: 'Buena muestra de wizard complejo, disponibilidad y panel administrativo con lógica de agenda.',
      tech: ['Next.js App Router', 'React 19', 'TypeScript', 'Tailwind CSS', 'Store client-side'],
      demoUrl: 'https://bobadilla96.github.io/turnos-reservas/',
      repoUrl: 'https://github.com/Bobadilla96/turnos-reservas',
      screenshotUrl: this.buildScreenshotUrl('https://bobadilla96.github.io/turnos-reservas/'),
      highlights: [
        'Wizard de reserva en pasos con disponibilidad en tiempo real.',
        'Panel de gestión con vistas de agenda y profesionales.',
        'Flujo de autenticación por roles y rutas protegidas.'
      ],
      evidence: [
        {
          label: 'Booking Confirmation Page',
          url: 'https://github.com/Bobadilla96/turnos-reservas/blob/main/src/app/booking/confirmation/page.tsx'
        },
        {
          label: 'Booking Store',
          url: 'https://github.com/Bobadilla96/turnos-reservas/blob/main/src/store/booking.store.ts'
        },
        {
          label: 'Appointment Calendar Component',
          url: 'https://github.com/Bobadilla96/turnos-reservas/blob/main/src/components/calendar/appointment-calendar.tsx'
        }
      ]
    },
    {
      id: 'kanban-board-colaborativo',
      title: 'Kanban Board Colaborativo',
      subtitle: 'Gestión visual de tareas en React',
      framework: 'React',
      description:
        'Tablero Kanban estilo Trello con múltiples tableros, creación y edición de tarjetas, filtros, persistencia local y enfoque en UX profesional.',
      impact: 'Presenta una UI más refinada con lógica de estado, formularios y persistencia sólida en React.',
      tech: ['React 19', 'TypeScript', 'Vite', 'Tailwind CSS', 'Vitest'],
      demoUrl: 'https://bobadilla96.github.io/kanban-board-colaborativo/',
      repoUrl: 'https://github.com/Bobadilla96/kanban-board-colaborativo',
      screenshotUrl: this.buildScreenshotUrl('https://bobadilla96.github.io/kanban-board-colaborativo/'),
      highlights: [
        'CRUD completo de tableros, columnas y tarjetas.',
        'Persistencia robusta con validaciones y recuperación de estado.',
        'Componentes reutilizables para diálogos y layout de tablero.'
      ],
      evidence: [
        {
          label: 'Board Store',
          url: 'https://github.com/Bobadilla96/kanban-board-colaborativo/blob/main/src/store/board.store.ts'
        },
        {
          label: 'Board Selector',
          url: 'https://github.com/Bobadilla96/kanban-board-colaborativo/blob/main/src/components/layout/BoardSelector.tsx'
        },
        {
          label: 'Card Dialog UI',
          url: 'https://github.com/Bobadilla96/kanban-board-colaborativo/blob/main/src/components/ui/dialog.tsx'
        }
      ]
    },
    {
      id: 'delivery-app-react',
      title: 'Delivery App React',
      subtitle: 'Pedidos de comida con checkout y tracking',
      framework: 'React',
      description:
        'Aplicación tipo PedidosYa con catálogo de restaurantes, carrito persistente, checkout validado y timeline de seguimiento.',
      impact: 'Demuestra una experiencia de consumo completa con reglas de negocio y estado persistente.',
      tech: ['React 19', 'TypeScript', 'Vite', 'Zustand Persist', 'Tailwind CSS', 'Vitest'],
      demoUrl: 'https://bobadilla96.github.io/delivery-app-react/',
      repoUrl: 'https://github.com/Bobadilla96/delivery-app-react',
      screenshotUrl: this.buildScreenshotUrl('https://bobadilla96.github.io/delivery-app-react/'),
      highlights: [
        'Carrito persistente con regla de un solo restaurante por pedido.',
        'Flujo completo: menú, carrito, checkout, tracking e historial.',
        'Deploy en GitHub Pages con fallback SPA y pipeline automatizado.'
      ],
      evidence: [
        {
          label: 'Cart Store',
          url: 'https://github.com/Bobadilla96/delivery-app-react/blob/main/src/store/cart.store.ts'
        },
        {
          label: 'Checkout Page',
          url: 'https://github.com/Bobadilla96/delivery-app-react/blob/main/src/pages/CheckoutPage.tsx'
        },
        {
          label: 'Order Tracking Page',
          url: 'https://github.com/Bobadilla96/delivery-app-react/blob/main/src/pages/OrderTrackingPage.tsx'
        }
      ]
    },
    {
      id: 'dashboard-analytics-react',
      title: 'Dashboard Analytics React',
      subtitle: 'KPIs ejecutivos, filtros y exportes',
      framework: 'React',
      description:
        'Dashboard analítico para seguimiento de ingresos, usuarios y conversión, incluyendo comparación de periodos y exportes CSV/PDF.',
      impact: 'Es uno de los proyectos visualmente más fuertes para vender capacidad de dashboard y toma de decisiones.',
      tech: ['React 19', 'TypeScript', 'Vite', 'Tailwind CSS v4', 'Recharts', 'Zustand', 'Vitest'],
      demoUrl: 'https://bobadilla96.github.io/12-dashboard-analytics/',
      repoUrl: 'https://github.com/Bobadilla96/12-dashboard-analytics',
      screenshotUrl: this.buildScreenshotUrl('https://bobadilla96.github.io/12-dashboard-analytics/'),
      highlights: [
        'Filtro por rango de fechas con presets y comparación contra periodo anterior.',
        'Panel de KPIs, embudo de conversión, top páginas y objetivos de negocio.',
        'Exportes operativos en CSV/PDF y soporte dark/light con persistencia local.'
      ],
      evidence: [
        {
          label: 'Dashboard Page',
          url: 'https://github.com/Bobadilla96/12-dashboard-analytics/blob/main/src/pages/DashboardPage.tsx'
        },
        {
          label: 'Dashboard Store',
          url: 'https://github.com/Bobadilla96/12-dashboard-analytics/blob/main/src/store/dashboard.store.ts'
        },
        {
          label: 'Export Buttons',
          url: 'https://github.com/Bobadilla96/12-dashboard-analytics/blob/main/src/components/export/ExportButtons.tsx'
        }
      ]
    }
  ];

  get featuredProjects(): ProjectShowcase[] {
    return this.projects.filter((project) => project.featured);
  }

  get libraryProjects(): ProjectShowcase[] {
    return this.projects.filter((project) => !project.featured && this.matchesFramework(project));
  }

  get totalEvidence(): number {
    return this.projects.reduce((total, project) => total + project.evidence.length, 0);
  }

  get totalPublishedDemos(): number {
    return this.projects.filter((project) => Boolean(project.demoUrl)).length;
  }

  get angularProjectCount(): number {
    return this.projects.filter((project) => project.framework === 'Angular').length;
  }

  get nextProjectCount(): number {
    return this.projects.filter((project) => project.framework === 'Next.js').length;
  }

  get reactProjectCount(): number {
    return this.projects.filter((project) => project.framework === 'React').length;
  }

  setFramework(filter: FrameworkFilter): void {
    this.selectedFramework = filter;
  }

  isActiveFramework(filter: FrameworkFilter): boolean {
    return this.selectedFramework === filter;
  }

  trackByProject(_index: number, project: ProjectShowcase): string {
    return project.id;
  }

  trackByText(_index: number, item: string): string {
    return item;
  }

  trackByPillar(_index: number, pillar: ValuePillar): string {
    return pillar.title;
  }

  trackByEvidence(_index: number, evidence: CodeEvidence): string {
    return evidence.url;
  }

  private matchesFramework(project: ProjectShowcase): boolean {
    return this.selectedFramework === 'Todos' || project.framework === this.selectedFramework;
  }

  private buildScreenshotUrl(url: string): string {
    return `https://image.thum.io/get/width/1440/noanimate/${url}`;
  }
}
