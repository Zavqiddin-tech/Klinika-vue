<template>
  <div class="contact-boxes">
    <el-row>
      <el-col :span="12" :sm="20" :md="12" :xs="24">
        <div class="contact-info">
          <div class="title">Контакты</div>
          <div class="title-small light">
            Центр косметологии Клиники Екатерининская
          </div>
          <div class="contact-addres">
            <ul>
              <li class="text light">Адрес</li>
              <li class="text big">ул. Кожевенная, 66</li>
            </ul>
            <ul>
              <li class="text light">Время работы</li>
              <li class="text big">пн-пт: 8:00 - 20:00</li>
              <li class="text big">сб: 8:00 - 18:00</li>
              <li class="text big">вс: 10:00 - 18:00</li>
            </ul>
            <ul>
              <li class="text light">Социальные сети</li>
              <li class="text big">beautyclinic23ru</li>
            </ul>
          </div>
        </div>
      </el-col>
      <el-col :span="12" :sm="20" :md="12" :xs="24">
        <div class="contact-maps">
          <div style="position: relative; overflow: hidden">
            <a
              href="https://yandex.uz/maps/10335/tashkent/?utm_medium=mapframe&utm_source=maps"
              style="color: #eee; font-size: 12px; position: absolute; top: 0px"
              >Ташкент</a
            ><a
              href="https://yandex.uz/maps/10335/tashkent/?ll=69.269531%2C41.309454&utm_medium=mapframe&utm_source=maps&z=14.94"
              style="
                color: #eee;
                font-size: 12px;
                position: absolute;
                top: 14px;
              "
              >Ташкент — Яндекс Карты</a
            ><iframe
              src="https://yandex.uz/map-widget/v1/?ll=69.269531%2C41.309454&z=14.94"
              width="100%"
              height="100%"
              frameborder="1"
              allowfullscreen="true"
              style="position: relative"
            ></iframe>
          </div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script setup></script>

<style lang="scss">

</style>
