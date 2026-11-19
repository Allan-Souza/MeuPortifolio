import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { ProjectItem } from '../../data/profile.data';

@Component({
  selector: 'app-projects-section',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section aria-labelledby="section-projects" class="flex flex-col gap-3.5">
      <h2
        id="section-projects"
        class="font-mono text-sm font-medium tracking-wider text-[#D97706] dark:text-[#F59E0B]"
      >
        {{ codeComment() }}
      </h2>

      <div class="flex flex-col gap-4">
        @for (project of projects(); track project.id) {
          <article
            class="group rounded-2xl border border-zinc-200 bg-white p-5 sm:p-6 transition-colors duration-150 hover:border-[#F59E0B] dark:border-[#2E2E2E] dark:bg-[#1E1E1E] dark:hover:border-[#F59E0B]"
          >
            <div class="flex flex-wrap items-center justify-between gap-3">
              <h3
                class="font-display text-lg font-bold tracking-tight text-zinc-900 group-hover:text-[#D97706] dark:text-[#EDEDED] dark:group-hover:text-[#F59E0B] transition-colors duration-150"
              >
                {{ project.title }}
              </h3>

              <!-- Links de Ação do Projeto -->
              <div class="flex shrink-0 items-center gap-2">
                @for (link of project.links; track link.label) {
                  <a
                    [href]="link.url"
                    target="_blank"
                    rel="noopener noreferrer"
                    [attr.aria-label]="link.label + ' do projeto ' + project.title"
                    class="inline-flex items-center gap-1.5 rounded-lg border px-3 py-1.5 font-mono text-xs font-medium transition-colors duration-150 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F59E0B]"
                    [class]="
                      link.primary
                        ? 'border-[#F59E0B]/40 bg-[#F59E0B]/10 text-[#B45309] hover:bg-[#F59E0B] hover:text-[#121212] dark:text-[#F59E0B] dark:hover:bg-[#F59E0B] dark:hover:text-[#121212]'
                        : 'border-zinc-200 bg-zinc-50 text-zinc-700 hover:border-[#F59E0B] hover:text-zinc-900 dark:border-[#2E2E2E] dark:bg-[#121212] dark:text-[#A1A1AA] dark:hover:border-[#F59E0B] dark:hover:text-[#EDEDED]'
                    "
                  >
                    <span>{{ link.label }}</span>
                    @switch (link.icon) {
                      @case ('github') {
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="13"
                          height="13"
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
                      @case ('code') {
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="13"
                          height="13"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          aria-hidden="true"
                        >
                          <polyline points="16 18 22 12 16 6"></polyline>
                          <polyline points="8 6 2 12 8 18"></polyline>
                        </svg>
                      }
                      @default {
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="13"
                          height="13"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          aria-hidden="true"
                        >
                          <path d="M7 7h10v10"></path>
                          <path d="M7 17 17 7"></path>
                        </svg>
                      }
                    }
                  </a>
                }
              </div>
            </div>

            <p class="mt-3 text-sm leading-relaxed text-zinc-600 dark:text-[#A1A1AA]">
              {{ project.description }}
            </p>

            <!-- Badges da Stack -->
            <div class="mt-4 flex flex-wrap gap-2" aria-label="Tecnologias utilizadas">
              @for (tech of project.stack; track tech) {
                <span
                  class="inline-flex items-center rounded-md border border-zinc-200 bg-zinc-100 px-2.5 py-1 font-mono text-xs text-zinc-700 dark:border-[#2E2E2E] dark:bg-[#121212] dark:text-[#EDEDED]/90"
                >
                  {{ tech }}
                </span>
              }
            </div>
          </article>
        }
      </div>
    </section>
  `
})
export class ProjectsSectionComponent {
  readonly codeComment = input.required<string>();
  readonly projects = input.required<ProjectItem[]>();
}
