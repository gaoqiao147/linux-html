// 第二节课详细信息数据库
const infoDatabase = {
    'root-dir': {
        title: "根目录 /",
        content: `
            <p><strong>什么是根目录？</strong></p>
            <p>根目录（/）是 Linux 文件系统的最顶层目录，所有文件和目录都从这里开始。</p>
            
            <p><strong>特点：</strong></p>
            <ul>
                <li>用单个斜杠 / 表示</li>
                <li>是整个文件系统的起点</li>
                <li>不同于 Windows 的 C:、D: 盘符</li>
                <li>所有设备、文件都挂载在这个树下</li>
            </ul>
            
            <p><strong>类比：</strong></p>
            <p>就像一棵倒置的树，/ 是树根，所有分支（目录）和叶子（文件）都从这里生长出来。</p>
            
            <div class="resource-box">
                <p><strong>💡 注意：</strong></p>
                <p>普通用户通常没有权限修改根目录下的文件，需要 sudo 权限。</p>
            </div>
        `
    },
    
    'home-dir': {
        title: "/home - 用户主目录",
        content: `
            <p><strong>/home 目录说明：</strong></p>
            <p>/home 目录存放所有普通用户的个人文件和配置。</p>
            
            <p><strong>结构：</strong></p>
            <ul>
                <li>/home/student - student 用户的主目录</li>
                <li>/home/alice - alice 用户的主目录</li>
                <li>/home/bob - bob 用户的主目录</li>
            </ul>
            
            <p><strong>主目录的作用：</strong></p>
            <ul>
                <li>存放个人文档、图片、下载等</li>
                <li>保存用户的配置文件（以 . 开头的隐藏文件）</li>
                <li>用户对自己的主目录有完全控制权</li>
                <li>不同用户的文件相互隔离</li>
            </ul>
            
            <p><strong>快捷方式：</strong></p>
            <ul>
                <li>~ 符号代表当前用户的主目录</li>
                <li>cd ~ 或 cd 可以快速回到主目录</li>
            </ul>
            
            <div class="resource-box">
                <p><strong>📁 常见子目录：</strong></p>
                <p>Desktop（桌面）、Documents（文档）、Downloads（下载）、Pictures（图片）、Music（音乐）、Videos（视频）</p>
            </div>
        `
    },

    
    'etc-dir': {
        title: "/etc - 配置文件目录",
        content: `
            <p><strong>/etc 目录说明：</strong></p>
            <p>/etc 目录包含系统和应用程序的配置文件。</p>
            
            <p><strong>重要配置文件：</strong></p>
            <ul>
                <li>/etc/passwd - 用户账户信息</li>
                <li>/etc/group - 用户组信息</li>
                <li>/etc/hosts - 主机名映射</li>
                <li>/etc/fstab - 文件系统挂载配置</li>
                <li>/etc/ssh/sshd_config - SSH 服务配置</li>
            </ul>
            
            <p><strong>特点：</strong></p>
            <ul>
                <li>配置文件通常是纯文本格式</li>
                <li>修改需要 root 权限</li>
                <li>修改前建议备份</li>
                <li>配置错误可能导致系统问题</li>
            </ul>
            
            <div class="resource-box">
                <p><strong>⚠️ 注意：</strong></p>
                <p>新手不要随意修改 /etc 下的文件，除非你知道自己在做什么。</p>
            </div>
        `
    },
    
    'bin-dir': {
        title: "/bin - 基本命令目录",
        content: `
            <p><strong>/bin 目录说明：</strong></p>
            <p>/bin 目录包含系统启动和运行所需的基本命令程序。</p>
            
            <p><strong>常见命令：</strong></p>
            <ul>
                <li>ls - 列出文件</li>
                <li>cp - 复制文件</li>
                <li>mv - 移动文件</li>
                <li>rm - 删除文件</li>
                <li>cat - 查看文件</li>
                <li>bash - Shell 解释器</li>
            </ul>
            
            <p><strong>bin 的含义：</strong></p>
            <p>bin 是 binary（二进制）的缩写，因为这些命令都是编译后的二进制可执行文件。</p>
            
            <p><strong>相关目录：</strong></p>
            <ul>
                <li>/sbin - 系统管理命令（需要 root 权限）</li>
                <li>/usr/bin - 用户安装的程序</li>
                <li>/usr/local/bin - 本地安装的程序</li>
            </ul>
        `
    },
    
    'usr-dir': {
        title: "/usr - 用户程序目录",
        content: `
            <p><strong>/usr 目录说明：</strong></p>
            <p>/usr 目录包含用户安装的应用程序、库文件和文档。</p>
            
            <p><strong>主要子目录：</strong></p>
            <ul>
                <li>/usr/bin - 用户命令</li>
                <li>/usr/sbin - 系统管理命令</li>
                <li>/usr/lib - 程序库文件</li>
                <li>/usr/share - 共享数据（文档、图标等）</li>
                <li>/usr/local - 本地安装的软件</li>
            </ul>
            
            <p><strong>usr 的含义：</strong></p>
            <p>usr 原本是 "Unix System Resources" 的缩写，现在通常理解为 "user"。</p>
            
            <p><strong>特点：</strong></p>
            <ul>
                <li>占用空间较大</li>
                <li>包含大部分应用程序</li>
                <li>可以挂载为只读</li>
            </ul>
        `
    },
    
    'var-dir': {
        title: "/var - 变量数据目录",
        content: `
            <p><strong>/var 目录说明：</strong></p>
            <p>/var 目录存放经常变化的数据，如日志、缓存、临时文件等。</p>
            
            <p><strong>重要子目录：</strong></p>
            <ul>
                <li>/var/log - 系统日志文件</li>
                <li>/var/cache - 应用程序缓存</li>
                <li>/var/tmp - 临时文件（重启不清空）</li>
                <li>/var/www - Web 服务器文件</li>
                <li>/var/mail - 邮件</li>
            </ul>
            
            <p><strong>日志文件：</strong></p>
            <ul>
                <li>/var/log/syslog - 系统日志</li>
                <li>/var/log/auth.log - 认证日志</li>
                <li>/var/log/apache2/ - Apache 日志</li>
            </ul>
            
            <p><strong>用途：</strong></p>
            <p>排查系统问题时，经常需要查看 /var/log 下的日志文件。</p>
        `
    },
    
    'tmp-dir': {
        title: "/tmp - 临时文件目录",
        content: `
            <p><strong>/tmp 目录说明：</strong></p>
            <p>/tmp 目录用于存放临时文件，系统重启后会被清空。</p>
            
            <p><strong>特点：</strong></p>
            <ul>
                <li>所有用户都可以写入</li>
                <li>重启后自动清空</li>
                <li>适合存放临时数据</li>
                <li>不要存放重要文件</li>
            </ul>
            
            <p><strong>使用场景：</strong></p>
            <ul>
                <li>程序运行时的临时文件</li>
                <li>下载的临时文件</li>
                <li>解压缩的临时目录</li>
            </ul>
            
            <p><strong>相关目录：</strong></p>
            <ul>
                <li>/var/tmp - 临时文件（重启不清空）</li>
            </ul>
            
            <div class="resource-box">
                <p><strong>💡 提示：</strong></p>
                <p>如果磁盘空间不足，可以清理 /tmp 目录。</p>
            </div>
        `
    },

    
    'ls-command': {
        title: "ls 命令详解",
        content: `
            <p><strong>ls 命令：</strong></p>
            <p>ls（list）是最常用的命令之一，用于列出目录内容。</p>
            
            <p><strong>常用选项：</strong></p>
            <ul>
                <li><strong>ls</strong> - 列出文件和目录</li>
                <li><strong>ls -l</strong> - 长格式，显示详细信息</li>
                <li><strong>ls -a</strong> - 显示所有文件（包括隐藏文件）</li>
                <li><strong>ls -h</strong> - 人类可读的文件大小（配合 -l 使用）</li>
                <li><strong>ls -t</strong> - 按修改时间排序</li>
                <li><strong>ls -r</strong> - 反向排序</li>
                <li><strong>ls -R</strong> - 递归列出子目录</li>
            </ul>
            
            <p><strong>组合使用：</strong></p>
            <ul>
                <li><strong>ls -la</strong> - 详细列出所有文件</li>
                <li><strong>ls -lh</strong> - 详细列出，文件大小易读</li>
                <li><strong>ls -ltr</strong> - 按时间排序，最新的在最后</li>
            </ul>
            
            <p><strong>输出格式（ls -l）：</strong></p>
            <div style="background: rgba(0,0,0,0.3); padding: 10px; border-radius: 5px; font-family: monospace;">
                -rw-r--r-- 1 student student 1024 Jan 15 10:30 file.txt
            </div>
            <ul style="margin-top: 10px;">
                <li>权限：-rw-r--r--</li>
                <li>链接数：1</li>
                <li>所有者：student</li>
                <li>所属组：student</li>
                <li>大小：1024 字节</li>
                <li>修改时间：Jan 15 10:30</li>
                <li>文件名：file.txt</li>
            </ul>
            
            <div class="resource-box">
                <p><strong>💡 技巧：</strong></p>
                <p>可以用 alias ll='ls -lah' 创建快捷命令。</p>
            </div>
        `
    },
    
    'cd-command': {
        title: "cd 命令详解",
        content: `
            <p><strong>cd 命令：</strong></p>
            <p>cd（change directory）用于切换当前工作目录。</p>
            
            <p><strong>基本用法：</strong></p>
            <ul>
                <li><strong>cd /path/to/dir</strong> - 切换到指定目录（绝对路径）</li>
                <li><strong>cd dirname</strong> - 切换到当前目录下的子目录（相对路径）</li>
                <li><strong>cd ..</strong> - 返回上一级目录</li>
                <li><strong>cd ~</strong> 或 <strong>cd</strong> - 回到家目录</li>
                <li><strong>cd -</strong> - 回到上次所在的目录</li>
            </ul>
            
            <p><strong>特殊符号：</strong></p>
            <ul>
                <li><strong>.</strong> - 当前目录</li>
                <li><strong>..</strong> - 上级目录</li>
                <li><strong>~</strong> - 家目录（/home/用户名）</li>
                <li><strong>-</strong> - 上次的目录</li>
                <li><strong>/</strong> - 根目录</li>
            </ul>
            
            <p><strong>示例：</strong></p>
            <div style="background: rgba(0,0,0,0.3); padding: 10px; border-radius: 5px; font-family: monospace;">
                cd /etc          # 切换到 /etc<br>
                cd ../var        # 切换到 /var<br>
                cd ~/Documents   # 切换到家目录的 Documents<br>
                cd -             # 回到 /var
            </div>
            
            <div class="resource-box">
                <p><strong>💡 技巧：</strong></p>
                <p>使用 Tab 键可以自动补全目录名，大大提高效率。</p>
            </div>
        `
    },
    
    'mkdir-command': {
        title: "mkdir 命令详解",
        content: `
            <p><strong>mkdir 命令：</strong></p>
            <p>mkdir（make directory）用于创建新目录。</p>
            
            <p><strong>基本用法：</strong></p>
            <ul>
                <li><strong>mkdir dirname</strong> - 创建单个目录</li>
                <li><strong>mkdir dir1 dir2 dir3</strong> - 同时创建多个目录</li>
                <li><strong>mkdir -p path/to/dir</strong> - 创建多级目录</li>
                <li><strong>mkdir -m 755 dirname</strong> - 创建时指定权限</li>
            </ul>
            
            <p><strong>-p 选项的重要性：</strong></p>
            <p>如果要创建 /home/student/work/2024/january，但 work 和 2024 目录不存在：</p>
            <ul>
                <li>❌ mkdir /home/student/work/2024/january - 会失败</li>
                <li>✅ mkdir -p /home/student/work/2024/january - 会成功</li>
            </ul>
            
            <p><strong>命名建议：</strong></p>
            <ul>
                <li>使用小写字母</li>
                <li>避免空格，用下划线或连字符代替</li>
                <li>使用有意义的名称</li>
                <li>避免特殊字符</li>
            </ul>
            
            <p><strong>示例：</strong></p>
            <div style="background: rgba(0,0,0,0.3); padding: 10px; border-radius: 5px; font-family: monospace;">
                mkdir my_project<br>
                mkdir -p projects/web/frontend<br>
                mkdir backup_$(date +%Y%m%d)
            </div>
        `
    },
    
    'touch-command': {
        title: "touch 命令详解",
        content: `
            <p><strong>touch 命令：</strong></p>
            <p>touch 命令主要用于创建空文件或更新文件的时间戳。</p>
            
            <p><strong>基本用法：</strong></p>
            <ul>
                <li><strong>touch filename</strong> - 创建空文件</li>
                <li><strong>touch file1 file2 file3</strong> - 同时创建多个文件</li>
                <li><strong>touch existing_file</strong> - 更新已存在文件的时间戳</li>
            </ul>
            
            <p><strong>工作原理：</strong></p>
            <ul>
                <li>如果文件不存在，创建一个空文件</li>
                <li>如果文件已存在，更新访问和修改时间为当前时间</li>
            </ul>
            
            <p><strong>使用场景：</strong></p>
            <ul>
                <li>快速创建测试文件</li>
                <li>创建占位文件</li>
                <li>更新文件时间戳（某些程序依赖时间戳）</li>
            </ul>
            
            <p><strong>示例：</strong></p>
            <div style="background: rgba(0,0,0,0.3); padding: 10px; border-radius: 5px; font-family: monospace;">
                touch readme.txt<br>
                touch index.html style.css script.js<br>
                touch test_{1..10}.txt  # 创建 test_1.txt 到 test_10.txt
            </div>
            
            <div class="resource-box">
                <p><strong>💡 注意：</strong></p>
                <p>touch 只能创建文件，不能创建目录。创建目录要用 mkdir。</p>
            </div>
        `
    },

    
    'cat-command': {
        title: "cat 命令详解",
        content: `
            <p><strong>cat 命令：</strong></p>
            <p>cat（concatenate）用于查看文件内容、连接文件或创建文件。</p>
            
            <p><strong>基本用法：</strong></p>
            <ul>
                <li><strong>cat filename</strong> - 显示文件内容</li>
                <li><strong>cat file1 file2</strong> - 连接并显示多个文件</li>
                <li><strong>cat > newfile</strong> - 创建新文件（Ctrl+D 结束）</li>
                <li><strong>cat >> file</strong> - 追加内容到文件</li>
            </ul>
            
            <p><strong>常用选项：</strong></p>
            <ul>
                <li><strong>cat -n file</strong> - 显示行号</li>
                <li><strong>cat -b file</strong> - 只给非空行编号</li>
                <li><strong>cat -s file</strong> - 压缩连续空行</li>
            </ul>
            
            <p><strong>查看大文件的替代命令：</strong></p>
            <ul>
                <li><strong>less filename</strong> - 分页查看（推荐）</li>
                <li><strong>more filename</strong> - 分页查看</li>
                <li><strong>head filename</strong> - 查看前 10 行</li>
                <li><strong>tail filename</strong> - 查看后 10 行</li>
                <li><strong>tail -f filename</strong> - 实时查看文件更新（查看日志）</li>
            </ul>
            
            <p><strong>示例：</strong></p>
            <div style="background: rgba(0,0,0,0.3); padding: 10px; border-radius: 5px; font-family: monospace;">
                cat readme.txt<br>
                cat file1.txt file2.txt > combined.txt<br>
                cat -n script.sh
            </div>
            
            <div class="resource-box">
                <p><strong>💡 技巧：</strong></p>
                <p>查看大文件时用 less，可以上下翻页，按 q 退出。</p>
            </div>
        `
    },
    
    'cp-command': {
        title: "cp 命令详解",
        content: `
            <p><strong>cp 命令：</strong></p>
            <p>cp（copy）用于复制文件或目录。</p>
            
            <p><strong>基本用法：</strong></p>
            <ul>
                <li><strong>cp source dest</strong> - 复制文件</li>
                <li><strong>cp file1 file2 dir/</strong> - 复制多个文件到目录</li>
                <li><strong>cp -r dir1 dir2</strong> - 复制目录（递归）</li>
            </ul>
            
            <p><strong>常用选项：</strong></p>
            <ul>
                <li><strong>-r</strong> 或 <strong>-R</strong> - 递归复制目录</li>
                <li><strong>-i</strong> - 覆盖前询问（推荐）</li>
                <li><strong>-f</strong> - 强制覆盖</li>
                <li><strong>-p</strong> - 保留文件属性（权限、时间戳）</li>
                <li><strong>-v</strong> - 显示详细过程</li>
                <li><strong>-u</strong> - 只复制更新的文件</li>
            </ul>
            
            <p><strong>示例：</strong></p>
            <div style="background: rgba(0,0,0,0.3); padding: 10px; border-radius: 5px; font-family: monospace;">
                cp file.txt backup.txt<br>
                cp -r project/ project_backup/<br>
                cp -i *.txt Documents/<br>
                cp -p important.txt /backup/
            </div>
            
            <p><strong>注意事项：</strong></p>
            <ul>
                <li>复制目录必须使用 -r 选项</li>
                <li>目标是目录时，要以 / 结尾更清晰</li>
                <li>使用 -i 避免意外覆盖</li>
            </ul>
            
            <div class="resource-box">
                <p><strong>💡 技巧：</strong></p>
                <p>备份重要文件时，使用 cp -p 保留原始属性。</p>
            </div>
        `
    },
    
    'mv-command': {
        title: "mv 命令详解",
        content: `
            <p><strong>mv 命令：</strong></p>
            <p>mv（move）用于移动文件/目录或重命名。</p>
            
            <p><strong>基本用法：</strong></p>
            <ul>
                <li><strong>mv source dest</strong> - 移动或重命名</li>
                <li><strong>mv file1 file2 dir/</strong> - 移动多个文件到目录</li>
            </ul>
            
            <p><strong>两种用途：</strong></p>
            <p><strong>1. 移动文件：</strong></p>
            <div style="background: rgba(0,0,0,0.3); padding: 10px; border-radius: 5px; font-family: monospace;">
                mv file.txt Documents/  # 移动到 Documents 目录<br>
                mv *.txt backup/        # 移动所有 txt 文件
            </div>
            
            <p><strong>2. 重命名：</strong></p>
            <div style="background: rgba(0,0,0,0.3); padding: 10px; border-radius: 5px; font-family: monospace;">
                mv oldname.txt newname.txt<br>
                mv old_dir new_dir
            </div>
            
            <p><strong>常用选项：</strong></p>
            <ul>
                <li><strong>-i</strong> - 覆盖前询问（推荐）</li>
                <li><strong>-f</strong> - 强制覆盖</li>
                <li><strong>-n</strong> - 不覆盖已存在的文件</li>
                <li><strong>-v</strong> - 显示详细过程</li>
            </ul>
            
            <p><strong>与 cp 的区别：</strong></p>
            <ul>
                <li>mv 是移动，原文件会消失</li>
                <li>cp 是复制，原文件保留</li>
                <li>mv 不需要 -r 就能移动目录</li>
            </ul>
            
            <div class="resource-box">
                <p><strong>⚠️ 注意：</strong></p>
                <p>mv 会覆盖同名文件，建议使用 -i 选项。</p>
            </div>
        `
    },
    
    'rm-command': {
        title: "rm 命令详解",
        content: `
            <p><strong>rm 命令：</strong></p>
            <p>rm（remove）用于删除文件或目录。⚠️ 这是一个危险命令！</p>
            
            <p><strong>基本用法：</strong></p>
            <ul>
                <li><strong>rm filename</strong> - 删除文件</li>
                <li><strong>rm file1 file2</strong> - 删除多个文件</li>
                <li><strong>rm -r dirname</strong> - 删除目录（递归）</li>
            </ul>
            
            <p><strong>常用选项：</strong></p>
            <ul>
                <li><strong>-r</strong> 或 <strong>-R</strong> - 递归删除目录</li>
                <li><strong>-i</strong> - 删除前确认（强烈推荐）</li>
                <li><strong>-f</strong> - 强制删除，不提示</li>
                <li><strong>-v</strong> - 显示删除过程</li>
            </ul>
            
            <p><strong>⚠️ 危险操作：</strong></p>
            <div style="background: rgba(255,0,0,0.2); padding: 10px; border-radius: 5px; border: 2px solid #ff6b6b;">
                <strong style="color: #ff6b6b;">永远不要执行：</strong><br>
                rm -rf /<br>
                rm -rf /*<br>
                rm -rf ~/*
            </div>
            <p>这些命令会删除整个系统！</p>
            
            <p><strong>安全建议：</strong></p>
            <ul>
                <li>删除前仔细检查路径</li>
                <li>使用 rm -i 进行确认</li>
                <li>重要文件先备份</li>
                <li>考虑使用 trash-cli 等回收站工具</li>
            </ul>
            
            <p><strong>示例：</strong></p>
            <div style="background: rgba(0,0,0,0.3); padding: 10px; border-radius: 5px; font-family: monospace;">
                rm -i file.txt          # 删除前确认<br>
                rm -r old_project/      # 删除目录<br>
                rm *.tmp                # 删除所有 .tmp 文件
            </div>
            
            <div class="resource-box">
                <p><strong>💡 替代方案：</strong></p>
                <p>可以创建 alias rm='rm -i' 让 rm 默认需要确认。</p>
            </div>
        `
    },

    
    'man-command': {
        title: "man 命令详解",
        content: `
            <p><strong>man 命令：</strong></p>
            <p>man（manual）是 Linux 最重要的帮助系统，提供命令的详细手册。</p>
            
            <p><strong>基本用法：</strong></p>
            <ul>
                <li><strong>man command</strong> - 查看命令手册</li>
                <li><strong>man 5 passwd</strong> - 查看第 5 章节的 passwd 手册</li>
                <li><strong>man -k keyword</strong> - 搜索包含关键词的手册</li>
            </ul>
            
            <p><strong>手册章节：</strong></p>
            <ul>
                <li>1 - 用户命令</li>
                <li>2 - 系统调用</li>
                <li>3 - C 库函数</li>
                <li>4 - 设备文件</li>
                <li>5 - 配置文件格式</li>
                <li>6 - 游戏</li>
                <li>7 - 杂项</li>
                <li>8 - 系统管理命令</li>
            </ul>
            
            <p><strong>浏览快捷键：</strong></p>
            <ul>
                <li><strong>空格</strong> - 下一页</li>
                <li><strong>b</strong> - 上一页</li>
                <li><strong>/keyword</strong> - 搜索关键词</li>
                <li><strong>n</strong> - 下一个搜索结果</li>
                <li><strong>q</strong> - 退出</li>
                <li><strong>h</strong> - 帮助</li>
            </ul>
            
            <p><strong>其他帮助命令：</strong></p>
            <ul>
                <li><strong>command --help</strong> - 快速帮助</li>
                <li><strong>info command</strong> - 更详细的文档</li>
                <li><strong>whatis command</strong> - 简短描述</li>
                <li><strong>apropos keyword</strong> - 搜索相关命令</li>
            </ul>
            
            <div class="resource-box">
                <p><strong>💡 学习建议：</strong></p>
                <p>遇到不懂的命令，第一时间 man 它！这是最权威的文档。</p>
            </div>
        `
    },
    
    'tab-complete': {
        title: "Tab 自动补全",
        content: `
            <p><strong>Tab 自动补全：</strong></p>
            <p>Tab 键是 Linux 命令行中最重要的快捷键，可以自动补全命令、文件名和路径。</p>
            
            <p><strong>工作原理：</strong></p>
            <ul>
                <li>输入部分内容后按 Tab</li>
                <li>如果只有一个匹配，自动补全</li>
                <li>如果有多个匹配，按两次 Tab 显示所有选项</li>
            </ul>
            
            <p><strong>使用场景：</strong></p>
            <p><strong>1. 补全命令：</strong></p>
            <div style="background: rgba(0,0,0,0.3); padding: 10px; border-radius: 5px; font-family: monospace;">
                $ sys[Tab]  → systemctl
            </div>
            
            <p><strong>2. 补全文件名：</strong></p>
            <div style="background: rgba(0,0,0,0.3); padding: 10px; border-radius: 5px; font-family: monospace;">
                $ cat read[Tab]  → cat readme.txt
            </div>
            
            <p><strong>3. 补全路径：</strong></p>
            <div style="background: rgba(0,0,0,0.3); padding: 10px; border-radius: 5px; font-family: monospace;">
                $ cd /usr/lo[Tab]  → cd /usr/local/
            </div>
            
            <p><strong>4. 查看所有选项：</strong></p>
            <div style="background: rgba(0,0,0,0.3); padding: 10px; border-radius: 5px; font-family: monospace;">
                $ ls Do[Tab][Tab]<br>
                Documents/  Downloads/
            </div>
            
            <p><strong>优势：</strong></p>
            <ul>
                <li>大大提高输入速度</li>
                <li>减少拼写错误</li>
                <li>不需要记住完整的文件名</li>
                <li>可以探索可用的命令和文件</li>
            </ul>
            
            <div class="resource-box">
                <p><strong>💡 养成习惯：</strong></p>
                <p>输入任何命令或文件名时，随时按 Tab，这会让你的效率提升 10 倍！</p>
            </div>
        `
    },
    
    'history-command': {
        title: "命令历史",
        content: `
            <p><strong>命令历史功能：</strong></p>
            <p>Linux 会记录你执行过的所有命令，方便重复使用。</p>
            
            <p><strong>基本操作：</strong></p>
            <ul>
                <li><strong>↑ 上箭头</strong> - 查看上一条命令</li>
                <li><strong>↓ 下箭头</strong> - 查看下一条命令</li>
                <li><strong>history</strong> - 显示所有历史命令</li>
                <li><strong>!n</strong> - 执行第 n 条历史命令</li>
                <li><strong>!!</strong> - 执行上一条命令</li>
                <li><strong>!string</strong> - 执行最近以 string 开头的命令</li>
            </ul>
            
            <p><strong>搜索历史：</strong></p>
            <ul>
                <li><strong>Ctrl + R</strong> - 反向搜索历史命令</li>
                <li>输入关键词，会显示匹配的命令</li>
                <li>继续按 Ctrl + R 查看更早的匹配</li>
                <li>按 Enter 执行，按 Esc 取消</li>
            </ul>
            
            <p><strong>历史命令管理：</strong></p>
            <ul>
                <li><strong>history 10</strong> - 显示最近 10 条命令</li>
                <li><strong>history -c</strong> - 清空历史</li>
                <li><strong>history -d n</strong> - 删除第 n 条命令</li>
            </ul>
            
            <p><strong>配置：</strong></p>
            <ul>
                <li>历史记录保存在 ~/.bash_history</li>
                <li>HISTSIZE 变量控制记录数量</li>
                <li>HISTFILESIZE 控制文件大小</li>
            </ul>
            
            <p><strong>实用技巧：</strong></p>
            <div style="background: rgba(0,0,0,0.3); padding: 10px; border-radius: 5px; font-family: monospace;">
                $ sudo !!              # 用 sudo 重新执行上一条命令<br>
                $ !ssh                 # 执行最近的 ssh 命令<br>
                $ history | grep git   # 搜索包含 git 的命令
            </div>
            
            <div class="resource-box">
                <p><strong>💡 提示：</strong></p>
                <p>Ctrl + R 是最实用的功能，可以快速找到之前执行过的复杂命令。</p>
            </div>
        `
    },
    
    'wildcard': {
        title: "通配符",
        content: `
            <p><strong>通配符（Wildcards）：</strong></p>
            <p>通配符用于匹配文件名模式，可以批量操作文件。</p>
            
            <p><strong>主要通配符：</strong></p>
            <ul>
                <li><strong>*</strong> - 匹配任意多个字符（包括 0 个）</li>
                <li><strong>?</strong> - 匹配单个字符</li>
                <li><strong>[abc]</strong> - 匹配括号中的任意一个字符</li>
                <li><strong>[a-z]</strong> - 匹配范围内的字符</li>
                <li><strong>[!abc]</strong> - 匹配不在括号中的字符</li>
            </ul>
            
            <p><strong>* 星号示例：</strong></p>
            <div style="background: rgba(0,0,0,0.3); padding: 10px; border-radius: 5px; font-family: monospace;">
                ls *.txt           # 所有 .txt 文件<br>
                rm test*           # 删除以 test 开头的文件<br>
                cp *.jpg backup/   # 复制所有 jpg 图片
            </div>
            
            <p><strong>? 问号示例：</strong></p>
            <div style="background: rgba(0,0,0,0.3); padding: 10px; border-radius: 5px; font-family: monospace;">
                ls file?.txt       # file1.txt, file2.txt, fileA.txt<br>
                rm test??.log      # test01.log, test99.log
            </div>
            
            <p><strong>[] 方括号示例：</strong></p>
            <div style="background: rgba(0,0,0,0.3); padding: 10px; border-radius: 5px; font-family: monospace;">
                ls [abc]*.txt      # a开头、b开头或c开头的txt文件<br>
                ls file[1-5].txt   # file1.txt 到 file5.txt<br>
                ls [!0-9]*         # 不以数字开头的文件
            </div>
            
            <p><strong>组合使用：</strong></p>
            <div style="background: rgba(0,0,0,0.3); padding: 10px; border-radius: 5px; font-family: monospace;">
                ls *.{jpg,png,gif}     # 所有图片文件<br>
                rm test_[0-9][0-9].log # test_01.log 到 test_99.log
            </div>
            
            <p><strong>注意事项：</strong></p>
            <ul>
                <li>通配符由 Shell 展开，不是命令本身处理</li>
                <li>使用 rm 配合通配符要特别小心</li>
                <li>可以用 echo 测试通配符匹配结果</li>
            </ul>
            
            <div class="resource-box">
                <p><strong>💡 安全提示：</strong></p>
                <p>使用 rm * 前，先用 ls * 确认要删除的文件。</p>
            </div>
        `
    },
    
    'chmod-command': {
        title: "chmod 命令详解",
        content: `
            <p><strong>chmod 命令：</strong></p>
            <p>chmod（change mode）用于修改文件或目录的权限。</p>
            
            <p><strong>两种表示方法：</strong></p>
            
            <p><strong>1. 符号模式：</strong></p>
            <ul>
                <li><strong>chmod +x file</strong> - 添加执行权限</li>
                <li><strong>chmod -w file</strong> - 移除写权限</li>
                <li><strong>chmod u+x file</strong> - 给所有者添加执行权限</li>
                <li><strong>chmod g-w file</strong> - 移除组的写权限</li>
                <li><strong>chmod o=r file</strong> - 设置其他人只读</li>
            </ul>
            
            <p><strong>2. 数字模式：</strong></p>
            <p>每个权限对应一个数字：</p>
            <ul>
                <li>r (读) = 4</li>
                <li>w (写) = 2</li>
                <li>x (执行) = 1</li>
            </ul>
            
            <p>三位数字分别代表：所有者、组、其他人</p>
            <div style="background: rgba(0,0,0,0.3); padding: 10px; border-radius: 5px; font-family: monospace;">
                chmod 755 file  # rwxr-xr-x<br>
                chmod 644 file  # rw-r--r--<br>
                chmod 600 file  # rw-------<br>
                chmod 777 file  # rwxrwxrwx (不推荐)
            </div>
            
            <p><strong>常用权限：</strong></p>
            <ul>
                <li><strong>644</strong> - 普通文件（所有者可读写，其他人只读）</li>
                <li><strong>755</strong> - 可执行文件、目录</li>
                <li><strong>600</strong> - 私密文件（只有所有者可读写）</li>
                <li><strong>700</strong> - 私密目录</li>
            </ul>
            
            <p><strong>递归修改：</strong></p>
            <div style="background: rgba(0,0,0,0.3); padding: 10px; border-radius: 5px; font-family: monospace;">
                chmod -R 755 directory/  # 递归修改目录及其内容
            </div>
            
            <p><strong>实用示例：</strong></p>
            <div style="background: rgba(0,0,0,0.3); padding: 10px; border-radius: 5px; font-family: monospace;">
                chmod +x script.sh       # 让脚本可执行<br>
                chmod 600 ~/.ssh/id_rsa  # 保护私钥<br>
                chmod 755 ~/bin/*        # 让所有脚本可执行
            </div>
            
            <div class="resource-box">
                <p><strong>⚠️ 安全提示：</strong></p>
                <p>不要随意使用 chmod 777，这会让所有人都能修改文件，存在安全风险。</p>
            </div>
        `
    }
};
