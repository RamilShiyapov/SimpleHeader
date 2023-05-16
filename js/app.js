const ToolTip = () => {
  const ToolTips = document.querySelectorAll('[data-tooltip]');
  let ToolTipElement = null;

  ToolTips.forEach(Item => {
    Item.addEventListener('mousemove', Event => {
      const TooltipText = Item.dataset.tooltip;

      if (!ToolTipElement) {
        ToolTipElement = document.createElement('div');
        ToolTipElement.classList.add('ToolTip');
        ToolTipElement.innerHTML = `<span class="ToolTipText">${TooltipText}</span>`;
        Item.parentNode.appendChild(ToolTipElement);
      } else {
        ToolTipElement.querySelector('.ToolTipText').textContent = TooltipText;
      }

      ToolTipElement.style.top = `${Event.clientY + 10}px`;
      ToolTipElement.style.left = `${Event.clientX + 10}px`;
    });

    Item.addEventListener('mouseleave', () => {
      if (ToolTipElement) {
        ToolTipElement.remove();
        ToolTipElement = null;
      }
    });
  });
};

ToolTip();

const HiddenScroll = () => {
  const Body = document.body;

  const MobileMenuButtons = document.querySelectorAll(".MobileMenuButton");

  MobileMenuButtons.forEach((MobileMenuButton) => {
    MobileMenuButton.addEventListener("click", () => {
      Body.style.overflow = Body.style.overflow === "hidden" ? "auto" : "hidden";
    });
  });
};

HiddenScroll();