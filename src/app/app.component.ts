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

interface ProjectShowcase {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  tech: string[];
  demoUrl: string;
  repoUrl: string;
  highlights: string[];
  evidence: CodeEvidence[];
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
    role: 'Frontend Developer Angular',
    location: 'Ciudad del Este, Paraguay',
    email: 'enribobadill96@gmail.com',
    phone: '+595 994 321 813',
    linkedin: 'https://www.linkedin.com/in/enriquejbrdyop007n',
    github: 'https://github.com/Bobadilla96',
    summary:
      'Desarrollador frontend con experiencia en Angular, TypeScript y arquitectura cliente-servidor. Construyo interfaces modernas, modulares y conectadas a APIs REST, con foco en UX, rendimiento y calidad de codigo.'
  };

  readonly skillGroups: SkillGroup[] = [
    {
      title: 'Frontend Core',
      items: ['Angular 17/19/20', 'TypeScript', 'JavaScript', 'HTML5', 'CSS3', 'SCSS', 'Tailwind CSS']
    },
    {
      title: 'Arquitectura y Calidad',
      items: ['RxJS', 'NgRx', 'Lazy Loading', 'Componentes standalone', 'Testing unitario', 'Guards RBAC']
    },
    {
      title: 'Integracion y Entrega',
      items: ['REST APIs', 'JWT mock', 'Git/GitHub', 'CI con GitHub Actions', 'GitHub Pages', 'Agile/Scrum']
    }
  ];

  readonly career: CareerEntry[] = [
    {
      period: '2024 - 2026',
      role: 'Backend / Full Stack Developer',
      company: 'Parque Tecnologico Itaipu',
      highlights: [
        'Implementacion de modulos web con integracion de APIs para monitoreo tecnico.',
        'Trabajo colaborativo con equipos multidisciplinarios bajo metodologia agil.',
        'Evolucion de interfaces y soporte funcional en proyectos de software.'
      ]
    },
    {
      period: '2024 - 2025',
      role: 'Full Stack Developer',
      company: 'Agrotec S.A.',
      highlights: [
        'Desarrollo de funcionalidades web para procesos de negocio.',
        'Integracion frontend con APIs REST y flujos de autenticacion.',
        'Entregas iterativas enfocadas en estabilidad y experiencia de usuario.'
      ]
    },
    {
      period: '2023',
      role: 'Full Stack Developer',
      company: 'Tips S.A. / Software Empresarial',
      highlights: [
        'Participacion en modulos de interfaz y mantenimiento evolutivo.',
        'Integracion cliente-servidor con datos relacionales.',
        'Resolucion de bugs y soporte de funcionalidades existentes.'
      ]
    },
    {
      period: '2017 - 2024',
      role: 'Licenciatura en Analisis de Sistemas',
      company: 'Universidad Nacional del Este',
      highlights: [
        'Formacion base en ingenieria de software, bases de datos y analisis de sistemas.',
        'Aplicacion practica en proyectos web y arquitectura de aplicaciones.',
        'Enfoque continuo en mejora tecnica y aprendizaje autodidacta.'
      ]
    }
  ];

  readonly projects: ProjectShowcase[] = [
    {
      id: 'gestion-de-pedidos',
      title: 'Gestion de Pedidos',
      subtitle: 'Sistema de pedidos end-to-end',
      description:
        'Aplicacion Angular para flujo completo de pedidos: login, dashboard, tabla avanzada, formularios dinamicos y manejo de estado.',
      tech: ['Angular', 'NgRx', 'Tailwind', 'Jest', 'Fake API'],
      demoUrl: 'https://bobadilla96.github.io/gestion-de-pedidos/',
      repoUrl: 'https://github.com/Bobadilla96/gestion-de-pedidos',
      highlights: [
        'Tabla con filtros, ordenamiento y paginacion.',
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
      subtitle: 'Monitoreo en tiempo real',
      description:
        'Dashboard industrial con simulacion de sensores, alertas y detalle de dispositivos con visualizacion de datos en vivo.',
      tech: ['Angular', 'RxJS', 'Tailwind', 'ngx-charts'],
      demoUrl: 'https://bobadilla96.github.io/monitor-iot-industrial/',
      repoUrl: 'https://github.com/Bobadilla96/monitor-iot-industrial',
      highlights: [
        'Streaming simulado de metricas con RxJS.',
        'Gestion de alertas con umbrales configurables.',
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
      id: 'tickets-soporte',
      title: 'Tickets de Soporte',
      subtitle: 'Help Desk estilo Kanban',
      description:
        'Mesa de ayuda con tickets, SLA por prioridad, board drag and drop y auditoria de acciones por rol.',
      tech: ['Angular', 'CDK DragDrop', 'SCSS', 'BehaviorSubject'],
      demoUrl: 'https://bobadilla96.github.io/tickets-soporte/',
      repoUrl: 'https://github.com/Bobadilla96/tickets-soporte',
      highlights: [
        'Board Kanban con transiciones de estado.',
        'Timeline de auditoria por ticket y global.',
        'Configuracion SLA diferenciada por prioridad.'
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
      subtitle: 'CRUD + movimientos + reportes',
      description:
        'Sistema de inventario con productos, movimientos de stock, alertas reactivas y exportacion de reportes CSV/PDF.',
      tech: ['Angular', 'NgRx', 'jsPDF', 'SCSS'],
      demoUrl: 'https://bobadilla96.github.io/inventario-control/',
      repoUrl: 'https://github.com/Bobadilla96/inventario-control',
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
      subtitle: 'Roles y permisos granulares',
      description:
        'Panel administrativo con JWT mock, directiva estructural de permisos, guards por permiso y auditoria de acciones.',
      tech: ['Angular', 'RBAC', 'Directivas', 'Guards'],
      demoUrl: 'https://bobadilla96.github.io/admin-usuarios-rbac/',
      repoUrl: 'https://github.com/Bobadilla96/admin-usuarios-rbac',
      highlights: [
        'Control granular de UI con *hasPermission.',
        'Guards de rutas por rol y permiso.',
        'Gestion de permisos heredados e individuales.'
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
    }
  ];

  get totalEvidence(): number {
    return this.projects.reduce((total, project) => total + project.evidence.length, 0);
  }

  trackByProject(_index: number, project: ProjectShowcase): string {
    return project.id;
  }

  trackByText(_index: number, item: string): string {
    return item;
  }

  trackByEvidence(_index: number, evidence: CodeEvidence): string {
    return evidence.url;
  }
}
