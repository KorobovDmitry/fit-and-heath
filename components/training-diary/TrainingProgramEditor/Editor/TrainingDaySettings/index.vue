<template>
  <div class="training-day-settings">
    <p class="training-day-settings__block-title">Настройки тренировочного дня</p>

    <div class="base-info-and-timer">
      <div class="base-info">
        <div class="base-info__element">
          <p class="element__title">Название тренировочного дня:</p>
          <app-input-text value="День 1. Ноги и плечи" />
        </div>
        <div class="base-info__element">
          <p class="element__title">Комментарий к тренеровочному дню:</p>
          <app-textarea class="element__textarea" placeholder="Комментарий" />
        </div>
        <div class="base-info__element">
          <p class="element__title">Видео тренировки</p>
          <div class="video">video</div>
        </div>
      </div>
      <div class="timer">
        <p class="timer__title">Таймер</p>
        <div class="timer__content">
          контент
        </div>
      </div>
    </div>

    <div class="exercises-configurator">
      <div class="exercises-data-base">
        <p class="exercises-data-base__block-title">База упражнений</p>
        <ul class="exercises-data-base__list">
          <li class="list__item">
            exercise
          </li>
        </ul>
      </div>

      <div class="exercises">
        <p class="exercises__block-title">Упражнения</p>
        <ul class="exercises-list">
          <li v-for="(item, index) in 4" :key="index" class="exercises-list__list-item">
            <div class="list-item__drag-drop-btn">
              <i class="ti-exchange-vertical"></i>
            </div>
            <p class="list-item__title">Присядания со штангой в тренажере Смитта</p>
            <div class="list-item__parameter">
              <p class="parameter__text">подходы</p>
              <p class="parameter__value">4</p>
            </div>
            <div class="list-item__parameter">
              <p class="parameter__text">повторений</p>
              <p class="parameter__value">10 - 12</p>
            </div>
            <div class="list-item__parameter">
              <p class="parameter__text">Отягощение</p>
              <p class="parameter__value">45 кг.</p>
            </div>
            <div class="list-item__edit-btn">
              <i class="ti-pencil"></i>
            </div>
            <div class="list-item__delete-btn">
              <i class="ti-close"></i>
            </div>
          </li>
        </ul>
      </div>
    </div>
    

    <div class="stats">
      <div class="stats__item">
        <p class="item__value">1 час 12 мин.</p>
        <p class="item__text">Время последней тренировки</p>
      </div>
      <div class="stats__item">
        <p class="item__value">1782 кг.</p>
        <p class="item__text">Тоннаж последней тренировки</p>
      </div>
      <div class="stats__item">
        <p class="item__value">Высокая</p>
        <p class="item__text">Интенсивность последней тренировки</p>
      </div>
      <div class="stats__item">
        <p class="item__value">+ 2.3%</p>
        <p class="item__text">Общий прогресс тренировок</p>
      </div>
    </div>

  </div>
</template>

<script>
import AppInputText from '@/components/basic/AppInputText'
import AppTextarea from '@/components/basic/AppTextarea'

export default {
  components: {
    AppInputText,
    AppTextarea
  }
}
</script>

<style lang="scss" scoped>
@import "@/assets/scss/vars.scss";

.training-day-settings {
  // border: 1px solid red;
  margin-top: 10px;
  padding: 10px;
  background: $white;
  border: 1px solid $blockBorder;
  border-radius: 6px;
  .training-day-settings__block-title {
    text-align: center;
    font-weight: 500;
    padding-bottom: 10px;
    border-bottom: 1px dashed $blockBorder;
  }

  .base-info-and-timer {
    display: flex;
    .base-info {
      flex: 1 1 auto;
      .base-info__block-title {
        padding: 10px 20px;
        font-weight: 500;
      }
      .base-info__element {
        .element__title {
          padding: 10px;
          font-weight: 500;
        }
        .element__textarea {
          min-height: 200px;
        }
        .video {
          height: 400px;
          background: rgba(0,0,0,.02);
          border: 1px solid $blockBorder;
          border-radius: 6px;
        }
      }
    }
    .timer {
      // border: 1px solid red;
      display: flex;
      flex-direction: column;
      margin-left: 20px;
      width: 100%;
      min-width: 400px;
      max-width: 400px;
      .timer__title {
        padding: 10px;
        font-weight: 500;
      }
      .timer__content {
        flex: 1 1 auto;
        border: 1px solid $blockBorder;
        border-radius: 6px;
      }
    }
  }

  .exercises-configurator {
    display: flex;
    .exercises-data-base {
      display: flex;
      flex-direction: column;
      margin-right: 20px;
      width: 100%;
      min-width: 400px;
      max-width: 400px;
      .exercises-data-base__block-title {
        padding: 10px 20px;
        font-weight: 500;
      }
      .exercises-data-base__list {
        flex: 1 1 auto;
        padding: 10px;
        background: rgba(0,0,0,.025);
        box-shadow: $insetBoxShadow;
        border-radius: 6px;
      }
    }

    .exercises {
      .exercises__block-title {
        padding: 10px 20px;
        font-weight: 500;
      }
      .exercises-list {
        // border: 1px solid red;
        padding: 10px;
        min-height: 600px;
        background: rgba(0,0,0,.025);
        box-shadow: $insetBoxShadow;
        border-radius: 6px;
        
        .exercises-list__list-item {
          display: flex;
          align-items: center;
          margin-bottom: 5px;
          padding: 10px;
          background: $white;
          border: 1px solid $blockBorder;
          border-radius: 6px;
          .list-item__drag-drop-btn {
            // border: 1px solid red;
            display: flex;
            align-items: center;
            // margin-right: 20px;
            padding: 10px;
            cursor: pointer;
            transition: $tr-02;
          }
          .list-item__drag-drop-btn:hover {
            color: $green;
          }
          .list-item__title {
            // border: 1px solid red;
            margin-left: 10px;
            font-weight: 500;
            margin-right: auto;
          }
          .list-item__parameter {
            // border: 1px solid red;
            margin-left: 10px;
            text-align: center;
            // width: 140px;
            min-width: 100px;
            .parameter__text {
              text-transform: uppercase;
              font-size: 8px;
            }
            .parameter__value {
              margin-top: 5px;
              font-weight: 500;
            }
          }
          .list-item__edit-btn {
            // border: 1px solid red;
            display: flex;
            align-items: center;
            // margin-left: 20px;
            padding: 10px;
            cursor: pointer;
            transition: $tr-02;
          }
          .list-item__edit-btn:hover {
            color: $green;
          }
          .list-item__delete-btn {
            // border: 1px solid red;
            display: flex;
            align-items: center;
            // margin-left: 20px;
            padding: 10px;
            cursor: pointer;
            transition: $tr-02;
          }
          .list-item__delete-btn:hover {
            color: $green;
          }
        }
        .exercises-list__list-item:last-child {
          margin-bottom: 0;
        }
      }
    }
  }
  

  .stats {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 10px;
    padding: 20px 0 10px 0;
    border-top: 1px dashed $blockBorder;
    .stats__item {
      flex: 1 1 auto;
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 10px;
      border-right: 1px solid $blockBorder;
      .item__value {
        font-weight: 500;
      }
      .item__text {
        margin-top: 5px;
        text-transform: uppercase;
        text-align: center;
        font-size: 12px;
      }
    }
    .stats__item:last-child {
      border-right: none;
    }
  }

  
}
</style>
