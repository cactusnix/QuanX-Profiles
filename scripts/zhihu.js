// zhihu script
let body = $response.body

if (/<\/html>|<\/body>/.test(body)) {
  body = body.replace(
    "</head>",
    `<style type="text/css">*{max-width:100%!important;box-sizing:border-box}html{overflow-y:auto!important}#free-reward-panel,.AdblockBanner,.AppHeader-Tabs,.AppHeader-userInfo,.Modal-wrapper,.Pc-word,.Question-sideColumn,.QuestionHeader-footer,.RichContent-actions.is-fixed,.meta-bottom,.show-foot,body>div:last-child,.Question-mainColumnLogin,.Profile-sideColumn,.QuestionHeader-side,.ModalWrap{display:none!important}body{-webkit-font-smoothing:antialiased;text-rendering:optimizeLegibility;position:absolute!important;top:0!important}.Topstory{padding:0!important}.GlobalSideBar,.Question-sideColumn,.QuestionHeader-side,.TopstoryItem--advertCard,.TopstorySideBar,.css-1qefhqu{display:none!important}.AppHeader,.AppHeader-widescreenResponsive .AppHeader-inner{width:100%!important;min-width:100%!important;padding:0!important;box-sizing:content-box!important}.QuestionHeader{min-width:initial}.Question-mainColumn,.Topstory-mainColumn,.TopstoryMain,.TopstoryV2-mainColumn{width:100%!important;max-width:100%!important}.Topstory-mainColumn{margin:0!important}.TopstoryItem .ZVideoItem{margin:0}.TopstoryItem .ZVideoItem .RichContent{margin-top:20px;overflow:hidden}.ContentItem-more .ContentItem-arrowIcon{vertical-align:-2px}.AnswerItem,.ArticleItem,.Layout-main.av-card{font-size:120%!important}.RichText pre{padding-top:.6em;padding-bottom:.6em;font-size:90%!important;padding:.8em 1.2em!important}.RichText code,.RichText pre{font-family:'JetBrains Mono',FiraMono-Regular,Menlo,Courier,monospace!important}.ContentItem-time,.Post-Header,.Post-NormalMain>div,.Post-NormalSub .Comments-container,.Post-RichTextContainer,.Post-topicsAndReviewer,.PostIndex-Contributions,.TitleImage{width:100%!important}.Post-RichText{font-size:18px}.Footer{display:none!important}.SearchResult-Card .ContentItem-title{color:#0084ff!important}.Search-container .RichContent.is-collapsed .RichContent-inner{font-size:16px!important}.Profile-lightList{padding:6px 20px}.Profile-lightItem:first-child{border-top:0 none!important}.Profile-lightItem:last-child{border-bottom:0 none!important}.ProfileMain .RichContent{line-height:1.8}.ContentItem-actions{flex-wrap:wrap;justify-content:space-between;margin:6px 0;padding:0}.QuestionHeader-main{padding: 0;}</style></head>`
  )

  console.log("添加 tamperJS：zhihux.user.js")
}

$done({ body })
