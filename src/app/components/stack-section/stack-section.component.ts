import { ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({
  selector: 'app-stack-section',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section aria-labelledby="section-stack" class="flex flex-col gap-3.5">
      <h2
        id="section-stack"
        class="font-mono text-sm font-medium tracking-wider text-[#D97706] dark:text-[#F59E0B]"
      >
        {{ codeComment() }}
      </h2>

      <div
        class="rounded-2xl border border-zinc-200 bg-white p-5 sm:p-6 transition-colors duration-150 dark:border-[#2E2E2E] dark:bg-[#1E1E1E]"
      >
        <ul class="flex flex-wrap gap-2.5" aria-label="Lista de tecnologias e competências">
          @for (tech of items(); track tech) {
            <li
              class="inline-flex items-center rounded-xl border border-zinc-200 bg-zinc-50 px-3.5 py-2 font-mono text-xs sm:text-sm font-medium text-zinc-800 transition-colors duration-150 hover:border-[#F59E0B] hover:text-[#D97706] dark:border-[#2E2E2E] dark:bg-[#121212] dark:text-[#EDEDED] dark:hover:border-[#F59E0B] dark:hover:text-[#F59E0B]"
            >
              {{ tech }}
            </li>
          }
        </ul>
      </div>

      <!-- Rodapé discreto centralizado (IBM Plex Mono) -->
      <footer class="pt-6 pb-3 text-center">
        <p class="font-mono text-xs sm:text-sm text-zinc-500 dark:text-[#A1A1AA]">
          {{ footerText() }}
        </p>
      </footer>
    </section>
  `
})
export class StackSectionComponent {
  readonly codeComment = input.required<string>();
  readonly items = input.required<string[]>();
  readonly footerText = input.required<string>();
}
