<template>
  <div class="demo-collapse">
    <el-collapse v-model="activeName" accordion>
      <el-collapse-item title="Образование" name="1">
        <div>
          Кубанский государственный медицинский университет, квалификация Врач по специальности Лечебное дело , 2010 г.
        </div>
        <div>
          Интернатура КубГМУ по специальности Дерматовенерология, 2017 г.
        </div>
      </el-collapse-item>
      <el-collapse-item title="Дополнительное образование" name="2">
        <div>
          Кубанский государственный медицинский университет, квалификация Врач по специальности Лечебное дело , 2010 г.
        </div>
        <div>
          Интернатура КубГМУ по специальности Дерматовенерология, 2017 г.
        </div>
      </el-collapse-item>
      <el-collapse-item title="Направления работы специалиста" name="3">
        <div>
          Кубанский государственный медицинский университет, квалификация Врач по специальности Лечебное дело , 2010 г.
        </div>
        <div>
          Интернатура КубГМУ по специальности Дерматовенерология, 2017 г.
        </div>
      </el-collapse-item>
      <el-collapse-item title="Сертификаты" name="4">
        <div>
          Кубанский государственный медицинский университет, квалификация Врач по специальности Лечебное дело , 2010 г.
        </div>
        <div>
          Интернатура КубГМУ по специальности Дерматовенерология, 2017 г.
        </div>
      </el-collapse-item>
    </el-collapse>
  </div>
</template>

<script setup></script>

<style lang="scss">
.demo-collapse {
  .el-collapse {
    padding-top: 30px;
    padding-bottom: 60px;
  &-item {
    margin-top: 30px;
    background: #fff;
    box-shadow: 0px 0px 16px 0px rgba(230, 230, 230, 0.5);
    &__wrap {
      border-radius: 24px;
    }
    &__header {
      padding: 20px 30px;
      font-weight: 600;
      color: #546272;
      border-radius: 24px;

    }
    div {
      font-size: 12px;
      color: #546272;
    }
    &__content {
      padding-left: 30px;
    }
  }
}
}
</style>
