define(['controllers/controllers', 'services/bank_service', 'services/contact_service', 'services/market_service', 'services/dept_service', 'services/customer_service'],
    function (controllers) {
        controllers
            .controller('bank_manageCtrl', [function () {

            }])
            //银行联系人总览
            .controller('bankContactCtrl', ['$scope', 'bankFactory', 'contactFactory', 'toaster','$compile', function ($scope, bankFactory, contactFactory, toaster, $compile) {
                $scope.banks;
                //获取左侧所有银行列表
                bankFactory.getAllBizBanks()
                    .success(function (banks) {
                        $scope.banks = banks;
                    })
                    .error(function (error) {
                        $scope.status = 'Unable to load banks: ' + error.message;
                    });
                //获取右侧所有联系人列表
                getContactPage();
                //点击银行获取联系人
                $scope.getBankContacts = function (bankId) {
                    getContactPage(bankId);
                };
                function getContactPage(bankId) {
                    var baseUrl = 'http://10.188.192.200:8000/contact',
                        urlParam = (bankId==null?'/all/page':('/bank/'+bankId+'/page'));
                    $scope.dtOptions = {
                        "bProcessing": true,
                        "bServerSide": true,
                        "bStateSave": true,
                        iDisplayLength: 2,
                        sAjaxSource: baseUrl+urlParam ,
                        sAjaxDataProp: 'aaData',
                        "sDom": "<'row'<'col-sm-6'l><'col-sm-6'f>r>t<'row'<'col-sm-6'i><'col-sm-6'p>>",
                        sPaginationType: "full_numbers",
                        "aoColumns":
                            [
                                { "mData": "contactId"},
                                { "mData": "contactName"},
                                { "mData": "contactMobilePhone" },
                                { "mData": "contactAddress" }
                            ],
                        "fnServerData": function( sUrl, aoData, fnCallback, oSettings ) {
                            oSettings.jqXHR = $.ajax({
                                "url": sUrl,
                                beforeSend: function(xhr) {
                                    xhr.withCredentials = true;
                                },
                                "data": aoData,
                                "type": 'get',
                                "success": fnCallback,
                                "cache": false
                            });
                        },
                        "fnInitComplete":function(){
                            this.fnAdjustColumnSizing(true);
                        },
                        "fnCreatedRow":function(nRow, aData, iDataIndex){
                            //添加查看相关联系人按钮
                            $('td:eq(3)', nRow).html("<i class='fa fa-trash-o' title='查看相关联系人' ng-click='delContact("+aData.contactId+")' style='cursor: pointer'></i>");
                            //添加编辑按钮
                            $('td:eq(3)', nRow).html("<i class='fa fa-trash-o' title='删除' ng-click='delContact("+aData.contactId+")' style='cursor: pointer'></i>");
                            //添加删除按钮
                            $('td:eq(3)', nRow).html("<i class='fa fa-trash-o' title='删除' ng-click='delContact("+aData.contactId+")' style='cursor: pointer'></i>");
                            //添加新增营销计划按钮
                            $('td:eq(3)', nRow).html("<i class='fa fa-trash-o' title='删除' ng-click='delContact("+aData.contactId+")' style='cursor: pointer'></i>");
                            $compile(nRow)($scope);//编译nRow并添加到$scope中使得ng-click能被angularjs识别
                        }
                    };


                }
//                //点击查看更多详情
//                $scope.getContactDetail = function (contactId) {
//                    console.log(123);
//                    contactFactory.getContact(contactId)
//                        .success(function (contacts) {
//                            //doSomeThing
//                        })
//                        .error(function (error) {
//                            $scope.status = 'Unable to contacts : ' + error.message;
//                        });
//                };
//                //查看相关联系人
//                $scope.getRelatedContacts = function (contactId) {
//                    contactFactory.getRelatedContacts(contactId)
//                        .success(function (contacts) {
//                            //doSomething
//                        })
//                        .error(function (error) {
//                            $scope.status = 'Unable to contacts : ' + error.message;
//                        });
//                };
//                //编辑联系人
//                $scope.editContact = function (contactId) {
//                    contactFactory.getContact(contactId)
//                        .success(function (contacts) {
//                            //doSomething
//                        })
//                        .error(function (error) {
//                            $scope.status = 'Unable to contacts : ' + error.message;
//                        });
//                };
                //删除联系人
                $scope.delContact = function (contactId) {
                    contactFactory.delContact(contactId)
                        .success(function (data) {
                            if (data.resultCode == 200) {
                                toaster.pop('success', "操作成功", "删除联系人成功", 3000);
                                $scope.status = "lianxiren delete succeed!";
                                var start = $scope.dataTable.fnSettings()._iDisplayStart;
                                var total = $scope.dataTable.fnSettings().fnRecordsDisplay();
                                //删除的数据为当前唯一一行
                                if((total-start)==1&&start>0){
                                        $scope.dataTable.fnPageChange( 'previous', true );
                                }else{
                                    $scope.dataTable.fnClearTable();
                                }
                            } else {
                                toaster.pop('success', "操作失败", "未知异常" + data.resultCode, 3000);
                                $scope.status = "lianxiren delete unknow error!";
                            }
                        })
                        .error(function (error) {
                            $scope.status = 'Unable to contacts : ' + error.message;
                        });
                };
            }])
            .controller('bankAddCtrl', ['$scope', 'bankFactory', 'deptFactory', 'toaster', function ($scope, bankFactory, deptFactory, toaster) {
                $scope.bank;
                //获取所有银行类型
                bankFactory.getTypeBanks()
                    .success(function (bankTypes) {
                        $scope.bankTypes = bankTypes;
                    })
                    .error(function (error) {
                        $scope.status = 'Unable to load banks: ' + error.message;
                    });
                //获取所属银行类别
                bankFactory.getCatagoryBanks()
                    .success(function (bankCategories) {
                        $scope.bankCategories = bankCategories;
                    })
                    .error(function (error) {
                        $scope.status = 'Unable to load banks: ' + error.message;
                    });
                //获取关联主体
                bankFactory.getAllCorporationEntities()
                    .success(function (data) {
                        $scope.corporationEntities = data
                    })
                    .error(function (error) {
                        $scope.status = 'Unable to load banks: ' + error.message;
                    });
                //获取主管领导
                deptFactory.getAllLeader()
                    .success(function (data) {
                        $scope.leaders = data;
                    })
                    .error(function (error) {
                        $scope.status = 'Unable to load banks: ' + error.message;
                    });
                //获取主办银行经理
                deptFactory.getAllHostor()
                    .success(function (data) {
                        $scope.hostors = data;
                    })
                    .error(function (error) {
                        $scope.status = 'Unable to load banks: ' + error.message;
                    });
                //获取协办银行经理
                deptFactory.getAllAssister()
                    .success(function (data) {
                        $scope.assisters = data;
                    })
                    .error(function (error) {
                        $scope.status = 'Unable to load banks: ' + error.message;
                    });

                //所属银行类别下拉handle
                $scope.bankTypeHandle = function (bankCategoryId) {
                    $scope.sub1Banks = {};
                    $scope.sub2Banks = {};
                    $scope.sub3Banks = {};
                    $scope.sub4Banks = {};
                    if (bankCategoryId != null) {
                        bankFactory.getListParentBanks(bankCategoryId)
                            .success(function (banks) {
                                $scope.sub1Banks = banks;
                            })
                            .error(function (error) {
                                $scope.status = 'Unable to contacts : ' + error.message;
                            });
                    }
                    $scope.bank.bankFullName = '';
                };
                //所属银行名称一级下拉handle
                $scope.sub1BankHandle = function (bank) {
                    $scope.sub2Banks = {};
                    $scope.sub3Banks = {};
                    $scope.sub4Banks = {};
                    if (bank != null) {
                        bankFactory.getListSubBanks(bank.bankId)
                            .success(function (banks) {
                                $scope.sub2Banks = banks;
                            })
                            .error(function (error) {
                                $scope.status = 'Unable to contacts : ' + error.message;
                            });
                    }
                    $scope.bank.bankFullName = (bank==null?'':bank.bankFullName);
                };
                //所属银行名称二级下拉handle
                $scope.sub2BankHandle = function (bank) {
                    $scope.sub3Banks = {};
                    $scope.sub4Banks = {};
                    if (bank != null) {
                        bankFactory.getListSubBanks(bank.bankId)
                            .success(function (banks) {
                                $scope.sub3Banks = banks;
                                updateBankFullName();
                            })
                            .error(function (error) {
                                $scope.status = 'Unable to contacts : ' + error.message;
                            });
                    }
                    $scope.bank.bankFullName = $scope.sub1Bank.bankFullName+(bank==null?'':bank.bankFullName);
                };
                //所属银行名称三级下拉handle
                $scope.sub3BankHandle = function (bank) {
                    $scope.sub4Banks = {};
                    if (bank != null) {
                        bankFactory.getListSubBanks(bank.bankId)
                            .success(function (banks) {
                                $scope.sub4Banks = banks;
                                updateBankFullName();
                            })
                            .error(function (error) {
                                $scope.status = 'Unable to contacts : ' + error.message;
                            });
                    }
                    $scope.bank.bankFullName = $scope.sub1Bank.bankFullName+$scope.sub2Bank.bankFullName+(bank==null?'':bank.bankFullName);
                };
                //所属银行名称四级下拉handle
                $scope.sub4BankHandle = function (bank) {
                    $scope.bank.bankFullName = $scope.sub1Bank.bankFullName+$scope.sub2Bank.bankFullName+$scope.sub3Bank.bankFullName+(bank==null?'':bank.bankFullName);
                };
                //新增银行按钮
                $scope.addBank = function () {
                    var data = {
                        bank: $scope.bank,
                        corporationEntityIds: $scope.corporationEntityIds,
                        masterLeaderId:$scope.masterLeaderId,
                        customerHostId:$scope.customerHostId,
                        customerAssistIds:$scope.customerAssistIds
                    };
                    bankFactory.insertBank(data)
                        .success(function (message) {
                            console.log(message);
                            if (message.resultCode == 200) {
                                toaster.pop('success', "操作成功", "添加银行成功", 3000);
                            }
                            $scope.status = "resource updateResource succeed!";
                        })
                        .error(function (error) {
                            $scope.status = 'Unable to contacts : ' + error.message;
                        });
                };
            }])
            .controller('contactAddCtrl', ['$scope', 'contactFactory', 'toaster', function ($scope, contactFactory, toaster) {
                $scope.contact;
                //获取所有银行职位分行类别
                contactFactory.getAllPositionBankType()
                    .success(function (data) {
                        $scope.positionBankTypes = data;
                    })
                    .error(function (error) {
                        $scope.status = 'Unable to load position : ' + error.message;
                    });
                //添加联系人按钮
                $scope.addContact = function () {
                    var data = {
                        contact: $scope.contact,
                        bankContactPosition: $scope.bankContactPosition,
                        positionBankType: $scope.positionBankType,
                        contactMoreInfoText: $scope.contactMoreInfoText
                    };
                    contactFactory.addBankContact(22, data)
                        .success(function (message) {
                            console.log(message);
                            if (message.resultCode == 200) {
                                toaster.pop('success', "操作成功", "添加联系人成功", 3000);
                            }
                            $scope.status = "resource updateResource succeed!";
                        })
                        .error(function (error) {
                            $scope.status = 'Unable to insert contact : ' + error.message;
                        });
                };
                //职位联动（根据银行职位分行类别得到银行职位）
                $scope.selectPositionHandle = function (positionBankTypeId) {
                    contactFactory.getAllBankContactPositionByPositionBankTypeId(positionBankTypeId)
                        .success(function (data) {
                            $scope.bankPositions = data;
                        })
                        .error(function (error) {
                            $scope.status = 'Unable to insert contact : ' + error.message;
                        });
                };
            }])
            .controller('contactRelateAddCtrl', ['$scope', 'contactFactory', 'toaster', function ($scope, contactFactory, toaster) {
                $scope.contact;
                //获取所有银行职位分行类别
                contactFactory.getAllPositionBankType()
                    .success(function (data) {
                        $scope.positionBankTypes = data;
                    })
                    .error(function (error) {
                        $scope.status = 'Unable to load position : ' + error.message;
                    });
                //添加相关联系人按钮
                $scope.addContact = function () {
                    var data = {
                        contact: $scope.contact,
                        bankContactPosition: {positionBankTypeId: $scope.positionBankTypeId},
                        positionBankType: {bankPositionId: $scope.bankPositionId},
                        textStore: {smallTextContent: $scope.smallTextContent}
                    };
                    contactFactory.addContact(data)
                        .success(function (message) {
                            console.log(message);
                            if (message.resultCode == 200) {
                                toaster.pop('success', "操作成功", "添加相关联系人成功", 3000);
                            }
                            $scope.status = "resource updateResource succeed!";
                        })
                        .error(function (error) {
                            $scope.status = 'Unable to insert contact : ' + error.message;
                        });
                };
                //职位联动（根据银行职位分行类别得到银行职位）
                $scope.selectPositionHandle = function (positionBankTypeId) {
                    contactFactory.getAllBankContactPositionByPositionBankTypeId(positionBankTypeId)
                        .success(function (data) {
                            $scope.bankPositions = data;
                        })
                        .error(function (error) {
                            $scope.status = 'Unable to insert contact : ' + error.message;
                        });
                };
            }])
            .controller('marketAddCtrl', ['$scope', 'deptFactory', 'bankFactory', 'contactFactory', 'marketFactory', 'customerFactory', 'toaster', function ($scope, deptFactory, bankFactory, contactFactory, marketFactory, customerFactory, toaster) {
                //获取所有营销银行
                bankFactory.getAllBizBanks()
                    .success(function (banks) {
                        $scope.banks = banks;
                    })
                    .error(function (error) {
                        $scope.status = 'Unable to load banks : ' + error.message;
                    });

                //获取我司代表
                deptFactory.listDepartmentPositionsEmployees()
                    .success(function (data) {
                        $scope.employees = data;
                    })
                    .error(function (error) {
                        $scope.status = 'Unable to load banks : ' + error.message;
                    });
                //获取所有营销主体
                bankFactory.getAllCorporationEntities()
                    .success(function (data) {
                        $scope.corporationEntities = data;
                    })
                    .error(function (error) {
                        $scope.status = 'Unable to load banks : ' + error.message;
                    });
                //获取所有营销客户
                customerFactory.getAllCustomers()
                    .success(function (data) {
                        $scope.customers = data;
                    })
                    .error(function (error) {
                        $scope.status = 'Unable to load banks : ' + error.message;
                    });

                //营销银行下拉联动handle
                $scope.getBankContacts = function (bankId) {
                    contactFactory.getBankContacts(bankId)
                        .success(function (data) {
                            $scope.contacts = data;
                        })
                        .error(function (error) {
                            $scope.status = 'Unable to contacts : ' + error.message;
                        });
                };
                //新增营销计划按钮
                $scope.addMarketPlan = function () {
                    var data = {
                        marketingPlan: $scope.marketingPlan,
                        contentText: $scope.contentText,
                        conclusionText: $scope.conclusionText,
                        contact: $scope.contact,
                        customer: $scope.customer,
                        bank: $scope.bank,
                        corporationEntity: $scope.corporationEntity,
                        employee: $scope.employee
                    };
                    marketFactory.addMarketingPlanAll(data)
                        .success(function (message) {
                            console.log(message);
                            if (message.resultCode == 200) {
                                toaster.pop('success', "操作成功", "添加营销计划成功", 3000);
                            }
                            $scope.status = "resource updateResource succeed!";
                        })
                        .error(function (error) {
                            $scope.status = 'Unable to contacts : ' + error.message;
                        });
                };
            }]);
    });