<template>
    <div>
      <div class="thumbnail" v-for="(image, index) in images" :key="index" @click="previewImage(image)">
        <img :src="image.thumbnail" alt="thumbnail" />
      </div>
  
      <div v-if="showPreview" class="preview-modal" @click="closePreview">
        <img :src="currentImage" alt="preview" />
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        images: [
        { thumbnail: require('@/assets/image/test_img_1.jpg'), full: require('@/assets/image/test_img_1.jpg') },
        { thumbnail: require('@/assets/image/test_img_2.jpg'), full: require('@/assets/image/test_img_2.jpg') },
          // 添加更多图片
        ],
        showPreview: false,
        currentImage: ''
      };
    },
    methods: {
      previewImage(image) {
        this.currentImage = image.full;
        this.showPreview = true;
      },
      closePreview() {
        this.showPreview = false;
        this.currentImage = '';
      }
    }
  };
  </script>
  
  <style>
  .thumbnail {
    cursor: pointer;
    margin: 5px;
  }
  
  .preview-modal {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.8);
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  .preview-modal img {
    max-width: 90%;
    max-height: 90%;
  }
  </style>
  