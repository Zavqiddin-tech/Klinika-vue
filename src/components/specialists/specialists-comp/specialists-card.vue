<template>
  <div class="specialists-card">
    <img :src="img" alt="" />
    <div class="specialists-info">
      <div class="specialists-title">{{ name }} {{ lname }} {{ sname }}</div>
      <div class="specialists-text" >
        <span v-for="item of profs">
          {{ item.title }}
        </span> 
      </div>
    </div>
  </div>
</template>
<script setup>
defineProps(["img", "name", "lname", "sname", "profs"]);

</script>
<style lang="scss">
.specialists-card {
  position: relative;
  background-color: #f8ece9;
  border-radius: 24px;
  cursor: pointer;
  transition: 0.25s;
  img {
    width: 100%;
    height: 100%;
  }
  &:hover {
    transform: translateY(-5px);
  }
}
.specialists-info {
  margin-left: 32px;
  position: absolute;
  bottom: 30px;
  .profession {
    margin-left: 10px;
    padding: 5px 10px;
    border-radius: 24px;
    font-size: 13px;
    font-weight: 200;
    border: 1px solid #c9baba;
    color: #c9baba;
    display: inline-block;
  }
}

.specialists-title {
  width: 250px;
  padding-bottom: 12px;
  font-size: 20px;
  line-height: 30px;
  font-weight: 600;
  color: #546272;
}
.specialists-text {
  font-weight: 200;
  line-height: 24px;
  display: flex;
  gap: 10px;
}

@media (max-width: 940px) {
  .specialists {
    &-title {
      font-size: 18px;
      line-height: 25px;
    }
    &-text {
      font-size: 14px;
      line-height: 20px;
    }
    &-info {
      margin-left: 10px;
      bottom: 20px;
    }
  }
}
</style>
