---
description: 一版：2018.10.21 二版：2020.01.20 三版：2023.7.30 四版：2025.12.1
---

# 使用或提供 DHW 服务的系统要求

（原标题：使用本组服务方法及须知）

版本：第四版（20251201）

## 基本要求

要正常使用各项 DHW 服务，系统必须满足以下**所有**最基本的要求：

- 设备
    - 设备的生产日期距今不能超过以下年限
      | 设备类型       | 年限 |
      | ---------- | -- |
      | 移动设备       | 5  |
      | 面向一般消费者的电脑 | 10 |
- 操作系统
    - 类型必须为amd64（x86_64）或aarch64（arm64）
    - 未被宣布停止支持
    - 受附录的 [OpenJDK 发行版列表](#openjdk-发行版列表)中其中一个支持
    - 开发者在最近的6个月内提供了安全性更新
    - **建议**使用在附录的[操作系统列表](#操作系统列表)列出的操作系统
- 浏览器
    - 在附录的[浏览器列表](#浏览器列表)中的浏览器
    - 使用在一年内发布的版本
- 其他应用程序
    - 不得存储或使用计算机病毒、木马等恶意软件
    - 无论使用何种操作系统，都不得存储或使用符合[Windows Apps That Amaze Us](https://amazing-apps.gitbook.io/windows-apps-that-amaze-us/zh-cn/blacklist)中“拉黑标准”**第3条**的任何软件，即具有“明显弱化系统安全性或稳定性的应用，如后台植入、破坏系统文件、恶意修改根证书”等行为的软件
    - 如果电脑曾存储或使用了上述两条提及的软件，在格式化操作系统的主分区和启动分区并重新安装操作系统前，都被视为不符合要求
    - 若操作系统为 Microsoft Windows，则必须安装防病毒软件，或启用系统自带的 Microsoft Defender

## 服务环境

直接用于装载 DHW **非实验性**服务的系统，在“基本要求”的基础上，有以下调整：

- 不限制设备
- 操作系统
    - 必须是 Debian, Rocky Linux, Fedora CoreOS, openSUSE MicroOS/Leap Micro, nixOS 的其中一个
    - 使用处于正常维护或长期支持（LTS）周期的版本

## 可信工作环境

用于处理 DHW **内部机密资料**的系统，除了满足“基本要求”外，还需满足以下要求：

- 设备
    - 7年内制造的设备
    - 对于自行组装的电脑，核心组件都在制造商支持年限内
    - 如果该环境是虚拟机或容器，则它必须运行在满足“基本要求”和以下要求的宿主系统：
        - 不得启用让该环境与宿主系统即时共享内容的功能，例如剪贴薄共享和共享文件夹
        - 不得启用可让其他设备控制该环境或宿主系统的功能，除非宿主系统在附录的[操作系统**列表H**](#操作系统列表)中列出
- 操作系统
    - 在附录的[操作系统**列表A或列表B**](#操作系统列表)中列出
    - 使用最近发布的两个大版本
- 浏览器
    - 只能使用在附录的[浏览器**列表A或列表B**](#浏览器列表)中的浏览器
- 其他应用程序
    - 不得存储或使用符合[Windows Apps That Amaze Us](https://amazing-apps.gitbook.io/windows-apps-that-amaze-us/zh-cn/blacklist)中“拉黑标准”**任意一条**的任何软件

## 附录

### 操作系统列表

注：每个列表中的操作系统地位相同，排列顺序随机且没有实际意义

- 列表A
    - Debian, Linux Mint/LMDE, Kali Linux, Tails, Raspberry Pi OS, Whonix
    - Fedora, CentOS Stream, Rocky Linux, Qubes OS
    - openSUSE
    - Alpine Linux, OpenWRT
    - nixOS
    - FreeBSD, OpenBSD, OPNSense, pfSense, TrueNAS
- 列表B
    - macOS, iOS, iPadOS
- 列表H
    - Proxmox VE
    - VMware ESXi

### 浏览器列表

注：每个列表中的浏览器按推荐程度排列，但不同列表间没有比较关系

- 列表A（基于Gecko的浏览器）
    - LibreWolf
    - Mullvad Browser
    - Mozilla Firefox
    - Waterfox
- 列表B（基于Chromium的浏览器）
    - Brave
    - Ungoogled Chromium
- 列表C（其他）
    - Safari
- 列表D（基于Chromium的浏览器）
    - Google Chrome
    - Microsoft Edge
    - Opera

### OpenJDK 发行版列表

- Adoptium Eclipse Temurin
- Microsoft Build of OpenJDK
- Azul (Zulu) JDKs
- IBM Semeru
