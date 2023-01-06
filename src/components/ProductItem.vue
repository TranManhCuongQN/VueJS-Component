<template>
  <div>
    <div class="card text-left">
      <img class="card-img-top" :src="productItem.image" alt="" />
      <div class="card-body">
        <h4 class="card-title">{{ productItem.name }}</h4>
        <p class="card-text text-danger">{{ productItem.price }}</p>
      </div>
      <div class="mb-2">
        <button class="btn btn-danger ml-2" @click="handleBuy(productItem)">
          Mua
        </button>
        <button class="btn btn-info ml-2" @click="handleModalDetail">
          Chi tiết
        </button>
      </div>
    </div>
    <teleport to="#app">
      <app-modal
        :isOpen="isOpenModalDetail"
        :handleCloseModal="handleCloseModalDetail"
      >
        <product-detail :productDetail="productItem" />
      </app-modal>
    </teleport>
  </div>
</template>

<script>
import ProductDetail from "./ProductDetail.vue";
export default {
  data() {
    return {
      isOpenModalDetail: false,
    };
  },
  props: {
    productItem: {
      type: Object,
      required: true,
    },
  },
  components: {
    ProductDetail,
  },
  methods: {
    handleBuy(productItem) {
      // Truyền dữ liệu từ component con lên component cha
      this.$emit("handleBuy", productItem);
    },
    handleCloseModalDetail() {
      this.isOpenModalDetail = false;
    },
    handleModalDetail() {
      this.isOpenModalDetail = true;
    },
  },
};
</script>

<style></style>
