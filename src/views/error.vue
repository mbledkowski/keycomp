<template lang="pug">
h1 {{errorList[0][errorIndex] }} {{errorList[1][errorIndex]}}
</template>
<script>
import { ref, defineComponent } from "vue"
import { useRoute } from "vue-router"
export default defineComponent({
  name: "error",
  setup() {
  const errorList = ref([[
        "400",
        "401",
        "402",
        "403",
        "404",
        "405",
        "406",
        "407",
        "408",
        "409",
        "410",
        "411",
        "412",
        "413",
        "414",
        "415",
        "416",
        "417",
        "418",
        "421",
        "422",
        "423",
        "424",
        "425",
        "426",
        "428",
        "429",
        "431",
        "451",
        "500",
        "501",
        "502",
        "503",
        "504",
        "505",
        "506",
        "507",
        "508",
        "510",
        "511"
        ], [
        "Bad Request",
        "Unauthorized",
        "Payment Required",
        "Forbidden",
        "Not Found",
        "Method Not Allowed",
        "Not Acceptable",
        "Proxy Authentication Required",
        "Request Timeout",
        "Conflict",
        "Gone",
        "Length Required",
        "Precondition Failed",
        "Payload Too Large",
        "URI Too Long",
        "Unsupported Media Type",
        "Range Not Satisfiable",
        "Expectation Failed",
        "I'm a Teapot",
        "Misdirected Request",
        "Unprocessable Entity",
        "Locked",
        "Failed Dependency",
        "Too Early",
        "Upgrade Required",
        "Precondition Required",
        "Too Many Requests",
        "Request Header Fields Too Large",
        "Unavailable For Legal Reasons",
        "Internal Server Error",
        "Not Implemented",
        "Bad Gateway",
        "Service Unavailable",
        "Gateway Timeout",
        "HTTP Version Not Supported",
        "Variant Also Negotiates",
        "Insufficient Storage",
        "Loop Detected",
        "Not Extended",
        "Network Authentication Required"
        ]])
  const route = useRoute();
  let errorIndex = errorList.value[0].indexOf(route.params.error)
  return {errorIndex, errorList}
  }
})
</script>