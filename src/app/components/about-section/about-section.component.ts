import { ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({
  selector: 'app-about-section',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section aria-labelledby="section-about" class="flex flex-col gap-3.5">
      <h2
        id="section-about"
        class="font-mono text-sm font-medium tracking-wider text-[#D97706] dark:text-[#F59E0B]"
      >
        {{ codeComment() }}
      </h2>

      <div
        class="rounded-2xl border border-zinc-200 bg-white p-5 sm:p-6 transition-colors duration-150 hover:border-[#F59E0B]/60 dark:border-[#2E2E2E] dark:bg-[#1E1E1E] dark:hover:border-[#F59E0B]/60"
      >
        <p class="text-[15px] sm:text-base leading-relaxed text-zinc-700 dark:text-[#EDEDED]/90">
          {{ content() }}
        </p>
      </div>
    </section>
  `
})
export class AboutSectionComponent {
  readonly codeComment = input.required<string>();
  readonly content = input.required<string>();
}
