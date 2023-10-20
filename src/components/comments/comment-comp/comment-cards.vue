<template>
  <div class="comment-cards">
    <el-row>
      <el-col :span="8" :md="8" :sm="11" :xs="20" >
        <comment-card
          text="Я лишь недавно узнала про эту клинику, нашла в инете по отзывам. Была у дерматолога Голубченко М. В., все посмотрела, объяснила. пришли к выводу, что небольшое лечение всё-таки необходимо. Стоимость приема в пределах разумного. Спасибо."
          :toggle="false"
        />
      </el-col>
      <el-col :span="8" :md="8" :sm="11" :xs="20" >
        <comment-card
          text="К Юлии Сергеевне хожу уже 7 лет, очень нравится ее подход, никогда не навязывает лишнего, если видит, что нет необходимости в процедуре. Все что она рекомендовала мне, всегда имеет эффект. Последний раз делала RF лифтинг, несколько процедур в комплексе с биоверитализацией и витаминами. Лицо заметно подтянулось."
          :toggle="false"
        />
      </el-col>
      <el-col :span="8" :md="8" :sm="15" :xs="20" >
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
        .el-row {
          justify-content: center;
        }
        .el-col {
            padding: 0px 15px;
        }
    }
    
}


@media (max-width: 992px) {
  .comment-cards {
    .el-row {
      gap: 30px;
    }
  }

  .comment-card .title {
    padding-bottom: 140px;
  }
}

@media (max-width: 650px) {
  .comment {
    &-cards {
      .el-col-xs-20 {
        max-width: 95%;
        flex: 0 0 95%;
      }
    }
  }
}

</style>
