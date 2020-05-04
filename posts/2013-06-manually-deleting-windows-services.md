---
date: 2013-06-26
title: 手动删除Windows上的服务程序
tags: [Windows]
category: Tech
---

好多软件在卸载的时候不会卸载自己安装的服务程序，而且不知道什么时候还会被继续装上，前些天莫名其妙被装上风行就是这情况。

我先用`iobit unistaller`把它卸载了，最后弄完发现系统进程里面竟然还有风行的服务程序，我打开进程目录一看，甚至连安装包都还在那个目录下面，而且这还是一个相当庞大的目录！

二话不说，先把服务程序和安装程序都给加到 HIPS 的 Block List 中去，总之再也不想见到它，接下来就是删除这个风行制造的目录。

之后还要在注册表中删除那个服务程序的键，否则的话你一直都会在系统的服务列表里面看到它。

在注册表`LOCAL_MACHINE\SYSTEM\CurrentControlSet\Services`中找到你要删除的服务程序，直接删掉即可。