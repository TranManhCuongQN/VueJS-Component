<script>
import TheHeader from "./components/TheHeader.vue";
import ProductList from "./components/ProductList.vue";
export default {
  name: "App",
  components: {
    TheHeader,
    ProductList,
  },
  data() {
    return {
      cardList: [],
    };
  },
  methods: {
    handleBuy(productItem) {
      // this.cardList.push(productItem); //(cách này bị tham chiếu)
      const index = this.cardList.findIndex(
        (item) => item.id === productItem.id
      );
      if (index !== -1) {
        if (this.cardList[index].quantity < productItem.quantityInStock) {
          this.cardList[index].quantity += 1;
        } else {
          alert("Số lượng sản phẩm trong kho không đủ!");
        }
      } else {
        this.cardList = [...this.cardList, { ...productItem, quantity: 1 }];
      }
    },
    handleDelete(card) {
      this.cardList = this.cardList.filter((item) => item.id !== card.id);
    },
    handleIncrementQuantity(card) {
      const index = this.cardList.findIndex((item) => item.id === card.id);
      if (
        index !== -1 &&
        this.cardList[index].quantity < card.quantityInStock
      ) {
        this.cardList[index].quantity += 1;
      }
    },
    handleDecrementQuantity(card) {
      const index = this.cardList.findIndex((item) => item.id === card.id);
      if (index !== -1 && this.cardList[index].quantity > 1) {
        this.cardList[index].quantity -= 1;
      }
    },
    handleUpOrDownAmount(status, card) {
      const index = this.cardList.findIndex((item) => item.id === card.id);
      if (index !== -1) {
        if (status === true) {
          if (this.cardList[index].quantity < card.quantityInStock) {
            this.cardList[index].quantity += 1;
          } else {
            alert("Số lượng sản phẩm trong kho không đủ!");
          }
        } else {
          if (this.cardList[index].quantity > 1) {
            this.cardList[index].quantity -= 1;
          } else {
            alert("Số lượng sản phẩm trong giỏ hàng phải lớn hơn 1!");
          }
        }
      }
    },
  },
};
</script>

<template>
  <div>
    <header>
      <!-- <TheHeader
        :cardList="cardList"
        @handleDelete="handleDelete"
        @handleIncrementQuantity="handleIncrementQuantity"
        @handleDecrementQuantity="handleDecrementQuantity"
      /> -->
      <TheHeader
        :cardList="cardList"
        @handleDelete="handleDelete"
        @handleUpOrDownAmount="handleUpOrDownAmount"
      />
    </header>
    <main class="container">
      <ProductList @handleBuy="handleBuy" />
    </main>
  </div>
</template>

<style scoped></style>
