<template>
  <section class="mac_basic_input_keys">
    <div class="mac_key_row">
      <span class="MacBackquote MacKey">~<br />`</span>
      <span class="MacDigit1 MacKey MacDigitKey">!<br />1</span>
      <span class="MacDigit2 MacKey MacDigitKey">@<br />2</span>
      <span class="MacDigit3 MacKey MacDigitKey">#<br />3</span>
      <span class="MacDigit4 MacKey MacDigitKey">$<br />4</span>
      <span class="MacDigit5 MacKey MacDigitKey">%<br />5</span>
      <span class="MacDigit6 MacKey MacDigitKey">^<br />6</span>
      <span class="MacDigit7 MacKey MacDigitKey">&<br />7</span>
      <span class="MacDigit8 MacKey MacDigitKey">*<br />8</span>
      <span class="MacDigit9 MacKey MacDigitKey">(<br />9</span>
      <span class="MacDigit0 MacKey MacDigitKey">)<br />0</span>
      <span class="MacMinus MacKey MacDigitKey">_<br />-</span>
      <span class="MacEqual MacKey MacDigitKey">+<br />=</span>
      <span class="MacBackspace MacKey">delete</span>
    </div>
    <div class="mac_key_row">
      <span class="MacTab MacKey">tab</span>
      <span class="MacKeyQ MacLetter MacKey">Q</span>
      <span class="MacKeyW MacLetter MacKey">W</span>
      <span class="MacKeyE MacLetter MacKey">E</span>
      <span class="MacKeyR MacLetter MacKey">R</span>
      <span class="MacKeyT MacLetter MacKey">T</span>
      <span class="MacKeyY MacLetter MacKey">Y</span>
      <span class="MacKeyU MacLetter MacKey">U</span>
      <span class="MacKeyI MacLetter MacKey">I</span>
      <span class="MacKeyO MacLetter MacKey">O</span>
      <span class="MacKeyP MacLetter MacKey">P</span>
      <span class="MacBracketLeft MacKey">{<br />[</span>
      <span class="MacBracketRight MacKey">}<br />]</span>
      <span class="MacBackslash MacKey">|<br />\</span>
    </div>
    <div class="mac_key_row">
      <span class="MacCapsLock MacKey"><span class="dot"></span>caps lock</span>
      <span class="MacKeyA MacLetter MacKey">A</span>
      <span class="MacKeyS MacLetter MacKey">S</span>
      <span class="MacKeyD MacLetter MacKey">D</span>
      <span class="MacKeyF MacLetter MacKey">F</span>
      <span class="MacKeyG MacLetter MacKey">G</span>
      <span class="MacKeyH MacLetter MacKey">H</span>
      <span class="MacKeyJ MacLetter MacKey">J</span>
      <span class="MacKeyK MacLetter MacKey">K</span>
      <span class="MacKeyL MacLetter MacKey">L</span>
      <span class="MacSemicolon MacKey">:<br />;</span>
      <span class="MacQuote MacKey">"<br />'</span>
      <span class="MacEnter MacKey">return</span>
    </div>
    <div class="mac_key_row">
      <span class="MacShiftLeft MacKey">shift</span>
      <span class="MacKeyZ MacLetter MacKey">Z</span>
      <span class="MacKeyX MacLetter MacKey">X</span>
      <span class="MacKeyC MacLetter MacKey">C</span>
      <span class="MacKeyV MacLetter MacKey">V</span>
      <span class="MacKeyB MacLetter MacKey">B</span>
      <span class="MacKeyN MacLetter MacKey">N</span>
      <span class="MacKeyM MacLetter MacKey">M</span>
      <span class="MacComma MacKey"> <<br />, </span>
      <span class="MacPeriod MacKey">><br />.</span>
      <span class="MacSlash MacKey">?<br />/</span>
      <span class="MacShiftRight MacKey">shift</span>
    </div>
    <div class="mac_key_row">
      <span class="MacControlLeft MacKey"
        ><img
          class="mac_key_icon"
          src="../../assets/svg/MacOS-icons/control-key.svg"
          alt="Icon image"
        />control</span
      >
      <span class="MacAltLeft MacKey"
        ><img
          class="mac_key_icon"
          src="../../assets/svg/MacOS-icons/option-key.svg"
          alt="Icon image"
        />option</span
      >
      <span class="MacMetaLeft MacKey"
        ><img
          class="mac_key_icon"
          src="../../assets/svg/MacOS-icons/command-key.svg"
          alt="Icon image"
        />command</span
      >
      <span class="MacSpace MacKey"></span>
      <span class="MacMetaRight MacKey"
        ><img
          class="mac_key_icon"
          src="../../assets/svg/MacOS-icons/command-key.svg"
          alt="Icon image"
        />command</span
      >
      <span class="MacAltRight MacKey"
        ><img
          class="mac_key_icon"
          src="../../assets/svg/MacOS-icons/option-key.svg"
          alt="Icon image"
        />option</span
      >
      <span class="MacControlRight MacKey"
        ><img
          class="mac_key_icon"
          src="../../assets/svg/MacOS-icons/control-key.svg"
          alt="Icon image"
        />control</span
      >
    </div>
  </section>
</template>

<script setup>
import { useKeyWrapper } from "../../composables/useKeyWrapper.js";

useKeyWrapper();
</script>

<style lang="scss">
@import "../../styles/variables.scss";

.mac_basic_input_keys,
.mac_key_row {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 4px;
}

.mac_key_row {
  flex-direction: row;
}

.MacBackquote,
.MacLetter {
  font-size: 18px;
}

.MacDigitKey {
  padding: 0px;
  font-size: 16px;

  display: flex;
  justify-content: center;
  align-items: center;
}

.MacBackspace {
  width: 107px;
  padding: 0px 12px 6px 0px;
  font-size: 14px;

  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
}

.dot {
  width: 5px;
  height: 5px;

  background: $primary_black_color;
  border-radius: 100px;
}

.MacBracketLeft,
.MacBracketRight,
.MacBackslash {
  font-size: 16px;
  padding: 0px;
}

.MacBackslash {
  width: 67px;
}

.MacCapsLock,
.MacEnter,
.MacShiftLeft,
.MacShiftRight,
.MacTab {
  width: 113px;
  padding: 0px 0px 6px 12px;
  font-size: 14px;

  display: flex;
  justify-content: flex-start;
  align-items: flex-end;
}

.MacTab {
  width: 93px;
}

.MacCapsLock {
  padding: 10px 0px 6px 12px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
}

.MacEnter {
  width: 104px;
}

.MacShiftLeft {
  width: 131px;
}

.MacShiftRight {
  width: 143px;
  padding: 0px 12px 6px 0px;
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
}

.MacComma,
.MacPeriod,
.MacSlash {
  font-size: 18px;
}

.MacSpace {
  width: 322px;
}

.MacControlLeft,
.MacAltLeft,
.MacMetaLeft {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-end;
  padding: 10px 12px 6px 0px;
  font-size: 14px;
}

.MacControlLeft {
  width: 107px;
  border-bottom-left-radius: 24px;
}

.MacAltLeft {
  width: 62px;
}

.MacMetaLeft {
  width: 84px;
}

.MacMetaRight,
.MacAltRight,
.MacControlRight {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  padding: 10px 0px 6px 12px;
  font-size: 14px;
}

.MacAltRight,
.MacControlRight,
.MacMetaRight {
  width: 83px;
}
</style>
