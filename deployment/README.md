# 根域名发布入口

`danyow.cn` 已绑定本仓库的 `gh-pages`，旧项目站位于 `/danyow/`。网站正文和主题的唯一维护位置仍是 `danyow/danyow` 的 `main`，不在本仓库复制、重写日报。

本工作流从该唯一源码构建，明确设置 `SITE_BASE_URL=/`，发布到本仓库原有 `gh-pages`，保留 `CNAME` 和提交历史。原 master 中的旧源码作为历史留存，不再构建。原项目子路径仍可用作旧邮件兼容入口。

发布请求：更新本目录 `source.json` 的 `source_sha` 为源码仓库 main 上真实的完整提交 SHA。保持 schema=1、repository=danyow/danyow、branch=main。使用文件当前 blob SHA 条件更新；不是新增定时服务，也不需要额外账户令牌。两个已有每日任务在入库后执行这一更新，然后等待本仓库 `Publish root news site` 成功。

为避免两个栏目相互回滚，工作流读取运行时最新 main，确认请求的提交包含在其中；根站发布队列不取消正在发布的版本。记录 `.well-known/danyow-deployment.json` 的真实源码与请求提交。任务重试必须检查已发布回执、同稿哈希和在途运行，不因发布请求变动而重新生成正文或重复发信。

正式链接使用 `https://danyow.cn/ai-engine-watch/` 与 `https://danyow.cn/voice-agent-watch/`。根站的版本回执、原始MD和索引位于本仓库 `gh-pages`，路径不含 `danyow/` 前缀；研究原稿文件仍位于源码仓库 main。

验证包括全部本地链接、根首页 canonical、禁止本地资源及导航残留 /danyow/、上线后根首页/笔记/文档/两个栏目、最近日报的原稿哈希及发布回执。测试通过不等于已发布，只有 deploy 的公开验证成功才可发正式链接。

手动改主题或代码后也需要更新 source.json 或在本仓库手动运行 deploy.yml；源码仓库单独构建成功不代表根站完成更新。这里没有隐式的跨仓库自动触发或后台轮询。回滚须显式检查源码版本，不能强推或删除历史。
