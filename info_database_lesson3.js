// 第三节课详细信息数据库
const infoDatabase = {
    'grep-command': {
        title: "grep 命令详解",
        content: `
            <p><strong>grep 简介：</strong></p>
            <p>grep（Global Regular Expression Print）是 Linux 中最强大的文本搜索工具。</p>
            
            <p><strong>基本语法：</strong></p>
            <div style="background: rgba(0,0,0,0.3); padding: 10px; border-radius: 5px; font-family: monospace;">
                grep [选项] "搜索模式" 文件名
            </div>
            
            <p><strong>常用选项：</strong></p>
            <ul>
                <li><strong>-i</strong> - 忽略大小写</li>
                <li><strong>-v</strong> - 反向匹配（显示不匹配的行）</li>
                <li><strong>-n</strong> - 显示行号</li>
                <li><strong>-c</strong> - 只显示匹配的行数</li>
                <li><strong>-r</strong> 或 <strong>-R</strong> - 递归搜索目录</li>
                <li><strong>-l</strong> - 只显示包含匹配的文件名</li>
                <li><strong>-w</strong> - 匹配整个单词</li>
                <li><strong>-A n</strong> - 显示匹配行及后 n 行</li>
                <li><strong>-B n</strong> - 显示匹配行及前 n 行</li>
                <li><strong>-C n</strong> - 显示匹配行及前后 n 行</li>
            </ul>
            
            <p><strong>实用示例：</strong></p>
            <div style="background: rgba(0,0,0,0.3); padding: 10px; border-radius: 5px; font-family: monospace;">
                grep -i "error" log.txt          # 忽略大小写搜索<br>
                grep -r "TODO" .                 # 递归搜索当前目录<br>
                grep -n "function" script.js     # 显示行号<br>
                grep -v "^#" config.txt          # 过滤注释行<br>
                grep -c "warning" log.txt        # 统计匹配行数<br>
                grep -l "import" *.py            # 列出包含 import 的文件
            </div>
            
            <p><strong>正则表达式：</strong></p>
            <ul>
                <li><strong>^</strong> - 行首</li>
                <li><strong>$</strong> - 行尾</li>
                <li><strong>.</strong> - 任意单个字符</li>
                <li><strong>*</strong> - 前面字符重复 0 次或多次</li>
                <li><strong>[abc]</strong> - 匹配 a、b 或 c</li>
                <li><strong>[^abc]</strong> - 不匹配 a、b 或 c</li>
            </ul>
            
            <div class="resource-box">
                <p><strong>💡 技巧：</strong></p>
                <p>grep 配合管道使用威力更大：ps aux | grep python</p>
            </div>
        `
    },

    
    'pipe': {
        title: "管道（Pipe）",
        content: `
            <p><strong>管道的概念：</strong></p>
            <p>管道（|）是 Unix/Linux 最重要的概念之一，它将一个命令的输出作为另一个命令的输入。</p>
            
            <p><strong>工作原理：</strong></p>
            <div style="background: rgba(0,0,0,0.3); padding: 15px; border-radius: 5px; text-align: center;">
                命令1 → 输出 → | → 输入 → 命令2 → 输出
            </div>
            
            <p><strong>Unix 哲学：</strong></p>
            <ul>
                <li>每个程序只做一件事，但做到极致</li>
                <li>程序之间通过文本流通信</li>
                <li>组合简单工具完成复杂任务</li>
            </ul>
            
            <p><strong>实用示例：</strong></p>
            <div style="background: rgba(0,0,0,0.3); padding: 10px; border-radius: 5px; font-family: monospace;">
                # 查看进程并搜索<br>
                ps aux | grep python<br><br>
                
                # 统计文件行数<br>
                cat file.txt | wc -l<br><br>
                
                # 排序并去重<br>
                cat names.txt | sort | uniq<br><br>
                
                # 查找最大的文件<br>
                ls -lh | sort -k5 -h | tail -5<br><br>
                
                # 实时监控日志中的错误<br>
                tail -f app.log | grep --color "ERROR"
            </div>
            
            <p><strong>多级管道：</strong></p>
            <p>可以连接多个命令：</p>
            <div style="background: rgba(0,0,0,0.3); padding: 10px; border-radius: 5px; font-family: monospace;">
                cat access.log | grep "404" | cut -d' ' -f1 | sort | uniq -c | sort -rn | head -10
            </div>
            <p>这个命令统计访问日志中 404 错误最多的 10 个 IP 地址。</p>
            
            <div class="resource-box">
                <p><strong>💡 提示：</strong></p>
                <p>管道是 Linux 最强大的功能之一，掌握它能让你的效率提升 10 倍！</p>
            </div>
        `
    },
    
    'redirect-output': {
        title: "输出重定向",
        content: `
            <p><strong>输出重定向：</strong></p>
            <p>将命令的输出保存到文件，而不是显示在屏幕上。</p>
            
            <p><strong>重定向符号：</strong></p>
            <ul>
                <li><strong>></strong> - 覆盖写入文件</li>
                <li><strong>>></strong> - 追加到文件末尾</li>
                <li><strong>2></strong> - 重定向错误输出</li>
                <li><strong>&></strong> - 重定向所有输出（标准输出+错误）</li>
                <li><strong>2>&1</strong> - 将错误输出重定向到标准输出</li>
            </ul>
            
            <p><strong>基本示例：</strong></p>
            <div style="background: rgba(0,0,0,0.3); padding: 10px; border-radius: 5px; font-family: monospace;">
                # 覆盖写入<br>
                echo "Hello" > file.txt<br>
                ls -l > filelist.txt<br><br>
                
                # 追加写入<br>
                echo "World" >> file.txt<br>
                date >> log.txt<br><br>
                
                # 重定向错误<br>
                command 2> error.log<br>
                find / -name "*.txt" 2> /dev/null  # 忽略错误
            </div>
            
            <p><strong>标准流：</strong></p>
            <ul>
                <li><strong>0</strong> - 标准输入（stdin）</li>
                <li><strong>1</strong> - 标准输出（stdout）</li>
                <li><strong>2</strong> - 标准错误（stderr）</li>
            </ul>
            
            <p><strong>高级用法：</strong></p>
            <div style="background: rgba(0,0,0,0.3); padding: 10px; border-radius: 5px; font-family: monospace;">
                # 同时保存输出和错误<br>
                command > output.txt 2>&1<br>
                command &> all_output.txt<br><br>
                
                # 输出到文件同时显示在屏幕<br>
                command | tee output.txt<br><br>
                
                # 丢弃输出<br>
                command > /dev/null 2>&1
            </div>
            
            <div class="resource-box">
                <p><strong>⚠️ 注意：</strong></p>
                <p>使用 > 会覆盖原文件内容，使用 >> 才是追加。</p>
            </div>
        `
    },
    
    'redirect-input': {
        title: "输入重定向",
        content: `
            <p><strong>输入重定向：</strong></p>
            <p>从文件读取输入，而不是从键盘。</p>
            
            <p><strong>基本语法：</strong></p>
            <div style="background: rgba(0,0,0,0.3); padding: 10px; border-radius: 5px; font-family: monospace;">
                command < input_file
            </div>
            
            <p><strong>示例：</strong></p>
            <div style="background: rgba(0,0,0,0.3); padding: 10px; border-radius: 5px; font-family: monospace;">
                # 从文件读取输入<br>
                wc -l < file.txt<br>
                sort < unsorted.txt > sorted.txt<br><br>
                
                # Here Document（多行输入）<br>
                cat << EOF > file.txt<br>
                Line 1<br>
                Line 2<br>
                Line 3<br>
                EOF
            </div>
            
            <p><strong>Here Document：</strong></p>
            <p>允许在脚本中嵌入多行文本：</p>
            <div style="background: rgba(0,0,0,0.3); padding: 10px; border-radius: 5px; font-family: monospace;">
                mysql -u root -p << EOF<br>
                USE database;<br>
                SELECT * FROM users;<br>
                EOF
            </div>
            
            <p><strong>组合使用：</strong></p>
            <div style="background: rgba(0,0,0,0.3); padding: 10px; border-radius: 5px; font-family: monospace;">
                # 输入和输出重定向<br>
                sort < input.txt > output.txt<br><br>
                
                # 配合管道<br>
                < input.txt grep "pattern" | sort | uniq > output.txt
            </div>
        `
    },

    
    'wc-command': {
        title: "wc 命令 - 统计",
        content: `
            <p><strong>wc 命令：</strong></p>
            <p>wc（word count）用于统计文件的行数、单词数和字符数。</p>
            
            <p><strong>基本用法：</strong></p>
            <div style="background: rgba(0,0,0,0.3); padding: 10px; border-radius: 5px; font-family: monospace;">
                wc file.txt<br>
                输出：10  50  300 file.txt<br>
                     行数 单词数 字符数
            </div>
            
            <p><strong>常用选项：</strong></p>
            <ul>
                <li><strong>wc -l</strong> - 只统计行数</li>
                <li><strong>wc -w</strong> - 只统计单词数</li>
                <li><strong>wc -c</strong> - 只统计字节数</li>
                <li><strong>wc -m</strong> - 只统计字符数</li>
            </ul>
            
            <p><strong>实用示例：</strong></p>
            <div style="background: rgba(0,0,0,0.3); padding: 10px; border-radius: 5px; font-family: monospace;">
                # 统计代码行数<br>
                wc -l *.py<br><br>
                
                # 统计目录下所有文件的总行数<br>
                find . -name "*.js" | xargs wc -l<br><br>
                
                # 统计日志中错误的数量<br>
                grep "ERROR" app.log | wc -l<br><br>
                
                # 统计当前目录文件数<br>
                ls -1 | wc -l
            </div>
        `
    },
    
    'sort-command': {
        title: "sort 命令 - 排序",
        content: `
            <p><strong>sort 命令：</strong></p>
            <p>对文本行进行排序。</p>
            
            <p><strong>常用选项：</strong></p>
            <ul>
                <li><strong>sort</strong> - 默认按字典序排序</li>
                <li><strong>sort -n</strong> - 按数值排序</li>
                <li><strong>sort -r</strong> - 反向排序</li>
                <li><strong>sort -u</strong> - 排序并去重</li>
                <li><strong>sort -k n</strong> - 按第 n 列排序</li>
                <li><strong>sort -t ','</strong> - 指定分隔符</li>
            </ul>
            
            <p><strong>示例：</strong></p>
            <div style="background: rgba(0,0,0,0.3); padding: 10px; border-radius: 5px; font-family: monospace;">
                # 基本排序<br>
                sort names.txt<br><br>
                
                # 数值排序<br>
                sort -n numbers.txt<br><br>
                
                # 反向排序<br>
                sort -r file.txt<br><br>
                
                # 按第二列排序<br>
                sort -k2 data.txt<br><br>
                
                # CSV 文件按第三列数值排序<br>
                sort -t',' -k3 -n data.csv
            </div>
        `
    },
    
    'uniq-command': {
        title: "uniq 命令 - 去重",
        content: `
            <p><strong>uniq 命令：</strong></p>
            <p>去除或统计重复的行（注意：必须先排序）。</p>
            
            <p><strong>常用选项：</strong></p>
            <ul>
                <li><strong>uniq</strong> - 去除连续重复行</li>
                <li><strong>uniq -c</strong> - 统计每行出现次数</li>
                <li><strong>uniq -d</strong> - 只显示重复的行</li>
                <li><strong>uniq -u</strong> - 只显示不重复的行</li>
            </ul>
            
            <p><strong>示例：</strong></p>
            <div style="background: rgba(0,0,0,0.3); padding: 10px; border-radius: 5px; font-family: monospace;">
                # 去重（必须先排序）<br>
                sort file.txt | uniq<br><br>
                
                # 统计重复次数<br>
                sort file.txt | uniq -c<br><br>
                
                # 找出重复的行<br>
                sort file.txt | uniq -d<br><br>
                
                # 统计访问最多的 IP<br>
                cat access.log | cut -d' ' -f1 | sort | uniq -c | sort -rn | head -10
            </div>
            
            <div class="resource-box">
                <p><strong>⚠️ 注意：</strong></p>
                <p>uniq 只能去除连续的重复行，所以通常要先 sort。</p>
            </div>
        `
    },
    
    'cut-command': {
        title: "cut 命令 - 提取列",
        content: `
            <p><strong>cut 命令：</strong></p>
            <p>从文本中提取指定的列或字段。</p>
            
            <p><strong>常用选项：</strong></p>
            <ul>
                <li><strong>cut -d'分隔符' -f字段</strong> - 按分隔符提取字段</li>
                <li><strong>cut -c字符位置</strong> - 提取指定位置的字符</li>
            </ul>
            
            <p><strong>示例：</strong></p>
            <div style="background: rgba(0,0,0,0.3); padding: 10px; border-radius: 5px; font-family: monospace;">
                # 提取 CSV 的第 1 列<br>
                cut -d',' -f1 data.csv<br><br>
                
                # 提取第 1 和第 3 列<br>
                cut -d',' -f1,3 data.csv<br><br>
                
                # 提取第 2 到第 4 列<br>
                cut -d',' -f2-4 data.csv<br><br>
                
                # 提取每行的前 10 个字符<br>
                cut -c1-10 file.txt<br><br>
                
                # 提取 /etc/passwd 的用户名<br>
                cut -d':' -f1 /etc/passwd
            </div>
        `
    },

    
    'pid': {
        title: "PID - 进程 ID",
        content: `
            <p><strong>什么是 PID？</strong></p>
            <p>PID（Process ID）是系统分配给每个进程的唯一标识符。</p>
            
            <p><strong>特点：</strong></p>
            <ul>
                <li>每个进程都有唯一的 PID</li>
                <li>PID 是一个正整数</li>
                <li>PID 1 通常是 init 或 systemd（系统第一个进程）</li>
                <li>进程结束后，PID 可以被重新使用</li>
            </ul>
            
            <p><strong>查看 PID：</strong></p>
            <div style="background: rgba(0,0,0,0.3); padding: 10px; border-radius: 5px; font-family: monospace;">
                # 查看所有进程的 PID<br>
                ps aux<br><br>
                
                # 查看特定程序的 PID<br>
                ps aux | grep python<br>
                pgrep python<br>
                pidof python<br><br>
                
                # 查看当前 Shell 的 PID<br>
                echo $$<br><br>
                
                # 查看上一个后台进程的 PID<br>
                echo $!
            </div>
            
            <p><strong>使用 PID：</strong></p>
            <div style="background: rgba(0,0,0,0.3); padding: 10px; border-radius: 5px; font-family: monospace;">
                # 终止进程<br>
                kill 1234<br>
                kill -9 1234<br><br>
                
                # 查看进程详细信息<br>
                ps -p 1234 -f<br><br>
                
                # 查看进程打开的文件<br>
                lsof -p 1234
            </div>
            
            <p><strong>PPID（父进程 ID）：</strong></p>
            <p>每个进程都有一个父进程，PPID 就是父进程的 PID。</p>
        `
    },
    
    'ps-command': {
        title: "ps 命令详解",
        content: `
            <p><strong>ps 命令：</strong></p>
            <p>ps（Process Status）显示当前运行的进程信息。</p>
            
            <p><strong>常用格式：</strong></p>
            <ul>
                <li><strong>ps</strong> - 显示当前终端的进程</li>
                <li><strong>ps aux</strong> - 显示所有进程（BSD 风格）</li>
                <li><strong>ps -ef</strong> - 显示所有进程（System V 风格）</li>
                <li><strong>ps -u 用户名</strong> - 显示指定用户的进程</li>
            </ul>
            
            <p><strong>输出列说明（ps aux）：</strong></p>
            <ul>
                <li><strong>USER</strong> - 进程所有者</li>
                <li><strong>PID</strong> - 进程 ID</li>
                <li><strong>%CPU</strong> - CPU 使用率</li>
                <li><strong>%MEM</strong> - 内存使用率</li>
                <li><strong>VSZ</strong> - 虚拟内存大小（KB）</li>
                <li><strong>RSS</strong> - 物理内存大小（KB）</li>
                <li><strong>TTY</strong> - 终端</li>
                <li><strong>STAT</strong> - 进程状态</li>
                <li><strong>START</strong> - 启动时间</li>
                <li><strong>TIME</strong> - CPU 时间</li>
                <li><strong>COMMAND</strong> - 命令</li>
            </ul>
            
            <p><strong>进程状态（STAT）：</strong></p>
            <ul>
                <li><strong>R</strong> - Running（运行中）</li>
                <li><strong>S</strong> - Sleeping（睡眠）</li>
                <li><strong>D</strong> - 不可中断睡眠</li>
                <li><strong>Z</strong> - Zombie（僵尸进程）</li>
                <li><strong>T</strong> - Stopped（停止）</li>
            </ul>
            
            <p><strong>实用示例：</strong></p>
            <div style="background: rgba(0,0,0,0.3); padding: 10px; border-radius: 5px; font-family: monospace;">
                # 查看所有进程<br>
                ps aux<br><br>
                
                # 查找特定进程<br>
                ps aux | grep python<br><br>
                
                # 按 CPU 使用率排序<br>
                ps aux --sort=-%cpu | head -10<br><br>
                
                # 按内存使用率排序<br>
                ps aux --sort=-%mem | head -10<br><br>
                
                # 显示进程树<br>
                ps auxf<br>
                pstree
            </div>
        `
    },
    
    'top-command': {
        title: "top 命令详解",
        content: `
            <p><strong>top 命令：</strong></p>
            <p>top 实时显示系统资源使用情况和进程信息，是系统监控的首选工具。</p>
            
            <p><strong>界面说明：</strong></p>
            <p><strong>第一行（系统信息）：</strong></p>
            <ul>
                <li>当前时间</li>
                <li>系统运行时间（uptime）</li>
                <li>登录用户数</li>
                <li>平均负载（1分钟、5分钟、15分钟）</li>
            </ul>
            
            <p><strong>第二行（任务信息）：</strong></p>
            <ul>
                <li>总进程数</li>
                <li>运行中的进程</li>
                <li>睡眠的进程</li>
                <li>停止的进程</li>
                <li>僵尸进程</li>
            </ul>
            
            <p><strong>第三行（CPU 使用率）：</strong></p>
            <ul>
                <li><strong>us</strong> - 用户空间占用</li>
                <li><strong>sy</strong> - 内核空间占用</li>
                <li><strong>ni</strong> - 改变过优先级的进程</li>
                <li><strong>id</strong> - 空闲 CPU</li>
                <li><strong>wa</strong> - IO 等待</li>
            </ul>
            
            <p><strong>交互命令：</strong></p>
            <ul>
                <li><strong>q</strong> - 退出</li>
                <li><strong>h</strong> - 帮助</li>
                <li><strong>k</strong> - 杀死进程（输入 PID）</li>
                <li><strong>M</strong> - 按内存使用率排序</li>
                <li><strong>P</strong> - 按 CPU 使用率排序</li>
                <li><strong>T</strong> - 按运行时间排序</li>
                <li><strong>u</strong> - 显示指定用户的进程</li>
                <li><strong>1</strong> - 显示每个 CPU 的使用情况</li>
                <li><strong>c</strong> - 显示完整命令</li>
            </ul>
            
            <p><strong>替代工具：</strong></p>
            <ul>
                <li><strong>htop</strong> - 更友好的 top（需要安装）</li>
                <li><strong>atop</strong> - 更详细的系统监控</li>
                <li><strong>glances</strong> - 跨平台监控工具</li>
            </ul>
            
            <div class="resource-box">
                <p><strong>💡 技巧：</strong></p>
                <p>top -d 1 可以设置刷新间隔为 1 秒。</p>
            </div>
        `
    },
    
    'kill-command': {
        title: "kill 命令详解",
        content: `
            <p><strong>kill 命令：</strong></p>
            <p>kill 用于向进程发送信号，最常用于终止进程。</p>
            
            <p><strong>基本用法：</strong></p>
            <div style="background: rgba(0,0,0,0.3); padding: 10px; border-radius: 5px; font-family: monospace;">
                kill [选项] PID
            </div>
            
            <p><strong>常用信号：</strong></p>
            <ul>
                <li><strong>SIGTERM (15)</strong> - 正常终止（默认）</li>
                <li><strong>SIGKILL (9)</strong> - 强制终止</li>
                <li><strong>SIGHUP (1)</strong> - 挂起</li>
                <li><strong>SIGINT (2)</strong> - 中断（Ctrl+C）</li>
                <li><strong>SIGSTOP (19)</strong> - 暂停</li>
                <li><strong>SIGCONT (18)</strong> - 继续</li>
            </ul>
            
            <p><strong>使用示例：</strong></p>
            <div style="background: rgba(0,0,0,0.3); padding: 10px; border-radius: 5px; font-family: monospace;">
                # 正常终止进程<br>
                kill 1234<br>
                kill -15 1234<br>
                kill -TERM 1234<br><br>
                
                # 强制终止进程<br>
                kill -9 1234<br>
                kill -KILL 1234<br><br>
                
                # 重新加载配置<br>
                kill -HUP 1234<br><br>
                
                # 查看所有信号<br>
                kill -l
            </div>
            
            <p><strong>相关命令：</strong></p>
            <ul>
                <li><strong>killall 进程名</strong> - 按名称杀死进程</li>
                <li><strong>pkill 模式</strong> - 按模式匹配杀死进程</li>
                <li><strong>xkill</strong> - 图形界面点击杀死窗口</li>
            </ul>
            
            <p><strong>示例：</strong></p>
            <div style="background: rgba(0,0,0,0.3); padding: 10px; border-radius: 5px; font-family: monospace;">
                # 杀死所有 firefox 进程<br>
                killall firefox<br><br>
                
                # 杀死所有 python 进程<br>
                pkill python<br><br>
                
                # 杀死当前用户的所有进程<br>
                pkill -u username
            </div>
            
            <div class="resource-box">
                <p><strong>⚠️ 注意：</strong></p>
                <p>kill -9 应该是最后的手段，优先使用 kill（SIGTERM）让进程正常退出。</p>
            </div>
        `
    },

    
    'ping-command': {
        title: "ping 命令详解",
        content: `
            <p><strong>ping 命令：</strong></p>
            <p>ping 用于测试网络连通性和延迟。</p>
            
            <p><strong>工作原理：</strong></p>
            <p>发送 ICMP Echo Request 数据包，等待目标主机返回 Echo Reply。</p>
            
            <p><strong>基本用法：</strong></p>
            <div style="background: rgba(0,0,0,0.3); padding: 10px; border-radius: 5px; font-family: monospace;">
                ping 主机名或IP地址
            </div>
            
            <p><strong>常用选项：</strong></p>
            <ul>
                <li><strong>-c n</strong> - 发送 n 个数据包后停止</li>
                <li><strong>-i n</strong> - 间隔 n 秒发送</li>
                <li><strong>-s n</strong> - 设置数据包大小</li>
                <li><strong>-W n</strong> - 超时时间（秒）</li>
            </ul>
            
            <p><strong>示例：</strong></p>
            <div style="background: rgba(0,0,0,0.3); padding: 10px; border-radius: 5px; font-family: monospace;">
                # 持续 ping<br>
                ping google.com<br><br>
                
                # 只 ping 4 次<br>
                ping -c 4 google.com<br><br>
                
                # 快速 ping（0.2秒间隔）<br>
                ping -i 0.2 google.com<br><br>
                
                # 大数据包测试<br>
                ping -s 1000 google.com
            </div>
            
            <p><strong>输出解读：</strong></p>
            <ul>
                <li><strong>time</strong> - 往返时间（RTT），越小越好</li>
                <li><strong>ttl</strong> - 生存时间，经过的路由器数</li>
                <li><strong>packet loss</strong> - 丢包率，0% 最好</li>
            </ul>
            
            <p><strong>常见问题：</strong></p>
            <ul>
                <li>ping 不通可能是防火墙阻止了 ICMP</li>
                <li>高延迟可能是网络拥堵</li>
                <li>丢包可能是网络不稳定</li>
            </ul>
            
            <div class="resource-box">
                <p><strong>💡 技巧：</strong></p>
                <p>按 Ctrl+C 停止 ping，会显示统计信息。</p>
            </div>
        `
    },
    
    'curl-command': {
        title: "curl 命令详解",
        content: `
            <p><strong>curl 命令：</strong></p>
            <p>curl 是强大的网络请求工具，支持多种协议（HTTP、HTTPS、FTP 等）。</p>
            
            <p><strong>基本用法：</strong></p>
            <div style="background: rgba(0,0,0,0.3); padding: 10px; border-radius: 5px; font-family: monospace;">
                curl [选项] URL
            </div>
            
            <p><strong>常用选项：</strong></p>
            <ul>
                <li><strong>-o 文件名</strong> - 保存到文件</li>
                <li><strong>-O</strong> - 使用 URL 中的文件名保存</li>
                <li><strong>-I</strong> - 只显示响应头</li>
                <li><strong>-L</strong> - 跟随重定向</li>
                <li><strong>-X 方法</strong> - 指定 HTTP 方法（GET、POST 等）</li>
                <li><strong>-H "头"</strong> - 添加请求头</li>
                <li><strong>-d "数据"</strong> - 发送 POST 数据</li>
                <li><strong>-u 用户:密码</strong> - HTTP 认证</li>
            </ul>
            
            <p><strong>实用示例：</strong></p>
            <div style="background: rgba(0,0,0,0.3); padding: 10px; border-radius: 5px; font-family: monospace;">
                # 获取网页内容<br>
                curl https://example.com<br><br>
                
                # 保存到文件<br>
                curl -o page.html https://example.com<br>
                curl -O https://example.com/file.zip<br><br>
                
                # 只看响应头<br>
                curl -I https://google.com<br><br>
                
                # POST 请求<br>
                curl -X POST -d "name=John&age=30" https://api.example.com<br><br>
                
                # JSON 请求<br>
                curl -X POST -H "Content-Type: application/json" \<br>
                     -d '{"name":"John","age":30}' \<br>
                     https://api.example.com<br><br>
                
                # 下载文件并显示进度<br>
                curl -# -O https://example.com/large.zip<br><br>
                
                # 测试 API<br>
                curl -X GET https://api.github.com/users/torvalds
            </div>
            
            <p><strong>调试选项：</strong></p>
            <ul>
                <li><strong>-v</strong> - 详细输出</li>
                <li><strong>-s</strong> - 静默模式</li>
                <li><strong>--trace 文件</strong> - 保存详细日志</li>
            </ul>
            
            <div class="resource-box">
                <p><strong>💡 用途：</strong></p>
                <p>curl 是测试 API、下载文件、调试网络问题的利器。</p>
            </div>
        `
    },
    
    'wget-command': {
        title: "wget 命令详解",
        content: `
            <p><strong>wget 命令：</strong></p>
            <p>wget 是专门用于下载文件的工具，支持断点续传和递归下载。</p>
            
            <p><strong>基本用法：</strong></p>
            <div style="background: rgba(0,0,0,0.3); padding: 10px; border-radius: 5px; font-family: monospace;">
                wget [选项] URL
            </div>
            
            <p><strong>常用选项：</strong></p>
            <ul>
                <li><strong>-O 文件名</strong> - 保存为指定文件名</li>
                <li><strong>-c</strong> - 断点续传</li>
                <li><strong>-b</strong> - 后台下载</li>
                <li><strong>-r</strong> - 递归下载</li>
                <li><strong>-np</strong> - 不下载父目录</li>
                <li><strong>-k</strong> - 转换链接为本地</li>
                <li><strong>-p</strong> - 下载页面所需的所有文件</li>
                <li><strong>--limit-rate=速度</strong> - 限速下载</li>
            </ul>
            
            <p><strong>实用示例：</strong></p>
            <div style="background: rgba(0,0,0,0.3); padding: 10px; border-radius: 5px; font-family: monospace;">
                # 下载文件<br>
                wget https://example.com/file.zip<br><br>
                
                # 断点续传<br>
                wget -c https://example.com/large.iso<br><br>
                
                # 后台下载<br>
                wget -b https://example.com/file.zip<br><br>
                
                # 限速下载（500KB/s）<br>
                wget --limit-rate=500k https://example.com/file.zip<br><br>
                
                # 下载整个网站<br>
                wget -r -np -k https://example.com/<br><br>
                
                # 下载多个文件<br>
                wget -i urls.txt<br><br>
                
                # 重命名下载的文件<br>
                wget -O myfile.zip https://example.com/file.zip
            </div>
            
            <p><strong>wget vs curl：</strong></p>
            <ul>
                <li><strong>wget</strong> - 专注下载，支持递归和断点续传</li>
                <li><strong>curl</strong> - 更灵活，支持更多协议和 API 测试</li>
            </ul>
        `
    },
    
    'netstat-command': {
        title: "netstat 命令",
        content: `
            <p><strong>netstat 命令：</strong></p>
            <p>netstat 显示网络连接、路由表、接口统计等信息。</p>
            
            <p><strong>常用选项：</strong></p>
            <ul>
                <li><strong>-t</strong> - 显示 TCP 连接</li>
                <li><strong>-u</strong> - 显示 UDP 连接</li>
                <li><strong>-l</strong> - 只显示监听的端口</li>
                <li><strong>-p</strong> - 显示进程信息</li>
                <li><strong>-n</strong> - 以数字形式显示地址和端口</li>
                <li><strong>-a</strong> - 显示所有连接</li>
            </ul>
            
            <p><strong>常用组合：</strong></p>
            <div style="background: rgba(0,0,0,0.3); padding: 10px; border-radius: 5px; font-family: monospace;">
                # 查看所有监听的端口<br>
                netstat -tuln<br><br>
                
                # 查看所有连接和进程<br>
                netstat -tulpn<br><br>
                
                # 查看特定端口<br>
                netstat -tuln | grep :80<br><br>
                
                # 统计连接数<br>
                netstat -an | grep ESTABLISHED | wc -l
            </div>
            
            <p><strong>注意：</strong></p>
            <p>netstat 已经过时，推荐使用 ss 命令（更快）。</p>
        `
    },
    
    'ss-command': {
        title: "ss 命令",
        content: `
            <p><strong>ss 命令：</strong></p>
            <p>ss（socket statistics）是 netstat 的现代替代品，速度更快。</p>
            
            <p><strong>常用选项：</strong></p>
            <ul>
                <li><strong>-t</strong> - TCP 连接</li>
                <li><strong>-u</strong> - UDP 连接</li>
                <li><strong>-l</strong> - 监听的端口</li>
                <li><strong>-p</strong> - 显示进程</li>
                <li><strong>-n</strong> - 数字形式</li>
                <li><strong>-a</strong> - 所有连接</li>
            </ul>
            
            <p><strong>示例：</strong></p>
            <div style="background: rgba(0,0,0,0.3); padding: 10px; border-radius: 5px; font-family: monospace;">
                # 查看所有监听端口<br>
                ss -tuln<br><br>
                
                # 查看所有连接<br>
                ss -tulpn<br><br>
                
                # 查看特定端口<br>
                ss -tuln | grep :80<br><br>
                
                # 查看 TCP 连接统计<br>
                ss -s
            </div>
        `
    },
    
    'find-command': {
        title: "find 命令详解",
        content: `
            <p><strong>find 命令：</strong></p>
            <p>find 是最强大的文件搜索工具，可以按各种条件查找文件。</p>
            
            <p><strong>基本语法：</strong></p>
            <div style="background: rgba(0,0,0,0.3); padding: 10px; border-radius: 5px; font-family: monospace;">
                find 路径 条件 动作
            </div>
            
            <p><strong>按名称查找：</strong></p>
            <div style="background: rgba(0,0,0,0.3); padding: 10px; border-radius: 5px; font-family: monospace;">
                find . -name "*.txt"          # 查找 .txt 文件<br>
                find . -iname "*.TXT"         # 忽略大小写<br>
                find . -name "file*"          # 通配符
            </div>
            
            <p><strong>按类型查找：</strong></p>
            <div style="background: rgba(0,0,0,0.3); padding: 10px; border-radius: 5px; font-family: monospace;">
                find . -type f                # 文件<br>
                find . -type d                # 目录<br>
                find . -type l                # 符号链接
            </div>
            
            <p><strong>按大小查找：</strong></p>
            <div style="background: rgba(0,0,0,0.3); padding: 10px; border-radius: 5px; font-family: monospace;">
                find . -size +100M            # 大于 100MB<br>
                find . -size -1k              # 小于 1KB<br>
                find . -size 10M              # 等于 10MB
            </div>
            
            <p><strong>按时间查找：</strong></p>
            <div style="background: rgba(0,0,0,0.3); padding: 10px; border-radius: 5px; font-family: monospace;">
                find . -mtime -7              # 7天内修改<br>
                find . -mtime +30             # 30天前修改<br>
                find . -atime -1              # 1天内访问
            </div>
            
            <p><strong>按权限查找：</strong></p>
            <div style="background: rgba(0,0,0,0.3); padding: 10px; border-radius: 5px; font-family: monospace;">
                find . -perm 644              # 权限为 644<br>
                find . -perm -u+x             # 所有者可执行
            </div>
            
            <p><strong>执行动作：</strong></p>
            <div style="background: rgba(0,0,0,0.3); padding: 10px; border-radius: 5px; font-family: monospace;">
                find . -name "*.log" -delete  # 删除<br>
                find . -name "*.txt" -exec cat {} \;  # 执行命令<br>
                find . -type f -exec chmod 644 {} \;  # 修改权限
            </div>
        `
    },
    
    'df-command': {
        title: "df 命令 - 磁盘空间",
        content: `
            <p><strong>df 命令：</strong></p>
            <p>df（disk free）显示文件系统的磁盘空间使用情况。</p>
            
            <p><strong>常用选项：</strong></p>
            <ul>
                <li><strong>df -h</strong> - 人类可读格式（GB、MB）</li>
                <li><strong>df -T</strong> - 显示文件系统类型</li>
                <li><strong>df -i</strong> - 显示 inode 使用情况</li>
            </ul>
            
            <p><strong>示例：</strong></p>
            <div style="background: rgba(0,0,0,0.3); padding: 10px; border-radius: 5px; font-family: monospace;">
                $ df -h<br>
                Filesystem      Size  Used Avail Use% Mounted on<br>
                /dev/sda1       100G   45G   50G  48% /<br>
                /dev/sda2       200G  120G   75G  62% /home
            </div>
            
            <p><strong>输出说明：</strong></p>
            <ul>
                <li><strong>Size</strong> - 总大小</li>
                <li><strong>Used</strong> - 已使用</li>
                <li><strong>Avail</strong> - 可用空间</li>
                <li><strong>Use%</strong> - 使用百分比</li>
                <li><strong>Mounted on</strong> - 挂载点</li>
            </ul>
        `
    },
    
    'du-command': {
        title: "du 命令 - 目录大小",
        content: `
            <p><strong>du 命令：</strong></p>
            <p>du（disk usage）显示目录或文件的磁盘使用情况。</p>
            
            <p><strong>常用选项：</strong></p>
            <ul>
                <li><strong>du -h</strong> - 人类可读格式</li>
                <li><strong>du -s</strong> - 只显示总计</li>
                <li><strong>du -a</strong> - 显示所有文件</li>
                <li><strong>du -d n</strong> - 限制目录深度</li>
            </ul>
            
            <p><strong>实用示例：</strong></p>
            <div style="background: rgba(0,0,0,0.3); padding: 10px; border-radius: 5px; font-family: monospace;">
                # 查看当前目录大小<br>
                du -sh<br><br>
                
                # 查看子目录大小<br>
                du -sh *<br><br>
                
                # 找出最大的目录<br>
                du -h | sort -h | tail -10<br><br>
                
                # 限制深度<br>
                du -h -d 1
            </div>
        `
    }
};
