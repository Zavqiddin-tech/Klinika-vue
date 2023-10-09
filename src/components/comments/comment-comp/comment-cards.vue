<template>
  <div class="comment-cards">
    <el-row>
      <el-col :span="8" :sm="10" :md="8" :xs="22">
        <comment-card
          text="Я лишь недавно узнала про эту клинику, нашла в инете по отзывам. Была у дерматолога Голубченко М. В., все посмотрела, объяснила. пришли к выводу, что небольшое лечение всё-таки необходимо. Стоимость приема в пределах разумного. Спасибо."
          :toggle="false"
        />
      </el-col>
      <el-col :span="8" :sm="10" :md="8" :xs="22">
        <comment-card
          text="К Юлии Сергеевне хожу уже 7 лет, очень нравится ее подход, никогда не навязывает лишнего, если видит, что нет необходимости в процедуре. Все что она рекомендовала мне, всегда имеет эффект. Последний раз делала RF лифтинг, несколько процедур в комплексе с биоверитализацией и витаминами. Лицо заметно подтянулось."
          :toggle="false"
        />
      </el-col>
      <el-col :span="8" :sm="10" :md="8" :xs="22">
        <comment-card text="Для нас важно ваше мнение!" :toggle="true" />
      </el-col>
    </el-row>
  </div>
</template>

<script setup>
import commentCard from "./comment-card.vue";
</script>

<style lang="scss">
.comment {
    &-cards {
        margin-left: -15px;
        margin-right: -15px;
        padding-top: 42px;
        .el-col {
            padding: 0px 15px;
        }
    }
    &-card {
        height: 100%;
        padding: 32px;
        border-radius: 24px;
        background-color: #fff;
        .title {
            padding-bottom: 230px;
        }
    }
    
}


@media (max-width: 1000px) {
  .comment-cards {
    .el-row {
      justify-content: center;
      gap: 30px;
    }
  }

  .comment-card .title {
    padding-bottom: 140px;
  }
}
</style>
