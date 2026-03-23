// 第二课知识点数据库
const infoDatabase = {
    // 硬件资源相关
    cpu: {
        title: "🔧 CPU（中央处理器）",
        content: `
            <p>CPU 是计算机的"大脑"，负责执行所有计算和控制任务。</p>
            <ul>
                <li><strong>核心概念</strong>：
                    <ul>
                        <li>核心数：物理核心，真正的处理单元</li>
                        <li>线程数：逻辑核心，通过超线程技术实现</li>
                        <li>主频：CPU 的运行速度（GHz）</li>
                        <li>缓存：L1、L2、L3 缓存，加速数据访问</li>
                    </ul>
                </li>
                <li><strong>虚拟机中的 CPU</strong>：
                    <ul>
                        <li>可以分配多个虚拟 CPU（vCPU）</li>
                        <li>建议：2-4 核用于学习环境</li>
                        <li>不要超过物理核心数</li>
                    </ul>
                </li>
                <li><strong>查看 CPU 信息</strong>：
                    <ul>
                        <li>lscpu - 显示 CPU 架构信息</li>
                        <li>cat /proc/cpuinfo - 详细 CPU 信息</li>
                        <li>top/htop - 实时 CPU 使用率</li>
                    </ul>
                </li>
            </ul>
            <p style="margin-top: 10px; color: #ffd700;">💡 多核 CPU 可以同时处理多个任务</p>
        `
    },
    
    memory: {
        title: "💾 内存（RAM）",
        content: `
            <p>内存是计算机的"工作台"，用于临时存储正在运行的程序和数据。</p>
            <ul>
                <li><strong>内存的作用</strong>：
                    <ul>
                        <li>存储正在运行的程序</li>
                        <li>缓存频繁访问的数据</li>
                        <li>速度比硬盘快 1000 倍以上</li>
                        <li>断电后数据会丢失</li>
                    </ul>
                </li>
                <li><strong>虚拟机内存分配</strong>：
                    <ul>
                        <li>建议：4-8 GB 用于 Ubuntu 桌面</li>
                        <li>最小：2 GB（仅命令行）</li>
                        <li>不要超过物理内存的 50%</li>
                        <li>Hyper-V 支持动态内存</li>
                    </ul>
                </li>
                <li><strong>查看内存信息</strong>：
                    <ul>
                        <li>free -h - 显示内存使用情况</li>
                        <li>cat /proc/meminfo - 详细内存信息</li>
                        <li>vmstat - 虚拟内存统计</li>
                    </ul>
                </li>
                <li><strong>内存不足的表现</strong>：
                    <ul>
                        <li>系统变慢</li>
                        <li>程序崩溃</li>
                        <li>使用 swap（交换空间）</li>
                    </ul>
                </li>
            </ul>
        `
    },
    
    disk: {
        title: "💿 硬盘存储",
        content: `
            <p>硬盘是计算机的"仓库"，用于永久存储数据。</p>
            <ul>
                <li><strong>硬盘类型</strong>：
                    <ul>
                        <li>HDD（机械硬盘）：容量大、便宜、速度慢</li>
                        <li>SSD（固态硬盘）：速度快、贵、容量小</li>
                        <li>NVMe SSD：最快的固态硬盘</li>
                    </ul>
                </li>
                <li><strong>虚拟磁盘</strong>：
                    <ul>
                        <li>虚拟机使用虚拟磁盘文件（.vhdx、.vmdk）</li>
                        <li>建议：40-60 GB 用于学习</li>
                        <li>动态扩展 vs 固定大小</li>
                    </ul>
                </li>
                <li><strong>Linux 中的硬盘</strong>：
                    <ul>
                        <li>/dev/sda - 第一块硬盘</li>
                        <li>/dev/sda1 - 第一个分区</li>
                        <li>df -h - 查看磁盘使用情况</li>
                        <li>du -sh - 查看目录大小</li>
                    </ul>
                </li>
            </ul>
            <p style="margin-top: 10px; color: #ffd700;">💡 SSD 能显著提升系统性能</p>
        `
    },
    
    network: {
        title: "🌐 网络",
        content: `
            <p>网络让计算机之间可以通信和共享资源。</p>
            <ul>
                <li><strong>网络基础概念</strong>：
                    <ul>
                        <li>IP 地址：设备在网络中的地址</li>
                        <li>子网掩码：划分网络范围</li>
                        <li>网关：连接不同网络的设备</li>
                        <li>DNS：域名解析服务</li>
                    </ul>
                </li>
                <li><strong>虚拟机网络模式</strong>：
                    <ul>
                        <li>NAT：共享主机 IP，可上网</li>
                        <li>桥接：独立 IP，像真实电脑</li>
                        <li>仅主机：只与主机通信</li>
                    </ul>
                </li>
                <li><strong>Linux 网络命令</strong>：
                    <ul>
                        <li>ip addr - 查看 IP 地址</li>
                        <li>ping - 测试网络连通性</li>
                        <li>netstat - 查看网络连接</li>
                        <li>ss - 更现代的网络工具</li>
                    </ul>
                </li>
            </ul>
        `
    },
    
    // 虚拟化相关
    hypervisor: {
        title: "🔧 Hypervisor（虚拟化管理程序）",
        content: `
            <p>Hypervisor 是虚拟化技术的核心，负责管理和分配物理资源给虚拟机。</p>
            <ul>
                <li><strong>Type 1（裸机型）</strong>：直接运行在硬件上，性能更好
                    <ul>
                        <li>Hyper-V、VMware ESXi、KVM、Xen</li>
                        <li>企业级应用首选</li>
                    </ul>
                </li>
                <li><strong>Type 2（托管型）</strong>：运行在操作系统之上
                    <ul>
                        <li>VirtualBox、VMware Workstation</li>
                        <li>个人学习和开发使用</li>
                    </ul>
                </li>
            </ul>
            <p style="margin-top: 10px; color: #ffd700;">💡 Hyper-V 是 Type 1，所以性能接近原生系统</p>
        `
    },
    
    snapshot: {
        title: "📸 虚拟机快照",
        content: `
            <p>快照是虚拟机在某个时间点的完整状态保存。</p>
            <ul>
                <li><strong>作用</strong>：
                    <ul>
                        <li>保存系统状态，随时恢复</li>
                        <li>测试新软件前创建快照</li>
                        <li>学习命令时不怕误操作</li>
                    </ul>
                </li>
                <li><strong>使用场景</strong>：
                    <ul>
                        <li>安装新软件前</li>
                        <li>修改系统配置前</li>
                        <li>学习危险命令前（如 rm -rf）</li>
                    </ul>
                </li>
                <li><strong>注意事项</strong>：
                    <ul>
                        <li>快照会占用磁盘空间</li>
                        <li>不要创建太多快照</li>
                        <li>定期清理不需要的快照</li>
                    </ul>
                </li>
            </ul>
        `
    },
    
    nat: {
        title: "🌐 NAT 网络模式",
        content: `
            <p>NAT（Network Address Translation）网络地址转换模式。</p>
            <ul>
                <li><strong>工作原理</strong>：虚拟机通过主机的 IP 访问外网</li>
                <li><strong>优点</strong>：
                    <ul>
                        <li>虚拟机可以上网</li>
                        <li>不需要额外的 IP 地址</li>
                        <li>安全性好，外部无法直接访问</li>
                    </ul>
                </li>
                <li><strong>缺点</strong>：
                    <ul>
                        <li>局域网其他设备无法访问虚拟机</li>
                        <li>不适合做服务器</li>
                    </ul>
                </li>
                <li><strong>适用场景</strong>：学习、开发、个人使用</li>
            </ul>
            <p style="margin-top: 10px; color: #ffd700;">💡 推荐新手使用 NAT 模式</p>
        `
    },
    
    bridge: {
        title: "🌉 桥接网络模式",
        content: `
            <p>桥接模式让虚拟机像真实电脑一样连接到网络。</p>
            <ul>
                <li><strong>工作原理</strong>：虚拟机获得独立的 IP 地址</li>
                <li><strong>优点</strong>：
                    <ul>
                        <li>虚拟机像真实电脑一样</li>
                        <li>局域网设备可以访问</li>
                        <li>适合做服务器</li>
                    </ul>
                </li>
                <li><strong>缺点</strong>：
                    <ul>
                        <li>需要额外的 IP 地址</li>
                        <li>可能受网络限制</li>
                    </ul>
                </li>
                <li><strong>适用场景</strong>：搭建服务器、团队协作</li>
            </ul>
        `
    },
    
    docker: {
        title: "🐳 Docker 容器",
        content: `
            <p>Docker 是一种轻量级的虚拟化技术。</p>
            <ul>
                <li><strong>与虚拟机的区别</strong>：
                    <ul>
                        <li>共享主机内核，不需要完整 OS</li>
                        <li>启动速度快（秒级）</li>
                        <li>资源占用小（MB 级别）</li>
                    </ul>
                </li>
                <li><strong>优势</strong>：
                    <ul>
                        <li>轻量高效</li>
                        <li>易于部署和迁移</li>
                        <li>适合微服务架构</li>
                    </ul>
                </li>
                <li><strong>应用场景</strong>：
                    <ul>
                        <li>应用程序打包和部署</li>
                        <li>微服务架构</li>
                        <li>持续集成/持续部署（CI/CD）</li>
                    </ul>
                </li>
            </ul>
            <p style="margin-top: 10px; color: #ffd700;">💡 Docker 是现代开发的必备技能</p>
        `
    },
    
    // 文件系统相关
    filesystem: {
        title: "📁 Linux 文件系统",
        content: `
            <p>Linux 采用树状目录结构，一切从根目录 / 开始。</p>
            <ul>
                <li><strong>核心理念</strong>：一切皆文件
                    <ul>
                        <li>普通文件、目录、设备都是文件</li>
                        <li>统一的操作方式</li>
                    </ul>
                </li>
                <li><strong>文件系统类型</strong>：
                    <ul>
                        <li>ext4：Linux 默认文件系统</li>
                        <li>xfs：高性能文件系统</li>
                        <li>btrfs：新一代文件系统</li>
                    </ul>
                </li>
                <li><strong>挂载概念</strong>：
                    <ul>
                        <li>将设备连接到目录树</li>
                        <li>例如：U 盘挂载到 /mnt/usb</li>
                    </ul>
                </li>
            </ul>
        `
    },
    
    root: {
        title: "/ - 根目录",
        content: `
            <p>根目录是 Linux 文件系统的起点，所有文件和目录都在其下。</p>
            <ul>
                <li><strong>与 Windows 的区别</strong>：
                    <ul>
                        <li>Windows：多个根（C:\、D:\、E:\）</li>
                        <li>Linux：只有一个根 /</li>
                    </ul>
                </li>
                <li><strong>重要性</strong>：
                    <ul>
                        <li>系统的最顶层</li>
                        <li>所有路径都从这里开始</li>
                        <li>不能删除或移动</li>
                    </ul>
                </li>
                <li><strong>权限</strong>：
                    <ul>
                        <li>只有 root 用户可以修改根目录下的文件</li>
                        <li>普通用户只能在自己的主目录操作</li>
                    </ul>
                </li>
            </ul>
            <p style="margin-top: 10px; color: #ffd700;">💡 记住：/ 是根目录，~ 是用户主目录</p>
        `
    },
    
    home: {
        title: "🏠 /home - 用户主目录",
        content: `
            <p>/home 目录存放所有用户的个人文件。</p>
            <ul>
                <li><strong>结构</strong>：
                    <ul>
                        <li>/home/user1 - 用户1的主目录</li>
                        <li>/home/user2 - 用户2的主目录</li>
                        <li>每个用户只能访问自己的目录</li>
                    </ul>
                </li>
                <li><strong>常见子目录</strong>：
                    <ul>
                        <li>Desktop - 桌面</li>
                        <li>Documents - 文档</li>
                        <li>Downloads - 下载</li>
                        <li>Pictures - 图片</li>
                        <li>Music - 音乐</li>
                        <li>Videos - 视频</li>
                    </ul>
                </li>
                <li><strong>快捷符号</strong>：
                    <ul>
                        <li>~ 代表当前用户主目录</li>
                        <li>cd ~ 等同于 cd /home/username</li>
                    </ul>
                </li>
            </ul>
        `
    },
    
    etc: {
        title: "⚙️ /etc - 配置文件目录",
        content: `
            <p>/etc 存放系统和应用程序的配置文件。</p>
            <ul>
                <li><strong>重要配置文件</strong>：
                    <ul>
                        <li>/etc/passwd - 用户账户信息</li>
                        <li>/etc/shadow - 用户密码（加密）</li>
                        <li>/etc/group - 用户组信息</li>
                        <li>/etc/hosts - 主机名和 IP 映射</li>
                        <li>/etc/fstab - 文件系统挂载配置</li>
                        <li>/etc/ssh/sshd_config - SSH 服务配置</li>
                    </ul>
                </li>
                <li><strong>注意事项</strong>：
                    <ul>
                        <li>修改配置文件需要 root 权限</li>
                        <li>修改前建议备份</li>
                        <li>语法错误可能导致系统无法启动</li>
                    </ul>
                </li>
            </ul>
            <p style="margin-top: 10px; color: #ffd700;">💡 系统出问题？先检查 /etc 下的配置</p>
        `
    },
    
    var: {
        title: "📊 /var - 可变数据目录",
        content: `
            <p>/var 存放经常变化的数据，如日志、缓存等。</p>
            <ul>
                <li><strong>/var/log</strong> - 系统日志
                    <ul>
                        <li>/var/log/syslog - 系统日志</li>
                        <li>/var/log/auth.log - 认证日志</li>
                        <li>/var/log/apache2/ - Web 服务器日志</li>
                    </ul>
                </li>
                <li><strong>/var/cache</strong> - 应用缓存</li>
                <li><strong>/var/tmp</strong> - 临时文件（不会自动清理）</li>
                <li><strong>/var/www</strong> - 网站文件</li>
                <li><strong>排查问题</strong>：
                    <ul>
                        <li>系统异常？查看 /var/log/syslog</li>
                        <li>登录失败？查看 /var/log/auth.log</li>
                        <li>磁盘满了？检查 /var/log 大小</li>
                    </ul>
                </li>
            </ul>
        `
    },
    
    // 路径相关
    absolute: {
        title: "📍 绝对路径",
        content: `
            <p>绝对路径从根目录 / 开始，完整描述文件位置。</p>
            <ul>
                <li><strong>特点</strong>：
                    <ul>
                        <li>以 / 开头</li>
                        <li>无论在哪里，路径都一样</li>
                        <li>明确、不会产生歧义</li>
                    </ul>
                </li>
                <li><strong>示例</strong>：
                    <ul>
                        <li>/home/student/Documents/file.txt</li>
                        <li>/etc/ssh/sshd_config</li>
                        <li>/var/log/syslog</li>
                    </ul>
                </li>
                <li><strong>使用场景</strong>：
                    <ul>
                        <li>脚本中引用文件</li>
                        <li>配置文件中指定路径</li>
                        <li>需要明确位置时</li>
                    </ul>
                </li>
            </ul>
            <p style="margin-top: 10px; color: #ffd700;">💡 绝对路径更安全，不会因当前位置改变而出错</p>
        `
    },
    
    relative: {
        title: "🔀 相对路径",
        content: `
            <p>相对路径从当前位置开始，描述文件的相对位置。</p>
            <ul>
                <li><strong>特点</strong>：
                    <ul>
                        <li>不以 / 开头</li>
                        <li>取决于当前工作目录</li>
                        <li>更简洁</li>
                    </ul>
                </li>
                <li><strong>示例</strong>：
                    <ul>
                        <li>Documents/file.txt（当前目录下的 Documents）</li>
                        <li>../parent/file.txt（上级目录的 parent）</li>
                        <li>./script.sh（当前目录的 script.sh）</li>
                    </ul>
                </li>
                <li><strong>特殊符号</strong>：
                    <ul>
                        <li>. - 当前目录</li>
                        <li>.. - 上级目录</li>
                        <li>~ - 用户主目录</li>
                    </ul>
                </li>
                <li><strong>使用场景</strong>：
                    <ul>
                        <li>日常操作更方便</li>
                        <li>在同一目录树中移动</li>
                    </ul>
                </li>
            </ul>
        `
    },
    
    // 命令相关
    pwd: {
        title: "📍 pwd 命令",
        content: `
            <p>pwd (Print Working Directory) 显示当前工作目录。</p>
            <ul>
                <li><strong>用法</strong>：
                    <ul>
                        <li>pwd - 显示当前目录</li>
                        <li>pwd -P - 显示物理路径（解析符号链接）</li>
                    </ul>
                </li>
                <li><strong>使用场景</strong>：
                    <ul>
                        <li>迷路时查看当前位置</li>
                        <li>确认是否在正确目录</li>
                        <li>脚本中获取当前路径</li>
                    </ul>
                </li>
                <li><strong>示例</strong>：
                    <ul>
                        <li>$ pwd<br>/home/student</li>
                        <li>$ cd /etc<br>$ pwd<br>/etc</li>
                    </ul>
                </li>
            </ul>
            <p style="margin-top: 10px; color: #ffd700;">💡 pwd 是最简单但最常用的命令之一</p>
        `
    },
    
    cd: {
        title: "🚶 cd 命令",
        content: `
            <p>cd (Change Directory) 切换工作目录。</p>
            <ul>
                <li><strong>常用方式</strong>：
                    <ul>
                        <li>cd /path - 切换到绝对路径</li>
                        <li>cd dir - 切换到相对路径</li>
                        <li>cd .. - 返回上级目录</li>
                        <li>cd ~ 或 cd - 回到主目录</li>
                        <li>cd - - 回到上一个目录</li>
                    </ul>
                </li>
                <li><strong>技巧</strong>：
                    <ul>
                        <li>cd ../../ - 返回上两级</li>
                        <li>cd ~/Documents - 快速到文档目录</li>
                        <li>使用 Tab 键自动补全路径</li>
                    </ul>
                </li>
                <li><strong>常见错误</strong>：
                    <ul>
                        <li>目录不存在：检查拼写和路径</li>
                        <li>权限被拒绝：没有访问权限</li>
                    </ul>
                </li>
            </ul>
        `
    },
    
    ls: {
        title: "👀 ls 命令",
        content: `
            <p>ls (List) 列出目录内容。</p>
            <ul>
                <li><strong>常用参数</strong>：
                    <ul>
                        <li>-l：详细信息（权限、大小、时间）</li>
                        <li>-a：显示隐藏文件（以 . 开头）</li>
                        <li>-h：人类可读的文件大小</li>
                        <li>-R：递归显示子目录</li>
                        <li>-t：按时间排序</li>
                        <li>-r：反向排序</li>
                    </ul>
                </li>
                <li><strong>组合使用</strong>：
                    <ul>
                        <li>ls -lah：详细+隐藏+可读大小</li>
                        <li>ls -lt：按时间排序的详细列表</li>
                        <li>ls -lhS：按大小排序</li>
                    </ul>
                </li>
                <li><strong>输出解读</strong>：
                    <ul>
                        <li>第一列：文件类型和权限</li>
                        <li>d = 目录，- = 文件，l = 链接</li>
                    </ul>
                </li>
            </ul>
            <p style="margin-top: 10px; color: #ffd700;">💡 ls -lah 是最常用的组合</p>
        `
    },
    
    mkdir: {
        title: "📁 mkdir 命令",
        content: `
            <p>mkdir (Make Directory) 创建新目录。</p>
            <ul>
                <li><strong>基本用法</strong>：
                    <ul>
                        <li>mkdir dir - 创建单个目录</li>
                        <li>mkdir dir1 dir2 dir3 - 创建多个目录</li>
                    </ul>
                </li>
                <li><strong>-p 参数（重要）</strong>：
                    <ul>
                        <li>自动创建父目录</li>
                        <li>mkdir -p a/b/c 会创建 a、a/b、a/b/c</li>
                        <li>如果目录已存在，不会报错</li>
                    </ul>
                </li>
                <li><strong>-m 参数</strong>：
                    <ul>
                        <li>创建时设置权限</li>
                        <li>mkdir -m 755 dir</li>
                    </ul>
                </li>
                <li><strong>实用技巧</strong>：
                    <ul>
                        <li>mkdir -p project/{src,docs,tests} - 创建项目结构</li>
                        <li>mkdir -p ~/backup/$(date +%Y%m%d) - 按日期创建备份目录</li>
                    </ul>
                </li>
            </ul>
        `
    },
    
    cp: {
        title: "📋 cp 命令",
        content: `
            <p>cp (Copy) 复制文件或目录。</p>
            <ul>
                <li><strong>基本用法</strong>：
                    <ul>
                        <li>cp file1 file2 - 复制文件</li>
                        <li>cp file dir/ - 复制到目录</li>
                    </ul>
                </li>
                <li><strong>重要参数</strong>：
                    <ul>
                        <li>-r：递归复制目录（必须）</li>
                        <li>-i：交互式，覆盖前询问</li>
                        <li>-p：保留文件属性（时间、权限）</li>
                        <li>-v：显示详细过程</li>
                        <li>-u：只复制更新的文件</li>
                    </ul>
                </li>
                <li><strong>实用示例</strong>：
                    <ul>
                        <li>cp -r dir1 dir2 - 复制整个目录</li>
                        <li>cp -rp source/ backup/ - 完整备份</li>
                        <li>cp *.txt /tmp/ - 复制所有 txt 文件</li>
                    </ul>
                </li>
                <li><strong>注意</strong>：
                    <ul>
                        <li>复制目录必须加 -r</li>
                        <li>目标存在会覆盖，建议用 -i</li>
                    </ul>
                </li>
            </ul>
        `
    },
    
    mv: {
        title: "🚚 mv 命令",
        content: `
            <p>mv (Move) 移动文件或重命名。</p>
            <ul>
                <li><strong>两种用途</strong>：
                    <ul>
                        <li>重命名：mv old.txt new.txt</li>
                        <li>移动：mv file.txt /tmp/</li>
                    </ul>
                </li>
                <li><strong>常用参数</strong>：
                    <ul>
                        <li>-i：交互式，覆盖前询问</li>
                        <li>-f：强制覆盖</li>
                        <li>-v：显示详细过程</li>
                        <li>-u：只移动更新的文件</li>
                    </ul>
                </li>
                <li><strong>实用示例</strong>：
                    <ul>
                        <li>mv file.txt newname.txt - 重命名</li>
                        <li>mv file.txt /tmp/ - 移动文件</li>
                        <li>mv dir1 dir2 - 重命名目录</li>
                        <li>mv *.log /var/log/ - 批量移动</li>
                    </ul>
                </li>
                <li><strong>与 cp 的区别</strong>：
                    <ul>
                        <li>mv 不需要 -r 参数</li>
                        <li>mv 是移动，不是复制</li>
                        <li>mv 更快（不复制数据）</li>
                    </ul>
                </li>
            </ul>
        `
    },
    
    rm: {
        title: "🗑️ rm 命令（危险）",
        content: `
            <p>rm (Remove) 删除文件或目录。</p>
            <div class="resource-box" style="background: rgba(255,95,86,0.2);">
                <p style="color: #ff5f56;"><strong>⚠️ 警告：Linux 没有回收站，删除即永久！</strong></p>
            </div>
            <ul>
                <li><strong>基本用法</strong>：
                    <ul>
                        <li>rm file.txt - 删除文件</li>
                        <li>rm file1 file2 - 删除多个文件</li>
                    </ul>
                </li>
                <li><strong>参数</strong>：
                    <ul>
                        <li>-r：递归删除目录</li>
                        <li>-f：强制删除，不询问</li>
                        <li>-i：交互式，删除前询问</li>
                        <li>-v：显示删除过程</li>
                    </ul>
                </li>
                <li><strong>危险命令</strong>：
                    <ul>
                        <li style="color: #ff5f56;">rm -rf / - 删除整个系统（永远不要运行！）</li>
                        <li style="color: #ff5f56;">rm -rf * - 删除当前目录所有文件</li>
                    </ul>
                </li>
                <li><strong>安全建议</strong>：
                    <ul>
                        <li>使用 rm -i 交互式删除</li>
                        <li>删除前用 ls 确认</li>
                        <li>重要文件先备份</li>
                        <li>使用虚拟机快照</li>
                    </ul>
                </li>
            </ul>
        `
    },
    
    cat: {
        title: "📄 cat 命令",
        content: `
            <p>cat (Concatenate) 查看和连接文件内容。</p>
            <ul>
                <li><strong>基本用法</strong>：
                    <ul>
                        <li>cat file.txt - 显示文件内容</li>
                        <li>cat file1 file2 - 显示多个文件</li>
                    </ul>
                </li>
                <li><strong>常用参数</strong>：
                    <ul>
                        <li>-n：显示行号</li>
                        <li>-b：只给非空行编号</li>
                        <li>-A：显示所有字符（包括不可见字符）</li>
                    </ul>
                </li>
                <li><strong>高级用法</strong>：
                    <ul>
                        <li>cat > file.txt - 创建文件（Ctrl+D 结束）</li>
                        <li>cat file1 file2 > merged.txt - 合并文件</li>
                        <li>cat file.txt | grep "keyword" - 配合管道</li>
                    </ul>
                </li>
                <li><strong>适用场景</strong>：
                    <ul>
                        <li>查看小文件</li>
                        <li>快速浏览内容</li>
                        <li>大文件用 less 或 more</li>
                    </ul>
                </li>
            </ul>
        `
    },
    
    less: {
        title: "📖 less 命令",
        content: `
            <p>less 是一个强大的文件查看器，适合大文件。</p>
            <ul>
                <li><strong>基本操作</strong>：
                    <ul>
                        <li>空格键：下一页</li>
                        <li>b：上一页</li>
                        <li>↑↓：上下滚动一行</li>
                        <li>q：退出</li>
                    </ul>
                </li>
                <li><strong>搜索功能</strong>：
                    <ul>
                        <li>/keyword：向下搜索</li>
                        <li>?keyword：向上搜索</li>
                        <li>n：下一个匹配</li>
                        <li>N：上一个匹配</li>
                    </ul>
                </li>
                <li><strong>其他功能</strong>：
                    <ul>
                        <li>g：跳到文件开头</li>
                        <li>G：跳到文件结尾</li>
                        <li>数字+G：跳到指定行</li>
                        <li>h：查看帮助</li>
                    </ul>
                </li>
                <li><strong>优势</strong>：
                    <ul>
                        <li>不会一次性加载整个文件</li>
                        <li>支持向前和向后浏览</li>
                        <li>功能比 more 强大</li>
                    </ul>
                </li>
            </ul>
            <p style="margin-top: 10px; color: #ffd700;">💡 less is more（less 比 more 更强大）</p>
        `
    },
    
    tail: {
        title: "🔚 tail 命令",
        content: `
            <p>tail 查看文件的结尾部分，常用于查看日志。</p>
            <ul>
                <li><strong>基本用法</strong>：
                    <ul>
                        <li>tail file.txt - 显示最后 10 行</li>
                        <li>tail -n 20 file.txt - 显示最后 20 行</li>
                        <li>tail -n +10 file.txt - 从第 10 行开始显示</li>
                    </ul>
                </li>
                <li><strong>-f 参数（重要）</strong>：
                    <ul>
                        <li>tail -f log.txt - 实时查看日志</li>
                        <li>文件更新时自动显示新内容</li>
                        <li>Ctrl+C 退出</li>
                    </ul>
                </li>
                <li><strong>实用场景</strong>：
                    <ul>
                        <li>tail -f /var/log/syslog - 实时查看系统日志</li>
                        <li>tail -f /var/log/apache2/access.log - 监控 Web 访问</li>
                        <li>tail -n 100 error.log | grep "ERROR" - 查找错误</li>
                    </ul>
                </li>
                <li><strong>配合 head</strong>：
                    <ul>
                        <li>head -n 20 file.txt | tail -n 10 - 显示 11-20 行</li>
                    </ul>
                </li>
            </ul>
            <p style="margin-top: 10px; color: #ffd700;">💡 tail -f 是运维必备命令</p>
        `
    },
    
    man: {
        title: "📚 man 命令",
        content: `
            <p>man (Manual) 查看命令的完整手册。</p>
            <ul>
                <li><strong>基本用法</strong>：
                    <ul>
                        <li>man ls - 查看 ls 的手册</li>
                        <li>man man - 查看 man 自己的手册</li>
                    </ul>
                </li>
                <li><strong>手册章节</strong>：
                    <ul>
                        <li>1：用户命令</li>
                        <li>2：系统调用</li>
                        <li>3：库函数</li>
                        <li>5：文件格式</li>
                        <li>8：系统管理命令</li>
                    </ul>
                </li>
                <li><strong>操作方式</strong>：
                    <ul>
                        <li>空格：下一页</li>
                        <li>b：上一页</li>
                        <li>/keyword：搜索</li>
                        <li>q：退出</li>
                    </ul>
                </li>
                <li><strong>其他帮助命令</strong>：
                    <ul>
                        <li>command --help - 快速帮助</li>
                        <li>info command - 详细文档</li>
                        <li>whatis command - 简短描述</li>
                    </ul>
                </li>
            </ul>
            <p style="margin-top: 10px; color: #ffd700;">💡 RTFM - Read The Friendly Manual</p>
        `
    },
    
    // 系统概念
    kernel: {
        title: "🔬 Linux 内核",
        content: `
            <p>内核是操作系统的核心，直接管理硬件资源。</p>
            <ul>
                <li><strong>内核的职责</strong>：
                    <ul>
                        <li>进程管理：调度 CPU 时间</li>
                        <li>内存管理：分配和回收内存</li>
                        <li>设备驱动：控制硬件设备</li>
                        <li>文件系统：管理文件存储</li>
                        <li>网络协议栈：处理网络通信</li>
                    </ul>
                </li>
                <li><strong>查看内核信息</strong>：
                    <ul>
                        <li>uname -r - 查看内核版本</li>
                        <li>uname -a - 查看所有系统信息</li>
                        <li>cat /proc/version - 详细内核信息</li>
                    </ul>
                </li>
                <li><strong>内核空间 vs 用户空间</strong>：
                    <ul>
                        <li>内核空间：内核运行的特权区域</li>
                        <li>用户空间：应用程序运行的区域</li>
                        <li>系统调用：用户程序请求内核服务</li>
                    </ul>
                </li>
            </ul>
            <p style="margin-top: 10px; color: #ffd700;">💡 Linux 内核是开源的，任何人都可以查看和修改</p>
        `
    },
    
    shell: {
        title: "🐚 Shell（命令行解释器）",
        content: `
            <p>Shell 是用户与 Linux 系统交互的界面。</p>
            <ul>
                <li><strong>常见的 Shell</strong>：
                    <ul>
                        <li>Bash：最常用，Linux 默认</li>
                        <li>Zsh：功能强大，可定制</li>
                        <li>Fish：用户友好，智能补全</li>
                        <li>Sh：最基础的 Shell</li>
                    </ul>
                </li>
                <li><strong>Shell 的作用</strong>：
                    <ul>
                        <li>解释和执行命令</li>
                        <li>管理进程</li>
                        <li>提供编程环境（Shell 脚本）</li>
                        <li>环境变量管理</li>
                    </ul>
                </li>
                <li><strong>Shell 提示符</strong>：
                    <ul>
                        <li>$ - 普通用户</li>
                        <li># - root 用户（管理员）</li>
                        <li>user@host:~$ - 完整提示符</li>
                    </ul>
                </li>
                <li><strong>实用技巧</strong>：
                    <ul>
                        <li>Tab 键：自动补全</li>
                        <li>↑↓ 键：历史命令</li>
                        <li>Ctrl+C：中断当前命令</li>
                        <li>Ctrl+D：退出 Shell</li>
                    </ul>
                </li>
            </ul>
        `
    },
    
    permission: {
        title: "🔐 文件权限",
        content: `
            <p>Linux 通过权限系统保护文件安全。</p>
            <ul>
                <li><strong>三种权限</strong>：
                    <ul>
                        <li>r (read)：读取权限</li>
                        <li>w (write)：写入权限</li>
                        <li>x (execute)：执行权限</li>
                    </ul>
                </li>
                <li><strong>三类用户</strong>：
                    <ul>
                        <li>所有者（owner）：文件的创建者</li>
                        <li>组（group）：用户组成员</li>
                        <li>其他人（others）：其他所有用户</li>
                    </ul>
                </li>
                <li><strong>权限表示</strong>：
                    <ul>
                        <li>-rw-r--r-- 1 user group</li>
                        <li>第一位：文件类型（- 文件，d 目录）</li>
                        <li>2-4 位：所有者权限（rw-）</li>
                        <li>5-7 位：组权限（r--）</li>
                        <li>8-10 位：其他人权限（r--）</li>
                    </ul>
                </li>
                <li><strong>修改权限</strong>：
                    <ul>
                        <li>chmod 755 file - 数字方式</li>
                        <li>chmod u+x file - 符号方式</li>
                        <li>chown user:group file - 改变所有者</li>
                    </ul>
                </li>
            </ul>
            <p style="margin-top: 10px; color: #ffd700;">💡 权限是 Linux 安全的基础</p>
        `
    },
    
    process: {
        title: "⚙️ 进程",
        content: `
            <p>进程是正在运行的程序实例。</p>
            <ul>
                <li><strong>进程的概念</strong>：
                    <ul>
                        <li>每个程序运行时都会创建进程</li>
                        <li>进程有唯一的 PID（进程 ID）</li>
                        <li>进程占用 CPU、内存等资源</li>
                    </ul>
                </li>
                <li><strong>进程状态</strong>：
                    <ul>
                        <li>运行（Running）：正在执行</li>
                        <li>睡眠（Sleeping）：等待资源</li>
                        <li>停止（Stopped）：被暂停</li>
                        <li>僵尸（Zombie）：已结束但未清理</li>
                    </ul>
                </li>
                <li><strong>进程管理命令</strong>：
                    <ul>
                        <li>ps aux - 查看所有进程</li>
                        <li>top/htop - 实时监控进程</li>
                        <li>kill PID - 终止进程</li>
                        <li>killall name - 按名称终止</li>
                        <li>bg/fg - 后台/前台运行</li>
                    </ul>
                </li>
                <li><strong>前台 vs 后台</strong>：
                    <ul>
                        <li>command & - 后台运行</li>
                        <li>Ctrl+Z - 暂停前台进程</li>
                        <li>jobs - 查看后台任务</li>
                    </ul>
                </li>
            </ul>
        `
    },
    
    package: {
        title: "📦 软件包管理",
        content: `
            <p>Linux 使用包管理器安装和管理软件。</p>
            <ul>
                <li><strong>Debian/Ubuntu 系统（APT）</strong>：
                    <ul>
                        <li>apt update - 更新软件列表</li>
                        <li>apt upgrade - 升级所有软件</li>
                        <li>apt install package - 安装软件</li>
                        <li>apt remove package - 卸载软件</li>
                        <li>apt search keyword - 搜索软件</li>
                    </ul>
                </li>
                <li><strong>RedHat/CentOS 系统（YUM/DNF）</strong>：
                    <ul>
                        <li>yum install package</li>
                        <li>dnf install package（新版本）</li>
                    </ul>
                </li>
                <li><strong>软件包的优势</strong>：
                    <ul>
                        <li>自动解决依赖关系</li>
                        <li>统一管理和更新</li>
                        <li>安全性验证</li>
                        <li>版本控制</li>
                    </ul>
                </li>
                <li><strong>软件源</strong>：
                    <ul>
                        <li>官方源：系统默认</li>
                        <li>第三方源：PPA、EPEL 等</li>
                        <li>/etc/apt/sources.list - 源配置文件</li>
                    </ul>
                </li>
            </ul>
            <p style="margin-top: 10px; color: #ffd700;">💡 使用包管理器比手动安装更安全</p>
        `
    },
    
    sudo: {
        title: "👑 sudo（超级用户权限）",
        content: `
            <p>sudo 允许普通用户以管理员身份执行命令。</p>
            <ul>
                <li><strong>为什么需要 sudo</strong>：
                    <ul>
                        <li>保护系统安全</li>
                        <li>防止误操作</li>
                        <li>记录管理员操作</li>
                        <li>细粒度权限控制</li>
                    </ul>
                </li>
                <li><strong>使用方法</strong>：
                    <ul>
                        <li>sudo command - 以 root 身份执行</li>
                        <li>sudo -i - 切换到 root 用户</li>
                        <li>sudo su - 另一种切换方式</li>
                        <li>sudo !! - 重新执行上一条命令</li>
                    </ul>
                </li>
                <li><strong>常见场景</strong>：
                    <ul>
                        <li>安装软件：sudo apt install</li>
                        <li>修改系统文件：sudo nano /etc/hosts</li>
                        <li>管理服务：sudo systemctl restart</li>
                        <li>修改权限：sudo chmod</li>
                    </ul>
                </li>
                <li><strong>安全建议</strong>：
                    <ul>
                        <li>不要长期使用 root 账户</li>
                        <li>使用 sudo 时要小心</li>
                        <li>理解命令的作用再执行</li>
                    </ul>
                </li>
            </ul>
            <p style="margin-top: 10px; color: #ffd700;">💡 With great power comes great responsibility</p>
        `
    },
    
    symlink: {
        title: "🔗 符号链接",
        content: `
            <p>符号链接（软链接）类似 Windows 的快捷方式。</p>
            <ul>
                <li><strong>链接类型</strong>：
                    <ul>
                        <li>符号链接（软链接）：指向文件路径</li>
                        <li>硬链接：指向文件数据</li>
                    </ul>
                </li>
                <li><strong>创建符号链接</strong>：
                    <ul>
                        <li>ln -s target link - 创建软链接</li>
                        <li>ln target link - 创建硬链接</li>
                    </ul>
                </li>
                <li><strong>使用场景</strong>：
                    <ul>
                        <li>创建快捷方式</li>
                        <li>软件版本管理</li>
                        <li>共享文件</li>
                        <li>简化路径</li>
                    </ul>
                </li>
                <li><strong>示例</strong>：
                    <ul>
                        <li>ln -s /usr/bin/python3 /usr/bin/python</li>
                        <li>ln -s ~/Documents/project ~/proj</li>
                    </ul>
                </li>
            </ul>
        `
    },
    
    environment: {
        title: "🌍 环境变量",
        content: `
            <p>环境变量存储系统和程序的配置信息。</p>
            <ul>
                <li><strong>常见环境变量</strong>：
                    <ul>
                        <li>PATH：可执行文件搜索路径</li>
                        <li>HOME：用户主目录</li>
                        <li>USER：当前用户名</li>
                        <li>SHELL：当前使用的 Shell</li>
                        <li>LANG：系统语言</li>
                    </ul>
                </li>
                <li><strong>查看和设置</strong>：
                    <ul>
                        <li>echo $PATH - 查看变量</li>
                        <li>env - 查看所有环境变量</li>
                        <li>export VAR=value - 设置变量</li>
                        <li>unset VAR - 删除变量</li>
                    </ul>
                </li>
                <li><strong>配置文件</strong>：
                    <ul>
                        <li>~/.bashrc - 用户 Bash 配置</li>
                        <li>~/.profile - 用户登录配置</li>
                        <li>/etc/environment - 系统环境变量</li>
                    </ul>
                </li>
                <li><strong>PATH 的作用</strong>：
                    <ul>
                        <li>决定命令的搜索路径</li>
                        <li>添加自定义程序路径</li>
                        <li>export PATH=$PATH:/new/path</li>
                    </ul>
                </li>
            </ul>
        `
    },
    
    pipe: {
        title: "🔀 管道和重定向",
        content: `
            <p>管道和重定向是 Linux 强大功能的体现。</p>
            <ul>
                <li><strong>管道（|）</strong>：
                    <ul>
                        <li>将一个命令的输出作为另一个命令的输入</li>
                        <li>ls -l | grep ".txt" - 过滤文件</li>
                        <li>cat file | wc -l - 统计行数</li>
                        <li>ps aux | grep nginx - 查找进程</li>
                    </ul>
                </li>
                <li><strong>输出重定向</strong>：
                    <ul>
                        <li>> file - 覆盖写入文件</li>
                        <li>>> file - 追加到文件</li>
                        <li>2> file - 重定向错误输出</li>
                        <li>&> file - 重定向所有输出</li>
                    </ul>
                </li>
                <li><strong>输入重定向</strong>：
                    <ul>
                        <li>< file - 从文件读取输入</li>
                        <li><< EOF - Here Document</li>
                    </ul>
                </li>
                <li><strong>实用示例</strong>：
                    <ul>
                        <li>echo "text" > file.txt - 写入文件</li>
                        <li>cat file1 file2 > merged.txt - 合并文件</li>
                        <li>command 2>&1 | tee log.txt - 同时输出和保存</li>
                    </ul>
                </li>
            </ul>
            <p style="margin-top: 10px; color: #ffd700;">💡 管道是 Unix 哲学的核心</p>
        `
    },
    
    grep: {
        title: "🔍 grep（文本搜索）",
        content: `
            <p>grep 是强大的文本搜索工具。</p>
            <ul>
                <li><strong>基本用法</strong>：
                    <ul>
                        <li>grep "pattern" file - 搜索文件</li>
                        <li>grep -r "pattern" dir - 递归搜索目录</li>
                        <li>grep -i "pattern" file - 忽略大小写</li>
                        <li>grep -v "pattern" file - 反向匹配</li>
                    </ul>
                </li>
                <li><strong>常用参数</strong>：
                    <ul>
                        <li>-n：显示行号</li>
                        <li>-c：统计匹配行数</li>
                        <li>-l：只显示文件名</li>
                        <li>-A 3：显示匹配行及后 3 行</li>
                        <li>-B 3：显示匹配行及前 3 行</li>
                    </ul>
                </li>
                <li><strong>正则表达式</strong>：
                    <ul>
                        <li>grep "^start" - 行首匹配</li>
                        <li>grep "end$" - 行尾匹配</li>
                        <li>grep "[0-9]" - 匹配数字</li>
                        <li>grep -E "pattern1|pattern2" - 多模式</li>
                    </ul>
                </li>
                <li><strong>实用场景</strong>：
                    <ul>
                        <li>grep "ERROR" /var/log/syslog - 查找错误</li>
                        <li>ps aux | grep nginx - 查找进程</li>
                        <li>grep -r "TODO" . - 查找代码注释</li>
                    </ul>
                </li>
            </ul>
        `
    },
    
    // 虚拟化软件
    hyperv: {
        title: "💎 Hyper-V",
        content: `
            <p>Hyper-V 是微软开发的企业级虚拟化平台。</p>
            <ul>
                <li><strong>核心特点</strong>：
                    <ul>
                        <li>Type 1 虚拟化（裸机型）</li>
                        <li>Windows 内置，无需额外安装</li>
                        <li>性能接近原生系统</li>
                        <li>支持 Windows 和 Linux 虚拟机</li>
                    </ul>
                </li>
                <li><strong>系统要求</strong>：
                    <ul>
                        <li>Windows 10/11 Pro、Enterprise 或 Education 版</li>
                        <li>不支持 Home 版</li>
                        <li>CPU 需支持虚拟化（Intel VT-x 或 AMD-V）</li>
                        <li>至少 4GB 内存（推荐 8GB+）</li>
                    </ul>
                </li>
                <li><strong>优势</strong>：
                    <ul>
                        <li>完全免费</li>
                        <li>与 Windows 深度集成</li>
                        <li>支持动态内存分配</li>
                        <li>企业级稳定性</li>
                        <li>支持快照和检查点</li>
                    </ul>
                </li>
                <li><strong>启用方法</strong>：
                    <ul>
                        <li>控制面板 → 程序 → 启用或关闭 Windows 功能</li>
                        <li>勾选"Hyper-V"</li>
                        <li>重启计算机</li>
                    </ul>
                </li>
                <li><strong>与其他虚拟化的对比</strong>：
                    <ul>
                        <li>vs VirtualBox：性能更好，但仅限 Windows</li>
                        <li>vs VMware：免费，但功能略少</li>
                        <li>vs WSL2：完整虚拟机，更灵活</li>
                    </ul>
                </li>
            </ul>
            <p style="margin-top: 10px; color: #ffd700;">💡 Hyper-V 是学习 Linux 的理想选择</p>
        `
    },
    
    virtualbox: {
        title: "📦 VirtualBox",
        content: `
            <p>VirtualBox 是 Oracle 开发的开源虚拟化软件。</p>
            <ul>
                <li><strong>核心特点</strong>：
                    <ul>
                        <li>Type 2 虚拟化（托管型）</li>
                        <li>完全免费开源</li>
                        <li>跨平台：Windows、macOS、Linux</li>
                        <li>易于安装和使用</li>
                    </ul>
                </li>
                <li><strong>优势</strong>：
                    <ul>
                        <li>支持所有 Windows 版本（包括 Home）</li>
                        <li>界面友好，适合新手</li>
                        <li>功能丰富：快照、共享文件夹、USB 支持</li>
                        <li>社区活跃，文档完善</li>
                    </ul>
                </li>
                <li><strong>劣势</strong>：
                    <ul>
                        <li>性能不如 Type 1 虚拟化</li>
                        <li>与 Hyper-V 冲突（不能同时启用）</li>
                        <li>3D 图形性能较弱</li>
                    </ul>
                </li>
                <li><strong>适用场景</strong>：
                    <ul>
                        <li>个人学习和开发</li>
                        <li>测试不同操作系统</li>
                        <li>跨平台虚拟化需求</li>
                    </ul>
                </li>
            </ul>
            <p style="margin-top: 10px; color: #ffd700;">💡 如果你用的是 Windows Home 版，VirtualBox 是最佳选择</p>
        `
    },
    
    wsl2: {
        title: "🐧 WSL2（Windows Subsystem for Linux）",
        content: `
            <p>WSL2 是 Windows 内置的 Linux 子系统。</p>
            <ul>
                <li><strong>核心特点</strong>：
                    <ul>
                        <li>在 Windows 中直接运行 Linux</li>
                        <li>基于轻量级虚拟机</li>
                        <li>与 Windows 文件系统无缝集成</li>
                        <li>启动速度快，资源占用少</li>
                    </ul>
                </li>
                <li><strong>优势</strong>：
                    <ul>
                        <li>无需安装完整虚拟机</li>
                        <li>可以同时使用 Windows 和 Linux 工具</li>
                        <li>支持 Docker Desktop</li>
                        <li>开发环境配置简单</li>
                    </ul>
                </li>
                <li><strong>劣势</strong>：
                    <ul>
                        <li>没有图形界面（默认）</li>
                        <li>不适合学习完整 Linux 系统</li>
                        <li>某些硬件功能受限</li>
                    </ul>
                </li>
                <li><strong>安装方法</strong>：
                    <ul>
                        <li>PowerShell 管理员模式：wsl --install</li>
                        <li>选择发行版：wsl --install -d Ubuntu</li>
                        <li>重启计算机</li>
                    </ul>
                </li>
                <li><strong>适用场景</strong>：
                    <ul>
                        <li>开发者日常使用</li>
                        <li>运行 Linux 命令行工具</li>
                        <li>轻量级开发环境</li>
                    </ul>
                </li>
            </ul>
            <p style="margin-top: 10px; color: #ffd700;">💡 WSL2 适合开发，但学习 Linux 建议用完整虚拟机</p>
        `
    },
    
    ubuntu: {
        title: "🎩 Ubuntu",
        content: `
            <p>Ubuntu 是最流行的 Linux 发行版之一。</p>
            <ul>
                <li><strong>核心特点</strong>：
                    <ul>
                        <li>基于 Debian</li>
                        <li>每 6 个月发布新版本</li>
                        <li>LTS 版本提供 5 年支持</li>
                        <li>界面友好，易于上手</li>
                    </ul>
                </li>
                <li><strong>为什么选择 Ubuntu</strong>：
                    <ul>
                        <li>最适合新手的发行版</li>
                        <li>软件包丰富</li>
                        <li>社区活跃，文档完善</li>
                        <li>硬件兼容性好</li>
                        <li>企业支持（Canonical 公司）</li>
                    </ul>
                </li>
                <li><strong>版本选择</strong>：
                    <ul>
                        <li>Ubuntu Desktop：桌面版，有图形界面</li>
                        <li>Ubuntu Server：服务器版，纯命令行</li>
                        <li>LTS 版本：长期支持，更稳定（推荐）</li>
                        <li>最新版本：体验新特性</li>
                    </ul>
                </li>
                <li><strong>桌面环境</strong>：
                    <ul>
                        <li>GNOME：默认桌面，现代美观</li>
                        <li>KDE：功能丰富，可定制</li>
                        <li>XFCE：轻量级，适合老电脑</li>
                    </ul>
                </li>
                <li><strong>学习建议</strong>：
                    <ul>
                        <li>新手推荐：Ubuntu 22.04 LTS Desktop</li>
                        <li>虚拟机配置：4GB 内存，40GB 硬盘</li>
                        <li>安装后先更新系统：sudo apt update && sudo apt upgrade</li>
                    </ul>
                </li>
            </ul>
            <p style="margin-top: 10px; color: #ffd700;">💡 Ubuntu 是学习 Linux 的最佳起点</p>
        `
    },
    
    vmware: {
        title: "🔷 VMware",
        content: `
            <p>VMware 是业界领先的虚拟化解决方案。</p>
            <ul>
                <li><strong>产品线</strong>：
                    <ul>
                        <li>VMware Workstation Pro：桌面虚拟化（付费）</li>
                        <li>VMware Workstation Player：个人免费版</li>
                        <li>VMware ESXi：企业级服务器虚拟化</li>
                        <li>VMware Fusion：macOS 版本</li>
                    </ul>
                </li>
                <li><strong>优势</strong>：
                    <ul>
                        <li>性能强大，稳定性高</li>
                        <li>功能最丰富</li>
                        <li>企业级支持</li>
                        <li>3D 图形性能好</li>
                    </ul>
                </li>
                <li><strong>劣势</strong>：
                    <ul>
                        <li>专业版需要付费</li>
                        <li>资源占用较大</li>
                        <li>免费版功能受限</li>
                    </ul>
                </li>
                <li><strong>适用场景</strong>：
                    <ul>
                        <li>专业开发和测试</li>
                        <li>企业虚拟化</li>
                        <li>需要高性能的场景</li>
                    </ul>
                </li>
            </ul>
        `
    },
    
    touch: {
        title: "✨ touch 命令",
        content: `
            <p>touch 命令用于创建空文件或更新文件时间戳。</p>
            <ul>
                <li><strong>基本用法</strong>：
                    <ul>
                        <li>touch file.txt - 创建空文件</li>
                        <li>touch file1 file2 file3 - 创建多个文件</li>
                        <li>touch {1..10}.txt - 创建 1.txt 到 10.txt</li>
                    </ul>
                </li>
                <li><strong>更新时间戳</strong>：
                    <ul>
                        <li>如果文件已存在，touch 会更新其修改时间</li>
                        <li>touch -a file - 只更新访问时间</li>
                        <li>touch -m file - 只更新修改时间</li>
                    </ul>
                </li>
                <li><strong>指定时间</strong>：
                    <ul>
                        <li>touch -t 202403091200 file - 设置特定时间</li>
                        <li>格式：YYYYMMDDhhmm</li>
                    </ul>
                </li>
                <li><strong>实用场景</strong>：
                    <ul>
                        <li>快速创建测试文件</li>
                        <li>批量创建文件</li>
                        <li>更新文件时间以触发某些操作</li>
                    </ul>
                </li>
            </ul>
            <p style="margin-top: 10px; color: #ffd700;">💡 touch 是最简单但很实用的命令</p>
        `
    },
    
    head: {
        title: "🔝 head 命令",
        content: `
            <p>head 命令显示文件的开头部分。</p>
            <ul>
                <li><strong>基本用法</strong>：
                    <ul>
                        <li>head file.txt - 显示前 10 行</li>
                        <li>head -n 20 file.txt - 显示前 20 行</li>
                        <li>head -n 5 file.txt - 显示前 5 行</li>
                    </ul>
                </li>
                <li><strong>按字节显示</strong>：
                    <ul>
                        <li>head -c 100 file.txt - 显示前 100 字节</li>
                        <li>head -c 1K file.txt - 显示前 1KB</li>
                    </ul>
                </li>
                <li><strong>多文件</strong>：
                    <ul>
                        <li>head file1 file2 - 显示多个文件的开头</li>
                        <li>会显示文件名标题</li>
                    </ul>
                </li>
                <li><strong>配合管道</strong>：
                    <ul>
                        <li>ls -lt | head -n 10 - 显示最新的 10 个文件</li>
                        <li>cat large.txt | head -n 100 - 查看大文件开头</li>
                    </ul>
                </li>
            </ul>
        `
    }
};
