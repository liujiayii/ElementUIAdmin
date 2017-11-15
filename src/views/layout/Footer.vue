<template>
    <div class="footer">
        <div class="version">
            <b>Version</b> {{ $Config.version }}
        </div>
        <strong>Copyright © 2014-2016 <a href="javascript:;">{{ $Config.siteName }}</a>.</strong> All rights reserved.
    </div>
</template>

<script>
  export default {
    data() {
      return {

      };
    },
    methods: {

    }
  }
</script>
<style lang="less">
    .footer{
        height: 50px;
        width: 100%;
        font-size: 14px;
        background: #fff;
        padding: 15px;
        color: #444;
        border-top: 1px solid #d2d6de;
        .version{
            float: right;
            b{
                font-weight: 700;
            }
        }
    }
</style>
