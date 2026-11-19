import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { PROFILE_DATA, ProfileData } from './data/profile.data';
import { HeroCardComponent } from './components/hero-card/hero-card.component';
import { SocialLinksComponent } from './components/social-links/social-links.component';
import { AboutSectionComponent } from './components/about-section/about-section.component';
import { ProjectsSectionComponent } from './components/projects-section/projects-section.component';
import { TimelineSectionComponent } from './components/timeline-section/timeline-section.component';
import { StackSectionComponent } from './components/stack-section/stack-section.component';
import { ToastService } from './services/toast.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    HeroCardComponent,
    SocialLinksComponent,
    AboutSectionComponent,
    ProjectsSectionComponent,
    TimelineSectionComponent,
    StackSectionComponent
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="min-h-dvh w-full bg-retro-grid px-4 py-8 sm:py-12">
      <!-- Container Mobile-First centralizado com espaçamento vertical amplo -->
      <main class="mx-auto flex w-full max-w-[480px] flex-col gap-9">
        <!-- 1. Cabeçalho & Primeira Dobra -->
        <app-hero-card class="block" [profile]="profile()" />

        <!-- Links Rápidos (Grid 2x2) -->
        <app-social-links class="block -mt-3" [links]="profile().socialLinks" />

        <!-- 2. // 01. SOBRE -->
        <app-about-section
          class="block"
          [codeComment]="profile().sections.about.codeComment"
          [content]="profile().sections.about.content"
        />

        <!-- 3. // 02. PROJETOS -->
        <app-projects-section
          class="block"
          [codeComment]="profile().sections.projects.codeComment"
          [projects]="profile().sections.projects.items"
        />

        <!-- 4. // 03. TRAJETÓRIA -->
        <app-timeline-section
          class="block"
          [codeComment]="profile().sections.timeline.codeComment"
          [items]="profile().sections.timeline.items"
        />

        <!-- 5. // 04. STACK e Rodapé -->
        <app-stack-section
          class="block"
          [codeComment]="profile().sections.stack.codeComment"
          [items]="profile().sections.stack.items"
          [footerText]="profile().footer.text"
        />
      </main>

      <!-- Toast de Feedback Visual (E-mail copiado / Contato baixado) -->
      @if (toastService.toast(); as activeToast) {
        <div
          role="status"
          aria-live="polite"
          class="fixed bottom-6 left-1/2 z-50 -translate-x-1/2 transform"
        >
          <div
            class="inline-flex items-center gap-2.5 rounded-full border border-[#F59E0B] bg-[#1E1E1E] px-5 py-2.5 font-mono text-sm font-medium text-[#EDEDED] shadow-xl"
          >
            <span class="h-2.5 w-2.5 rounded-full bg-[#F59E0B]" aria-hidden="true"></span>
            <span>{{ activeToast.message }}</span>
          </div>
        </div>
      }
    </div>
  `
})
export class AppComponent {
  readonly profile = signal<ProfileData>(PROFILE_DATA);
  readonly toastService = inject(ToastService);
}
