<template>
  <div class="asp_card">
    <div class="text-right">
      <span class="bg-asp-white q-pa-sm show-card">
        <a class="q-mr-sm">
          <img alt="logo" src="~assets/eye.svg" />
        </a>
        <span class="font-sm clr-positive text-weight-medium cursor-pointer">Show card number</span>
      </span>
    </div>
    <div class="asp_card_container q-pa-lg clr-asp-white" :class="{inactive: card.freeze}">
      <div class="text-right">
        <a>
          <img alt="logo" src="~assets/logoNtext.svg" />
        </a>
      </div>
      <div class="text-h5 q-my-lg">{{ card.name }}</div>
      <div>... ... ... {{ card.last4Digits }}</div>
      <div>
        <span class="q-mr-lg">Thru: {{ card.expiry }}</span>
        <span>CVV: <span>***</span></span>
      </div>
      <div class="text-right">
        <a>
          <img alt="logo" src="~assets/visa.svg" />
        </a>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    card: { type: Object },
  },
  setup() {
    
  },
}
</script>