import Component from "../classes/Component";
import { mapEach } from "../utils/dom";

export default class ResumeMenu extends Component {
  constructor() {
    super({
      element: "[data-resume-menu]",
      elements: {
        trigger: "[data-resume-trigger]",
        menu: "[data-resume-dropdown]",
      },
    });

    if (!this.element) {
      return;
    }

    this.isOpen = false;

    this.elements.trigger.addEventListener("click", () => {
      this.toggle();
    });

    this.elements.trigger.addEventListener("keydown", (e) => {
      this.onTriggerKeydown(e);
    });

    mapEach(this.elements.menu.children, (item) => {
      item.addEventListener("click", () => {
        this.close();
      });
    });

    document.addEventListener("click", (e) => {
      if (this.isOpen && !this.element.contains(e.target)) {
        this.close();
      }
    });

    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") {
        this.close();
      }
    });
  }

  onTriggerKeydown(e) {
    if (e.key === "ArrowDown" || e.key === "ArrowUp") {
      e.preventDefault();
      this.open();

      const items = this.elements.menu.children;
      const target = e.key === "ArrowDown" ? items[0] : items[items.length - 1];

      target.focus();
    }
  }

  toggle() {
    if (this.isOpen) {
      this.close();
    } else {
      this.open();
    }
  }

  open() {
    this.isOpen = true;
    this.elements.menu.classList.add("is-open");
    this.elements.trigger.setAttribute("aria-expanded", "true");
  }

  close() {
    if (!this.isOpen) {
      return;
    }

    this.isOpen = false;
    this.elements.menu.classList.remove("is-open");
    this.elements.trigger.setAttribute("aria-expanded", "false");
    this.elements.trigger.focus();
  }
}
