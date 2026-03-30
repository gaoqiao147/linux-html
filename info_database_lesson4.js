// 第四节课详细信息数据库
const infoDatabase = {
    'user-concept': {
        title: "用户的概念",
        content: `
            <p><strong>什么是用户？</strong></p>
            <p>在 Linux 中，用户是系统访问控制的基本单位。</p>
            
            <p><strong>用户的作用：</strong></p>
            <ul>
                <li>标识系统使用者的身份</li>
                <li>控制对文件和资源的访问权限</li>
                <li>隔离不同用户的工作环境</li>
                <li>提供安全性和隐私保护</li>
            </ul>
            
            <p><strong>用户类型：</strong></p>
            <ul>
                <li><strong>root 用户</strong> - 超级管理员，UID=0，拥有所有权限</li>
                <li><strong>系统用户</strong> - UID 1-999，用于运行系统服务</li>
                <li><strong>普通用户</strong> - UID ≥1000，日常使用的账户</li>
            </ul>
            
            <p><strong>用户标识：</strong></p>
            <ul>
                <li><strong>用户名</strong> - 人类可读的名称（如 john）</li>
                <li><strong>UID</strong> - 用户 ID，系统内部使用的数字标识</li>
            </ul>
            
            <div class="resource-box">
                <p><strong>💡 重要：</strong></p>
                <p>Linux 是多用户系统，多个用户可以同时登录和工作。</p>
            </div>
        `
    },

    'group-concept': {
        title: "组的概念",
        content: `
            <p><strong>什么是组？</strong></p>
            <p>组是用户的集合，用于简化权限管理。</p>
            
            <p><strong>组的作用：</strong></p>
            <ul>
                <li>将多个用户归类管理</li>
                <li>统一分配权限给一组用户</li>
                <li>简化权限管理工作</li>
            </ul>
            
            <p><strong>组的类型：</strong></p>
            <ul>
                <li><strong>主组（Primary Group）</strong> - 用户创建文件时的默认组</li>
                <li><strong>附加组（Secondary Group）</strong> - 用户可以加入的其他组</li>
            </ul>
            
            <p><strong>组标识：</strong></p>
            <ul>
                <li><strong>组名</strong> - 人类可读的名称（如 developers）</li>
                <li><strong>GID</strong> - 组 ID，系统内部使用的数字标识</li>
            </ul>
            
            <p><strong>实际应用：</strong></p>
            <div style="background: rgba(0,0,0,0.3); padding: 10px; border-radius: 5px; font-family: monospace;">
                # 例如：创建 developers 组<br>
                # 将 alice、bob、charlie 加入该组<br>
                # 给 developers 组分配项目目录的访问权限<br>
                # 这样三个人都能访问项目文件
            </div>
            
            <div class="resource-box">
                <p><strong>💡 类比：</strong></p>
                <p>组就像公司的部门，部门成员共享某些资源和权限。</p>
            </div>
        `
    },

    'passwd-file': {
        title: "/etc/passwd 文件",
        content: `
            <p><strong>/etc/passwd 文件：</strong></p>
            <p>存储所有用户账户信息的核心配置文件。</p>
            
            <p><strong>文件格式：</strong></p>
            <div style="background: rgba(0,0,0,0.3); padding: 10px; border-radius: 5px; font-family: monospace;">
                用户名:密码占位符:UID:GID:描述:家目录:登录Shell
            </div>
            
            <p><strong>字段说明：</strong></p>
            <ul>
                <li><strong>字段1 - 用户名</strong>：登录时使用的名称</li>
                <li><strong>字段2 - 密码占位符</strong>：通常是 x（真实密码在 /etc/shadow）</li>
                <li><strong>字段3 - UID</strong>：用户 ID 号</li>
                <li><strong>字段4 - GID</strong>：主组 ID 号</li>
                <li><strong>字段5 - 描述</strong>：用户的全名或描述信息</li>
                <li><strong>字段6 - 家目录</strong>：用户的主目录路径</li>
                <li><strong>字段7 - 登录Shell</strong>：用户登录后使用的 Shell</li>
            </ul>
            
            <p><strong>示例：</strong></p>
            <div style="background: rgba(0,0,0,0.3); padding: 10px; border-radius: 5px; font-family: monospace;">
                root:x:0:0:root:/root:/bin/bash<br>
                john:x:1000:1000:John Smith:/home/john:/bin/bash<br>
                nginx:x:33:33:Nginx web server:/var/www:/usr/sbin/nologin
            </div>
            
            <p><strong>查看文件：</strong></p>
            <div style="background: rgba(0,0,0,0.3); padding: 10px; border-radius: 5px; font-family: monospace;">
                cat /etc/passwd<br>
                grep "^john" /etc/passwd
            </div>
            
            <div class="resource-box">
                <p><strong>⚠️ 注意：</strong></p>
                <p>该文件所有用户可读，但只有 root 可以修改。</p>
            </div>
        `
    },

    'shadow-file': {
        title: "/etc/shadow 文件",
        content: `
            <p><strong>/etc/shadow 文件：</strong></p>
            <p>存储用户密码和密码策略的安全文件。</p>
            
            <p><strong>安全特性：</strong></p>
            <ul>
                <li>只有 root 用户可以读取</li>
                <li>存储加密后的密码</li>
                <li>包含密码过期信息</li>
            </ul>
            
            <p><strong>文件格式：</strong></p>
            <div style="background: rgba(0,0,0,0.3); padding: 10px; border-radius: 5px; font-family: monospace;">
                用户名:加密密码:最后修改日期:最小间隔:最大间隔:警告期:不活动期:过期日期:保留字段
            </div>
            
            <p><strong>主要字段：</strong></p>
            <ul>
                <li><strong>加密密码</strong>：使用 SHA-512 等算法加密</li>
                <li><strong>最后修改日期</strong>：密码最后修改的日期（从1970-01-01算起的天数）</li>
                <li><strong>最小间隔</strong>：两次修改密码的最小间隔天数</li>
                <li><strong>最大间隔</strong>：密码有效期（天数）</li>
                <li><strong>警告期</strong>：密码过期前多少天开始警告</li>
            </ul>
            
            <p><strong>示例：</strong></p>
            <div style="background: rgba(0,0,0,0.3); padding: 10px; border-radius: 5px; font-family: monospace;">
                john:$6$xyz...:18500:0:99999:7:::<br>
                <span style="color: #888;"># 用户 john 的加密密码和策略信息</span>
            </div>
            
            <div class="resource-box">
                <p><strong>🔒 安全：</strong></p>
                <p>密码分离存储提高了系统安全性。</p>
            </div>
        `
    },

    'group-file': {
        title: "/etc/group 文件",
        content: `
            <p><strong>/etc/group 文件：</strong></p>
            <p>存储所有组信息的配置文件。</p>
            
            <p><strong>文件格式：</strong></p>
            <div style="background: rgba(0,0,0,0.3); padding: 10px; border-radius: 5px; font-family: monospace;">
                组名:密码占位符:GID:组成员列表
            </div>
            
            <p><strong>字段说明：</strong></p>
            <ul>
                <li><strong>组名</strong>：组的名称</li>
                <li><strong>密码占位符</strong>：通常是 x</li>
                <li><strong>GID</strong>：组 ID 号</li>
                <li><strong>组成员列表</strong>：属于该组的用户（逗号分隔）</li>
            </ul>
            
            <p><strong>示例：</strong></p>
            <div style="background: rgba(0,0,0,0.3); padding: 10px; border-radius: 5px; font-family: monospace;">
                root:x:0:<br>
                developers:x:1001:alice,bob,charlie<br>
                docker:x:999:john,alice
            </div>
            
            <p><strong>查看文件：</strong></p>
            <div style="background: rgba(0,0,0,0.3); padding: 10px; border-radius: 5px; font-family: monospace;">
                cat /etc/group<br>
                grep "^developers" /etc/group
            </div>
            
            <div class="resource-box">
                <p><strong>💡 提示：</strong></p>
                <p>用户的主组不会显示在组成员列表中。</p>
            </div>
        `
    },

    'useradd-command': {
        title: "useradd 命令",
        content: `
            <p><strong>useradd 命令：</strong></p>
            <p>创建新用户账户的命令。</p>
            
            <p><strong>基本语法：</strong></p>
            <div style="background: rgba(0,0,0,0.3); padding: 10px; border-radius: 5px; font-family: monospace;">
                useradd [选项] 用户名
            </div>
            
            <p><strong>常用选项：</strong></p>
            <ul>
                <li><strong>-m</strong> - 创建家目录</li>
                <li><strong>-d 目录</strong> - 指定家目录路径</li>
                <li><strong>-s Shell</strong> - 指定登录 Shell</li>
                <li><strong>-g 组</strong> - 指定主组</li>
                <li><strong>-G 组列表</strong> - 指定附加组</li>
                <li><strong>-u UID</strong> - 指定 UID</li>
                <li><strong>-c 描述</strong> - 添加用户描述</li>
            </ul>
            
            <p><strong>使用示例：</strong></p>
            <div style="background: rgba(0,0,0,0.3); padding: 10px; border-radius: 5px; font-family: monospace;">
                # 创建基本用户<br>
                useradd john<br><br>
                
                # 创建用户并创建家目录<br>
                useradd -m alice<br><br>
                
                # 创建用户并指定 Shell<br>
                useradd -m -s /bin/bash bob<br><br>
                
                # 创建用户并加入多个组<br>
                useradd -m -G developers,docker charlie<br><br>
                
                # 完整示例<br>
                useradd -m -d /home/david -s /bin/bash -c "David Lee" david
            </div>
            
            <p><strong>创建后的操作：</strong></p>
            <div style="background: rgba(0,0,0,0.3); padding: 10px; border-radius: 5px; font-family: monospace;">
                # 设置密码<br>
                passwd john<br><br>
                
                # 验证用户创建<br>
                id john<br>
                grep john /etc/passwd
            </div>
            
            <div class="resource-box">
                <p><strong>⚠️ 注意：</strong></p>
                <p>useradd 创建用户后需要用 passwd 命令设置密码。</p>
            </div>
        `
    },

    'usermod-command': {
        title: "usermod 命令",
        content: `
            <p><strong>usermod 命令：</strong></p>
            <p>修改现有用户账户的属性。</p>
            
            <p><strong>基本语法：</strong></p>
            <div style="background: rgba(0,0,0,0.3); padding: 10px; border-radius: 5px; font-family: monospace;">
                usermod [选项] 用户名
            </div>
            
            <p><strong>常用选项：</strong></p>
            <ul>
                <li><strong>-l 新名称</strong> - 修改用户名</li>
                <li><strong>-d 目录</strong> - 修改家目录</li>
                <li><strong>-s Shell</strong> - 修改登录 Shell</li>
                <li><strong>-g 组</strong> - 修改主组</li>
                <li><strong>-G 组列表</strong> - 设置附加组</li>
                <li><strong>-aG 组</strong> - 添加到附加组（不覆盖）</li>
                <li><strong>-L</strong> - 锁定账户</li>
                <li><strong>-U</strong> - 解锁账户</li>
            </ul>
            
            <p><strong>使用示例：</strong></p>
            <div style="background: rgba(0,0,0,0.3); padding: 10px; border-radius: 5px; font-family: monospace;">
                # 修改用户名<br>
                usermod -l newname oldname<br><br>
                
                # 修改家目录<br>
                usermod -d /home/newhome john<br><br>
                
                # 添加用户到 docker 组<br>
                usermod -aG docker john<br><br>
                
                # 修改用户的 Shell<br>
                usermod -s /bin/zsh alice<br><br>
                
                # 锁定用户账户<br>
                usermod -L bob<br><br>
                
                # 解锁用户账户<br>
                usermod -U bob
            </div>
            
            <div class="resource-box">
                <p><strong>💡 重要：</strong></p>
                <p>使用 -aG 添加组，使用 -G 会覆盖所有附加组。</p>
            </div>
        `
    },

    'userdel-command': {
        title: "userdel 命令",
        content: `
            <p><strong>userdel 命令：</strong></p>
            <p>删除用户账户。</p>
            
            <p><strong>基本语法：</strong></p>
            <div style="background: rgba(0,0,0,0.3); padding: 10px; border-radius: 5px; font-family: monospace;">
                userdel [选项] 用户名
            </div>
            
            <p><strong>常用选项：</strong></p>
            <ul>
                <li><strong>userdel 用户名</strong> - 删除用户（保留家目录）</li>
                <li><strong>userdel -r 用户名</strong> - 删除用户及家目录</li>
                <li><strong>userdel -f 用户名</strong> - 强制删除（即使用户已登录）</li>
            </ul>
            
            <p><strong>使用示例：</strong></p>
            <div style="background: rgba(0,0,0,0.3); padding: 10px; border-radius: 5px; font-family: monospace;">
                # 删除用户（保留家目录）<br>
                userdel john<br><br>
                
                # 删除用户及其家目录<br>
                userdel -r alice<br><br>
                
                # 强制删除<br>
                userdel -rf bob
            </div>
            
            <p><strong>删除前检查：</strong></p>
            <div style="background: rgba(0,0,0,0.3); padding: 10px; border-radius: 5px; font-family: monospace;">
                # 查看用户是否登录<br>
                who | grep john<br><br>
                
                # 查看用户的进程<br>
                ps -u john<br><br>
                
                # 查找用户的文件<br>
                find / -user john
            </div>
            
            <div class="resource-box">
                <p><strong>⚠️ 警告：</strong></p>
                <p>删除用户前请确保备份重要数据，-r 选项会永久删除家目录。</p>
            </div>
        `
    },

    'passwd-command': {
        title: "passwd 命令",
        content: `
            <p><strong>passwd 命令：</strong></p>
            <p>设置或修改用户密码。</p>
            
            <p><strong>基本用法：</strong></p>
            <div style="background: rgba(0,0,0,0.3); padding: 10px; border-radius: 5px; font-family: monospace;">
                passwd [用户名]
            </div>
            
            <p><strong>常用选项：</strong></p>
            <ul>
                <li><strong>passwd</strong> - 修改当前用户密码</li>
                <li><strong>passwd 用户名</strong> - 修改指定用户密码（需要 root）</li>
                <li><strong>passwd -l 用户名</strong> - 锁定用户</li>
                <li><strong>passwd -u 用户名</strong> - 解锁用户</li>
                <li><strong>passwd -d 用户名</strong> - 删除密码（允许无密码登录）</li>
                <li><strong>passwd -e 用户名</strong> - 强制用户下次登录时修改密码</li>
            </ul>
            
            <p><strong>使用示例：</strong></p>
            <div style="background: rgba(0,0,0,0.3); padding: 10px; border-radius: 5px; font-family: monospace;">
                # 修改自己的密码<br>
                passwd<br><br>
                
                # root 修改其他用户密码<br>
                passwd john<br><br>
                
                # 锁定用户<br>
                passwd -l alice<br><br>
                
                # 强制下次登录修改密码<br>
                passwd -e bob
            </div>
            
            <div class="resource-box">
                <p><strong>🔒 安全建议：</strong></p>
                <p>使用强密码：至少8位，包含大小写字母、数字和特殊字符。</p>
            </div>
        `
    },

    'groupadd-command': {
        title: "groupadd 命令",
        content: `
            <p><strong>groupadd 命令：</strong></p>
            <p>创建新的用户组。</p>
            
            <p><strong>基本语法：</strong></p>
            <div style="background: rgba(0,0,0,0.3); padding: 10px; border-radius: 5px; font-family: monospace;">
                groupadd [选项] 组名
            </div>
            
            <p><strong>常用选项：</strong></p>
            <ul>
                <li><strong>groupadd 组名</strong> - 创建组（自动分配 GID）</li>
                <li><strong>groupadd -g GID 组名</strong> - 指定 GID</li>
                <li><strong>groupadd -r 组名</strong> - 创建系统组</li>
            </ul>
            
            <p><strong>使用示例：</strong></p>
            <div style="background: rgba(0,0,0,0.3); padding: 10px; border-radius: 5px; font-family: monospace;">
                # 创建组<br>
                groupadd developers<br><br>
                
                # 创建组并指定 GID<br>
                groupadd -g 2000 testers<br><br>
                
                # 创建系统组<br>
                groupadd -r nginx<br><br>
                
                # 验证组创建<br>
                grep developers /etc/group<br>
                getent group developers
            </div>
        `
    },

    'groupmod-command': {
        title: "groupmod 命令",
        content: `
            <p><strong>groupmod 命令：</strong></p>
            <p>修改组的属性。</p>
            
            <p><strong>基本语法：</strong></p>
            <div style="background: rgba(0,0,0,0.3); padding: 10px; border-radius: 5px; font-family: monospace;">
                groupmod [选项] 组名
            </div>
            
            <p><strong>常用选项：</strong></p>
            <ul>
                <li><strong>groupmod -n 新名称 旧名称</strong> - 修改组名</li>
                <li><strong>groupmod -g GID 组名</strong> - 修改 GID</li>
            </ul>
            
            <p><strong>使用示例：</strong></p>
            <div style="background: rgba(0,0,0,0.3); padding: 10px; border-radius: 5px; font-family: monospace;">
                # 修改组名<br>
                groupmod -n newgroup oldgroup<br><br>
                
                # 修改 GID<br>
                groupmod -g 3000 developers
            </div>
        `
    },

    'groupdel-command': {
        title: "groupdel 命令",
        content: `
            <p><strong>groupdel 命令：</strong></p>
            <p>删除用户组。</p>
            
            <p><strong>基本语法：</strong></p>
            <div style="background: rgba(0,0,0,0.3); padding: 10px; border-radius: 5px; font-family: monospace;">
                groupdel 组名
            </div>
            
            <p><strong>使用示例：</strong></p>
            <div style="background: rgba(0,0,0,0.3); padding: 10px; border-radius: 5px; font-family: monospace;">
                # 删除组<br>
                groupdel developers
            </div>
            
            <p><strong>限制：</strong></p>
            <ul>
                <li>不能删除用户的主组</li>
                <li>必须先删除或修改使用该组作为主组的用户</li>
            </ul>
            
            <div class="resource-box">
                <p><strong>⚠️ 注意：</strong></p>
                <p>删除组前确保没有用户将其作为主组。</p>
            </div>
        `
    },

    'id-command': {
        title: "id 命令",
        content: `
            <p><strong>id 命令：</strong></p>
            <p>显示用户和组的 ID 信息。</p>
            
            <p><strong>基本用法：</strong></p>
            <div style="background: rgba(0,0,0,0.3); padding: 10px; border-radius: 5px; font-family: monospace;">
                id [用户名]
            </div>
            
            <p><strong>使用示例：</strong></p>
            <div style="background: rgba(0,0,0,0.3); padding: 10px; border-radius: 5px; font-family: monospace;">
                # 查看当前用户信息<br>
                id<br>
                输出：uid=1000(john) gid=1000(john) groups=1000(john),27(sudo),999(docker)<br><br>
                
                # 查看指定用户<br>
                id alice<br><br>
                
                # 只显示 UID<br>
                id -u<br><br>
                
                # 只显示 GID<br>
                id -g<br><br>
                
                # 显示所有组 ID<br>
                id -G
            </div>
            
            <div class="resource-box">
                <p><strong>💡 用途：</strong></p>
                <p>快速查看用户所属的所有组，排查权限问题。</p>
            </div>
        `
    },

    'su-command': {
        title: "su 命令",
        content: `
            <p><strong>su 命令：</strong></p>
            <p>su（Switch User）切换到其他用户。</p>
            
            <p><strong>基本用法：</strong></p>
            <div style="background: rgba(0,0,0,0.3); padding: 10px; border-radius: 5px; font-family: monospace;">
                su [选项] [用户名]
            </div>
            
            <p><strong>常用方式：</strong></p>
            <ul>
                <li><strong>su</strong> - 切换到 root（不改变环境变量）</li>
                <li><strong>su -</strong> - 切换到 root（完整登录环境）</li>
                <li><strong>su 用户名</strong> - 切换到指定用户</li>
                <li><strong>su - 用户名</strong> - 切换并加载用户环境</li>
                <li><strong>su -c "命令" 用户名</strong> - 以指定用户执行命令</li>
            </ul>
            
            <p><strong>使用示例：</strong></p>
            <div style="background: rgba(0,0,0,0.3); padding: 10px; border-radius: 5px; font-family: monospace;">
                # 切换到 root<br>
                su -<br>
                Password: <span style="color: #888;">[输入 root 密码]</span><br><br>
                
                # 切换到其他用户<br>
                su - alice<br><br>
                
                # 以 root 执行单个命令<br>
                su -c "systemctl restart nginx" root<br><br>
                
                # 退出当前用户<br>
                exit
            </div>
            
            <div class="resource-box">
                <p><strong>💡 区别：</strong></p>
                <p>su 和 su - 的区别：后者会加载目标用户的完整环境变量。</p>
            </div>
        `
    },

    'sudo-command': {
        title: "sudo 命令",
        content: `
            <p><strong>sudo 命令：</strong></p>
            <p>sudo（SuperUser DO）以其他用户（通常是 root）权限执行命令。</p>
            
            <p><strong>基本用法：</strong></p>
            <div style="background: rgba(0,0,0,0.3); padding: 10px; border-radius: 5px; font-family: monospace;">
                sudo [选项] 命令
            </div>
            
            <p><strong>常用方式：</strong></p>
            <ul>
                <li><strong>sudo 命令</strong> - 以 root 权限执行命令</li>
                <li><strong>sudo -u 用户 命令</strong> - 以指定用户权限执行</li>
                <li><strong>sudo -i</strong> - 切换到 root 的登录 Shell</li>
                <li><strong>sudo -s</strong> - 切换到 root Shell</li>
                <li><strong>sudo -l</strong> - 列出当前用户可执行的 sudo 命令</li>
            </ul>
            
            <p><strong>使用示例：</strong></p>
            <div style="background: rgba(0,0,0,0.3); padding: 10px; border-radius: 5px; font-family: monospace;">
                # 以 root 权限安装软件<br>
                sudo apt install nginx<br><br>
                
                # 编辑系统文件<br>
                sudo nano /etc/hosts<br><br>
                
                # 以其他用户执行<br>
                sudo -u alice cat /home/alice/file.txt<br><br>
                
                # 查看 sudo 权限<br>
                sudo -l
            </div>
            
            <p><strong>sudo vs su：</strong></p>
            <ul>
                <li><strong>sudo</strong> - 执行单个命令，需要自己的密码，有日志记录</li>
                <li><strong>su</strong> - 切换用户，需要目标用户密码，完全切换</li>
            </ul>
            
            <div class="resource-box">
                <p><strong>🔒 安全：</strong></p>
                <p>sudo 更安全，因为不需要共享 root 密码，且有审计日志。</p>
            </div>
        `
    },

    'who-command': {
        title: "who 和 w 命令",
        content: `
            <p><strong>who 命令：</strong></p>
            <p>显示当前登录系统的用户。</p>
            
            <p><strong>基本用法：</strong></p>
            <div style="background: rgba(0,0,0,0.3); padding: 10px; border-radius: 5px; font-family: monospace;">
                who<br>
                输出：john  pts/0  2024-03-30 10:30 (192.168.1.100)<br>
                     alice pts/1  2024-03-30 11:00 (192.168.1.101)
            </div>
            
            <p><strong>w 命令：</strong></p>
            <p>显示更详细的用户信息，包括正在做什么。</p>
            <div style="background: rgba(0,0,0,0.3); padding: 10px; border-radius: 5px; font-family: monospace;">
                w<br>
                输出：显示用户、登录时间、空闲时间、正在执行的命令等
            </div>
            
            <p><strong>其他相关命令：</strong></p>
            <ul>
                <li><strong>whoami</strong> - 显示当前用户名</li>
                <li><strong>users</strong> - 简单列出登录用户</li>
                <li><strong>last</strong> - 显示用户登录历史</li>
            </ul>
        `
    },

    'chage-command': {
        title: "chage 命令",
        content: `
            <p><strong>chage 命令：</strong></p>
            <p>管理用户密码过期信息。</p>
            
            <p><strong>基本用法：</strong></p>
            <div style="background: rgba(0,0,0,0.3); padding: 10px; border-radius: 5px; font-family: monospace;">
                chage [选项] 用户名
            </div>
            
            <p><strong>常用选项：</strong></p>
            <ul>
                <li><strong>chage -l 用户名</strong> - 查看密码过期信息</li>
                <li><strong>chage -M 天数 用户名</strong> - 设置密码最大有效期</li>
                <li><strong>chage -m 天数 用户名</strong> - 设置密码最小修改间隔</li>
                <li><strong>chage -W 天数 用户名</strong> - 设置密码过期警告天数</li>
                <li><strong>chage -E 日期 用户名</strong> - 设置账户过期日期</li>
            </ul>
            
            <p><strong>使用示例：</strong></p>
            <div style="background: rgba(0,0,0,0.3); padding: 10px; border-radius: 5px; font-family: monospace;">
                # 查看密码信息<br>
                chage -l john<br><br>
                
                # 设置密码90天后过期<br>
                chage -M 90 john<br><br>
                
                # 设置账户过期日期<br>
                chage -E 2024-12-31 john<br><br>
                
                # 强制下次登录修改密码<br>
                chage -d 0 john
            </div>
        `
    }
};

// 导出数据库
if (typeof module !== 'undefined' && module.exports) {
    module.exports = infoDatabase;
}
