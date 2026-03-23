// 详细信息数据库
const infoDatabase = {
    opensource: {
        title: "开源（Open Source）",
        content: `
            <p><strong>什么是开源？</strong></p>
            <p>开源软件是指源代码公开、任何人都可以查看、使用、修改和分发的软件。</p>
            
            <p><strong>开源的核心理念：</strong></p>
            <ul>
                <li><strong>自由使用</strong>：任何人都可以免费使用</li>
                <li><strong>自由研究</strong>：可以查看源代码，了解软件如何工作</li>
                <li><strong>自由修改</strong>：可以根据需求修改代码</li>
                <li><strong>自由分发</strong>：可以分享给他人</li>
            </ul>
            
            <p><strong>开源的优势：</strong></p>
            <ul>
                <li>透明度高，安全性更好（众人审查代码）</li>
                <li>社区驱动，bug 修复快</li>
                <li>避免供应商锁定</li>
                <li>促进技术创新和知识共享</li>
            </ul>
            
            <div class="resource-box">
                <p><strong>📚 延伸阅读：</strong></p>
                <p><a href="https://opensource.org/" target="_blank">开源促进会（OSI）官网</a></p>
                <p><a href="https://github.com/" target="_blank">GitHub - 全球最大开源社区</a></p>
                <p><a href="https://www.gnu.org/philosophy/free-sw.html" target="_blank">自由软件基金会</a></p>
            </div>
        `
    },
    
    linus: {
        title: "Linus Torvalds - Linux 之父",
        content: `
            <p><strong>个人简介：</strong></p>
            <p>Linus Benedict Torvalds，1969年出生于芬兰赫尔辛基，计算机科学家，Linux 内核的创始人和主要开发者。</p>
            
            <p><strong>Linux 诞生故事：</strong></p>
            <ul>
                <li>1991年，21岁的 Linus 还是赫尔辛基大学的学生</li>
                <li>因为对 Unix 系统感兴趣，但买不起昂贵的 Unix 工作站</li>
                <li>决定自己写一个类 Unix 的操作系统内核</li>
                <li>1991年8月25日，在新闻组发布了著名的公告</li>
                <li>最初只是个人爱好项目，没想到会改变世界</li>
            </ul>
            
            <p><strong>著名语录：</strong></p>
            <p style="font-style: italic; color: #ffd700;">"Talk is cheap. Show me the code."（空谈无益，给我看代码）</p>
            
            <p><strong>其他贡献：</strong></p>
            <ul>
                <li>创建了 Git 版本控制系统（2005年）</li>
                <li>现在在 Linux 基金会工作，继续维护 Linux 内核</li>
            </ul>
            
            <div class="resource-box">
                <p><strong>🔗 了解更多：</strong></p>
                <p><a href="https://github.com/torvalds" target="_blank">Linus 的 GitHub</a></p>
                <p><a href="https://www.kernel.org/" target="_blank">Linux 内核官网</a></p>
            </div>
        `
    },
    
    unix: {
        title: "Unix 操作系统",
        content: `
            <p><strong>Unix 简史：</strong></p>
            <p>Unix 是1969年由贝尔实验室的 Ken Thompson 和 Dennis Ritchie 开发的操作系统，是现代操作系统的鼻祖。</p>
            
            <p><strong>Unix 设计哲学：</strong></p>
            <ul>
                <li><strong>一切皆文件</strong>：设备、进程都可以用文件方式访问</li>
                <li><strong>小而美</strong>：每个程序只做一件事，但做到极致</li>
                <li><strong>管道机制</strong>：程序之间可以组合使用</li>
                <li><strong>纯文本配置</strong>：配置文件都是可读的文本</li>
            </ul>
            
            <p><strong>Unix 家族：</strong></p>
            <ul>
                <li><strong>商业 Unix</strong>：Solaris、AIX、HP-UX</li>
                <li><strong>BSD 系列</strong>：FreeBSD、OpenBSD、macOS</li>
                <li><strong>类 Unix</strong>：Linux、Android</li>
            </ul>
            
            <p><strong>为什么 Linux 要基于 Unix？</strong></p>
            <p>Unix 经过几十年验证，设计理念优秀，Linux 继承了这些优点，但完全重写，避免了版权问题。</p>
            
            <div class="resource-box">
                <p><strong>📖 推荐阅读：</strong></p>
                <p><a href="https://en.wikipedia.org/wiki/Unix" target="_blank">Unix 维基百科</a></p>
                <p>书籍：《Unix 编程艺术》</p>
            </div>
        `
    },
    
    ubuntu: {
        title: "Ubuntu Linux",
        content: `
            <p><strong>Ubuntu 简介：</strong></p>
            <p>Ubuntu 是基于 Debian 的 Linux 发行版，由 Canonical 公司开发，是最受欢迎的桌面 Linux 发行版。</p>
            
            <p><strong>为什么适合新手？</strong></p>
            <ul>
                <li>安装简单，图形化界面友好</li>
                <li>软件中心丰富，类似应用商店</li>
                <li>社区活跃，中文资料多</li>
                <li>硬件兼容性好</li>
                <li>每6个月发布新版本，长期支持版（LTS）支持5年</li>
            </ul>
            
            <p><strong>Ubuntu 版本：</strong></p>
            <ul>
                <li><strong>Ubuntu Desktop</strong>：桌面版，适合个人使用</li>
                <li><strong>Ubuntu Server</strong>：服务器版，无图形界面</li>
                <li><strong>Ubuntu Core</strong>：物联网版本</li>
            </ul>
            
            <p><strong>衍生版本：</strong></p>
            <ul>
                <li>Kubuntu（KDE 桌面）</li>
                <li>Xubuntu（轻量级）</li>
                <li>Ubuntu MATE（经典界面）</li>
            </ul>
            
            <div class="resource-box">
                <p><strong>🌐 官方资源：</strong></p>
                <p><a href="https://ubuntu.com/" target="_blank">Ubuntu 官网</a></p>
                <p><a href="https://ubuntu.com/download" target="_blank">下载 Ubuntu</a></p>
                <p><a href="https://cn.ubuntu.com/" target="_blank">Ubuntu 中文站</a></p>
            </div>
        `
    },
    
    centos: {
        title: "CentOS / RHEL",
        content: `
            <p><strong>RHEL（Red Hat Enterprise Linux）：</strong></p>
            <p>红帽公司开发的企业级 Linux 发行版，需要付费订阅，提供商业支持。</p>
            
            <p><strong>CentOS：</strong></p>
            <p>CentOS 是 RHEL 的社区版，免费使用，与 RHEL 完全兼容。2020年后转型为 CentOS Stream。</p>
            
            <p><strong>企业级特性：</strong></p>
            <ul>
                <li>稳定性极高，适合生产环境</li>
                <li>长期支持（10年）</li>
                <li>安全更新及时</li>
                <li>大量企业应用支持</li>
                <li>专业技术支持（RHEL）</li>
            </ul>
            
            <p><strong>主要用途：</strong></p>
            <ul>
                <li>Web 服务器（Apache、Nginx）</li>
                <li>数据库服务器（MySQL、PostgreSQL）</li>
                <li>云计算平台</li>
                <li>企业应用服务器</li>
            </ul>
            
            <p><strong>替代方案：</strong></p>
            <p>由于 CentOS 停止维护，很多用户转向：</p>
            <ul>
                <li>Rocky Linux（社区驱动）</li>
                <li>AlmaLinux（CloudLinux 支持）</li>
            </ul>
            
            <div class="resource-box">
                <p><strong>🔗 相关链接：</strong></p>
                <p><a href="https://www.redhat.com/en/technologies/linux-platforms/enterprise-linux" target="_blank">RHEL 官网</a></p>
                <p><a href="https://rockylinux.org/" target="_blank">Rocky Linux</a></p>
                <p><a href="https://almalinux.org/" target="_blank">AlmaLinux</a></p>
            </div>
        `
    },
    
    debian: {
        title: "Debian Linux",
        content: `
            <p><strong>Debian 简介：</strong></p>
            <p>Debian 是历史最悠久的 Linux 发行版之一（1993年），完全由社区维护，是许多其他发行版的基础。</p>
            
            <p><strong>核心特点：</strong></p>
            <ul>
                <li><strong>稳定性</strong>：经过严格测试，bug 极少</li>
                <li><strong>纯粹自由</strong>：坚持自由软件原则</li>
                <li><strong>包管理</strong>：APT 包管理系统的发源地</li>
                <li><strong>架构支持</strong>：支持最多的硬件架构</li>
            </ul>
            
            <p><strong>三个分支：</strong></p>
            <ul>
                <li><strong>Stable（稳定版）</strong>：适合服务器</li>
                <li><strong>Testing（测试版）</strong>：较新的软件</li>
                <li><strong>Unstable（不稳定版）</strong>：最新软件，开发者使用</li>
            </ul>
            
            <p><strong>衍生发行版：</strong></p>
            <ul>
                <li>Ubuntu 及其衍生版</li>
                <li>Kali Linux（安全测试）</li>
                <li>Raspberry Pi OS（树莓派）</li>
            </ul>
            
            <div class="resource-box">
                <p><strong>📚 官方资源：</strong></p>
                <p><a href="https://www.debian.org/" target="_blank">Debian 官网</a></p>
                <p><a href="https://www.debian.org/doc/" target="_blank">Debian 文档</a></p>
            </div>
        `
    },
    
    arch: {
        title: "Arch Linux",
        content: `
            <p><strong>Arch Linux 简介：</strong></p>
            <p>Arch Linux 是一个轻量级、灵活的 Linux 发行版，遵循 KISS（Keep It Simple, Stupid）原则。</p>
            
            <p><strong>核心理念：</strong></p>
            <ul>
                <li><strong>简洁</strong>：只安装你需要的</li>
                <li><strong>现代</strong>：滚动更新，软件永远最新</li>
                <li><strong>实用</strong>：避免不必要的修改</li>
                <li><strong>以用户为中心</strong>：用户自己决定一切</li>
            </ul>
            
            <p><strong>为什么极客喜欢？</strong></p>
            <ul>
                <li>完全自定义，从零开始构建系统</li>
                <li>滚动更新，无需重装系统</li>
                <li>AUR（Arch User Repository）软件库超丰富</li>
                <li>ArchWiki 是最好的 Linux 文档</li>
                <li>学习曲线陡峭，但能学到很多</li>
            </ul>
            
            <p><strong>适合人群：</strong></p>
            <ul>
                <li>有一定 Linux 基础的用户</li>
                <li>喜欢折腾和定制的极客</li>
                <li>想深入理解 Linux 的学习者</li>
            </ul>
            
            <p><strong>新手友好的衍生版：</strong></p>
            <ul>
                <li>Manjaro（图形化安装）</li>
                <li>EndeavourOS（接近原生 Arch）</li>
            </ul>
            
            <div class="resource-box">
                <p><strong>🌐 官方资源：</strong></p>
                <p><a href="https://archlinux.org/" target="_blank">Arch Linux 官网</a></p>
                <p><a href="https://wiki.archlinux.org/" target="_blank">ArchWiki（必读！）</a></p>
            </div>
        `
    },
    
    google: {
        title: "Google 与 Linux",
        content: `
            <p><strong>Google 对 Linux 的使用：</strong></p>
            <p>Google 是全球最大的 Linux 用户之一，几乎所有服务都运行在 Linux 上。</p>
            
            <p><strong>Google 的 Linux 应用：</strong></p>
            <ul>
                <li><strong>搜索引擎</strong>：数百万台 Linux 服务器</li>
                <li><strong>Gmail</strong>：邮件服务基于 Linux</li>
                <li><strong>YouTube</strong>：视频服务运行在 Linux</li>
                <li><strong>Google Cloud</strong>：云计算平台</li>
                <li><strong>Android</strong>：基于 Linux 内核的移动操作系统</li>
            </ul>
            
            <p><strong>Google 对开源的贡献：</strong></p>
            <ul>
                <li>开源了 Kubernetes（容器编排）</li>
                <li>开源了 TensorFlow（机器学习框架）</li>
                <li>开源了 Chromium（浏览器）</li>
                <li>大量 Linux 内核代码贡献</li>
            </ul>
            
            <p><strong>有趣的事实：</strong></p>
            <ul>
                <li>Google 内部使用定制的 Linux 发行版 "Goobuntu"</li>
                <li>Google 数据中心有超过 200 万台服务器运行 Linux</li>
            </ul>
            
            <div class="resource-box">
                <p><strong>🔗 了解更多：</strong></p>
                <p><a href="https://opensource.google/" target="_blank">Google 开源项目</a></p>
                <p><a href="https://cloud.google.com/" target="_blank">Google Cloud Platform</a></p>
            </div>
        `
    },
    
    facebook: {
        title: "Facebook (Meta) 与 Linux",
        content: `
            <p><strong>Facebook 的 Linux 基础设施：</strong></p>
            <p>Facebook（现 Meta）运营着全球最大的社交网络，完全依赖 Linux 服务器。</p>
            
            <p><strong>技术栈：</strong></p>
            <ul>
                <li>数十万台 Linux 服务器</li>
                <li>定制的 CentOS 发行版</li>
                <li>自研的数据中心硬件</li>
                <li>大规模分布式系统</li>
            </ul>
            
            <p><strong>开源贡献：</strong></p>
            <ul>
                <li><strong>React</strong>：前端框架</li>
                <li><strong>PyTorch</strong>：深度学习框架</li>
                <li><strong>Folly</strong>：C++ 库</li>
                <li><strong>HHVM</strong>：PHP 虚拟机</li>
                <li><strong>Open Compute Project</strong>：开放硬件设计</li>
            </ul>
            
            <p><strong>规模数据：</strong></p>
            <ul>
                <li>每天处理数十亿次请求</li>
                <li>存储数百 PB 的数据</li>
                <li>30 亿+活跃用户</li>
            </ul>
            
            <div class="resource-box">
                <p><strong>🌐 相关链接：</strong></p>
                <p><a href="https://opensource.fb.com/" target="_blank">Meta 开源项目</a></p>
                <p><a href="https://engineering.fb.com/" target="_blank">Meta 工程博客</a></p>
            </div>
        `
    },
    
    amazon: {
        title: "Amazon 与 Linux",
        content: `
            <p><strong>Amazon 的 Linux 应用：</strong></p>
            <p>Amazon 不仅是电商巨头，更是全球最大的云计算服务提供商（AWS），Linux 是其核心。</p>
            
            <p><strong>AWS 与 Linux：</strong></p>
            <ul>
                <li><strong>Amazon Linux</strong>：AWS 官方 Linux 发行版</li>
                <li><strong>EC2</strong>：虚拟服务器，大部分运行 Linux</li>
                <li><strong>Lambda</strong>：无服务器计算，基于 Linux</li>
                <li><strong>ECS/EKS</strong>：容器服务，运行在 Linux</li>
            </ul>
            
            <p><strong>Amazon Linux 2 特点：</strong></p>
            <ul>
                <li>专为云环境优化</li>
                <li>长期支持（5年）</li>
                <li>与 AWS 服务深度集成</li>
                <li>免费使用</li>
            </ul>
            
            <p><strong>市场地位：</strong></p>
            <ul>
                <li>AWS 占全球云计算市场 32%</li>
                <li>数百万企业使用 AWS</li>
                <li>Netflix、Airbnb 等都运行在 AWS 上</li>
            </ul>
            
            <div class="resource-box">
                <p><strong>📖 学习资源：</strong></p>
                <p><a href="https://aws.amazon.com/" target="_blank">AWS 官网</a></p>
                <p><a href="https://aws.amazon.com/amazon-linux-2/" target="_blank">Amazon Linux 2</a></p>
                <p><a href="https://aws.amazon.com/training/" target="_blank">AWS 免费培训</a></p>
            </div>
        `
    },
    
    aws: {
        title: "AWS (Amazon Web Services)",
        content: `
            <p><strong>什么是 AWS？</strong></p>
            <p>AWS 是亚马逊提供的云计算平台，提供超过 200 项服务，是全球最大的云服务提供商。</p>
            
            <p><strong>核心服务：</strong></p>
            <ul>
                <li><strong>EC2</strong>：弹性云服务器</li>
                <li><strong>S3</strong>：对象存储服务</li>
                <li><strong>RDS</strong>：关系型数据库</li>
                <li><strong>Lambda</strong>：无服务器计算</li>
                <li><strong>VPC</strong>：虚拟私有云</li>
            </ul>
            
            <p><strong>为什么学 Linux 要了解 AWS？</strong></p>
            <ul>
                <li>大部分 AWS 服务运行在 Linux 上</li>
                <li>云计算是未来趋势</li>
                <li>掌握 Linux + AWS 是高薪技能组合</li>
                <li>很多公司将服务器迁移到云端</li>
            </ul>
            
            <p><strong>学习路径：</strong></p>
            <ul>
                <li>先学好 Linux 基础</li>
                <li>了解网络和安全知识</li>
                <li>学习 AWS 核心服务</li>
                <li>考取 AWS 认证（可选）</li>
            </ul>
            
            <div class="resource-box">
                <p><strong>🎓 免费学习：</strong></p>
                <p><a href="https://aws.amazon.com/free/" target="_blank">AWS 免费套餐</a></p>
                <p><a href="https://aws.amazon.com/training/digital/" target="_blank">AWS 数字化培训</a></p>
                <p><a href="https://explore.skillbuilder.aws/" target="_blank">AWS Skill Builder</a></p>
            </div>
        `
    },
    
    aliyun: {
        title: "阿里云",
        content: `
            <p><strong>阿里云简介：</strong></p>
            <p>阿里云是阿里巴巴集团旗下的云计算平台，是中国最大、亚太第一的云服务提供商。</p>
            
            <p><strong>核心产品：</strong></p>
            <ul>
                <li><strong>ECS</strong>：云服务器（类似 AWS EC2）</li>
                <li><strong>OSS</strong>：对象存储（类似 AWS S3）</li>
                <li><strong>RDS</strong>：云数据库</li>
                <li><strong>SLB</strong>：负载均衡</li>
                <li><strong>CDN</strong>：内容分发网络</li>
            </ul>
            
            <p><strong>Alibaba Cloud Linux：</strong></p>
            <ul>
                <li>阿里云官方 Linux 发行版</li>
                <li>基于 CentOS/RHEL</li>
                <li>针对云环境优化</li>
                <li>免费使用，长期支持</li>
            </ul>
            
            <p><strong>为什么国内学生要了解阿里云？</strong></p>
            <ul>
                <li>国内访问速度快</li>
                <li>中文文档完善</li>
                <li>学生优惠力度大</li>
                <li>很多国内企业使用</li>
                <li>就业市场需求大</li>
            </ul>
            
            <p><strong>学生福利：</strong></p>
            <ul>
                <li>学生认证后可获得免费云服务器</li>
                <li>丰富的学习资源和实验室</li>
                <li>免费的技术培训课程</li>
            </ul>
            
            <div class="resource-box">
                <p><strong>🎁 学生资源：</strong></p>
                <p><a href="https://www.aliyun.com/" target="_blank">阿里云官网</a></p>
                <p><a href="https://developer.aliyun.com/adc/student/" target="_blank">阿里云学生计划</a></p>
                <p><a href="https://edu.aliyun.com/" target="_blank">阿里云大学</a></p>
            </div>
        `
    },
    
    android: {
        title: "Android 与 Linux",
        content: `
            <p><strong>Android 基于 Linux：</strong></p>
            <p>Android 是 Google 开发的移动操作系统，使用修改过的 Linux 内核作为底层。</p>
            
            <p><strong>Android 架构：</strong></p>
            <ul>
                <li><strong>Linux 内核</strong>：硬件驱动、进程管理、内存管理</li>
                <li><strong>HAL</strong>：硬件抽象层</li>
                <li><strong>Android Runtime</strong>：应用运行环境</li>
                <li><strong>Framework</strong>：应用框架</li>
                <li><strong>应用层</strong>：用户应用</li>
            </ul>
            
            <p><strong>为什么选择 Linux？</strong></p>
            <ul>
                <li>开源免费，无需支付授权费</li>
                <li>成熟稳定，经过验证</li>
                <li>支持多种硬件架构</li>
                <li>强大的驱动支持</li>
                <li>活跃的开发社区</li>
            </ul>
            
            <p><strong>有趣的事实：</strong></p>
            <ul>
                <li>全球超过 25 亿台设备运行 Android</li>
                <li>Android 占移动操作系统市场 70%+</li>
                <li>你的手机里就有 Linux 内核</li>
            </ul>
            
            <p><strong>学习 Linux 对 Android 开发的帮助：</strong></p>
            <ul>
                <li>理解底层原理</li>
                <li>调试系统问题</li>
                <li>性能优化</li>
                <li>ROM 定制开发</li>
            </ul>
            
            <div class="resource-box">
                <p><strong>📱 了解更多：</strong></p>
                <p><a href="https://www.android.com/" target="_blank">Android 官网</a></p>
                <p><a href="https://source.android.com/" target="_blank">Android 开源项目（AOSP）</a></p>
            </div>
        `
    },
    
    tesla: {
        title: "特斯拉与 Linux",
        content: `
            <p><strong>特斯拉的 Linux 系统：</strong></p>
            <p>特斯拉汽车的信息娱乐系统和自动驾驶系统都运行在定制的 Linux 上。</p>
            
            <p><strong>车载 Linux 应用：</strong></p>
            <ul>
                <li><strong>中控屏幕</strong>：基于 Ubuntu 的定制系统</li>
                <li><strong>自动驾驶</strong>：实时 Linux 处理传感器数据</li>
                <li><strong>OTA 更新</strong>：通过网络更新系统</li>
                <li><strong>车联网</strong>：与云端通信</li>
            </ul>
            
            <p><strong>为什么汽车选择 Linux？</strong></p>
            <ul>
                <li>开源可定制</li>
                <li>稳定可靠</li>
                <li>实时性能好</li>
                <li>成本低</li>
                <li>社区支持强</li>
            </ul>
            
            <p><strong>汽车 Linux 生态：</strong></p>
            <ul>
                <li><strong>Automotive Grade Linux (AGL)</strong>：汽车级 Linux 联盟</li>
                <li>成员包括：丰田、奔驰、本田、福特等</li>
                <li>目标：建立统一的车载 Linux 平台</li>
            </ul>
            
            <p><strong>未来趋势：</strong></p>
            <ul>
                <li>智能汽车越来越像"带轮子的电脑"</li>
                <li>软件定义汽车</li>
                <li>Linux 在汽车行业的应用会越来越广</li>
            </ul>
            
            <div class="resource-box">
                <p><strong>🚗 延伸阅读：</strong></p>
                <p><a href="https://www.automotivelinux.org/" target="_blank">Automotive Grade Linux</a></p>
                <p><a href="https://www.tesla.com/opensource" target="_blank">特斯拉开源项目</a></p>
            </div>
        `
    },
    
    space: {
        title: "国际空间站与 Linux",
        content: `
            <p><strong>太空中的 Linux：</strong></p>
            <p>2013年，国际空间站（ISS）将笔记本电脑的操作系统从 Windows 迁移到 Linux。</p>
            
            <p><strong>为什么选择 Linux？</strong></p>
            <ul>
                <li><strong>稳定性</strong>：不能在太空中重启</li>
                <li><strong>可定制</strong>：可以根据任务需求修改</li>
                <li><strong>安全性</strong>：减少病毒风险</li>
                <li><strong>性能</strong>：资源利用率高</li>
                <li><strong>开源</strong>：NASA 可以完全控制</li>
            </ul>
            
            <p><strong>使用的发行版：</strong></p>
            <ul>
                <li>Debian Linux</li>
                <li>Scientific Linux（基于 RHEL）</li>
            </ul>
            
            <p><strong>航天领域的 Linux 应用：</strong></p>
            <ul>
                <li><strong>SpaceX</strong>：龙飞船使用 Linux</li>
                <li><strong>NASA</strong>：火星探测器使用 Linux</li>
                <li><strong>ESA</strong>：欧洲航天局使用 Linux</li>
                <li><strong>卫星系统</strong>：大量卫星运行 Linux</li>
            </ul>
            
            <p><strong>有趣的事实：</strong></p>
            <ul>
                <li>宇航员需要接受 Linux 培训</li>
                <li>ISS 上的机器人也运行 Linux</li>
                <li>Linux 在极端环境下依然可靠</li>
            </ul>
            
            <div class="resource-box">
                <p><strong>🛰️ 了解更多：</strong></p>
                <p><a href="https://www.nasa.gov/" target="_blank">NASA 官网</a></p>
                <p><a href="https://www.linuxfoundation.org/blog/blog/how-linux-got-to-mars-and-everywhere-else" target="_blank">Linux 如何到达火星</a></p>
            </div>
        `
    },
    
    steamdeck: {
        title: "Steam Deck 游戏掌机",
        content: `
            <p><strong>Steam Deck 简介：</strong></p>
            <p>Steam Deck 是 Valve 公司推出的便携式游戏机，运行基于 Arch Linux 的 SteamOS 3.0。</p>
            
            <p><strong>技术特点：</strong></p>
            <ul>
                <li><strong>操作系统</strong>：SteamOS 3.0（基于 Arch Linux）</li>
                <li><strong>桌面环境</strong>：KDE Plasma</li>
                <li><strong>兼容层</strong>：Proton（让 Windows 游戏运行在 Linux）</li>
                <li><strong>开放性</strong>：可以安装其他操作系统</li>
            </ul>
            
            <p><strong>为什么用 Linux？</strong></p>
            <ul>
                <li>完全控制硬件和软件</li>
                <li>无需支付 Windows 授权费</li>
                <li>可以深度优化性能</li>
                <li>开放生态，用户可以自由定制</li>
            </ul>
            
            <p><strong>Proton 的突破：</strong></p>
            <ul>
                <li>基于 Wine 开发</li>
                <li>让数千款 Windows 游戏在 Linux 上运行</li>
                <li>性能接近甚至超过 Windows</li>
                <li>推动了 Linux 游戏生态发展</li>
            </ul>
            
            <p><strong>对 Linux 游戏的影响：</strong></p>
            <ul>
                <li>证明了 Linux 可以成为游戏平台</li>
                <li>更多游戏开发商支持 Linux</li>
                <li>Linux 桌面用户增加</li>
            </ul>
            
            <div class="resource-box">
                <p><strong>🎮 相关链接：</strong></p>
                <p><a href="https://www.steamdeck.com/" target="_blank">Steam Deck 官网</a></p>
                <p><a href="https://github.com/ValveSoftware/Proton" target="_blank">Proton GitHub</a></p>
            </div>
        `
    },
    
    devops: {
        title: "软件开发与 Linux",
        content: `
            <p><strong>为什么开发者需要 Linux？</strong></p>
            <p>Linux 是软件开发的首选平台，提供了强大的开发工具和环境。</p>
            
            <p><strong>开发优势：</strong></p>
            <ul>
                <li><strong>命令行工具</strong>：grep、sed、awk 等强大工具</li>
                <li><strong>包管理</strong>：轻松安装开发工具和库</li>
                <li><strong>脚本自动化</strong>：Shell、Python 脚本</li>
                <li><strong>容器技术</strong>：Docker、Kubernetes</li>
                <li><strong>版本控制</strong>：Git 原生支持</li>
            </ul>
            
            <p><strong>开发环境：</strong></p>
            <ul>
                <li><strong>编程语言</strong>：Python、Java、C/C++、Go、Rust</li>
                <li><strong>Web 开发</strong>：Node.js、PHP、Ruby</li>
                <li><strong>数据库</strong>：MySQL、PostgreSQL、MongoDB</li>
                <li><strong>编辑器</strong>：Vim、Emacs、VS Code</li>
            </ul>
            
            <p><strong>DevOps 工具链：</strong></p>
            <ul>
                <li><strong>CI/CD</strong>：Jenkins、GitLab CI、GitHub Actions</li>
                <li><strong>配置管理</strong>：Ansible、Puppet、Chef</li>
                <li><strong>监控</strong>：Prometheus、Grafana、ELK</li>
                <li><strong>容器编排</strong>：Kubernetes、Docker Swarm</li>
            </ul>
            
            <p><strong>学习路径：</strong></p>
            <ul>
                <li>掌握 Linux 基础命令</li>
                <li>学习 Shell 脚本编程</li>
                <li>了解系统管理和网络</li>
                <li>学习容器和云原生技术</li>
            </ul>
            
            <div class="resource-box">
                <p><strong>📚 学习资源：</strong></p>
                <p><a href="https://www.linux.org/" target="_blank">Linux.org</a></p>
                <p><a href="https://github.com/" target="_blank">GitHub</a></p>
                <p><a href="https://kubernetes.io/" target="_blank">Kubernetes 官网</a></p>
            </div>
        `
    },
    
    datascience: {
        title: "数据科学与 Linux",
        content: `
            <p><strong>Linux 在数据科学中的地位：</strong></p>
            <p>大数据和机器学习平台几乎都运行在 Linux 上，数据科学家必须掌握 Linux。</p>
            
            <p><strong>大数据平台：</strong></p>
            <ul>
                <li><strong>Hadoop</strong>：分布式存储和计算</li>
                <li><strong>Spark</strong>：快速大数据处理</li>
                <li><strong>Kafka</strong>：实时数据流</li>
                <li><strong>Flink</strong>：流处理框架</li>
            </ul>
            
            <p><strong>机器学习框架：</strong></p>
            <ul>
                <li><strong>TensorFlow</strong>：Google 的深度学习框架</li>
                <li><strong>PyTorch</strong>：Facebook 的深度学习框架</li>
                <li><strong>Scikit-learn</strong>：传统机器学习</li>
                <li><strong>XGBoost</strong>：梯度提升算法</li>
            </ul>
            
            <p><strong>为什么选择 Linux？</strong></p>
            <ul>
                <li>GPU 服务器通常运行 Linux</li>
                <li>大数据集群必须用 Linux</li>
                <li>命令行处理数据更高效</li>
                <li>远程服务器访问方便</li>
                <li>资源利用率高</li>
            </ul>
            
            <p><strong>常用工具：</strong></p>
            <ul>
                <li><strong>Jupyter Notebook</strong>：交互式编程</li>
                <li><strong>Pandas</strong>：数据处理</li>
                <li><strong>NumPy</strong>：数值计算</li>
                <li><strong>Matplotlib</strong>：数据可视化</li>
            </ul>
            
            <p><strong>职业方向：</strong></p>
            <ul>
                <li>数据工程师</li>
                <li>机器学习工程师</li>
                <li>数据科学家</li>
                <li>AI 研究员</li>
            </ul>
            
            <div class="resource-box">
                <p><strong>🔬 学习资源：</strong></p>
                <p><a href="https://www.tensorflow.org/" target="_blank">TensorFlow</a></p>
                <p><a href="https://pytorch.org/" target="_blank">PyTorch</a></p>
                <p><a href="https://spark.apache.org/" target="_blank">Apache Spark</a></p>
            </div>
        `
    },
    
    security: {
        title: "网络安全与 Linux",
        content: `
            <p><strong>Linux 在网络安全中的重要性：</strong></p>
            <p>Linux 是网络安全专业人员的首选平台，大部分安全工具都运行在 Linux 上。</p>
            
            <p><strong>安全发行版：</strong></p>
            <ul>
                <li><strong>Kali Linux</strong>：渗透测试专用，内置 600+ 工具</li>
                <li><strong>Parrot Security</strong>：轻量级安全发行版</li>
                <li><strong>BlackArch</strong>：基于 Arch，2000+ 安全工具</li>
            </ul>
            
            <p><strong>安全工具类别：</strong></p>
            <ul>
                <li><strong>信息收集</strong>：Nmap、Wireshark、Metasploit</li>
                <li><strong>漏洞扫描</strong>：Nessus、OpenVAS</li>
                <li><strong>密码破解</strong>：John the Ripper、Hashcat</li>
                <li><strong>Web 安全</strong>：Burp Suite、OWASP ZAP</li>
                <li><strong>无线安全</strong>：Aircrack-ng</li>
            </ul>
            
            <p><strong>为什么安全人员用 Linux？</strong></p>
            <ul>
                <li>开源透明，可以审计代码</li>
                <li>强大的命令行工具</li>
                <li>灵活的网络配置</li>
                <li>丰富的安全工具</li>
                <li>社区活跃，资源丰富</li>
            </ul>
            
            <p><strong>学习路径：</strong></p>
            <ul>
                <li>Linux 基础和网络知识</li>
                <li>学习常见漏洞和攻击方式</li>
                <li>掌握渗透测试工具</li>
                <li>参加 CTF 竞赛</li>
                <li>考取安全认证（CEH、OSCP）</li>
            </ul>
            
            <p><strong>职业方向：</strong></p>
            <ul>
                <li>渗透测试工程师</li>
                <li>安全分析师</li>
                <li>安全运维工程师</li>
                <li>漏洞研究员</li>
            </ul>
            
            <div class="resource-box">
                <p><strong>🛡️ 学习资源：</strong></p>
                <p><a href="https://www.kali.org/" target="_blank">Kali Linux 官网</a></p>
                <p><a href="https://www.offensive-security.com/" target="_blank">Offensive Security</a></p>
                <p><a href="https://www.hackthebox.com/" target="_blank">Hack The Box（实战平台）</a></p>
            </div>
        `
    },
    
    embedded: {
        title: "嵌入式系统与 Linux",
        content: `
            <p><strong>嵌入式 Linux：</strong></p>
            <p>Linux 在嵌入式系统中应用广泛，从路由器到智能家居，从工业控制到医疗设备。</p>
            
            <p><strong>为什么选择 Linux？</strong></p>
            <ul>
                <li>开源免费，无授权费</li>
                <li>可裁剪，适合资源受限设备</li>
                <li>支持多种硬件架构（ARM、MIPS、x86）</li>
                <li>驱动丰富</li>
                <li>社区支持强</li>
            </ul>
            
            <p><strong>嵌入式 Linux 发行版：</strong></p>
            <ul>
                <li><strong>Yocto Project</strong>：定制嵌入式 Linux</li>
                <li><strong>Buildroot</strong>：轻量级构建系统</li>
                <li><strong>OpenWrt</strong>：路由器系统</li>
                <li><strong>Raspberry Pi OS</strong>：树莓派系统</li>
            </ul>
            
            <p><strong>应用领域：</strong></p>
            <ul>
                <li><strong>物联网（IoT）</strong>：智能家居、可穿戴设备</li>
                <li><strong>工业控制</strong>：PLC、SCADA 系统</li>
                <li><strong>网络设备</strong>：路由器、交换机</li>
                <li><strong>消费电子</strong>：智能电视、机顶盒</li>
                <li><strong>医疗设备</strong>：监护仪、影像设备</li>
            </ul>
            
            <p><strong>开发板推荐：</strong></p>
            <ul>
                <li><strong>Raspberry Pi</strong>：最受欢迎的单板计算机</li>
                <li><strong>BeagleBone</strong>：工业级开发板</li>
                <li><strong>Arduino</strong>：简单的微控制器（非 Linux）</li>
                <li><strong>NVIDIA Jetson</strong>：AI 边缘计算</li>
            </ul>
            
            <p><strong>学习路径：</strong></p>
            <ul>
                <li>Linux 基础和 C 语言</li>
                <li>了解硬件和电路基础</li>
                <li>学习交叉编译</li>
                <li>驱动开发和内核定制</li>
            </ul>
            
            <div class="resource-box">
                <p><strong>🔧 学习资源：</strong></p>
                <p><a href="https://www.yoctoproject.org/" target="_blank">Yocto Project</a></p>
                <p><a href="https://www.raspberrypi.org/" target="_blank">Raspberry Pi 官网</a></p>
                <p><a href="https://elinux.org/" target="_blank">Embedded Linux Wiki</a></p>
            </div>
        `
    },
    
    supercomputer: {
        title: "超级计算机与 Linux",
        content: `
            <p><strong>Linux 统治超算领域：</strong></p>
            <p>全球 TOP500 超级计算机 100% 运行 Linux，这是 Linux 最辉煌的成就之一。</p>
            
            <p><strong>为什么超算选择 Linux？</strong></p>
            <ul>
                <li><strong>开源可定制</strong>：可以针对硬件深度优化</li>
                <li><strong>稳定可靠</strong>：长时间运行不崩溃</li>
                <li><strong>高性能</strong>：资源利用率极高</li>
                <li><strong>并行计算</strong>：支持 MPI、OpenMP</li>
                <li><strong>免费</strong>：节省巨额授权费</li>
            </ul>
            
            <p><strong>中国的超级计算机：</strong></p>
            <ul>
                <li><strong>天河系列</strong>：天河一号、天河二号</li>
                <li><strong>神威·太湖之光</strong>：曾是世界第一</li>
                <li><strong>天河三号</strong>：E 级超算</li>
                <li>都运行定制的 Linux 系统</li>
            </ul>
            
            <p><strong>超算应用领域：</strong></p>
            <ul>
                <li><strong>科学研究</strong>：气候模拟、宇宙演化</li>
                <li><strong>工程仿真</strong>：飞机设计、核武器模拟</li>
                <li><strong>生物医药</strong>：蛋白质折叠、药物研发</li>
                <li><strong>人工智能</strong>：大模型训练</li>
                <li><strong>密码破解</strong>：国家安全</li>
            </ul>
            
            <p><strong>有趣的事实：</strong></p>
            <ul>
                <li>2017年11月，Linux 首次占据 TOP500 全部席位</li>
                <li>之前超算使用 Unix、Windows 等系统</li>
                <li>现在连微软的超算也用 Linux</li>
            </ul>
            
            <div class="resource-box">
                <p><strong>🚀 了解更多：</strong></p>
                <p><a href="https://www.top500.org/" target="_blank">TOP500 超算排行榜</a></p>
                <p><a href="https://www.linuxfoundation.org/" target="_blank">Linux 基金会</a></p>
            </div>
        `
    },
    
    copilot: {
        title: "GitHub Copilot",
        content: `
            <p><strong>什么是 GitHub Copilot？</strong></p>
            <p>GitHub Copilot 是由 GitHub 和 OpenAI 联合开发的 AI 编程助手，可以在你编写代码时提供智能建议。</p>
            
            <p><strong>核心功能：</strong></p>
            <ul>
                <li><strong>代码补全</strong>：根据上下文自动补全代码</li>
                <li><strong>函数生成</strong>：根据注释生成完整函数</li>
                <li><strong>多语言支持</strong>：支持 Python、JavaScript、Go 等</li>
                <li><strong>Shell 脚本</strong>：帮助编写 Bash 脚本</li>
                <li><strong>测试生成</strong>：自动生成单元测试</li>
            </ul>
            
            <p><strong>在 Linux 学习中的应用：</strong></p>
            <ul>
                <li>编写 Shell 脚本时提供建议</li>
                <li>生成系统管理脚本</li>
                <li>解释复杂的命令</li>
                <li>提供最佳实践</li>
            </ul>
            
            <p><strong>使用示例：</strong></p>
            <ul>
                <li>输入注释："# 批量重命名文件"</li>
                <li>Copilot 自动生成完整的 Shell 脚本</li>
            </ul>
            
            <p><strong>价格：</strong></p>
            <ul>
                <li>学生和开源维护者：<strong>免费</strong></li>
                <li>个人用户：$10/月</li>
                <li>企业用户：$19/月/人</li>
            </ul>
            
            <p><strong>支持的编辑器：</strong></p>
            <ul>
                <li>VS Code</li>
                <li>JetBrains IDEs</li>
                <li>Neovim</li>
                <li>Visual Studio</li>
            </ul>
            
            <div class="resource-box">
                <p><strong>🤖 了解更多：</strong></p>
                <p><a href="https://github.com/features/copilot" target="_blank">GitHub Copilot 官网</a></p>
                <p><a href="https://education.github.com/pack" target="_blank">学生开发者包（免费）</a></p>
            </div>
        `
    },
    
    chatgpt: {
        title: "ChatGPT / Claude",
        content: `
            <p><strong>AI 聊天助手：</strong></p>
            <p>ChatGPT（OpenAI）和 Claude（Anthropic）是强大的 AI 助手，可以回答问题、解释概念、调试代码。</p>
            
            <p><strong>在 Linux 学习中的应用：</strong></p>
            <ul>
                <li><strong>命令解释</strong>："这个命令是什么意思？"</li>
                <li><strong>错误调试</strong>：粘贴错误信息，获取解决方案</li>
                <li><strong>概念学习</strong>："解释一下 Linux 文件权限"</li>
                <li><strong>脚本编写</strong>："帮我写一个备份脚本"</li>
                <li><strong>最佳实践</strong>："如何优化 Nginx 配置？"</li>
            </ul>
            
            <p><strong>使用技巧：</strong></p>
            <ul>
                <li><strong>具体提问</strong>：提供详细的上下文</li>
                <li><strong>分步学习</strong>：从简单到复杂</li>
                <li><strong>验证答案</strong>：不要盲目相信，要测试</li>
                <li><strong>追问细节</strong>：不懂就继续问</li>
            </ul>
            
            <p><strong>示例对话：</strong></p>
            <ul>
                <li>你："如何查看 Linux 系统的内存使用情况？"</li>
                <li>AI："可以使用 free -h 命令..."</li>
                <li>你："-h 参数是什么意思？"</li>
                <li>AI："-h 表示 human-readable，以人类易读的格式显示..."</li>
            </ul>
            
            <p><strong>注意事项：</strong></p>
            <ul>
                <li>AI 可能会出错，要验证</li>
                <li>不要完全依赖 AI</li>
                <li>理解原理比记住命令更重要</li>
                <li>敏感信息不要发给 AI</li>
            </ul>
            
            <div class="resource-box">
                <p><strong>🤖 访问链接：</strong></p>
                <p><a href="https://chat.openai.com/" target="_blank">ChatGPT</a></p>
                <p><a href="https://claude.ai/" target="_blank">Claude</a></p>
                <p><a href="https://www.perplexity.ai/" target="_blank">Perplexity（搜索型 AI）</a></p>
            </div>
        `
    },
    
    explainshell: {
        title: "Explain Shell",
        content: `
            <p><strong>什么是 Explain Shell？</strong></p>
            <p>Explain Shell 是一个在线工具，可以解释 Shell 命令的每个部分，帮助你理解复杂的命令。</p>
            
            <p><strong>如何使用：</strong></p>
            <ul>
                <li>访问 explainshell.com</li>
                <li>输入你不理解的命令</li>
                <li>网站会分解命令，解释每个部分</li>
            </ul>
            
            <p><strong>示例：</strong></p>
            <p>输入命令：<code>tar -xzvf file.tar.gz</code></p>
            <p>解释：</p>
            <ul>
                <li><strong>tar</strong>：归档工具</li>
                <li><strong>-x</strong>：解压（extract）</li>
                <li><strong>-z</strong>：使用 gzip 压缩</li>
                <li><strong>-v</strong>：显示详细信息（verbose）</li>
                <li><strong>-f</strong>：指定文件名（file）</li>
            </ul>
            
            <p><strong>适用场景：</strong></p>
            <ul>
                <li>看到复杂的命令不理解</li>
                <li>学习命令的参数含义</li>
                <li>理解脚本中的命令</li>
                <li>准备面试，复习命令</li>
            </ul>
            
            <p><strong>类似工具：</strong></p>
            <ul>
                <li><strong>man 命令</strong>：Linux 内置手册</li>
                <li><strong>tldr</strong>：简化版命令手册</li>
                <li><strong>cheat.sh</strong>：命令速查表</li>
            </ul>
            
            <p><strong>学习建议：</strong></p>
            <ul>
                <li>遇到不懂的命令先用 Explain Shell</li>
                <li>理解后自己动手试一试</li>
                <li>记录常用命令和参数</li>
            </ul>
            
            <div class="resource-box">
                <p><strong>🔗 工具链接：</strong></p>
                <p><a href="https://explainshell.com/" target="_blank">Explain Shell</a></p>
                <p><a href="https://tldr.sh/" target="_blank">TLDR Pages</a></p>
                <p><a href="https://cheat.sh/" target="_blank">Cheat.sh</a></p>
            </div>
        `
    },
    
    warp: {
        title: "AI 终端助手（Warp、Fig）",
        content: `
            <p><strong>新一代智能终端：</strong></p>
            <p>Warp 和 Fig 是集成了 AI 功能的现代终端，让命令行操作更智能、更高效。</p>
            
            <p><strong>Warp 特点：</strong></p>
            <ul>
                <li><strong>AI 命令搜索</strong>：用自然语言描述需求，AI 生成命令</li>
                <li><strong>智能补全</strong>：根据上下文提供建议</li>
                <li><strong>命令块</strong>：每个命令独立，可以编辑和重新运行</li>
                <li><strong>协作功能</strong>：分享命令和工作流</li>
                <li><strong>现代界面</strong>：类似 IDE 的体验</li>
            </ul>
            
            <p><strong>Fig 特点：</strong></p>
            <ul>
                <li><strong>自动补全</strong>：为 500+ CLI 工具提供补全</li>
                <li><strong>可视化提示</strong>：显示参数说明</li>
                <li><strong>脚本管理</strong>：保存和分享常用命令</li>
                <li><strong>团队协作</strong>：共享配置和脚本</li>
            </ul>
            
            <p><strong>使用场景：</strong></p>
            <ul>
                <li>不记得命令？用自然语言描述</li>
                <li>忘记参数？自动提示</li>
                <li>复杂操作？保存为脚本</li>
                <li>团队协作？共享工作流</li>
            </ul>
            
            <p><strong>示例：</strong></p>
            <ul>
                <li>在 Warp 中输入："查找大于 100MB 的文件"</li>
                <li>AI 生成：<code>find . -type f -size +100M</code></li>
            </ul>
            
            <p><strong>其他智能终端：</strong></p>
            <ul>
                <li><strong>Tabby</strong>：跨平台终端</li>
                <li><strong>Hyper</strong>：基于 Web 技术</li>
                <li><strong>Alacritty</strong>：高性能终端</li>
            </ul>
            
            <p><strong>支持平台：</strong></p>
            <ul>
                <li>Warp：macOS、Linux（测试版）</li>
                <li>Fig：macOS、Linux、Windows</li>
            </ul>
            
            <div class="resource-box">
                <p><strong>🚀 下载链接：</strong></p>
                <p><a href="https://www.warp.dev/" target="_blank">Warp Terminal</a></p>
                <p><a href="https://fig.io/" target="_blank">Fig（已被 AWS 收购）</a></p>
            </div>
        `
    }
};


