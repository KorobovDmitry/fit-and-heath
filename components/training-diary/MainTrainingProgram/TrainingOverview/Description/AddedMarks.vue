<template>
  <div class="added-marks">
    <p class="added-marks__title">Добавленные отметки</p>
    <div class="added-marks__elements">
      <div class="element">
        <p class="element__text">Низкоуглеводное</p>
        <i class="ti-close element__icon"></i>
      </div>
      <div class="element">
        <p class="element__text">Веганское</p>
        <i class="ti-close element__icon"></i>
      </div>
      <div class="element">
        <p class="element__text">Без ГМО</p>
        <i class="ti-close element__icon"></i>
      </div>
      <div class="element">
        <p class="element__text">Для набора массы</p>
        <i class="ti-close element__icon"></i>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
@import "@/assets/scss/vars.scss";

.added-marks {
  flex: 1 1 auto;
  display: flex;
  flex-direction: column;
  margin-top: 5px;
  margin-left: 5px;
  // margin-bottom: -73px;
  padding: 10px;
  background: $white;
  border: 1px solid $blockBorder;
  border-radius: 6px;
  .added-marks__title {
    margin-bottom: 10px;
    padding: 0 10px 10px 10px;
    width: 100%;
    text-align: center;
    font-weight: 500;
    border-bottom: 1px dashed $blockBorder;
    white-space: nowrap;
  }
  .added-marks__elements {
    padding: 0 10px;
    margin-bottom: 15px;
    .element {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-right: 5px;
      margin-bottom: 5px;
      padding: 5px 10px;
      background: $hiddenBlockBG;
      border-radius: 6px;
      .element__text {
        font-size: 14px;
        white-space: nowrap;
      }
      .element__icon {
        margin-left: 10px;
        font-size: 10px;
        cursor: pointer;
      }
    }
  }
}

</style>
