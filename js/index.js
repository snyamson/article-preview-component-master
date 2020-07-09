let tooltipBtn = document.querySelector("#tooltip");

tooltipBtn.addEventListener("click", () => {

    let showTooltip = document.querySelector(".tooltip-text");

    showTooltip.classList.toggle("show-tooltip")
});