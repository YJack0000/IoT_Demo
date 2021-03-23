<template>
  <div id="app">
  <fullscreen ref="fullscreen" @change="fullscreenChange">
    <router-view/>
  </fullscreen>
  <button type="button" @click="toggle" >Fullscreen</button>
  </div>
</template>


<script>
export default {
  name: 'app',
  changeLang() {
    let locale = localStorage.getItem('language') || 'jp'
    let temp = locale === 'jp' ? 'en' : 'jp'
    this.$i18n.locale = temp
    localStorage.language = temp
  },
  data() {
   return {
    fullscreen: false
   }
  },
  methods: {
    toggle() {
     this.$refs['fullscreen'].toggle()
   },
   fullscreenChange(fullscreen) {
     this.fullscreen = fullscreen
   }
  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
body {
  margin: auto;
}
//==login===
.inputMessage {
  &.el-form-item {
    .el-input__inner,
    .el-input__inner:focus,
    .el-textarea__inner:focus {
      border-radius: 0;
      font-family: PingFangSC-Regular;
      font-size: 14px;
      color: rgba(0, 0, 0, 0.87);
      border-color: rgba(0, 0, 0, 0.1);
      letter-spacing: 0;
      text-align: left;
      line-height: 20px;
    }
    &.is-success + .close {
      display: block;
    }
    &.is-required,
    &.is-success {
      .el-input__inner,
      .el-input__inner:focus,
      .el-textarea__inner:focus {
        border-color: rgba(0, 0, 0, 0.1);
        background-position: 295px;
      }
    }
    &.is-error {
      .el-input__inner,
      .el-input__inner:focus,
      .el-textarea__inner,
      .el-textarea__inner:focus {
        border-color: #ff5454;
      }
      .el-form-item__error {
        font-family: PingFangSC-Regular;
        font-size: 12px;
        color: #ff5454;
        line-height: 14px;
      }
      & + .close {
        display: block;
      }
    }
  }
}

/*
*Schedule画面:Schedule -> 「モダールの様式」
*設備狀態画面：ConditionSetting-> 「モダールの様式」
*/
#schedule,
#conditionSetting {
  .el-form-item__content {
    line-height: initial;
  }
  .el-input__inner {
    height: 36px;
    font-family: PingFangSC-Regular;
    font-size: 14px;
    color: #333333;
  }
  .addConditions {
    .el-dialog {
      // width: 570px;
      width: 650px;
      background: #ffffff;
      box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.14);
      border-radius: 2px;
      .el-dialog__header {
        height: 40px;
        padding: 11px 20px 8px;
        background: #fafafa;
        border-radius: 2px 2px 0px 0px;
        border-bottom: 1px solid #ddd;
        .el-dialog__headerbtn {
          top: 10px;
          right: 10px;
          .el-dialog__title {
            font-family: PingFangSC-Regular;
            font-size: 14px;
            color: #666666;
            letter-spacing: 0;
            text-align: left;
            line-height: 20px;
          }
          .el-dialog__close {
            font-size: 12px;
            color: #aaa;
            font-weight: bold;
          }
        }
      }
      .el-dialog__body {
        padding: 0;
        .numderFirst.el-form-item {
          .el-form-item__content {
            margin-top: 10px;
          }
        }
        .el-form-item {
          margin-bottom: 0;
          .el-form-item__content {
            margin-top: 20px;
            .width-left {
              width: 98px;
              float: left;
              label {
                font-family: PingFangSC-Regular;
                font-size: 14px;
                color: #333333;
                text-align: left;
                &.el-checkbox {
                  margin: 0;
                  width: 100%;
                  line-height: 36px;
                  .el-checkbox__label {
                    padding-left: 3px;
                    font-size: 14px;
                    color: #333333;
                  }
                }
              }
              &.checkAll {
                .el-checkbox {
                  line-height: 0;
                }
              }
            }
            .width-right {
              float: left;
              // width: 400px;
              width: 485px;
              &.history-message {
                .el-input__inner {
                  background: #ffffff;
                  border: 1px solid #dddddd;
                  border-radius: 2px;
                  line-height: 20px;
                }
              }
              .input-time-line {
                padding: 0 8px;
                font-family: PingFangSC-Regular;
                font-size: 12px;
                color: #333333;
                text-align: left;
              }
              &.checkAll {
                .el-checkbox {
                  margin: 0;
                  line-height: 0;
                  .el-checkbox__label {
                    padding-left: 5px;
                  }
                }
              }
              &.selectList {
                .el-select {
                  .el-input {
                    &.is-focus {
                      .el-input__inner {
                        background: #ffffff;
                        border: 1px solid #dddddd;
                        border-radius: 2px;
                      }
                    }
                    .el-input__suffix {
                      .el-select__caret {
                        &.el-input__icon {
                          position: relative;
                          top: 11px;
                          right: 5px;
                          width: 10px;
                          height: 14px;
                          background: url('./assets/img/select_down.png') no-repeat;
                          background-size: 100%;

                          &.el-icon-arrow-up:before {
                            content: '';
                          }
                        }
                      }
                    }
                  }
                  &.el-select--medium {
                    width: 118px;
                    margin-right: 10px;
                    &:last-child {
                      margin-right: 0;
                    }
                  }
                }
              }
              .el-input__inner {
                color: #333;
              }
            }
          }
        }

        .el-button {
          &.successBtn,
          &.cancelBtn {
            margin-left: 15px;
            padding: 0;
            width: 76px;
            height: 36px;
            line-height: 36px;
            border-radius: 2px;
            color: #fff;
            font-family: PingFangSC-Regular;
            font-size: 14px;
          }
          &.successBtn {
            border: 1px solid #00cc99;
            background: #00cc99;
          }
          &.cancelBtn {
            font-size: 14px;
            color: #666666;
            background: #ffffff;
            border: 1px solid #dddddd;
          }
        }
      }
    }
  }
}
.el-select-dropdown {
  .el-scrollbar {
    .el-select-dropdown__wrap {
      .el-select-dropdown__list {
        .el-select-dropdown__item {
          &.selected {
            color: #00cc99;
          }
        }
      }
    }
  }
}
/*
*設備狀態画面:DeviceStatus-> 「進度の様式」と「モダールの様式」
*/
#deviceStatus {
  // 進度の様式
  .el-slider.el-slider--with-input {
    overflow: visible;
    .el-input-number--small {
      width: 40px;
      .el-input-number__decrease,
      .el-input-number__increase {
        display: none;
        width: 0;
      }
      .el-input.el-input--small {
        .el-input__inner {
          padding: 0;
          height: 25px;
          line-height: 25px;
          border-radius: 0;
          border: 1px solid rgba($color: #000, $alpha: 0.2);
          background-color: rgba($color: #fff, $alpha: 0.3);
        }
      }
    }
    .el-slider__runway {
      background-color: rgba($color: #000, $alpha: 0.2);
      border-radius: 0;
      height: 3px;
      &.show-input {
        margin: 16px 0;
        width: 65%;
      }
      .el-slider__bar {
        border-radius: 0;
        height: 3px;
        background-color: rgba($color: #000, $alpha: 0.3);
      }
      .el-slider__button-wrapper {
        top: -17px;
      }
      .el-slider__button,
      .el-slider__button:hover {
        width: 12px;
        height: 12px;
        border: 1px solid rgba(0, 0, 0, 0.15);
      }
    }
  }
  // モダールの様式
  .openDialog {
    .el-dialog {
      width: 376px;
      height: 150px;
      background: #ffffff;
      box-shadow: 1px 1px 3px 0 rgba(123, 123, 123, 0.3);
      border-radius: 2px;
      .el-dialog__header {
        height: 28px;
        .el-dialog__headerbtn {
          top: 10px;
          right: 10px;
          .el-dialog__close {
            font-size: 10px;
            color: #aaa;
            font-weight: bold;
          }
        }
      }
      .el-dialog__body {
        padding: 0 30px;
        .message-content {
          padding: 0 11px 15px;
          font-family: PingFangSC-Regular;
          font-size: 16px;
          color: #333333;
          line-height: 26px;
        }
        .el-button {
          &.successBtn,
          &.cancelBtn {
            margin-left: 15px;
            padding: 0;
            width: 76px;
            height: 36px;
            line-height: 36px;
            border-radius: 2px;
            color: #fff;
            font-family: PingFangSC-Regular;
            font-size: 14px;
            border: 1px solid #00cc99;
            background: #00cc99;
          }

          &.cancelText {
            padding: 12px 0;
            font-family: PingFangSC-Regular;
            font-size: 14px;
            color: rgba(0, 0, 0, 0.65);
            text-align: left;
            border: 1px solid #fff;
            background: #fff;
          }
        }
      }
    }
  }
}

/*
*歷史數據画面:HistoricalData-> inputカレンダーの様式
*/
.history-message {
  .el-date-editor.el-input {
    width: 177px;
    .el-input__inner {
      height: 36px;
      line-height: 20px;
      border-radius: 2px;
      color: #333;
      border: 1px solid #aaaaaa;
      padding-left: 9px;
    }
    .el-input__prefix {
      right: 5px;
      left: auto;
      .el-input__icon {
        line-height: 0;
      }
    }
    .el-input__suffix {
      .el-input__suffix-inner {
        display: none;
      }
    }
  }
}
.el-picker-panel__body-wrapper {
  // el-date-picker__time-header
  .el-date-picker__time-header {
    .el-date-picker__editor-wrap {
      .el-input {
        .el-input__inner {
          background: #ffffff;
          border: 1px solid #dddddd;
          border-radius: 2px;
        }
      }
    }
  }
  // el-picker-panel__content
  .el-date-table {
    td {
      span {
        &:active,
        &:hover,
        &:focus {
          color: #00cc99;
        }
        div {
          &:hover,
          &:focus {
            color: #00cc99;
          }
        }
      }
      &.current {
        &:not(.disabled) {
          span {
            background-color: #00cc99;
          }
        }
      }
      &.today {
        span {
          color: #00cc99;
          border: 1px solid #00cc99;
        }
      }
    }
  }
}
//el-picker-panel__footer
.el-picker-panel__footer {
  text-align: center !important;
  border-top: 1px solid #e5e5e5 !important;
  .el-button--text {
    font-family: PingFangSC-Regular;
    font-size: 12px;
    color: #333333;
    &:hover {
      color: #333;
    }
  }
  .el-button--default {
    display: none;
  }
}
/*
*歷史數據画面:HistoricalData-> チェックの様式
*/
$success-color: #00cc99;
.check-list {
  .el-checkbox {
    float: left;
    width: 120px;
    padding-right: 20px;
    margin: 20px auto 0;
    padding: 0;
    & + .el-checkbox {
      margin-left: auto;
    }
  }
  .el-checkbox__input.is-checked + .el-checkbox__label {
    font-family: PingFangSC-Regular;
    font-size: 14px;
    color: #666666;
  }
  .el-checkbox__inner,
  .el-checkbox__inner:hover {
    border: 1px solid #ddd;
  }
  .el-checkbox__input.is-checked .el-checkbox__inner,
  .el-checkbox__input.is-indeterminate .el-checkbox__inner {
    background-color: $success-color;
    border-color: $success-color;
  }
  .el-button--success {
    background-color: $success-color;
    border-color: $success-color;
  }
}
.el-carousel-record {
  .el-carousel__container {
    .el-carousel__arrow {
      &.el-carousel__arrow--left {
        left: 0;
        width: 25px;
        height: 49px;
        background-size: 100%;
        background: url('./assets/img/icon_left.png');

        .el-icon-arrow-left {
          display: none;
        }
      }
      &.el-carousel__arrow--right {
        right: 0;
        width: 25px;
        height: 49px;
        background-size: 100%;
        background: url('./assets/img/icon_right.png');

        .el-icon-arrow-right {
          display: none;
        }
      }
    }
    .el-carousel__item.carousel-img {
      width: 600px;
      margin-left: 57px;
      img {
        width: 100%;
      }
    }
  }
  .el-carousel__indicators {
    display: none;
  }
}
.inputMessage {
  .el-input-number {
    margin-right: 10px;
    &.is-controls-right {
      .el-input-number__increase {
        top: 2px;
        line-height: 17px !important;
      }
      .el-input-number__decrease {
        bottom: 2px;
      }
    }
  }
}

// textarea
.el-textarea {
  textarea {
    &.el-textarea__inner {
      border-radius: 0;
      resize: none;
      border-color: rgba(0, 0, 0, 0.1);
      font-family: PingFangSC-Regular;
      font-size: 14px;
    }
  }
}

.full-calendar-body .dates .dates-events .events-week .events-day{
  min-height: 100px!important;
}
</style>
