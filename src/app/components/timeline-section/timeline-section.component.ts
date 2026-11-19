import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { TimelineItem } from '../../data/profile.data';

@Component({
  selector: 'app-timeline-section',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section aria-labelledby="section-timeline" class="flex flex-col gap-3.5">
      <h2
        id="section-timeline"
        class="font-mono text-sm font-medium tracking-wider text-[#D97706] dark:text-[#F59E0B]"
      >
        {{ codeComment() }}
      </h2>

      <div
        class="rounded-2xl border border-zinc-200 bg-white p-5 sm:p-6 transition-colors duration-150 dark:border-[#2E2E2E] dark:bg-[#1E1E1E]"
      >
        <ol class="relative ml-2 border-l border-zinc-300 dark:border-[#2E2E2E] space-y-7">
          @for (item of items(); track item.id) {
            <li class="relative pl-6">
              <!-- Marcador da linha do tempo -->
              @if (item.current) {
                <span
                  class="absolute -left-[6px] top-1.5 flex h-3 w-3 items-center justify-center"
                  aria-hidden="true"
                >
                  <span
                    class="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#F59E0B] opacity-75"
                  ></span>
                  <span
                    class="relative inline-flex h-3 w-3 rounded-full border-2 border-white bg-[#F59E0B] dark:border-[#1E1E1E]"
                  ></span>
                </span>
              } @else {
                <span
                  class="absolute -left-[6px] top-1.5 h-3 w-3 rounded-full border-2 border-white bg-emerald-500 dark:border-[#1E1E1E]"
                  aria-hidden="true"
                ></span>
              }

              <div class="flex flex-col gap-1">
                <div class="flex flex-wrap items-center gap-2">
                  <h3 class="font-display text-base font-bold text-zinc-900 dark:text-[#EDEDED]">
                    {{ item.organization }}
                  </h3>

                  @if (item.current) {
                    <span
                      class="inline-flex items-center rounded border border-[#F59E0B]/40 bg-[#F59E0B]/10 px-1.5 py-0.5 font-mono text-[10px] font-semibold tracking-wider text-[#B45309] dark:text-[#F59E0B]"
                    >
                      ATUAL
                    </span>
                  } @else if (item.current === false) {
                    <span
                      class="inline-flex items-center gap-1 rounded border border-emerald-500/40 bg-emerald-500/10 px-1.5 py-0.5 font-mono text-[10px] font-semibold tracking-wider text-emerald-700 dark:text-emerald-400"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="10"
                        height="10"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="3"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        aria-hidden="true"
                      >
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                      CONCLUÍDO
                    </span>
                  }
                </div>

                <!-- Cargo / Curso sempre em destaque âmbar -->
                <span class="font-mono text-xs font-medium text-[#D97706] dark:text-[#F59E0B]">
                  {{ item.role }}
                </span>
              </div>

              <p class="mt-2.5 text-sm leading-relaxed text-zinc-600 dark:text-[#A1A1AA]">
                {{ item.description }}
              </p>
            </li>
          }
        </ol>
      </div>
    </section>
  `
})
export class TimelineSectionComponent {
  readonly codeComment = input.required<string>();
  readonly items = input.required<TimelineItem[]>();
}
