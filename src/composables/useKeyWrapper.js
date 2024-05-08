export function useKeyWrapper() {
  document.addEventListener("keydown", (event) => {
    event.preventDefault();
    const Winkey = document.querySelector(`.Win${event.code}`);
    const MacKey = document.querySelector(`.Mac${event.code}`);

    if (Winkey) {
      Winkey.style.boxShadow = "none";
      Winkey.style.backgroundColor = "#90EE90";
    } else if (MacKey) {
      MacKey.style.boxShadow = "none";
      MacKey.style.backgroundColor = "#90EE90";
    }
  });

  document.addEventListener("keyup", (event) => {
    const Winkey = document.querySelector(`.Win${event.code}`);
    const MacKey = document.querySelector(`.Mac${event.code}`);

    if (Winkey) {
      Winkey.style.boxShadow = "";
    } else if (MacKey) {
      MacKey.style.boxShadow = "";
    }
  });
}
