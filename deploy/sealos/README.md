# Sealos 静态帮助中心部署

用户已确认源码仓库和应用镜像均保持公开；使用固定摘要部署至北京工作空间。正式域名保持 `help.feigenbaum.com.cn`，不复用PM7的域名或工作负载。

## 镜像与运行方式

Node 22通过 `npm ci` 和 `npm run docs:build` 构建，Nginx只携带静态产物。容器以UID/GID101运行，端口8080，根文件系统只读，`/tmp` 使用临时卷。无运行时环境变量，无数据库、Redis或持久卷。

GitHub Actions先验证健康检查、中英文页面、深层链接、图片和404，再推送GHCR。发布后分别核验仓库和镜像包的实际可见性，并取得不可变镜像摘要。公开镜像仅包含静态帮助文档，不能复制运行时凭证或其他项目数据。

## 切换与回退

先在Sealos临时域名验证页面、深层链接刷新、本地搜索、图片与404，再为正式域名准备入口和HTTPS。域名切换后检查权威DNS、有效证书及浏览器访问，验证通过才暂停旧Zeabur服务。旧的 `qms-docs.zeabur.app` 属于Zeabur，不能迁移该平台域名。

回退时将正式域名恢复为旧的 `hkg1.cname.zeabur-dns.com`，必要时先恢复旧服务。该项目是静态站点，无业务写入合并步骤。旧服务暂停超过30天可能被平台删除，不能无限期依赖其作为回退环境。

## 本次部署记录（2026-10-20）

- 源实例提交已通过Zeabur运行环境核实为 `289b1b5413c9a0d8967504427612a18671f0b68e`；文档正文没有修改。
- 部署配置位于 `codex/sealos-migration` 分支，镜像构建提交为 `3758d6ebd8e45718461f296b7ce95c96ba7b15c5`。
- [镜像构建与容器验证](https://github.com/tang9-c/qms-docs/actions)已成功；运行镜像固定为 `ghcr.io/tang9-c/qms-docs@sha256:8afe7be10c90975acbe0b56d7bd1aa1bcdfccabb153857dce53a81804eb95822`，压缩层合计约42.8MiB。
- 目标应用为 `qms-docs`，单副本，requests为50m CPU/64Mi内存，limits为200m CPU/128Mi内存。临时卷32Mi，无持久卷。当前1/1 Ready、零重启，实际UID101。
- 临时入口为 `https://qmsdocsufdahkjt.sealosbja.site`，有效HTTPS、健康检查、中英文入口、深层链接、图片、404及浏览器本地搜索已验证。
- 正式切换由用户修改 `help` 的CNAME至 `qmsdocsufdahkjt.sealosbja.site`，建议TTL300秒。当前等待用户修改，正式证书尚待HTTP校验完成，旧站仍运行。
- 部署前逐页核查45个文档路径，均返回200。新旧构建的脚本摘要不同，因此HTML整体哈希不作为正文一致性的判据；45页正文、文档链接和图片路径逐项比较全部一致。

本次原始检查结果和集群声明保存在本机受控迁移证据目录；仓库不保存凭证。后续更新请沿用该部署分支的工作流，镜像构建成功后以新摘要进行受控更新，不使用浮动latest标签。