// 添加更多职业相关信息
const additionalInfo = {
    backend: {
        title: "后端开发工程师",
        content: `
            <p><strong>什么是后端开发？</strong></p>
            <p>后端开发负责服务器端逻辑、数据库、API 等，是网站和应用的"大脑"。</p>
            
            <p><strong>为什么需要 Linux？</strong></p>
            <ul>
                <li>大部分服务器运行 Linux</li>
                <li>需要部署和维护应用</li>
                <li>调试生产环境问题</li>
                <li>性能优化和监控</li>
            </ul>
            
            <p><strong>技术栈：</strong></p>
            <ul>
                <li><strong>编程语言</strong>：Java、Python、Go、Node.js、PHP</li>
                <li><strong>数据库</strong>：MySQL、PostgreSQL、MongoDB、Redis</li>
                <li><strong>Web 服务器</strong>：Nginx、Apache</li>
                <li><strong>容器</strong>：Docker、Kubernetes</li>
                <li><strong>消息队列</strong>：RabbitMQ、Kafka</li>
            </ul>
            
            <p><strong>日常工作：</strong></p>
            <ul>
                <li>编写服务器端代码</li>
                <li>设计数据库结构</li>
                <li>开发 API 接口</li>
                <li>部署和维护服务</li>
                <li>性能优化</li>
            </ul>
            
            <p><strong>薪资水平：</strong></p>
            <ul>
                <li>应届生：8-15K</li>
                <li>1-3年：15-25K</li>
                <li>3-5年：25-40K</li>
                <li>5年以上：40K+</li>
            </ul>
            
            <div class="resource-box">
                <p><strong>📚 学习路径：</strong></p>
                <p>1. 选择一门后端语言（推荐 Python 或 Go）</p>
                <p>2. 学习 Linux 基础和命令行</p>
                <p>3. 掌握数据库和 SQL</p>
                <p>4. 学习 Web 框架（Django、Flask、Gin）</p>
                <p>5. 了解容器和云服务</p>
            </div>
        `
    },
    
    sre: {
        title: "SRE / 运维工程师",
        content: `
            <p><strong>什么是 SRE？</strong></p>
            <p>SRE（Site Reliability Engineering）是 Google 提出的概念，结合了软件工程和系统运维。</p>
            
            <p><strong>核心职责：</strong></p>
            <ul>
                <li><strong>保障可用性</strong>：确保服务 99.9% 以上在线</li>
                <li><strong>自动化</strong>：用代码替代手工操作</li>
                <li><strong>监控告警</strong>：及时发现和解决问题</li>
                <li><strong>容量规划</strong>：预测和管理资源</li>
                <li><strong>事故响应</strong>：快速恢复服务</li>
            </ul>
            
            <p><strong>必备技能：</strong></p>
            <ul>
                <li><strong>Linux 精通</strong>：系统管理、性能调优</li>
                <li><strong>编程能力</strong>：Python、Go、Shell</li>
                <li><strong>网络知识</strong>：TCP/IP、DNS、负载均衡</li>
                <li><strong>容器技术</strong>：Docker、Kubernetes</li>
                <li><strong>监控工具</strong>：Prometheus、Grafana、ELK</li>
                <li><strong>CI/CD</strong>：Jenkins、GitLab CI</li>
            </ul>
            
            <p><strong>工作内容：</strong></p>
            <ul>
                <li>编写自动化脚本</li>
                <li>搭建监控系统</li>
                <li>优化系统性能</li>
                <li>处理线上故障</li>
                <li>容量规划和成本优化</li>
            </ul>
            
            <p><strong>职业发展：</strong></p>
            <ul>
                <li>初级运维 → 高级运维 → SRE</li>
                <li>运维开发 → 架构师</li>
                <li>云计算工程师</li>
            </ul>
            
            <p><strong>薪资水平：</strong></p>
            <ul>
                <li>初级运维：6-12K</li>
                <li>中级运维：12-20K</li>
                <li>高级 SRE：20-40K</li>
                <li>资深 SRE：40K+</li>
            </ul>
            
            <div class="resource-box">
                <p><strong>📖 推荐阅读：</strong></p>
                <p>书籍：《SRE：Google 运维解密》</p>
                <p><a href="https://sre.google/" target="_blank">Google SRE</a></p>
                <p><a href="https://www.usenix.org/conference/srecon" target="_blank">SREcon 大会</a></p>
            </div>
        `
    },
    
    cloudcomputing: {
        title: "云计算",
        content: `
            <p><strong>什么是云计算？</strong></p>
            <p>云计算是通过互联网提供计算资源（服务器、存储、数据库等）的服务模式。</p>
            
            <p><strong>三种服务模式：</strong></p>
            <ul>
                <li><strong>IaaS</strong>（基础设施即服务）：提供虚拟机、存储等，如 AWS EC2</li>
                <li><strong>PaaS</strong>（平台即服务）：提供开发平台，如 Heroku</li>
                <li><strong>SaaS</strong>（软件即服务）：提供应用软件，如 Gmail</li>
            </ul>
            
            <p><strong>主流云平台：</strong></p>
            <ul>
                <li><strong>AWS</strong>：亚马逊，市场份额第一（32%）</li>
                <li><strong>Azure</strong>：微软，第二（23%）</li>
                <li><strong>GCP</strong>：Google，第三（10%）</li>
                <li><strong>阿里云</strong>：中国第一，亚太第一</li>
                <li><strong>腾讯云</strong>：中国第二</li>
            </ul>
            
            <p><strong>为什么学 Linux 对云计算重要？</strong></p>
            <ul>
                <li>云服务器大多运行 Linux</li>
                <li>需要通过命令行管理云资源</li>
                <li>容器和 Kubernetes 基于 Linux</li>
                <li>云原生应用开发需要 Linux 知识</li>
            </ul>
            
            <p><strong>云计算职业方向：</strong></p>
            <ul>
                <li><strong>云架构师</strong>：设计云解决方案</li>
                <li><strong>云运维工程师</strong>：管理云基础设施</li>
                <li><strong>云安全工程师</strong>：保障云安全</li>
                <li><strong>云开发工程师</strong>：开发云原生应用</li>
            </ul>
            
            <p><strong>认证推荐：</strong></p>
            <ul>
                <li>AWS Certified Solutions Architect</li>
                <li>Azure Administrator</li>
                <li>Google Cloud Professional</li>
                <li>阿里云 ACP</li>
            </ul>
            
            <p><strong>市场前景：</strong></p>
            <ul>
                <li>全球云计算市场规模超 5000 亿美元</li>
                <li>年增长率 20%+</li>
                <li>企业上云是大趋势</li>
                <li>人才需求旺盛</li>
            </ul>
            
            <div class="resource-box">
                <p><strong>🌐 学习资源：</strong></p>
                <p><a href="https://aws.amazon.com/training/" target="_blank">AWS 培训</a></p>
                <p><a href="https://learn.microsoft.com/azure/" target="_blank">Azure 学习</a></p>
                <p><a href="https://cloud.google.com/training" target="_blank">GCP 培训</a></p>
            </div>
        `
    }
};

