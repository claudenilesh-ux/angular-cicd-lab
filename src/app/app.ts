import { Component, computed, signal } from "@angular/core";

@Component({
  selector: "app-root",
  standalone: true,
  templateUrl: "./app.html",
  styleUrl: "./app.css",
})
export class App {
  readonly stages = [
    {
      number: "01",
      title: "Write code",
      description: "Build and test your Angular app on your computer.",
      tag: "LOCAL",
    },
    {
      number: "02",
      title: "Push to GitHub",
      description: "Upload your changes to the main branch.",
      tag: "GIT",
    },
    {
      number: "03",
      title: "Automatic build",
      description: "GitHub Actions installs dependencies and builds Angular.",
      tag: "CI",
    },
    {
      number: "04",
      title: "Live deployment",
      description: "GitHub Pages publishes the build for everyone to see.",
      tag: "CD",
    },
  ];

  readonly completed = signal<Readonly<Record<number, boolean>>>({});
  readonly completedCount = computed(
    () => this.stages.filter((_, index) => this.completed()[index]).length,
  );

  toggleStage(index: number): void {
    this.completed.update((current) => ({
      ...current,
      [index]: !current[index],
    }));
  }

  reset(): void {
    this.completed.set({});
  }
}
