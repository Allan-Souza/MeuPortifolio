import { ChangeDetectionStrategy, Component, inject, input } from '@angular/core';
import { ProfileData } from '../../data/profile.data';
import { VcardService } from '../../services/vcard.service';
import { ThemeToggleComponent } from '../theme-toggle/theme-toggle.component';

@Component({
  selector: 'app-hero-card',
  standalone: true,
  imports: [ThemeToggleComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <header class="flex flex-col gap-5">
      <!-- Barra superior: Badge de status + ThemeToggle -->
      <div class="flex items-center justify-between gap-3">
        <div
          class="inline-flex items-center gap-2.5 rounded-full border border-zinc-200 bg-white px-3.5 py-2 font-mono text-xs font-medium tracking-wide text-zinc-800 dark:border-[#2E2E2E] dark:bg-[#1E1E1E] dark:text-[#EDEDED]"
          role="status"
        >
          <span class="relative flex h-2.5 w-2.5" aria-hidden="true">
            <span
              class="absolute inline-flex h-full w-full animate-ping rounded-full opacity-75"
              [class.bg-emerald-400]="profile().statusBadge.pulseColor === 'green'"
              [class.bg-[#F59E0B]]="profile().statusBadge.pulseColor === 'amber'"
            ></span>
            <span
              class="relative inline-flex h-2.5 w-2.5 rounded-full"
              [class.bg-emerald-500]="profile().statusBadge.pulseColor === 'green'"
              [class.bg-[#F59E0B]]="profile().statusBadge.pulseColor === 'amber'"
            ></span>
          </span>
          <span>{{ profile().statusBadge.text }}</span>
        </div>

        <app-theme-toggle />
      </div>

      <!-- Card Principal de Identidade -->
      <div
        class="rounded-2xl border border-zinc-200 bg-white p-6 transition-colors duration-150 dark:border-[#2E2E2E] dark:bg-[#1E1E1E]"
      >
        <div class="flex items-center gap-4 sm:gap-5">
          <!-- Avatar circular/arredondado com borda fina em #F59E0B -->
          <div
            class="relative flex h-20 w-20 shrink-0 items-center justify-center overflow-hidden rounded-full border-2 border-[#F59E0B] bg-zinc-100 font-display text-2xl font-bold tracking-tight text-zinc-900 shadow-sm dark:bg-[#121212] dark:text-[#EDEDED]"
            aria-label="Avatar de Allan Victor"
          >
            @if (profile().identity.avatarUrl) {
              <img
                [src]="profile().identity.avatarUrl"
                [alt]="profile().identity.name"
                class="h-full w-full object-cover"
              />
            } @else {
              <span class="select-none text-[#D97706] dark:text-[#F59E0B]">
                {{ profile().identity.initials }}
              </span>
            }
          </div>

          <!-- Nome & Headline -->
          <div class="min-w-0 flex-1">
            <h1
              class="font-display text-2xl sm:text-[28px] font-bold leading-tight tracking-tight text-zinc-900 dark:text-[#EDEDED]"
            >
              {{ profile().identity.name }}
            </h1>
            <p
              class="mt-2 text-sm font-medium leading-relaxed text-zinc-600 dark:text-[#A1A1AA]"
            >
              {{ profile().identity.headline }}
            </p>
          </div>
        </div>

        <!-- CTAs Principais (lado a lado) -->
        <div class="mt-6 grid grid-cols-2 gap-3.5">
          <!-- Botão Primário: Salvar Contato (.vcf) -->
          <button
            type="button"
            (click)="onSaveContact()"
            aria-label="Salvar contato de Allan Victor na agenda (.vcf)"
            class="inline-flex items-center justify-center gap-2 rounded-xl bg-[#F59E0B] px-4 py-3 font-display text-sm font-bold text-[#121212] transition-all duration-150 hover:bg-[#D97706] active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F59E0B] focus-visible:ring-offset-2 dark:focus-visible:ring-offset-[#121212]"
          >
            <!-- Lucide UserPlus Icon -->
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="17"
              height="17"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2.2"
              stroke-linecap="round"
              stroke-linejoin="round"
              aria-hidden="true"
            >
              <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
              <circle cx="9" cy="7" r="4"></circle>
              <line x1="19" x2="19" y1="8" y2="14"></line>
              <line x1="22" x2="16" y1="11" y2="11"></line>
            </svg>
            <span>{{ profile().ctas.primaryLabel }}</span>
          </button>

          <!-- Botão Secundário: Currículo PDF -->
          <a
            [href]="profile().identity.resumePdfUrl"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Abrir ou baixar Currículo em PDF"
            class="inline-flex items-center justify-center gap-2 rounded-xl border border-zinc-300 bg-transparent px-4 py-3 font-display text-sm font-semibold text-zinc-900 transition-all duration-150 hover:border-[#F59E0B] hover:text-[#D97706] active:scale-[0.98] dark:border-[#2E2E2E] dark:text-[#EDEDED] dark:hover:border-[#F59E0B] dark:hover:text-[#F59E0B] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F59E0B]"
          >
            <!-- Lucide FileText Icon -->
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="17"
              height="17"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              aria-hidden="true"
            >
              <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"></path>
              <path d="M14 2v4a2 2 0 0 0 2 2h4"></path>
              <path d="M10 9H8"></path>
              <path d="M16 13H8"></path>
              <path d="M16 17H8"></path>
            </svg>
            <span>{{ profile().ctas.secondaryLabel }}</span>
          </a>
        </div>
      </div>
    </header>
  `
})
export class HeroCardComponent {
  readonly profile = input.required<ProfileData>();
  private readonly vcardService = inject(VcardService);

  onSaveContact(): void {
    this.vcardService.downloadVCard(this.profile());
  }
}
