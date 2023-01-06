<template>
  <!-- Bấm vào khu vực đen đen đó là bấm vào modal bắt theo sự kiện handleClose để tắt modal -->
  <div class="modal" v-if="isOpen" @click="handleClose">
    <!-- Cái stop này nó sẽ stop lại các trình duyệt mặc định của trình duyệt -->
    <div class="modal__container" @click.stop>
      <div class="modal__header">
        <h1 class="modal__title">Cart</h1>
        <div class="modal__close" @click="handleClose">
          <i class="fa fa-times"></i>
        </div>
      </div>
      <div class="modal__body">
        <slot></slot>
      </div>
      <div class="model__footer"></div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    isOpen: {
      type: Boolean,
    },
    handleCloseModal: {
      type: Function,
    },
  },
  methods: {
    handleClose() {
      this.handleCloseModal();
    },
  },
};
</script>

<style>
.modal {
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  display: flex;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.4);
}
.modal__container {
  width: 950px;
  margin: auto;
  margin-top: 70px;
  background: white;
  border-radius: 1px solid #888;
  padding: 10px 20px;
}
.modal__header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.modal__body {
  text-align: center;
}
.modal__close {
  width: 50px;
  height: 50px;
  line-height: 50px;
  border-radius: 50%;
  text-align: center;
  font-size: 30px;
  cursor: pointer;
}
.modal__close:hover {
  background: rgba(0, 0, 0, 0.2);
}
</style>
