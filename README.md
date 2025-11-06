自动编译AzerothCore-wotlk带玩家机器人。

Automatically compile AzerothCore-wotlk with player robots every day.

### Ubuntu 部署说明

安装依赖
  ``` sudo apt-get update && sudo apt-get install git cmake make gcc g++ clang \ ```
  ``` libmysqlclient-dev libssl-dev libbz2-dev libreadline-dev libncurses-dev \ ```
  ``` mysql-server libboost-all-dev ```
  
- 下载核心和数据库分别复制以下路径，如果没有文件夹，需要您手动创建。
    - 核心路径： ``` /home/runner/work/acore/acore/build/install/ ```
    - 数据库路径： ``` /home/runner/work/acore/acore/ ```
    
- 创建对应的数据库后，找到核心/etc/目录配置文件，修改数据库连接信息，启动核心将自动导入数据。
