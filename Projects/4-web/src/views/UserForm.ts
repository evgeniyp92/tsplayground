export class UserForm {
  constructor(public parent: Element) {}

  // setting up the base template
  private template(): string {
    return `
			<div>
				<h1>User Form</h1>
				<input />
				<button>Click me</button>
			</div>
		`;
  }

  public render(): void {
    const templateElement = document.createElement('template');
    templateElement.innerHTML = this.template();
    this.parent.append(templateElement.content);
  }
}
