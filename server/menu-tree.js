const menus = [
  {
    id: "1175052218931981021",
    parentId: 0,
    name: "首页",
    menuKey: "",
    url: "/",
    level: 1,
    sort: 1,
    menuChannelType: 1,
    children: [],
  },
  {
    id: "1275052218931982971",
    parentId: 0,
    name: "服务商",
    menuKey: null,
    url: null,
    level: 1,
    sort: 2,
    menuChannelType: 1,
    children: [
      {
        id: "1175052218931981038",
        parentId: "1275052218931982971",
        name: "服务商管理",
        menuKey: "",
        url: "",
        level: 2,
        sort: 1,
        menuChannelType: 1,
        children: [
          {
            id: "1175052218931981039",
            parentId: "1175052218931981038",
            name: "服务商列表",
            menuKey: "",
            url: "/service/ServiceList",
            level: 3,
            sort: 1,
            menuChannelType: 1,
            children: [
              {
                id: "1175052218931981159",
                parentId: "1175052218931981039",
                name: "新增",
                menuKey: "service:service:add",
                url: "/service/ServiceEdit",
                level: 4,
                sort: 1,
                menuChannelType: 1,
                children: [],
              },
              {
                id: "1175052218931981160",
                parentId: "1175052218931981039",
                name: "编辑",
                menuKey: "service:service:edit",
                url: "/service/ServiceEdit",
                level: 4,
                sort: 2,
                menuChannelType: 1,
                children: [],
              },
              {
                id: "1175052218931981161",
                parentId: "1175052218931981039",
                name: "详情",
                menuKey: "service:service:detail",
                url: "/service/serviceDetail",
                level: 4,
                sort: 3,
                menuChannelType: 1,
                children: [],
              },
              {
                id: "1175052218931981162",
                parentId: "1175052218931981039",
                name: "续期",
                menuKey: "service:service:renewal",
                url: "",
                level: 4,
                sort: 4,
                menuChannelType: 1,
                children: [],
              },
              {
                id: "1175052218931981163",
                parentId: "1175052218931981039",
                name: "终止协议",
                menuKey: "service:service:agreement",
                url: "",
                level: 4,
                sort: 5,
                menuChannelType: 1,
                children: [],
              },
            ],
          },
          {
            id: "1175052218931981106",
            parentId: "1175052218931981038",
            name: "发票列表",
            menuKey: "",
            url: "/service/InvoiceList",
            level: 3,
            sort: 2,
            menuChannelType: 1,
            children: [],
          },
        ],
      },
    ],
  },
  {
    id: "1275052218931982995",
    parentId: 0,
    name: "景区",
    menuKey: "",
    url: "",
    level: 1,
    sort: 3,
    menuChannelType: 1,
    children: [
      {
        id: "1175052218931981109",
        parentId: "1275052218931982995",
        name: "景区管理",
        menuKey: "",
        url: "",
        level: 2,
        sort: 1,
        menuChannelType: 1,
        children: [
          {
            id: "1175052218931981110",
            parentId: "1175052218931981109",
            name: "景区",
            menuKey: "",
            url: "/scenic/ScenicList",
            level: 3,
            sort: 1,
            menuChannelType: 1,
            children: [
              {
                id: "1175052218931981175",
                parentId: "1175052218931981110",
                name: "详情",
                menuKey: "scenic:detail",
                url: "/scenic/ScenicDetail",
                level: 4,
                sort: 1,
                menuChannelType: 1,
                children: [],
              },
              {
                id: "1175052218931981176",
                parentId: "1175052218931981110",
                name: "修改服务商",
                menuKey: "scenic:edit",
                url: "",
                level: 4,
                sort: 2,
                menuChannelType: 1,
                children: [],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: "1275052218931982981",
    parentId: 0,
    name: "产品",
    menuKey: null,
    url: null,
    level: 1,
    sort: 4,
    menuChannelType: 1,
    children: [
      {
        id: "1175052218931981013",
        parentId: "1275052218931982981",
        name: "产品管理",
        menuKey: "",
        url: "",
        level: 2,
        sort: 1,
        menuChannelType: 1,
        children: [
          {
            id: "1175052218931981014",
            parentId: "1175052218931981013",
            name: "硬件产品",
            menuKey: "",
            url: "/product/HardwareList",
            level: 3,
            sort: 1,
            menuChannelType: 1,
            children: [
              {
                id: "1175052218931981164",
                parentId: "1175052218931981014",
                name: "新增",
                menuKey: "product:hardware:add",
                url: "/product/HardwareEdit",
                level: 4,
                sort: 1,
                menuChannelType: 1,
                children: [],
              },
              {
                id: "1175052218931981165",
                parentId: "1175052218931981014",
                name: "编辑",
                menuKey: "product:hardware:edit",
                url: "/product/HardwareEdit",
                level: 4,
                sort: 2,
                menuChannelType: 1,
                children: [],
              },
              {
                id: "1175052218931981166",
                parentId: "1175052218931981014",
                name: "下架",
                menuKey: "product:hardware:lower",
                url: "",
                level: 4,
                sort: 3,
                menuChannelType: 1,
                children: [],
              },
              {
                id: "1175052218931981167",
                parentId: "1175052218931981014",
                name: "详情",
                menuKey: "product:hardware:detail",
                url: "/product/HardwareDetail",
                level: 4,
                sort: 4,
                menuChannelType: 1,
                children: [],
              },
            ],
          },
          {
            id: "1175052218931981015",
            parentId: "1175052218931981013",
            name: "软件产品",
            menuKey: "",
            url: "/product/SoftwareList",
            level: 3,
            sort: 2,
            menuChannelType: 1,
            children: [
              {
                id: "1175052218931981168",
                parentId: "1175052218931981015",
                name: "新增",
                menuKey: "product:software:add",
                url: "/product/SoftwareEdit",
                level: 4,
                sort: 1,
                menuChannelType: 1,
                children: [],
              },
              {
                id: "1175052218931981169",
                parentId: "1175052218931981015",
                name: "编辑",
                menuKey: "product:software:edit",
                url: "/product/SoftwareEdit",
                level: 4,
                sort: 2,
                menuChannelType: 1,
                children: [],
              },
              {
                id: "1175052218931981170",
                parentId: "1175052218931981015",
                name: "下级",
                menuKey: "product:software:lower",
                url: "",
                level: 4,
                sort: 3,
                menuChannelType: 1,
                children: [],
              },
              {
                id: "1175052218931981171",
                parentId: "1175052218931981015",
                name: "详情",
                menuKey: "product:software:detail",
                url: "/product/SoftwareDetail",
                level: 4,
                sort: 4,
                menuChannelType: 1,
                children: [],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: "1275052218931982983",
    parentId: 0,
    name: "订单",
    menuKey: null,
    url: null,
    level: 1,
    sort: 5,
    menuChannelType: 1,
    children: [
      {
        id: "1275052218931982997",
        parentId: "1275052218931982983",
        name: "订单管理",
        menuKey: "",
        url: "",
        level: 2,
        sort: 1,
        menuChannelType: 1,
        children: [
          {
            id: "1175052218931981012",
            parentId: "1275052218931982997",
            name: "订单列表",
            menuKey: "",
            url: "/order/OrderList",
            level: 3,
            sort: 1,
            menuChannelType: 1,
            children: [
              {
                id: "1175052218931981172",
                parentId: "1175052218931981012",
                name: "详情",
                menuKey: "order:order:detail",
                url: "/order/OrderDetail",
                level: 4,
                sort: 1,
                menuChannelType: 1,
                children: [],
              },
              {
                id: "1175052218931981173",
                parentId: "1175052218931981012",
                name: "调整",
                menuKey: "order:order:adjust",
                url: "/order/OrderAdjust",
                level: 4,
                sort: 2,
                menuChannelType: 1,
                children: [],
              },
            ],
          },
          {
            id: "1175052218931981174",
            parentId: "1275052218931982997",
            name: "订单发货",
            menuKey: "order:order:send",
            url: "/order/OrderSend",
            level: 3,
            sort: 3,
            menuChannelType: 1,
            children: [],
          },
        ],
      },
    ],
  },
  {
    id: "1275052218931982996",
    parentId: 0,
    name: "设置",
    menuKey: "",
    url: "",
    level: 1,
    sort: 6,
    menuChannelType: 1,
    children: [
      {
        id: "1275052218931982998",
        parentId: "1275052218931982996",
        name: "角色管理",
        menuKey: "",
        url: "",
        level: 2,
        sort: 1,
        menuChannelType: 1,
        children: [
          {
            id: "1175052218931981010",
            parentId: "1275052218931982998",
            name: "角色列表",
            menuKey: "",
            url: "/setting/role/RoleList",
            level: 3,
            sort: 1,
            menuChannelType: 1,
            children: [
              {
                id: "1175052218931981045",
                parentId: "1175052218931981010",
                name: "新增",
                menuKey: "setting:role:add",
                url: "/setting/role/RoleEdit",
                level: 4,
                sort: 1,
                menuChannelType: 1,
                children: [],
              },
              {
                id: "1175052218931981157",
                parentId: "1175052218931981010",
                name: "编辑",
                menuKey: "setting:role:edit",
                url: "/setting/role/RoleEdit",
                level: 4,
                sort: 2,
                menuChannelType: 1,
                children: [],
              },
              {
                id: "1175052218931981158",
                parentId: "1175052218931981010",
                name: "删除",
                menuKey: "setting:role:delete",
                url: "",
                level: 4,
                sort: 3,
                menuChannelType: 1,
                children: [],
              },
            ],
          },
        ],
      },
      {
        id: "1275052218931982999",
        parentId: "1275052218931982996",
        name: "用户权限",
        menuKey: "",
        url: "",
        level: 2,
        sort: 2,
        menuChannelType: 1,
        children: [
          {
            id: "1175052218931981011",
            parentId: "1275052218931982999",
            name: "用户列表",
            menuKey: "",
            url: "/setting/user/UserList",
            level: 3,
            sort: 1,
            menuChannelType: 1,
            children: [
              {
                id: "1175052218931981177",
                parentId: "1175052218931981011",
                name: "新增",
                menuKey: "setting:user:add",
                url: "/setting/user/UserEdit",
                level: 4,
                sort: 1,
                menuChannelType: 1,
                children: [],
              },
              {
                id: "1175052218931981178",
                parentId: "1175052218931981011",
                name: "编辑",
                menuKey: "setting:user:edit",
                url: "/setting/user/UserEdit",
                level: 4,
                sort: 2,
                menuChannelType: 1,
                children: [],
              },
              {
                id: "1175052218931981179",
                parentId: "1175052218931981011",
                name: "启用",
                menuKey: "setting:user:enable",
                url: "",
                level: 4,
                sort: 3,
                menuChannelType: 1,
                children: [],
              },
              {
                id: "1175052218931981180",
                parentId: "1175052218931981011",
                name: "禁用",
                menuKey: "setting:user:disable",
                url: "",
                level: 4,
                sort: 4,
                menuChannelType: 1,
                children: [],
              },
            ],
          },
        ],
      },
      {
        id: "1175052218931981000",
        parentId: "1275052218931982996",
        name: "菜单管理",
        menuKey: "",
        url: "",
        level: 2,
        sort: 3,
        menuChannelType: 1,
        children: [
          {
            id: "1175052218931981009",
            parentId: "1175052218931981000",
            name: "菜单列表",
            menuKey: "",
            url: "/setting/menu/MenuList",
            level: 3,
            sort: 1,
            menuChannelType: 1,
            children: [
              {
                id: "1175052218931981154",
                parentId: "1175052218931981009",
                name: "新增一级菜单",
                menuKey: "setting:menu:newlevel",
                url: "",
                level: 4,
                sort: 1,
                menuChannelType: 1,
                children: [],
              },
              {
                id: "1175052218931981181",
                parentId: "1175052218931981009",
                name: "新增下级菜单",
                menuKey: "setting:menu:newsubordinate",
                url: "",
                level: 4,
                sort: 2,
                menuChannelType: 1,
                children: [],
              },
              {
                id: "1175052218931981182",
                parentId: "1175052218931981009",
                name: "编辑",
                menuKey: "setting:menu:edit",
                url: "",
                level: 4,
                sort: 3,
                menuChannelType: 1,
                children: [],
              },
              {
                id: "1175052218931981183",
                parentId: "1175052218931981009",
                name: "删除",
                menuKey: "setting:menu:delete",
                url: "",
                level: 4,
                sort: 4,
                menuChannelType: 1,
                children: [],
              },
            ],
          },
        ],
      },
      {
        id: "1175052218931981001",
        parentId: "1275052218931982996",
        name: "产品权限",
        menuKey: "",
        url: "",
        level: 2,
        sort: 4,
        menuChannelType: 1,
        children: [
          {
            id: "1175052218931981074",
            parentId: "1175052218931981001",
            name: "产品列表",
            menuKey: "",
            url: "/setting/product/ProductList",
            level: 3,
            sort: 1,
            menuChannelType: 1,
            children: [
              {
                id: "1175052218931981184",
                parentId: "1175052218931981074",
                name: "产品权限授权",
                menuKey: "setting:product:menutree",
                url: "/setting/product/ProductMenuTree",
                level: 4,
                sort: 1,
                menuChannelType: 1,
                children: [],
              },
            ],
          },
          {
            id: "1175052218931981075",
            parentId: "1175052218931981001",
            name: "试用管理",
            menuKey: "",
            url: "/setting/product/ProductTrial",
            level: 3,
            sort: 2,
            menuChannelType: 1,
            children: [
              {
                id: "1175052218931981185",
                parentId: "1175052218931981075",
                name: "保存",
                menuKey: "setting:product:save",
                url: "",
                level: 4,
                sort: 1,
                menuChannelType: 1,
                children: [],
              },
            ],
          },
        ],
      },
      {
        id: "1175052218931981002",
        parentId: "1275052218931982996",
        name: "支付管理",
        menuKey: "",
        url: "",
        level: 2,
        sort: 5,
        menuChannelType: 1,
        children: [
          {
            id: "1175052218931981035",
            parentId: "1175052218931981002",
            name: "支付通道",
            menuKey: "",
            url: "/setting/pay/PayChannelList",
            level: 3,
            sort: 1,
            menuChannelType: 1,
            children: [
              {
                id: "1175052218931981186",
                parentId: "1175052218931981035",
                name: "新增",
                menuKey: "setting:pay:add",
                url: "/setting/pay/PayChannelEdit",
                level: 4,
                sort: 1,
                menuChannelType: 1,
                children: [],
              },
              {
                id: "1175052218931981187",
                parentId: "1175052218931981035",
                name: "编辑",
                menuKey: "setting:pay:edit",
                url: "/setting/pay/PayChannelEdit",
                level: 4,
                sort: 2,
                menuChannelType: 1,
                children: [],
              },
            ],
          },
          {
            id: "1175052218931981046",
            parentId: "1175052218931981002",
            name: "支付授权",
            menuKey: "",
            url: "/setting/pay/PayAuthList",
            level: 3,
            sort: 2,
            menuChannelType: 1,
            children: [
              {
                id: "1175052218931981188",
                parentId: "1175052218931981046",
                name: "授权",
                menuKey: "setting:pay:payauth",
                url: "/setting/pay/PayAuthEdit",
                level: 4,
                sort: 1,
                menuChannelType: 1,
                children: [],
              },
              {
                id: "1175052218931981189",
                parentId: "1175052218931981046",
                name: "批量授权",
                menuKey: "setting:pay:payauthedit",
                url: "/setting/pay/PayAuthEdit",
                level: 4,
                sort: 2,
                menuChannelType: 1,
                children: [],
              },
            ],
          },
        ],
      },
      {
        id: "1374574098232950785",
        parentId: "1275052218931982996",
        name: "动态表单管理",
        menuKey: "",
        url: "",
        level: 2,
        sort: 5,
        menuChannelType: 1,
        children: [
          {
            id: "1374574199068213250",
            parentId: "1374574098232950785",
            name: "模板列表",
            menuKey: "",
            url: "/setting/CustomList",
            level: 3,
            sort: 1,
            menuChannelType: 1,
            children: [],
          },
        ],
      },
      {
        id: "1175052218931981003",
        parentId: "1275052218931982996",
        name: "短信管理",
        menuKey: "",
        url: "",
        level: 2,
        sort: 6,
        menuChannelType: 1,
        children: [
          {
            id: "1175052218931981016",
            parentId: "1175052218931981003",
            name: "短信通道",
            menuKey: "",
            url: "/setting/sms/SmsChannelList",
            level: 3,
            sort: 1,
            menuChannelType: 1,
            children: [
              {
                id: "1175052218931981190",
                parentId: "1175052218931981016",
                name: "新增",
                menuKey: "setting:smsmanagement:add",
                url: "/setting/sms/SmsChannelEdit",
                level: 4,
                sort: 1,
                menuChannelType: 1,
                children: [],
              },
              {
                id: "1175052218931981191",
                parentId: "1175052218931981016",
                name: "编辑",
                menuKey: "setting:smsmanagement:edit",
                url: "/setting/sms/SmsChannelEdit",
                level: 4,
                sort: 2,
                menuChannelType: 1,
                children: [],
              },
              {
                id: "1175052218931981192",
                parentId: "1175052218931981016",
                name: "停用",
                menuKey: "setting:smsmanagement:stop",
                url: "",
                level: 4,
                sort: 3,
                menuChannelType: 1,
                children: [],
              },
              {
                id: "1175052218931981193",
                parentId: "1175052218931981016",
                name: "剩余短信条数",
                menuKey: "setting:smsmanagementsurplus",
                url: "",
                level: 4,
                sort: 4,
                menuChannelType: 1,
                children: [],
              },
            ],
          },
          {
            id: "1175052218931981018",
            parentId: "1175052218931981003",
            name: "短信套餐",
            menuKey: "",
            url: "/setting/sms/SmsPackageList",
            level: 3,
            sort: 2,
            menuChannelType: 1,
            children: [
              {
                id: "1175052218931981194",
                parentId: "1175052218931981018",
                name: "新增",
                menuKey: "setting:smspackage:add",
                url: "/setting/sms/SmsPackageEdit",
                level: 4,
                sort: 1,
                menuChannelType: 1,
                children: [],
              },
              {
                id: "1175052218931981195",
                parentId: "1175052218931981018",
                name: "编辑",
                menuKey: "setting:smspackage:edit",
                url: "/setting/sms/SmsPackageEdit",
                level: 4,
                sort: 2,
                menuChannelType: 1,
                children: [],
              },
            ],
          },
          {
            id: "1175052218931981019",
            parentId: "1175052218931981003",
            name: "子账户管理",
            menuKey: "",
            url: "/setting/sms/SubAccountList",
            level: 3,
            sort: 3,
            menuChannelType: 1,
            children: [
              {
                id: "1175052218931981196",
                parentId: "1175052218931981019",
                name: "绑定短信子账户",
                menuKey: "setting:subaccountbind:bind",
                url: "/setting/sms/SubAccountBind",
                level: 4,
                sort: 1,
                menuChannelType: 1,
                children: [],
              },
              {
                id: "1175052218931981197",
                parentId: "1175052218931981019",
                name: "新增总部账户",
                menuKey: "setting:subaccountbind:add",
                url: "/setting/sms/SubAccountAdd",
                level: 4,
                sort: 2,
                menuChannelType: 1,
                children: [],
              },
              {
                id: "1175052218931981198",
                parentId: "1175052218931981019",
                name: "编辑",
                menuKey: "setting:subaccountbind:edit",
                url: "/setting/sms/SubAccountEdit",
                level: 4,
                sort: 3,
                menuChannelType: 1,
                children: [],
              },
              {
                id: "1175052218931981199",
                parentId: "1175052218931981019",
                name: "停用",
                menuKey: "setting:subaccountbind:stop",
                url: "",
                level: 4,
                sort: 4,
                menuChannelType: 1,
                children: [],
              },
              {
                id: "1175052218931981200",
                parentId: "1175052218931981019",
                name: "手动充值",
                menuKey: "setting:subaccountbind:manual",
                url: "",
                level: 4,
                sort: 5,
                menuChannelType: 1,
                children: [],
              },
              {
                id: "1175052218931981201",
                parentId: "1175052218931981019",
                name: "充值记录",
                menuKey: "setting:subaccountbind:record",
                url: "",
                level: 4,
                sort: 6,
                menuChannelType: 1,
                children: [],
              },
              {
                id: "1175052218931981202",
                parentId: "1175052218931981019",
                name: "发送明细",
                menuKey: "setting:subaccountbind:sendout",
                url: "",
                level: 4,
                sort: 7,
                menuChannelType: 1,
                children: [],
              },
              {
                id: "1175052218931981203",
                parentId: "1175052218931981019",
                name: "发送统计",
                menuKey: "setting:subaccountbind:statistics",
                url: "",
                level: 4,
                sort: 8,
                menuChannelType: 1,
                children: [],
              },
            ],
          },
        ],
      },
    ],
  },
];

module.exports.menus = menus;
