<template>
  <div class="asp-card-actions q-pa-lg flex justify-between font-md">
    <div class="action-type" @click="$emit('toggleFreeze')">
      <img src="~assets/freezeCard.svg" />
      <span>{{ ! card.freeze ? 'Freeze card' : 'Unfreeze' }}</span>
    </div>
    <div class="action-type">
      <img src="~assets/setSpend.svg" />
      <span>Set spend limit</span>
    </div>
    <div class="action-type">
      <img src="~assets/GPay.svg" />
      <span>Add to GPay</span>
    </div>
    <div class="action-type">
      <img src="~assets/replaceCard.svg" />
      <span>Replace card</span>
    </div>
    <div class="action-type" @click="$emit('removeCard')">
      <img src="~assets/deactivateCard.svg" />
      <span>Cancel card</span>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    card: { type: Object }
  },
  setup() {
    
  },
}
</script>