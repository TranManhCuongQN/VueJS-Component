<template>
  <section class="container">
    <div class="row">
      <div class="col-sm-4">
        <img :src="productDetail.image" alt="" class="img-thumbnail" />
      </div>
      <div class="col-sm-8">
        <div class="alert alert-success">
          <b>Name: </b> <span>{{ productDetail.name }}</span>
        </div>
        <div class="alert alert-success">
          <b>Mô tả:</b>
          <span>{{ productDetail.description }}</span>
        </div>
        <div class="alert alert-success">
          <b>Gía bán: </b>
          <span>{{ productDetail.price }} VNĐ</span>
        </div>
        <div class="alert alert-success">
          <b>Số lượng tồn kho: </b>
          <span>{{ productDetail.quantityInStock }}</span>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    productDetail: {
      type: Object,
    },
  },
};
</script>

<style></style>