// 合并到主数据库
Object.assign(infoDatabase, additionalInfo);


// 学习方法相关信息
const learningInfo = {
    vm: {
        title: "搭建 Linux 学习环境",
        content: `
            <p><strong>三种方式搭建 Linux 环境：</strong></p>
            
            <p><strong>1. 虚拟机（推荐新手）</strong></p>
            <ul>
                <li><strong>优点</strong>：安全、可以随时快照、不影响主系统</li>
                <li><strong>软件选择</strong>：
                    <ul>
                        <li>VMware Workstation（功能强大）</li>
                        <li>VirtualBox（免费开源）</li>
                        <li>Parallels Desktop（Mac 专用）</li>
                    </ul>
                </li>
                <li><strong>配置建议</strong>：
                    <ul>
                        <li>内存：至少 2GB，推荐 4GB</li>
                        <li>硬盘：20GB 以上</li>
                        <li>CPU：2 核心以上</li>
                    </ul>
                </li>
            </ul>
            
            <p><strong>2. 双系统</strong></p>
            <ul>
                <li><strong>优点</strong>：性能最好，真实体验</li>
                <li><strong>缺点</strong>：需要重启切换，有风险</li>
                <li><strong>注意事项</strong>：
                    <ul>
                        <li>备份重要数据</li>
                        <li>准备 U 盘启动盘</li>
                        <li>了解分区知识</li>
                    </ul>
                </li>
            </ul>
            
            <p><strong>3. WSL（Windows 用户）</strong></p>
            <ul>
                <li><strong>WSL2</strong>：Windows Subsystem for Linux</li>
                <li><strong>优点</strong>：无需虚拟机，与 Windows 无缝集成</li>
                <li><strong>安装</strong>：在 PowerShell 中运行 <code>wsl --install</code></li>
                <li><strong>适合</strong>：开发和学习，不适合图形界面</li>
            </ul>
            
            <p><strong>4. 云服务器（进阶）</strong></p>
            <ul>
                <li>阿里云、腾讯云学生机（很便宜）</li>
                <li>AWS、GCP 免费套餐</li>
                <li>真实的生产环境体验</li>
            </ul>
            
            <div class="resource-box">
                <p><strong>📥 下载链接：</strong></p>
                <p><a href="https://www.virtualbox.org/" target="_blank">VirtualBox 下载</a></p>
                <p><a href="https://www.vmware.com/products/workstation-player.html" target="_blank">VMware Player（免费版）</a></p>
                <p><a href="https://ubuntu.com/download/desktop" target="_blank">Ubuntu 镜像下载</a></p>
            </div>
        `
    },
    
    projects: {
        title: "Linux 实践项目推荐",
        content: `
            <p><strong>为什么要做项目？</strong></p>
            <p>实践是最好的学习方式，通过项目可以综合运用所学知识，遇到真实问题并解决。</p>
            
            <p><strong>入门级项目：</strong></p>
            <ul>
                <li><strong>搭建个人博客</strong>
                    <ul>
                        <li>使用 WordPress 或 Hexo</li>
                        <li>学习：文件管理、权限、Web 服务器</li>
                    </ul>
                </li>
                <li><strong>编写备份脚本</strong>
                    <ul>
                        <li>自动备份重要文件</li>
                        <li>学习：Shell 脚本、定时任务（cron）</li>
                    </ul>
                </li>
                <li><strong>系统监控脚本</strong>
                    <ul>
                        <li>监控 CPU、内存、磁盘使用</li>
                        <li>学习：系统命令、脚本编程</li>
                    </ul>
                </li>
            </ul>
            
            <p><strong>进阶项目：</strong></p>
            <ul>
                <li><strong>搭建 LAMP/LNMP 环境</strong>
                    <ul>
                        <li>Linux + Apache/Nginx + MySQL + PHP</li>
                        <li>学习：服务配置、性能优化</li>
                    </ul>
                </li>
                <li><strong>Docker 容器化应用</strong>
                    <ul>
                        <li>将应用打包成 Docker 镜像</li>
                        <li>学习：容器技术、微服务</li>
                    </ul>
                </li>
                <li><strong>搭建 Git 服务器</strong>
                    <ul>
                        <li>使用 GitLab 或 Gitea</li>
                        <li>学习：版本控制、团队协作</li>
                    </ul>
                </li>
            </ul>
            
            <p><strong>高级项目：</strong></p>
            <ul>
                <li><strong>Kubernetes 集群</strong>
                    <ul>
                        <li>搭建 K8s 集群，部署应用</li>
                        <li>学习：容器编排、云原生</li>
                    </ul>
                </li>
                <li><strong>自动化运维平台</strong>
                    <ul>
                        <li>使用 Ansible 或 Terraform</li>
                        <li>学习：基础设施即代码（IaC）</li>
                    </ul>
                </li>
                <li><strong>监控告警系统</strong>
                    <ul>
                        <li>Prometheus + Grafana + Alertmanager</li>
                        <li>学习：监控体系、可观测性</li>
                    </ul>
                </li>
            </ul>
            
            <div class="resource-box">
                <p><strong>🎯 项目资源：</strong></p>
                <p><a href="https://github.com/practical-tutorials/project-based-learning" target="_blank">项目式学习资源</a></p>
                <p><a href="https://www.linuxjourney.com/" target="_blank">Linux Journey（互动教程）</a></p>
            </div>
        `
    },
    
    manpage: {
        title: "Man 命令 - Linux 手册",
        content: `
            <p><strong>什么是 Man Page？</strong></p>
            <p>Man（Manual）是 Linux 内置的命令手册系统，包含了几乎所有命令的详细文档。</p>
            
            <p><strong>基本用法：</strong></p>
            <ul>
                <li><code>man 命令名</code>：查看命令手册</li>
                <li>例如：<code>man ls</code> 查看 ls 命令的用法</li>
            </ul>
            
            <p><strong>Man Page 结构：</strong></p>
            <ul>
                <li><strong>NAME</strong>：命令名称和简介</li>
                <li><strong>SYNOPSIS</strong>：语法格式</li>
                <li><strong>DESCRIPTION</strong>：详细描述</li>
                <li><strong>OPTIONS</strong>：参数说明</li>
                <li><strong>EXAMPLES</strong>：使用示例</li>
                <li><strong>SEE ALSO</strong>：相关命令</li>
            </ul>
            
            <p><strong>导航技巧：</strong></p>
            <ul>
                <li><strong>空格</strong>：向下翻页</li>
                <li><strong>b</strong>：向上翻页</li>
                <li><strong>/关键词</strong>：搜索</li>
                <li><strong>n</strong>：下一个搜索结果</li>
                <li><strong>q</strong>：退出</li>
            </ul>
            
            <p><strong>Man Page 分类：</strong></p>
            <ul>
                <li><strong>1</strong>：用户命令</li>
                <li><strong>2</strong>：系统调用</li>
                <li><strong>3</strong>：库函数</li>
                <li><strong>5</strong>：配置文件格式</li>
                <li><strong>8</strong>：系统管理命令</li>
            </ul>
            
            <p><strong>实用技巧：</strong></p>
            <ul>
                <li><code>man -k 关键词</code>：搜索相关命令</li>
                <li><code>man 5 passwd</code>：查看 passwd 文件格式</li>
                <li><code>whatis 命令</code>：查看命令简介</li>
                <li><code>apropos 关键词</code>：搜索命令</li>
            </ul>
            
            <p><strong>替代工具：</strong></p>
            <ul>
                <li><strong>tldr</strong>：简化版手册，只显示常用例子</li>
                <li><strong>cheat</strong>：速查表</li>
                <li><strong>--help</strong>：大部分命令支持 --help 参数</li>
            </ul>
            
            <div class="resource-box">
                <p><strong>💡 学习建议：</strong></p>
                <p>遇到不懂的命令，第一时间 <code>man 命令名</code></p>
                <p>养成查手册的习惯，比搜索引擎更准确</p>
                <p><a href="https://tldr.sh/" target="_blank">安装 tldr</a></p>
            </div>
        `
    },
    
    community: {
        title: "Linux 学习社区",
        content: `
            <p><strong>为什么要加入社区？</strong></p>
            <ul>
                <li>遇到问题可以求助</li>
                <li>学习他人的经验</li>
                <li>了解最新技术动态</li>
                <li>结识志同道合的朋友</li>
                <li>参与开源项目</li>
            </ul>
            
            <p><strong>国际社区：</strong></p>
            <ul>
                <li><strong>Stack Overflow</strong>
                    <ul>
                        <li>最大的技术问答社区</li>
                        <li>提问前先搜索，可能已有答案</li>
                        <li><a href="https://stackoverflow.com/" target="_blank">访问 Stack Overflow</a></li>
                    </ul>
                </li>
                <li><strong>Reddit</strong>
                    <ul>
                        <li>r/linux、r/linuxquestions</li>
                        <li>活跃的讨论社区</li>
                        <li><a href="https://www.reddit.com/r/linux/" target="_blank">r/linux</a></li>
                    </ul>
                </li>
                <li><strong>GitHub</strong>
                    <ul>
                        <li>参与开源项目</li>
                        <li>阅读优秀代码</li>
                        <li><a href="https://github.com/" target="_blank">GitHub</a></li>
                    </ul>
                </li>
            </ul>
            
            <p><strong>中文社区：</strong></p>
            <ul>
                <li><strong>Linux 中国</strong>
                    <ul>
                        <li>中文 Linux 资讯和教程</li>
                        <li><a href="https://linux.cn/" target="_blank">Linux 中国</a></li>
                    </ul>
                </li>
                <li><strong>V2EX</strong>
                    <ul>
                        <li>技术讨论社区</li>
                        <li><a href="https://www.v2ex.com/" target="_blank">V2EX</a></li>
                    </ul>
                </li>
                <li><strong>掘金</strong>
                    <ul>
                        <li>技术文章分享平台</li>
                        <li><a href="https://juejin.cn/" target="_blank">掘金</a></li>
                    </ul>
                </li>
                <li><strong>CSDN</strong>
                    <ul>
                        <li>中文技术博客</li>
                        <li><a href="https://www.csdn.net/" target="_blank">CSDN</a></li>
                    </ul>
                </li>
            </ul>
            
            <p><strong>发行版官方论坛：</strong></p>
            <ul>
                <li><a href="https://ubuntuforums.org/" target="_blank">Ubuntu 论坛</a></li>
                <li><a href="https://forums.debian.net/" target="_blank">Debian 论坛</a></li>
                <li><a href="https://bbs.archlinux.org/" target="_blank">Arch Linux 论坛</a></li>
            </ul>
            
            <p><strong>提问技巧：</strong></p>
            <ul>
                <li>先搜索，避免重复提问</li>
                <li>描述清楚问题和环境</li>
                <li>提供错误信息和日志</li>
                <li>说明已尝试的解决方法</li>
                <li>问题解决后分享方案</li>
            </ul>
            
            <p><strong>线下活动：</strong></p>
            <ul>
                <li>参加本地 Linux 用户组（LUG）</li>
                <li>参加技术沙龙和 Meetup</li>
                <li>参加开源大会（如 COSCUP、GNOME.Asia）</li>
            </ul>
            
            <div class="resource-box">
                <p><strong>🤝 推荐阅读：</strong></p>
                <p><a href="https://github.com/ryanhanwu/How-To-Ask-Questions-The-Smart-Way" target="_blank">《提问的智慧》</a></p>
            </div>
        `
    }
};

// 合并到主数据库
Object.assign(infoDatabase, learningInfo);
