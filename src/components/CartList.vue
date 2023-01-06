<template>
  <table class="table">
    <thead>
      <tr>
        <th>STT</th>
        <th>Tên</th>
        <th>Giá</th>
        <th>Số lượng trong kho</th>
        <th>Số lượng</th>
        <th>Thành tiền</th>
        <th>Hành động</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(card, index) in cardList" :key="index">
        <td scope="row">{{ index + 1 }}</td>
        <td>{{ card.name }}</td>
        <td>{{ card.price }}</td>
        <td>{{ card.quantityInStock }}</td>
        <td>
          <!-- <button
            class="btn btn-success"
            @click="handleIncrementQuantity(card)"
          >
            <i class="fa fa-caret-up"></i>
          </button> -->
          <button
            class="btn btn-success"
            @click="handleUpOrDownAmount(true, card)"
          >
            <i class="fa fa-caret-up"></i>
          </button>
          <span class="mx-2">{{ card.quantity }}</span>
          <!-- <button
            class="btn btn-success"
            @click="handleDecrementQuantity(card)"
          >
            <i class="fa fa-caret-down"></i>
          </button> -->
          <button
            class="btn btn-success"
            @click="handleUpOrDownAmount(false, card)"
          >
            <i class="fa fa-caret-down"></i>
          </button>
        </td>
        <td>{{ card.price * card.quantity }}</td>
        <td>
          <button class="btn btn-danger" @click="handleDelete(card)">
            <i class="fa fa-trash"></i>
          </button>
        </td>
      </tr>
      <tr>
        <td scope="row">Tổng tiền</td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td>{{ sumMoney }}</td>
        <td></td>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  props: {
    cardList: {
      type: Array,
    },
  },
  computed: {
    sumMoney() {
      return this.cardList.reduce(
        (sum, card) => (sum += card.price * card.quantity),
        0
      );
    },
  },
  methods: {
    handleDelete(card) {
      this.$emit("handleDelete", card);
    },
    handleIncrementQuantity(card) {
      this.$emit("handleIncrementQuantity", card);
    },
    handleDecrementQuantity(card) {
      this.$emit("handleDecrementQuantity", card);
    },
    handleUpOrDownAmount(status, card) {
      this.$emit("handleUpOrDownAmount", status, card);
    },
  },
};
</script>

<style></style>
