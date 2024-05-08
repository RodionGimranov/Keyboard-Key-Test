<template>
  <section class="basic_input_keys_container">
    <div class="row_of_keys">
      <span class="WinBackquote Winkey">` ~</span>
      <span class="WinDigit1 Winkey">1 !</span>
      <span class="WinDigit2 Winkey">2 @</span>
      <span class="WinDigit3 Winkey">3 #</span>
      <span class="WinDigit4 Winkey">4 $</span>
      <span class="WinDigit5 Winkey">5 %</span>
      <span class="WinDigit6 Winkey">6 ^</span>
      <span class="WinDigit7 Winkey">7 &</span>
      <span class="WinDigit8 Winkey">8 *</span>
      <span class="WinDigit9 Winkey">9 (</span>
      <span class="WinDigit0 Winkey">0 )</span>
      <span class="WinMinus Winkey">- _</span>
      <span class="WinEqual Winkey">+ =</span>
      <span class="WinBackspace Winkey">Backspace</span>
    </div>
    <div class="row_of_keys">
      <span class="WinTab Winkey">Tab</span>
      <span class="WinKeyQ Winkey">Q</span>
      <span class="WinKeyW Winkey">W</span>
      <span class="WinKeyE Winkey">E</span>
      <span class="WinKeyR Winkey">R</span>
      <span class="WinKeyT Winkey">T</span>
      <span class="WinKeyY Winkey">Y</span>
      <span class="WinKeyU Winkey">U</span>
      <span class="WinKeyI Winkey">I</span>
      <span class="WinKeyO Winkey">O</span>
      <span class="WinKeyP Winkey">P</span>
      <span class="WinBracketLeft Winkey">[ {</span>
      <span class="WinBracketRight Winkey">] }</span>
      <span class="WinBackslash Winkey">\ |</span>
    </div>
    <div class="row_of_keys">
      <span class="WinCapsLock Winkey">Caps Lock</span>
      <span class="WinKeyA Winkey">A</span>
      <span class="WinKeyS Winkey">S</span>
      <span class="WinKeyD Winkey">D</span>
      <span class="WinKeyF Winkey">F</span>
      <span class="WinKeyG Winkey">G</span>
      <span class="WinKeyH Winkey">H</span>
      <span class="WinKeyJ Winkey">J</span>
      <span class="WinKeyK Winkey">K</span>
      <span class="WinKeyL Winkey">L</span>
      <span class="WinSemicolon Winkey">; :</span>
      <span class="WinQuote Winkey">' "</span>
      <span class="WinEnter Winkey">Enter</span>
    </div>
    <div class="row_of_keys">
      <span class="WinShiftLeft Winkey">Shift</span>
      <span class="WinKeyZ Winkey">Z</span>
      <span class="WinKeyX Winkey">X</span>
      <span class="WinKeyC Winkey">C</span>
      <span class="WinKeyV Winkey">V</span>
      <span class="WinKeyB Winkey">B</span>
      <span class="WinKeyN Winkey">N</span>
      <span class="WinKeyM Winkey">M</span>
      <span class="WinComma Winkey">, <</span>
      <span class="WinPeriod Winkey">. ></span>
      <span class="WinSlash Winkey">/ ?</span>
      <span class="WinShiftRight Winkey">Shift</span>
    </div>
    <div class="row_of_keys">
      <span class="WinControlLeft Winkey">Ctrl</span>
      <span class="WinMetaLeft Winkey"
        ><img
          class="win_logo"
          src="../../assets/svg/WinOS-icons/windows-logo.svg"
          alt="Windows logo image"
      /></span>
      <span class="WinAltLeft Winkey">Alt</span>
      <span class="WinSpace Winkey"></span>
      <span class="WinAltRight Winkey">Alt</span>
      <span class="WinFn Winkey">Fn</span>
      <span class="WinControlRight Winkey">Ctrl</span>
    </div>
  </section>
</template>

<script setup>
import { useKeyWrapper } from "../../composables/useKeyWrapper.js";

useKeyWrapper();
</script>

<style lang="scss">
@import "../../styles/variables.scss";

.basic_input_keys_container {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 4px;
}

.row_of_keys {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 4px;
}

.WinBackspace {
  width: 107px;
}

.WinTab {
  width: 83px;
}

.WinBackslash {
  width: 77px;
}

.WinCapsLock {
  width: 113px;
}

.WinEnter {
  width: 104px;
}

.WinShiftLeft {
  width: 131px;
}

.WinShiftRight {
  width: 143px;
}

.WinControlRight,
.WinControlLeft,
.WinMetaLeft,
.WinAltRight,
.WinAltLeft,
.WinFn {
  width: 83px;
}

.WinSpace {
  width: 326px;
}
</style>
