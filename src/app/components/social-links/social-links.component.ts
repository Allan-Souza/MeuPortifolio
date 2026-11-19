import { ChangeDetectionStrategy, Component, inject, input } from '@angular/core';
import { SocialLinkItem } from '../../data/profile.data';
import { ToastService } from '../../services/toast.service';

@Component({
  selector: 'app-social-links',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <nav aria-label="Links rápidos e contato" class="grid grid-cols-2 gap-3.5">
      @for (item of links(); track item.id) {
        @if (item.actionType === 'external') {
          <a
            [href]="item.url"
            target="_blank"
            rel="noopener noreferrer"
            [attr.aria-label]="item.ariaLabel"
            class="group flex items-start gap-3.5 rounded-2xl border border-zinc-200 bg-white p-4 transition-all duration-150 hover:border-[#F59E0B] active:scale-[0.98] dark:border-[#2E2E2E] dark:bg-[#1E1E1E] dark:hover:border-[#F59E0B] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F59E0B]"
          >
            <div
              class="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-zinc-200 bg-zinc-50 text-zinc-700 transition-colors duration-150 group-hover:border-[#F59E0B]/40 group-hover:text-[#D97706] dark:border-[#2E2E2E] dark:bg-[#121212] dark:text-[#A1A1AA] dark:group-hover:text-[#F59E0B]"
            >
              @switch (item.icon) {
                @case ('linkedin') {
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="19"
                    height="19"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    aria-hidden="true"
                  >
                    <path
                      d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"
                    ></path>
                    <rect width="4" height="12" x="2" y="9"></rect>
                    <circle cx="4" cy="4" r="2"></circle>
                  </svg>
                }
                @case ('github') {
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="19"
                    height="19"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    aria-hidden="true"
                  >
                    <path
                      d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"
                    ></path>
                    <path d="M9 18c-4.51 2-5-2-7-2"></path>
                  </svg>
                }
                @case ('instagram') {
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="19"
                    height="19"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    aria-hidden="true"
                  >
                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
                  </svg>
                }
              }
            </div>
            <div class="min-w-0 flex-1">
              <div class="flex items-center justify-between gap-1">
                <span
                  class="truncate font-display text-base font-semibold text-zinc-900 dark:text-[#EDEDED]"
                >
                  {{ item.title }}
                </span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="shrink-0 text-zinc-400 transition-transform duration-150 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-[#F59E0B] dark:text-zinc-500"
                  aria-hidden="true"
                >
                  <path d="M7 7h10v10"></path>
                  <path d="M7 17 17 7"></path>
                </svg>
              </div>
              <p class="mt-1 truncate text-xs text-zinc-600 dark:text-[#A1A1AA]">
                {{ item.subtitle }}
              </p>
            </div>
          </a>
        } @else {
          <button
            type="button"
            (click)="copyEmail(item.valueToCopy || '')"
            [attr.aria-label]="item.ariaLabel"
            class="group flex w-full items-start gap-3.5 rounded-2xl border border-zinc-200 bg-white p-4 text-left transition-all duration-150 hover:border-[#F59E0B] active:scale-[0.98] dark:border-[#2E2E2E] dark:bg-[#1E1E1E] dark:hover:border-[#F59E0B] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F59E0B]"
          >
            <div
              class="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-zinc-200 bg-zinc-50 text-zinc-700 transition-colors duration-150 group-hover:border-[#F59E0B]/40 group-hover:text-[#D97706] dark:border-[#2E2E2E] dark:bg-[#121212] dark:text-[#A1A1AA] dark:group-hover:text-[#F59E0B]"
            >
              <!-- Lucide Mail Icon -->
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="19"
                height="19"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                aria-hidden="true"
              >
                <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
              </svg>
            </div>
            <div class="min-w-0 flex-1">
              <div class="flex items-center justify-between gap-1">
                <span
                  class="truncate font-display text-base font-semibold text-zinc-900 dark:text-[#EDEDED]"
                >
                  {{ item.title }}
                </span>
                <!-- Lucide Copy Icon -->
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="shrink-0 text-zinc-400 transition-colors duration-150 group-hover:text-[#F59E0B] dark:text-zinc-500"
                  aria-hidden="true"
                >
                  <rect width="14" height="14" x="8" y="8" rx="2" ry="2"></rect>
                  <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"></path>
                </svg>
              </div>
              <p class="mt-1 truncate text-xs text-zinc-600 dark:text-[#A1A1AA]">
                {{ item.subtitle }}
              </p>
            </div>
          </button>
        }
      }
    </nav>
  `
})
export class SocialLinksComponent {
  readonly links = input.required<SocialLinkItem[]>();
  private readonly toastService = inject(ToastService);

  async copyEmail(email: string): Promise<void> {
    if (!email) return;

    try {
      await navigator.clipboard.writeText(email);
      this.toastService.show('E-mail copiado!');
    } catch {
      const textarea = document.createElement('textarea');
      textarea.value = email;
      textarea.style.position = 'fixed';
      textarea.style.opacity = '0';
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand('copy');
      document.body.removeChild(textarea);
      this.toastService.show('E-mail copiado!');
    }
  }
}
