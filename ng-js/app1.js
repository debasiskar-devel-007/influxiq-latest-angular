/**
 * Created by samsuj on 29/10/15.
 */


'use strict';

/* App Module */

var influx = angular.module('influx', ['ui.router','ngCookies','ui.bootstrap','angularValidator','ngFileUpload','ui.tinymce','ngclipboard','ngSanitize', 'ngCsv','color.picker','checklist-model']);

influx.run(['$rootScope', '$state',function($rootScope, $state){

    $rootScope.$on('$stateChangeStart',function(){
        $rootScope.stateIsLoading = true;
    });


    $rootScope.$on('$stateChangeSuccess',function(){
        $rootScope.stateIsLoading = false;
    });

}]);

influx.filter('startFrom', function () {
    return function (input, start) {
        if (input) {
            start = +start;
            return input.slice(start);
        }
        return [];
    };
});

influx.config(function($stateProvider, $urlRouterProvider,$locationProvider) {

// For any unmatched url, redirect to /state1
    $urlRouterProvider
        .otherwise("/index");

//
    // Now set up the states
    $stateProvider
        .state('index',{
            url:"/index",
            views: {

                'header': {
                    templateUrl: 'partials/header.html' ,
                    //controller: 'header'
                },
                'footer': {
                    templateUrl: 'partials/footer.html' ,
                    controller: 'footer'
                },
                'content': {
                    templateUrl: 'partials/home.html' ,
                    controller: 'index'
                },

            }
        })

        .state('web-platform',{
            url:"/products",
            views: {

                'header': {
                    templateUrl: 'partials/header.html' ,
                    //controller: 'header'
                },
                'footer': {
                    templateUrl: 'partials/footer.html' ,
                    controller: 'footer'
                },
                'content': {
                    templateUrl: 'partials/webplatform.html' ,
                    controller: 'webplatform'
                },

            }
        })

        .state('web-platform-details',{
            url:"/productdetails/:id",
            views: {

                'header': {
                    templateUrl: 'partials/header.html' ,
                    //controller: 'header'
                },
                'footer': {
                    templateUrl: 'partials/footer.html' ,
                    controller: 'footer'
                },
                'content': {
                    templateUrl: 'partials/webplatformdetails.html' ,
                    controller: 'webplatformdetils'
                },

            }
        })
        .state('business-modelling',{
            url:"/business-modelling",
            views: {

                'header': {
                    templateUrl: 'partials/header.html' ,
                    //controller: 'header'
                },
                'footer': {
                    templateUrl: 'partials/footer.html' ,
                    controller: 'footer'
                },
                'content': {
                    templateUrl: 'partials/businessmodelling.html' ,
                    controller: 'businessmodelling'
                },

            }
        })
        .state('core-competencies',{
            url:"/core-competencies",
            views: {

                'header': {
                    templateUrl: 'partials/header.html' ,
                    //controller: 'header'
                },
                'footer': {
                    templateUrl: 'partials/footer.html' ,
                    controller: 'footer'
                },
                'content': {
                    templateUrl: 'partials/corecompetenci.html' ,
                    controller: 'corecompetenci'
                },

            }
        })

        .state('web-design',{
            url:"/web-design",
            views: {

                'header': {
                    templateUrl: 'partials/header.html' ,
                    //controller: 'header'
                },
                'footer': {
                    templateUrl: 'partials/footer.html' ,
                    controller: 'footer'
                },
                'content': {
                    templateUrl: 'partials/design.html' ,
                    controller: 'design'
                },

            }
        })
        .state('content-writing',{
            url:"/content-writing",
            views: {

                'header': {
                    templateUrl: 'partials/header.html' ,
                    //controller: 'header'
                },
                'footer': {
                    templateUrl: 'partials/footer.html' ,
                    controller: 'footer'
                },
                'content': {
                    templateUrl: 'partials/content.html' ,
                    controller: 'content'
                },

            }
        })

        .state('custom-engineering',{
            url:"/custom-engineering",
            views: {

                'header': {
                    templateUrl: 'partials/header.html' ,
                    //controller: 'header'
                },
                'footer': {
                    templateUrl: 'partials/footer.html' ,
                    controller: 'footer'
                },
                'content': {
                    templateUrl: 'partials/customengineering.html' ,
                    controller: 'customengineering'
                },

            }
        })

        .state('presence-developement',{
            url:"/presence-developement",
            views: {

                'header': {
                    templateUrl: 'partials/header.html' ,
                    //controller: 'header'
                },
                'footer': {
                    templateUrl: 'partials/footer.html' ,
                    controller: 'footer'
                },
                'content': {
                    templateUrl: 'partials/presencedevelopement.html' ,
                    controller: 'presencedevelopement'
                },

            }
        })

        .state('contract',{
            url:"/contract",
            views: {

                'header': {
                    //templateUrl: 'partials/header.html' ,
                    //controller: 'header'
                },
                'footer': {
                   // templateUrl: 'partials/footer.html' ,
                    controller: 'footer'
                },
                'content': {
                    templateUrl: 'partials/fontcontract.html' ,
                    controller: 'contract'
                },

            }
        })

        .state('contract-page',{
            url:"/contract-page/:id",
            views: {

                'header': {
                    //templateUrl: 'partials/header.html' ,
                    //controller: 'header'
                },
                'footer': {
                   // templateUrl: 'partials/footer.html' ,
                    controller: 'footer'
                },
                'content': {
                    templateUrl: 'partials/fontmailcontract.html' ,
                    controller: 'mailcontract'
                },

            }
        })


        .state('login',
            {
                url:"/login",
                views: {

                    /*              'header': {
                     templateUrl: 'partials/admin_header.html' ,
                     controller: 'header'
                     },
                     'footer': {
                     templateUrl: 'partials/admin_footer.html' ,
                     //controller: 'footer'
                     },
                     */                'content': {
                        templateUrl: 'partials/login.html' ,
                        controller: 'login'
                    },

                }
                /*           onEnter: ['$stateParams', '$state', '$uibModal',
                 function($stateParams, $state, $uibModal) {
                 var size;
                 $uibModal.open({
                 animation: true,
                 templateUrl: 'myModalContent.html',
                 controller: 'ModalInstanceCtrl',
                 size: size,

                 });
                 }]
                 */        }
        )

        .state('forgot-password',
            {
                url:"/forgot-password" ,
                views:{
                    'content':{
                        templateUrl: 'partials/forgot_password.html',
                        controller:  'forgotpassword'
                    }
                }
            }
        )

        .state('forgot-password-check',
            {
                url:"/forgot-password-check" ,
                views:{
                    'content':{
                        templateUrl: 'partials/forgot_password_check.html',
                        controller:  'forgotpasswordcheck'
                    }
                }
            }
        )

        .state('change-password',
            {
                url:"/change-password" ,
                views:{
                    'content':{
                        templateUrl: 'partials/change_password.html',
                        controller: 'change_password'
                    }
                }
            }
        )




        .state('dashboard',{
            url:"/dashboard",
            views: {

                'admin_top_menu': {
                    templateUrl: 'partials/admin_top_menu.html' ,
                    controller: 'admin_header'
                },

                'admin_left': {
                    templateUrl: 'partials/admin_left.html' ,
                      controller: 'admin_header'
                },
                'admin_footer': {
                    templateUrl: 'partials/admin_footer.html' ,
                },
                'admin_content': {
                    templateUrl: 'partials/dashboard.html' ,
                    // controller: 'dashboard'
                },

            }
        }
    )
        .state('add-user',{
            url:"/add-user",
            views:{
              'admin_top_menu': {
                  templateUrl: 'partials/admin_top_menu.html',
                  controller:'admin_header'
                    },
                  'admin_left':{
                      templateUrl:'partials/admin_left.html',
                      controller:'admin_header'
                  },
                'admin_footer':{
                    templateUrl:'partials/admin_footer.html',
                },

             'admin_content':{
                 templateUrl:'partials/add_user.html',
                 controller:'adduser'
             },

            }

            }

        )
        .state('edit-user',{
                url:"/edit-user/:userId",
                views:{
                    'admin_top_menu': {
                        templateUrl: 'partials/admin_top_menu.html',
                        controller:'admin_header'
                    },
                    'admin_left':{
                        templateUrl:'partials/admin_left.html',
                        controller:'admin_header'
                    },
                    'admin_footer':{
                        templateUrl:'partials/admin_footer.html',
                    },

                    'admin_content':{
                        templateUrl:'partials/edit_user.html',
                        controller:'edituser'
                    },

                }

            }

        )

        .state('user-list', {
                url: "/user-list",
            views:{
                'admin_top_menu': {
                    templateUrl: 'partials/admin_top_menu.html',
                    controller:'admin_header'
                },
                'admin_left':{
                    templateUrl:'partials/admin_left.html',
                    controller:'admin_header'
                },
                'admin_footer':{
                    templateUrl:'partials/admin_footer.html',
                },

                'admin_content':{
                    templateUrl:'partials/user_list.html',
                    controller:'userlist'
                },

            }

            } )

        .state('profile',{
                url:"/profile",
                views:{
                    'admin_top_menu': {
                        templateUrl: 'partials/admin_top_menu.html',
                        controller:'admin_header'
                    },
                    'admin_left':{
                        templateUrl:'partials/admin_left.html',
                        controller:'admin_header'
                    },
                    'admin_footer':{
                        templateUrl:'partials/admin_footer.html',
                    },

                    'admin_content':{
                        templateUrl:'partials/user_profile.html',
                        controller:'userprofile'
                    },

                }

            }

        )
        .state('edit-profile',{
                url:"/edit-profile",
                views:{
                    'admin_top_menu': {
                        templateUrl: 'partials/admin_top_menu.html',
                        controller:'admin_header'
                    },
                    'admin_left':{
                        templateUrl:'partials/admin_left.html',
                        controller:'admin_header'
                    },
                    'admin_footer':{
                        templateUrl:'partials/admin_footer.html',
                    },

                    'admin_content':{
                        templateUrl:'partials/edit_user_profile.html',
                        controller:'edituserprofile'
                    },

                }

            }

        )
        .state('change-user-password',{
                url:"/change-user-password",
                views:{
                    'admin_top_menu': {
                        templateUrl: 'partials/admin_top_menu.html',
                        controller:'admin_header'
                    },
                    'admin_left':{
                        templateUrl:'partials/admin_left.html',
                        controller:'admin_header'
                    },
                    'admin_footer':{
                        templateUrl:'partials/admin_footer.html',
                    },

                    'admin_content':{
                        templateUrl:'partials/user_change_password.html',
                        controller:'userchangepassword'
                    },

                }

            }

        )



        .state('add-affiliate',{
                url:"/add-affilite",
                views:{
                    'admin_top_menu': {
                        templateUrl: 'partials/admin_top_menu.html',
                        controller:'admin_header'
                    },
                    'admin_left':{
                        templateUrl:'partials/admin_left.html',
                        controller:'admin_header'
                    },
                    'admin_footer':{
                        templateUrl:'partials/admin_footer.html',
                    },

                    'admin_content':{
                        templateUrl:'partials/add_affiliate.html',
                        controller:'addaffiliate'
                    },

                }

            }

        )
        .state('edit-affiliate',{
                url:"/edit-affiliate/:id",
                views:{
                    'admin_top_menu': {
                        templateUrl: 'partials/admin_top_menu.html',
                        controller:'admin_header'
                    },
                    'admin_left':{
                        templateUrl:'partials/admin_left.html',
                        controller:'admin_header'
                    },
                    'admin_footer':{
                        templateUrl:'partials/admin_footer.html',
                    },

                    'admin_content':{
                        templateUrl:'partials/edit_affiliate.html',
                        controller:'editaffiliate'
                    },

                }

            }

        )

        .state('affiliate-list', {
            url: "/affiliate-list",
            views:{
                'admin_top_menu': {
                    templateUrl: 'partials/admin_top_menu.html',
                    controller:'admin_header'
                },
                'admin_left':{
                    templateUrl:'partials/admin_left.html',
                    controller:'admin_header'
                },
                'admin_footer':{
                    templateUrl:'partials/admin_footer.html',
                },

                'admin_content':{
                    templateUrl:'partials/affiliate_list.html',
                    controller:'affiliatelist'
                },

            }

        } )
        .state('affiliatetrack', {
            url: "/affiliatetrack",
            views:{
                'admin_top_menu': {
                    templateUrl: 'partials/admin_top_menu.html',
                    controller:'admin_header'
                },
                'admin_left':{
                    templateUrl:'partials/admin_left.html',
                    controller:'admin_header'
                },
                'admin_footer':{
                    templateUrl:'partials/admin_footer.html',
                },

                'admin_content':{
                    templateUrl:'partials/affiliatetrack.html',
                    controller:'affiliatetrack'
                },

            }

        } )

        .state('affiliatetrackdetails', {
            url: "/affiliatetrackdetails/:affiliate_id",
            views:{
                'admin_top_menu': {
                    templateUrl: 'partials/admin_top_menu.html',
                    controller:'admin_header'
                },
                'admin_left':{
                    templateUrl:'partials/admin_left.html',
                    controller:'admin_header'
                },
                'admin_footer':{
                    templateUrl:'partials/admin_footer.html',
                },

                'admin_content':{
                    templateUrl:'partials/affiliatetrackdetails.html',
                    controller:'affiliatetrackdetails'
                },

            }

        } )



        .state('affiliates', {
            url: "/affiliates/:type/:code",
            views:{
                'admin_top_menu': {
                   // templateUrl: 'partials/admin_top_menu.html',
                    controller:'admin_header'
                },
                'admin_left':{
                   // templateUrl:'partials/admin_left.html',
                    controller:'admin_header'
                },
                'admin_footer':{
                   // templateUrl:'partials/admin_footer.html',
                },

                'admin_content':{
                 //   templateUrl:'partials/affiliate_list.html',
                    controller:'affiliates'
                },

            }

        } )

        .state('lead-list', {
            url: "/lead-list",
            views:{
                'admin_top_menu': {
                    templateUrl: 'partials/admin_top_menu.html',
                    controller:'admin_header'
                },
                'admin_left':{
                    templateUrl:'partials/admin_left.html',
                    controller:'admin_header'
                },
                'admin_footer':{
                    templateUrl:'partials/admin_footer.html',
                },

                'admin_content':{
                    templateUrl:'partials/lead_list.html',
                    controller:'leadlist'
                },

            }

        } )
        .state('order-list', {
            url: "/order-list",
            views:{
                'admin_top_menu': {
                    templateUrl: 'partials/admin_top_menu.html',
                    controller:'admin_header'
                },
                'admin_left':{
                    templateUrl:'partials/admin_left.html',
                    controller:'admin_header'
                },
                'admin_footer':{
                    templateUrl:'partials/admin_footer.html',
                },

                'admin_content':{
                    templateUrl:'partials/order_list.html',
                    controller:'orderlist'
                },

            }

        } )


        .state('jungle-add-category',{
                url:"/jungle-add-category",
                views:{
                    'admin_top_menu': {
                        templateUrl: 'partials/admin_top_menu.html',
                        controller:'admin_header'
                    },
                    'admin_left':{
                        templateUrl:'partials/admin_left.html',
                        controller:'admin_header'
                    },
                    'admin_footer':{
                        templateUrl:'partials/admin_footer.html',
                    },

                    'admin_content':{
                        templateUrl:'partials/add_category_jungle.html',
                        controller:'addcategoryjungle'
                    },

                }

            }

        )
        .state('jungle-category-list',{
                url:"/jungle-category-list",
                views:{
                    'admin_top_menu': {
                        templateUrl: 'partials/admin_top_menu.html',
                        controller:'admin_header'
                    },
                    'admin_left':{
                        templateUrl:'partials/admin_left.html',
                        controller:'admin_header'
                    },
                    'admin_footer':{
                        templateUrl:'partials/admin_footer.html',
                    },

                    'admin_content':{
                        templateUrl:'partials/junglecategorylist.html',
                        controller:'junglecategorylist'
                    },

                }

            }

        )

        .state('jungle-edit-category',{
                url:"/jungle-edit-category/:id",
                views:{
                    'admin_top_menu': {
                        templateUrl: 'partials/admin_top_menu.html',
                        controller:'admin_header'
                    },
                    'admin_left':{
                        templateUrl:'partials/admin_left.html',
                        controller:'admin_header'
                    },
                    'admin_footer':{
                        templateUrl:'partials/admin_footer.html',
                    },

                    'admin_content':{
                        templateUrl:'partials/edit_category_jungle.html',
                        controller:'editcategoryjungle'
                    },

                }

            }

        )

        .state('jungle-add-product',{
                url:"/jungle-add-product",
                views:{
                    'admin_top_menu': {
                        templateUrl: 'partials/admin_top_menu.html',
                        controller:'admin_header'
                    },
                    'admin_left':{
                        templateUrl:'partials/admin_left.html',
                        controller:'admin_header'
                    },
                    'admin_footer':{
                        templateUrl:'partials/admin_footer.html',
                    },

                    'admin_content':{
                        templateUrl:'partials/add_product_jungle.html',
                        controller:'addproductjungle'
                    },

                }

            }

        )
        .state('jungle-product-list',{
                url:"/jungle-product-list",
                views:{
                    'admin_top_menu': {
                        templateUrl: 'partials/admin_top_menu.html',
                        controller:'admin_header'
                    },
                    'admin_left':{
                        templateUrl:'partials/admin_left.html',
                        controller:'admin_header'
                    },
                    'admin_footer':{
                        templateUrl:'partials/admin_footer.html',
                    },

                    'admin_content':{
                        templateUrl:'partials/jungleproductlist.html',
                        controller:'jungleproductlist'
                    },

                }

            }

        )

        .state('jungle-edit-product',{
                url:"/jungle-edit-product/:id",
                views:{
                    'admin_top_menu': {
                        templateUrl: 'partials/admin_top_menu.html',
                        controller:'admin_header'
                    },
                    'admin_left':{
                        templateUrl:'partials/admin_left.html',
                        controller:'admin_header'
                    },
                    'admin_footer':{
                        templateUrl:'partials/admin_footer.html',
                    },

                    'admin_content':{
                        templateUrl:'partials/edit_product_jungle.html',
                        controller:'editproductjungle'
                    },

                }

            }

        )




        .state('add-category',{
                url:"/add-category",
                views:{
                    'admin_top_menu': {
                        templateUrl: 'partials/admin_top_menu.html',
                        controller:'admin_header'
                    },
                    'admin_left':{
                        templateUrl:'partials/admin_left.html',
                        controller:'admin_header'
                    },
                    'admin_footer':{
                        templateUrl:'partials/admin_footer.html',
                    },

                    'admin_content':{
                        templateUrl:'partials/add_category.html',
                        controller:'addcategory'
                    },

                }

            }

        )
        .state('edit-category',{
                url:"/edit-category/:id",
                views:{
                    'admin_top_menu': {
                        templateUrl: 'partials/admin_top_menu.html',
                        controller:'admin_header'
                    },
                    'admin_left':{
                        templateUrl:'partials/admin_left.html',
                        controller:'admin_header'
                    },
                    'admin_footer':{
                        templateUrl:'partials/admin_footer.html',
                    },

                    'admin_content':{
                        templateUrl:'partials/edit_category.html',
                        controller:'editcategory'
                    },

                }

            }

        )

        .state('category-list', {
            url: "/category-list",
            views:{
                'admin_top_menu': {
                    templateUrl: 'partials/admin_top_menu.html',
                    controller:'admin_header'
                },
                'admin_left':{
                    templateUrl:'partials/admin_left.html',
                    controller:'admin_header'
                },
                'admin_footer':{
                    templateUrl:'partials/admin_footer.html',
                },

                'admin_content':{
                    templateUrl:'partials/category_list.html',
                    controller:'categorylist'
                },

            }

        } )

        .state('add-product', {
            url: "/add-product",
            views:{
                'admin_top_menu': {
                    templateUrl: 'partials/admin_top_menu.html',
                    controller:'admin_header'
                },
                'admin_left':{
                    templateUrl:'partials/admin_left.html',
                    controller:'admin_header'
                },
                'admin_footer':{
                    templateUrl:'partials/admin_footer.html',
                },

                'admin_content':{
                    templateUrl:'partials/add_product.html',
                    controller:'addproduct'
                },

            }

        } )
        .state('edit-product', {
            url: "/edit-product/:id/:category_id",
            views:{
                'admin_top_menu': {
                    templateUrl: 'partials/admin_top_menu.html',
                    controller:'admin_header'
                },
                'admin_left':{
                    templateUrl:'partials/admin_left.html',
                    controller:'admin_header'
                },
                'admin_footer':{
                    templateUrl:'partials/admin_footer.html',
                },

                'admin_content':{
                    templateUrl:'partials/edit_product.html',
                    controller:'editproduct'
                },

            }

        } )

        .state('add-contract', {
            url: "/add-contract/:id",
            views:{
                'admin_top_menu': {
                    templateUrl: 'partials/admin_top_menu.html',
                    controller:'admin_header'
                },
                'admin_left':{
                    templateUrl:'partials/admin_left.html',
                    controller:'admin_header'
                },
                'admin_footer':{
                    templateUrl:'partials/admin_footer.html',
                },

                'admin_content':{
                    templateUrl:'partials/add_contract.html',
                    controller:'addcontract'
                },

            }

        } )


        .state('product-list', {
            url: "/product-list",
            views:{
                'admin_top_menu': {
                    templateUrl: 'partials/admin_top_menu.html',
                    controller:'admin_header'
                },
                'admin_left':{
                    templateUrl:'partials/admin_left.html',
                    controller:'admin_header'
                },
                'admin_footer':{
                    templateUrl:'partials/admin_footer.html',
                },

                'admin_content':{
                    templateUrl:'partials/product_list.html',
                    controller:'productlist'
                },

            }

        } )

        .state('product-contract', {
            url: "/product-contract",
            views:{
                'admin_top_menu': {
                    templateUrl: 'partials/admin_top_menu.html',
                    controller:'admin_header'
                },
                'admin_left':{
                    templateUrl:'partials/admin_left.html',
                    controller:'admin_header'
                },
                'admin_footer':{
                    templateUrl:'partials/admin_footer.html',
                },

                'admin_content':{
                    templateUrl:'partials/productcontract.html',
                    controller:'productcontract'
                },

            }

        } )

        .state('edit-product-contract', {
            url: "/edit-product-contract/:id/:content_type",
            views:{
                'admin_top_menu': {
                    templateUrl: 'partials/admin_top_menu.html',
                    controller:'admin_header'
                },
                'admin_left':{
                    templateUrl:'partials/admin_left.html',
                    controller:'admin_header'
                },
                'admin_footer':{
                    templateUrl:'partials/admin_footer.html',
                },

                'admin_content':{
                    templateUrl:'partials/edit_productcontract.html',
                    controller:'editproductcontract'
                },

            }

        } )


        .state('contact', {
            url: "/contact",
            views:{
                /*               'admin_top_menu': {
                 //templateUrl: 'partials/admin_top_menu.html',
                 //controller:'admin_header'
                 },
                 'admin_left':{
                 // templateUrl:'partials/admin_left.html',
                 //controller:'admin_header'
                 },
                 'admin_footer':{
                 templateUrl:'partials/admin_footer.html',
                 },
                 */
                'content':{
                    templateUrl:'partials/contact.html',
                    controller:'contact'
                },

            }

        } )


    $locationProvider.html5Mode({
        enabled: true,
        requireBase: false,
        hashPrefix:'!'
    });

});

/*
influx.directive('slideToggle', function() {
    return {
        restrict: 'A',
        scope:{
            isOpen: "=slideToggle"
        },
        link: function(scope, element, attr) {
            var slideDuration = parseInt(attr.slideToggleDuration, 10) || 200;
            scope.$watch('isOpen', function(newVal,oldVal){
                if(newVal !== oldVal){
                    element.stop().slideToggle(slideDuration);
                }
            });
        }
    };
});

influx.directive('myCustomer', function() {
    return {
        template: 'Name: {{customer.name}} Address: {{customer.address}}'
    };
});*/


influx.controller('ModalInstanceCtrl', function($scope,$state,$cookieStore,$http,$uibModalInstance,$rootScope,Upload) {
    $scope.cancel = function () {

        $uibModalInstance.dismiss('cancel');
    };



    $scope.confirmdeladmin = function(){
        $uibModalInstance.dismiss('cancel');

        $rootScope.stateIsLoading = true;
        var idx = $scope.currentindex;
        $http({
            method  : 'POST',
            async:   false,
            url     : $scope.adminUrl+'deleteadmin',
            data    : $.param({uid: $scope.userlist[idx].uid}),  // pass in data as strings
            headers : { 'Content-Type': 'application/x-www-form-urlencoded' }
        }) .success(function(data) {
            $rootScope.stateIsLoading = false;
            $scope.userlist.splice(idx,1);
            // $scope.userlistp = $scope.userlist.slice($scope.begin, parseInt($scope.begin+$scope.perPage));

        });
    }

$scope.confirmcategorydelete=function(){
    $uibModalInstance.dismiss('cancel');
    $rootScope.stateIsLoading = true;
    var idx = $scope.currentindex;
    $http({
        method  : 'POST',
        async:   false,
        url     : $scope.adminUrl+'deletecategory',
        data    : $.param({id: $scope.userlist[idx].ud}),  // pass in data as strings
        headers : { 'Content-Type': 'application/x-www-form-urlencoded' }
    }) .success(function(data) {
        $rootScope.stateIsLoading = false;
        $scope.userlist.splice(idx,1);
    });
}
    $scope.jungleconfirmcategorydelete=function(){
        $uibModalInstance.dismiss('cancel');
        $rootScope.stateIsLoading = true;
        var idx = $scope.currentindex;
        $http({
            method  : 'POST',
            async:   false,
            url     : $scope.adminUrl+'deletejunglecategory',
            data    : $.param({id: $scope.categorylist[idx].id}),  // pass in data as strings
            headers : { 'Content-Type': 'application/x-www-form-urlencoded' }
        }) .success(function(data) {
            $rootScope.stateIsLoading = false;
            $scope.categorylist.splice(idx,1);
        });
    }

    $scope.jungleconfirmcategorystatus=function(){
        $uibModalInstance.dismiss('cancel');
        $rootScope.stateIsLoading = true;
        var idx = $scope.currentindex;
        $http({
            method  : 'POST',
            async:   false,
            url     : $scope.adminUrl+'jungleupdatestatus',
            data    : $.param({id: $scope.categorylist[idx].id,status:$scope.categorylist[idx].status}),  // pass in data as strings
            headers : { 'Content-Type': 'application/x-www-form-urlencoded' }
        }) .success(function(data) {
            $rootScope.stateIsLoading = false;

            $scope.categorylist[idx].status = !$scope.categorylist[idx].status;
        });
    }



    $scope.confirmdelproduct=function(){
        $uibModalInstance.dismiss('cancel');
        $rootScope.stateIsLoading = true;
        var idx = $scope.currentindex;
        $http({
            method  : 'POST',
            async:   false,
            url     : $scope.adminUrl+'deleteproduct',
            data    : $.param({id: $scope.productlist[idx].id}),  // pass in data as strings
            headers : { 'Content-Type': 'application/x-www-form-urlencoded' }
        }) .success(function(data) {
            $rootScope.stateIsLoading = false;
            $scope.productlist.splice(idx,1);
        });
    }




    $scope.commentSubmit = function(){
        $uibModalInstance.dismiss('cancel');

        $rootScope.stateIsLoading = true;
        var idx = $scope.currentindex;
        $http({
            method  : 'POST',
            async:   false,
            url     : $scope.adminUrl+'leadupdates',
            data    : $.param($scope.form),  // pass in data as strings
            headers : { 'Content-Type': 'application/x-www-form-urlencoded' }
        }) .success(function(data) {
            $rootScope.stateIsLoading = false;
            $scope.userlist[idx].comments = $scope.form.comments;


        });
    }





$scope.confirmaffiliatedelete=function(){
    $rootScope.stateIsLoading = true;
    var idx = $scope.currentindex;

    $http({
        method  : 'POST',
        async:   false,
        url     : $scope.adminUrl+'deleteaffiliate',
        data    : $.param({id: $scope.affiliatelist[idx].id}),  // pass in data as strings
        headers : { 'Content-Type': 'application/x-www-form-urlencoded' }
    }) .success(function(data) {

        $rootScope.stateIsLoading = false;
        $scope.affiliatelist.splice(idx,1);
        $uibModalInstance.dismiss('cancel');

    });

}

    $scope.confirmaaffiliatehitdelete=function(){
        $rootScope.stateIsLoading = true;
        var idx = $scope.currentindex;

        $http({
            method  : 'POST',
            async:   false,
            url     : $scope.adminUrl+'deleteaffiliatehit',
            data    : $.param({affiliate_hit_id: $scope.affiliatelist[idx].affiliate_hit_id}),  // pass in data as strings
            headers : { 'Content-Type': 'application/x-www-form-urlencoded' }
        }) .success(function(data) {

            $rootScope.stateIsLoading = false;
            $scope.affiliatelist.splice(idx,1);
            $uibModalInstance.dismiss('cancel');

        });

    }


    $scope.confirmdelcontact=function(){
        $rootScope.stateIsLoading = true;
        var idx = $scope.currentindex;

        $http({
            method  : 'POST',
            async:   false,
            url     : $scope.adminUrl+'deletecontact',
            data    : $.param({id: $scope.userlist[idx].id}),  // pass in data as strings
            headers : { 'Content-Type': 'application/x-www-form-urlencoded' }
        }) .success(function(data) {

            $rootScope.stateIsLoading = false;
            $scope.userlist.splice(idx,1);
            $uibModalInstance.dismiss('cancel');

        });

    }

    $scope.$watch('uploadfile', function (files) {

        $('.errormsg').html('');
        $scope.formUpload = false;
        if (files != null) {
            for (var i = 0; i < files.length; i++) {
                $scope.errorMsg = null;
                (function (file) {
                    upload(file);
                })(files[i]);
            }
        }
    });

    $scope.getReqParams = function () {
        return $scope.generateErrorOnServer ? '?errorCode=' + $scope.serverErrorCode +
        '&errorMessage=' + $scope.serverErrorMsg : '';
    };

    function upload(file) {
        $scope.errorMsg = null;
        uploadUsingUpload(file);
    }

    function uploadUsingUpload(file) {
        var idx = $scope.currentindex;
        $('#loaderDiv').addClass('ng-hide');
        file.upload = Upload.upload({

            url: $scope.adminUrl + 'uploadfiles' + $scope.getReqParams(),
            method: 'POST',
           // data    : $.param({id: $scope.userlist[idx].id}),
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
            },
            fields: {'id1': $scope.userlist[idx].id},
            file: file,
            fileFormDataName: 'Filedata'
        });

        file.upload.then(function (response) {
            // console.log(response.data.status);
            if (response.data.status == 'error') {
                $('.errormsg').html('Invalid file type.');
            }
            else {
                $('.progress').removeClass('ng-hide');
                file.result = response.data;


                $uibModalInstance.dismiss('cancel');

                if($scope.userlist[idx].upload_file_arr.length>0){
                    $scope.userlist[idx].upload_file_arr.push(response.data);
                }
                else{
                    $scope.userlist[idx].upload_file_arr=[response.data];
                }

                $('#loaderDiv').addClass('ng-hide');
                $state.go('lead-list');
            }


        }, function (response) {
            console.log(response.status);
            if (response.data.status > 0) {

                //  $scope.errorMsg = response.status + ': ' + response.data;
            }

        });

        file.upload.progress(function (evt) {
            // Math.min is to fix IE which reports 200% sometimes
            $('#loaderDiv').removeClass('ng-hide');

            file.progress = Math.min(100, parseInt(100.0 * evt.loaded / evt.total));

        });

        file.upload.xhr(function (xhr) {
            // xhr.upload.addEventListener('abort', function(){console.log('abort complete')}, false);
        });
    }


    $scope.mailsend = function(){
       // $uibModalInstance.dismiss('cancel');
       // $scope.successmessage='';
        $rootScope.stateIsLoading = true;
        $http({
            method  : 'POST',
            async:   false,
            url     : $scope.adminUrl+'sendmail',
            data    : $.param($scope.form),  // pass in data as strings
            headers : { 'Content-Type': 'application/x-www-form-urlencoded' }
        }) .success(function(data) {
          //  $rootScope.stateIsLoading = false;
               // $scope.userlist[idx].comments = $scope.form.comments;

                if(data.status=='success'){


                        $scope.successmessage='Mail send successfully';
                        $uibModalInstance.dismiss('cancel');


            }

        });
    }

    $scope.selectradio = function(radioval){
        console.log(radioval);
        $scope.selectedcat = radioval;
    }

    $scope.send774=function(){
        $scope.showselerror = false;

        if($scope.selectedcat == 2)
            $state.go('web-design');
        else if($scope.selectedcat == 3)
            $state.go('content-writing');
        else if($scope.selectedcat == 4)
            $state.go('presence-developement');
        else
            $scope.showselerror = true;


    }

    $scope.unsetcart= function(frompage){

        console.log(frompage);
        $cookieStore.remove("platformid");
        $cookieStore.remove("designid");
        $cookieStore.remove("contentid");
        $cookieStore.remove("markettingid");
        $cookieStore.remove("markettingprice");
        $cookieStore.remove("platformprice");
        $cookieStore.remove("designprice");
        $cookieStore.remove("contentprice");
        $rootScope.globalplatformid=0;
        if(frompage=='web-design'){
            $state.go('web-design');
        }
        if(frompage=='content-writing'){
            $state.go('content-writing');
        }
        if(frompage=='presence-developement'){
            $state.go('presence-developement');
        }


        $scope.showselerror = false;
      //  $uibModalInstance.dismiss('cancel');
        if(typeof($scope.selectedcat)!='undefined') {
            if ($scope.selectedcat == 1)
                $state.go('products');
            else if ($scope.selectedcat == 2)
                $state.go('web-design');

            else if ($scope.selectedcat == 3)
                $state.go('content-writing');
            else if ($scope.selectedcat == 4)
                $state.go('presence-developement');
            else
                $scope.showselerror = true;
        }
        else{
                $uibModalInstance.dismiss('cancel');
        }

    }


});

influx.controller('index', function($scope,$state,$cookieStore,$http,$uibModal,$rootScope) {


    /*
        $scope.contactsubmit=function(){
            $http({
                method: 'POST',
                async: false,
                url: $scope.adminUrl + 'addcontact',
                data    : $.param($scope.form),
                headers: {'Content-Type': 'application/x-www-form-urlencoded'}

            }).success(function (data) {

            })

        }
    */

    //$state.go('home');
    //return
});
influx.controller('webplatform', function($scope,$state,$cookieStore,$http,$uibModal,$rootScope,$sce) {

    $scope.trustAsHtml=$sce.trustAsHtml;
    $scope.selectedcat = 0;

$scope.frontend='frontend';

    $http({
        method:'POST',
        async:false,
        url:$scope.adminUrl+'categorylist',
        headers :   { 'Content-Type': 'application/x-www-form-urlencoded' }

    }).success(function(data){
        $scope.categorylist=[];
        angular.forEach(data,function(value, key){
            if(value.id!=1){
                if($scope.categorylist.length==0)
                    $scope.categorylist=[value];
                else
                    $scope.categorylist.push(value)  ;



            }

        })
    })


    $scope.id=1;
    $scope.search_category_id=1;
    $http({
        method: 'POST',
        async: false,
        url: $scope.adminUrl + 'productnamelist',
        data    : $.param({'id':$scope.id}),
        headers: {'Content-Type': 'application/x-www-form-urlencoded'}

    }).success(function (data) {
/*
        console.log(data);
*/
        $scope.productnamelist = data;
    })

    $http({
        method:'POST',
        async:false,
        url:$scope.adminUrl+'productlist',
        data    : $.param({'category_id':$scope.search_category_id,'frontend':$scope.frontend}),
        headers :   { 'Content-Type': 'application/x-www-form-urlencoded' }

    }).success(function(data){
        $scope.productlist=data;
    })
    setTimeout(function() {
        $('.scrollToTop').click(function () {
            $('html, body').animate({scrollTop: 0}, 800);
            return false;
        });

        $('.product_listt').click(function(){
            var productid=$(this).attr('productid');
            $('html, body').animate({
                scrollTop: $('.productdiv'+productid).offset().top
            }, 2000);


        })
        $('.gocontact').click(function(){
            $('html, body').animate({
                scrollTop: $('.homeformblock').offset().top
            }, 2000);


        })


    },2000);

    $scope.cat_id=0;

    $scope.pop_pen = function(item,size){
        $scope.currentindex=$scope.productlist.indexOf(item);
        $cookieStore.put('platformid',item.id);
        $scope.platfromprice=$cookieStore.put('platformprice',item.product_price);

        $uibModal.open({
            animation: true,
            templateUrl: 'product.html',
            controller: 'ModalInstanceCtrl',
            size: size,
            scope:$scope
        });
    }

$scope.cat=function(catid){
    $scope.cat_id   =catid;
}
    $scope.send=function(product){
        console.log(product.cat_id);
       // $state.go('design');
    }


});
influx.controller('webplatformdetils', function($scope,$state,$cookieStore,$http,$uibModal,$rootScope,$stateParams,$sce) {
    $scope.trustAsHtml=$sce.trustAsHtml;
    $scope.selectedcat = 0;



    $http({
        method:'POST',
        async:false,
        url:$scope.adminUrl+'categorylist',
        headers :   { 'Content-Type': 'application/x-www-form-urlencoded' }

    }).success(function(data){
        $scope.categorylist=[];
        angular.forEach(data,function(value, key){
            if(value.id!=1){
                if($scope.categorylist.length==0)
                    $scope.categorylist=[value];
                else
                    $scope.categorylist.push(value)  ;



            }

        })
    })


    $scope.id=$stateParams.id;
    $scope.category_id=1;
    $http({
        method: 'POST',
        async: false,
        url: $scope.adminUrl + 'productnamelist',
        data    : $.param({'id':$scope.category_id}),
        headers: {'Content-Type': 'application/x-www-form-urlencoded'}

    }).success(function (data) {
        console.log(data);
        $scope.productnamelist = data;
    })
    $http({
        method: 'POST',
        async: false,
        url: $scope.adminUrl + 'productdetails',
        data    : $.param({'id':$scope.id,category_id:$scope.category_id}),
        headers: {'Content-Type': 'application/x-www-form-urlencoded'}

    }).success(function (data) {
        $scope.productdetails=data;

    });

    $scope.pop_pen = function(item,size){
        //$scope.currentindex=$scope.productdetails.indexOf(item);
        $cookieStore.put('platformid',item.id);

        $uibModal.open({
            animation: true,
            templateUrl: 'product.html',
            controller: 'ModalInstanceCtrl',
            size: size,
            scope:$scope
        });
    }


});
influx.controller('businessmodelling', function($scope,$state,$cookieStore,$http,$uibModal,$rootScope,$stateParams) {

});
influx.controller('customengineering', function($scope,$state,$cookieStore,$http,$uibModal,$rootScope,$stateParams) {

});



influx.controller('contract', function($scope,$window,$state,$cookieStore,$http,$uibModal,$rootScope,$stateParams,$sce) {
    $scope.trustAsHtml=$sce.trustAsHtml;
    $scope.contentdetailsarr=[];
    $scope.form={};
    $scope.platformprice=0.00;
    $scope.designprice=0.00;
    $scope.contentprice=0.00;
    $scope.markettingprice=0.00;
    if (typeof ($cookieStore.get('platformid')) != 'undefined') {
        $scope.platform_id = $cookieStore.get('platformid');
        $scope.search_category_id=1;
    $http({
        method: 'POST',
        async: false,
        url: $scope.adminUrl + 'productdetails',
        data: $.param({'category_id': $scope.search_category_id, 'id': $scope.platform_id}),
        headers: {'Content-Type': 'application/x-www-form-urlencoded'}

    }).success(function (data) {
        $scope.platformdetails = data;
        $rootScope.platformprice = data.product_price;



    })
}
    if (typeof ($cookieStore.get('designid')) != 'undefined') {
        $scope.design_id = $cookieStore.get('designid');
        $scope.search_category_id=2;
        $http({
            method: 'POST',
            async: false,
            url: $scope.adminUrl + 'productdetails',
            data: $.param({'category_id': $scope.search_category_id, 'id': $scope.design_id}),
            headers: {'Content-Type': 'application/x-www-form-urlencoded'}

        }).success(function (data) {
            $scope.designdetails = data;
            $rootScope.designprice = data.product_price;

        })
    }
    if (typeof ($cookieStore.get('contentid')) != 'undefined') {
        $scope.contentid = $cookieStore.get('contentid');
        $scope.search_category_id=3;
        $http({
            method: 'POST',
            async: false,
            url: $scope.adminUrl + 'productdetails',
            data: $.param({'category_id': $scope.search_category_id, 'id': $scope.contentid}),
            headers: {'Content-Type': 'application/x-www-form-urlencoded'}

        }).success(function (data) {
            $scope.contentdetails = data;
            if (typeof ($cookieStore.get('contentprice')) != 'undefined') {
                $scope.contentprice=$cookieStore.get('contentprice');

            }


        })
    }
    if (typeof ($cookieStore.get('markettingid')) != 'undefined') {
        $scope.markettingid = $cookieStore.get('markettingid');
        $scope.search_category_id=4;
        $http({
            method: 'POST',
            async: false,
            url: $scope.adminUrl + 'productdetails',
            data: $.param({'category_id': $scope.search_category_id, 'id': $scope.markettingid}),
            headers: {'Content-Type': 'application/x-www-form-urlencoded'}

        }).success(function (data) {
            $scope.markettingdetails = data;
            if (typeof ($cookieStore.get('markettingprice')) != 'undefined') {
                $scope.markettingprice=$cookieStore.get('markettingprice');
            }

        })
    }
    $http({
        method: 'POST',
        async: false,
        url: $scope.adminUrl + 'getproductcontract',
       // data: $.param({'category_id': $scope.search_category_id, 'id': $scope.markettingid}),
        headers: {'Content-Type': 'application/x-www-form-urlencoded'}

    }).success(function (data) {
        $scope.contractstaticdetails = data;
    })
    if (typeof ($cookieStore.get('platformid')) != 'undefined' && typeof ($cookieStore.get('platformprice')) != 'undefined') {
        $scope.contentdetailsarr.push({platformid: $cookieStore.get('platformid'),platformprice: $cookieStore.get('platformprice'),});
    }
    if (typeof ($cookieStore.get('designid')) != 'undefined' && typeof ($cookieStore.get('designprice')) != 'undefined') {
        $scope.contentdetailsarr.push({designid: $cookieStore.get('designid'),designprice: $cookieStore.get('designprice'),});
    }
    if (typeof ($cookieStore.get('contentid')) != 'undefined' && typeof ($cookieStore.get('contentprice')) != 'undefined') {
        $scope.contentdetailsarr.push({contentid: $cookieStore.get('contentid'),contentprice: $cookieStore.get('contentprice'),});
    }
    if (typeof ($cookieStore.get('markettingid')) != 'undefined' && typeof ($cookieStore.get('markettingprice')) != 'undefined') {
        $scope.contentdetailsarr.push({markettingid: $cookieStore.get('markettingid'),markettingprice: $cookieStore.get('markettingprice'),});
    }

    if (typeof ($cookieStore.get('platformprice')) != 'undefined') {
        $scope.platformprice=$cookieStore.get('platformprice');
    }

    if (typeof ($cookieStore.get('designprice')) != 'undefined') {
        $scope.designprice=$cookieStore.get('designprice');
    }
    if (typeof ($cookieStore.get('contentprice')) != 'undefined') {
        $scope.contentprice=$cookieStore.get('contentprice');
    }
    if (typeof ($cookieStore.get('markettingprice')) != 'undefined') {
        $scope.markettingprice=$cookieStore.get('markettingprice');
    }

    $scope.totalprice=(parseFloat($scope.platformprice)+parseFloat($scope.designprice)+parseFloat($scope.contentprice)+parseFloat($scope.markettingprice)).toFixed(2);

    $cookieStore.put('totalprice',$scope.totalprice);
    if (typeof ($cookieStore.get('totalprice')) != 'undefined'){
        $scope.contentdetailsarr.push({totalid: 1,totalprice: $cookieStore.get('totalprice'),});
    }
    $scope.removeplatform=function(){
        $cookieStore.remove('platformid');
        $cookieStore.remove('platformprice');
        $cookieStore.remove('designid');
        $cookieStore.remove('designprice');
        $cookieStore.remove('contentid');
        $cookieStore.remove('contentprice');
        $cookieStore.remove('markettingid');
        $cookieStore.remove('markettingprice');



        //$state.go('contract');
        //window.location.reload();
        $window.location.href = $scope.baseUrl+'products';
    }

    $scope.removedesign=function(){
        $cookieStore.remove('designid');
        $cookieStore.remove('designprice');
       // $state.go('contract');
        window.location.reload();
    }
    $scope.removecontent=function(){
        $cookieStore.remove('contentid');
        $cookieStore.remove('contentprice');
        //$state.go('contract');
        window.location.reload();
    }
    $scope.removemarketting=function(){
        $cookieStore.remove('markettingid');
        $cookieStore.remove('markettingprice');
        //$state.go('contract');
        window.location.reload();
    }
    $scope.sigstatus=false;
    $scope.inputshow=function(){
        $scope.sigstatus=true;
    }
    $scope.fontcontractsubmit=function() {


        if (typeof ($cookieStore.get('totalprice')) != 'undefined') {
            $scope.form.price = $cookieStore.get('totalprice');
        }
        $scope.form.contentdetailsarr = $scope.contentdetailsarr;

        console.log($scope.form);
        $http({
            method: 'POST',
            async: false,

            url: $scope.adminUrl + 'addorder',
            data: $.param($scope.form),
            headers: {'Content-Type': 'application/x-www-form-urlencoded'}

        }).success(function () {
            $cookieStore.remove("platformid");
            $cookieStore.remove("designid");
            $cookieStore.remove("contentid");
            $cookieStore.remove("markettingid");
            $cookieStore.remove("markettingprice");
            $cookieStore.remove("platformprice");
            $cookieStore.remove("designprice");
            $cookieStore.remove("contentprice");
            $rootScope.globalplatformid = 0;

            window.print();

            $state.go('index');

        })
    }


     $scope.mail_submit=function(){

         $scope.ermsg='';
        $scope.form.contentdetailsarr=$scope.contentdetailsarr;
         $scope.fontcontractform.$setSubmitted();
         //$scope.fontcontractform.$valid;
        if($scope.fontcontractform.$valid==true) {
            console.log('in email ' + $scope.fontcontractform.$valid);

            $http({
             method  :   'POST',
             async   :   false,

             url :       $scope.adminUrl+'addcontentcontract',
             data    : $.param($scope.form),
             headers :   { 'Content-Type': 'application/x-www-form-urlencoded' }

             }).success(function(){
             $cookieStore.remove("platformid");
             $cookieStore.remove("designid");
             $cookieStore.remove("contentid");
             $cookieStore.remove("markettingid");
             $cookieStore.remove("markettingprice");
             $cookieStore.remove("platformprice");
             $cookieStore.remove("designprice");
             $cookieStore.remove("contentprice");
             $rootScope.globalplatformid = 0;


             $state.go('index');
             })
        }
         else{
            $scope.ermsg='Please fillup all the input fields';
        }

     }
$scope.unsetcartt=function(){
    $cookieStore.remove("platformid");
    $cookieStore.remove("designid");
    $cookieStore.remove("contentid");
    $cookieStore.remove("markettingid");
    $cookieStore.remove("markettingprice");
    $cookieStore.remove("platformprice");
    $cookieStore.remove("designprice");
    $cookieStore.remove("contentprice");
    $rootScope.globalplatformid=0;
        $state.go('web-platform');


}
});

influx.controller('mailcontract', function($scope,$state,$cookieStore,$http,$uibModal,$rootScope,$stateParams,$sce) {
    $scope.trustAsHtml=$sce.trustAsHtml;
    $scope.contentdetailsarr=[];
    $scope.form={};
    $scope.platformprice=0.00;
    $scope.designprice=0.00;
    $scope.contentprice=0.00;
    $scope.markettingprice=0.00;
    $scope.contrcatcontentid=$stateParams.id;
    $http({
        method: 'POST',
        async: false,
        url: $scope.adminUrl + 'orderdetails',
        data: $.param({'id': $scope.contrcatcontentid}),
        headers: {'Content-Type': 'application/x-www-form-urlencoded'}

    }).success(function (data) {

        angular.forEach(data.content, function(value, key){
           if(typeof(value.platformid)!='undefined'){
               $cookieStore.put('platformid', value.platformid);

           }
            if(typeof(value.platformprice)!='undefined'){
                $cookieStore.put('platformprice', value.platformprice);

            }
            if(typeof(value.designid)!='undefined'){
                $cookieStore.put('designid', value.designid);

            }
            if(typeof(value.designprice)!='undefined'){
                $cookieStore.put('designprice', value.designprice);

            }
            if(typeof(value.contentid)!='undefined'){
                $cookieStore.put('content', value.content);

            }
            if(typeof(value.contentprice)!='undefined'){
                $cookieStore.put('contentprice', value.contentprice);

            }
            if(typeof(value.markettingid)!='undefined'){
                $cookieStore.put('markettingid', value.markettingid);

            }
            if(typeof(value.markettingprice)!='undefined'){
                $cookieStore.put('markettingprice', value.markettingprice);

            }

        });


        if (typeof ($cookieStore.get('platformid')) != 'undefined') {
            $scope.platform_id = $cookieStore.get('platformid');
            $scope.search_category_id=1;
            $http({
                method: 'POST',
                async: false,
                url: $scope.adminUrl + 'productdetails',
                data: $.param({'category_id': $scope.search_category_id, 'id': $scope.platform_id}),
                headers: {'Content-Type': 'application/x-www-form-urlencoded'}

            }).success(function (data) {
                $scope.platformdetails = data;
                $rootScope.platformprice = data.product_price;



            })
        }
        if (typeof ($cookieStore.get('designid')) != 'undefined') {
            $scope.design_id = $cookieStore.get('designid');
            $scope.search_category_id=2;
            $http({
                method: 'POST',
                async: false,
                url: $scope.adminUrl + 'productdetails',
                data: $.param({'category_id': $scope.search_category_id, 'id': $scope.design_id}),
                headers: {'Content-Type': 'application/x-www-form-urlencoded'}

            }).success(function (data) {
                $scope.designdetails = data;
                $rootScope.designprice = data.product_price;

            })
        }
        if (typeof ($cookieStore.get('contentid')) != 'undefined') {
            $scope.contentid = $cookieStore.get('contentid');
            $scope.search_category_id=3;
            $http({
                method: 'POST',
                async: false,
                url: $scope.adminUrl + 'productdetails',
                data: $.param({'category_id': $scope.search_category_id, 'id': $scope.contentid}),
                headers: {'Content-Type': 'application/x-www-form-urlencoded'}

            }).success(function (data) {
                $scope.contentdetails = data;
                if (typeof ($cookieStore.get('contentprice')) != 'undefined') {
                    $scope.contentprice=$cookieStore.get('contentprice');

                }


            })
        }
        if (typeof ($cookieStore.get('markettingid')) != 'undefined') {
            $scope.markettingid = $cookieStore.get('markettingid');
            $scope.search_category_id=4;
            $http({
                method: 'POST',
                async: false,
                url: $scope.adminUrl + 'productdetails',
                data: $.param({'category_id': $scope.search_category_id, 'id': $scope.markettingid}),
                headers: {'Content-Type': 'application/x-www-form-urlencoded'}

            }).success(function (data) {
                $scope.markettingdetails = data;
                if (typeof ($cookieStore.get('markettingprice')) != 'undefined') {
                    $scope.markettingprice=$cookieStore.get('markettingprice');
                }

            })
        }
        $http({
            method: 'POST',
            async: false,
            url: $scope.adminUrl + 'getproductcontract',
            // data: $.param({'category_id': $scope.search_category_id, 'id': $scope.markettingid}),
            headers: {'Content-Type': 'application/x-www-form-urlencoded'}

        }).success(function (data) {
            $scope.contractstaticdetails = data;

        })
        if (typeof ($cookieStore.get('platformid')) != 'undefined' && typeof ($cookieStore.get('platformprice')) != 'undefined') {
            $scope.contentdetailsarr.push({platformid: $cookieStore.get('platformid'),platformprice: $cookieStore.get('platformprice'),});
        }
        if (typeof ($cookieStore.get('designid')) != 'undefined' && typeof ($cookieStore.get('designprice')) != 'undefined') {
            $scope.contentdetailsarr.push({designid: $cookieStore.get('designid'),designprice: $cookieStore.get('designprice'),});
        }
        if (typeof ($cookieStore.get('contentid')) != 'undefined' && typeof ($cookieStore.get('contentprice')) != 'undefined') {
            $scope.contentdetailsarr.push({contentid: $cookieStore.get('contentid'),contentprice: $cookieStore.get('contentprice'),});
        }
        if (typeof ($cookieStore.get('markettingid')) != 'undefined' && typeof ($cookieStore.get('markettingprice')) != 'undefined') {
            $scope.contentdetailsarr.push({markettingid: $cookieStore.get('markettingid'),markettingprice: $cookieStore.get('markettingprice'),});
        }

        if (typeof ($cookieStore.get('platformprice')) != 'undefined') {
            $scope.platformprice=$cookieStore.get('platformprice');
        }

        if (typeof ($cookieStore.get('designprice')) != 'undefined') {
            $scope.designprice=$cookieStore.get('designprice');
        }
        if (typeof ($cookieStore.get('contentprice')) != 'undefined') {
            $scope.contentprice=$cookieStore.get('contentprice');
        }
        if (typeof ($cookieStore.get('markettingprice')) != 'undefined') {
            $scope.markettingprice=$cookieStore.get('markettingprice');
        }


        $scope.totalprice=(parseFloat($scope.platformprice)+parseFloat($scope.designprice)+parseFloat($scope.contentprice)+parseFloat($scope.markettingprice)).toFixed(2);

        $cookieStore.put('totalprice',$scope.totalprice);

console.log($scope.totalprice);

    })



        $scope.fontcontractsubmit=function(){
        if (typeof ($cookieStore.get('totalprice')) != 'undefined'){
            $scope.form.price=$cookieStore.get('totalprice');
        }
        $scope.form.contentdetailsarr=$scope.contentdetailsarr;

        console.log($scope.form);
       $http({
            method  :   'POST',
            async   :   false,

            url :       $scope.adminUrl+'addorder',
            data    : $.param($scope.form),
            headers :   { 'Content-Type': 'application/x-www-form-urlencoded' }

        }).success(function(){
           $cookieStore.remove("platformid");
           $cookieStore.remove("designid");
           $cookieStore.remove("contentid");
           $cookieStore.remove("markettingid");
           $cookieStore.remove("markettingprice");
           $cookieStore.remove("platformprice");
           $cookieStore.remove("designprice");
           $cookieStore.remove("contentprice");
           $rootScope.globalplatformid=0;

           window.print();

           $state.go('index');

        })

    }
    $scope.unsetcartt=function(){
        $cookieStore.remove("platformid");
        $cookieStore.remove("designid");
        $cookieStore.remove("contentid");
        $cookieStore.remove("markettingid");
        $cookieStore.remove("markettingprice");
        $cookieStore.remove("platformprice");
        $cookieStore.remove("designprice");
        $cookieStore.remove("contentprice");
        $rootScope.globalplatformid=0;
        $state.go('web-platform');


    }
});


influx.controller('corecompetenci', function($scope,$state,$cookieStore,$http,$uibModal,$rootScope,$stateParams) {

});

influx.controller('design', function($scope,$state,$cookieStore,$http,$uibModal,$rootScope,$sce) {
    $scope.trustAsHtml=$sce.trustAsHtml;
    $scope.contentcondition='';
    $scope.markettingcondition='';
   // $cookieStore.put('contentid',3);
    $scope.frontend='frontend';

    $scope.selectedarray=[1,2];
    $scope.selectstring='';
    $scope.type='';


    if(typeof ($cookieStore.get('platformid')) != 'undefined'){
        $scope.selectedarray.push(1);
        $scope.selectstring +='You have selected Platform,';
        $scope.platformid=$cookieStore.get('platformid');
    }
    if(typeof ($cookieStore.get('designid')) != 'undefined'){
        $scope.selectedarray.push(2);
      //  $scope.selectstring +=' Designed,';
        $scope.designid=$cookieStore.get('designid');

    }
    if(typeof ($cookieStore.get('contentid')) != 'undefined'){
        $scope.selectedarray.push(3);
        $scope.selectstring +=' Content,';
        $scope.contentid=$cookieStore.get('contentid');

    }
    if(typeof ($cookieStore.get('markettingid')) != 'undefined'){
        $scope.selectedarray.push(4);
        $scope.selectstring +=' Marketting,';
        $scope.markettingid=$cookieStore.get('markettingid');

    }



    $scope.inarray1=function(id){
        return $scope.selectedarray.indexOf(parseInt(id));
    }

    $scope.categorylist=[];
    $http({
        method:'POST',
        async:false,
        url:$scope.adminUrl+'categorylist',
        headers :   { 'Content-Type': 'application/x-www-form-urlencoded' }

    }).success(function(data){


        $scope.categorylist=data;

    })


    $scope.platform_id=0;
    $scope.search_category_id=2;
    if(typeof ($cookieStore.get('platformid')) != 'undefined'){
        $scope.platform_id = $cookieStore.get('platformid');
    }
    $http({
        method:'POST',
        async:false,
        url:$scope.adminUrl+'productlist',
        data    : $.param({'category_id':$scope.search_category_id,'platform_id':$scope.platform_id,'frontend':$scope.frontend}),
        headers :   { 'Content-Type': 'application/x-www-form-urlencoded' }

    }).success(function(data){
        $scope.productlist=data;
    })

    setTimeout(function() {
        $('.scrollToTop').click(function () {
            $('html, body').animate({scrollTop: 0}, 800);
            return false;
        });

        $('.gocontact').click(function(){
            $('html, body').animate({
                scrollTop: $('.homeformblock').offset().top
            }, 2000);


        })


    },2000);

    $scope.pop_design = function(item,size) {
        if (typeof ($cookieStore.get('platformid')) != 'undefined') {

            $scope.currentindex = $scope.productlist.indexOf(item);
            if(typeof ($cookieStore.get('designid')) != 'undefined') {
                $cookieStore.put('designid', item.id);
                if (typeof ($cookieStore.get('designid')) != 'undefined') {
                    $scope.selectstring += ' Designed,';
                    $scope.designid = $cookieStore.get('designid');
                    $scope.designprice = $cookieStore.put('designprice', item.product_price);
                    $scope.type += ' You may Select';
                    $scope.selectstring += ' type';


                }


            }
            $uibModal.open({
                animation: true,
                templateUrl: 'design.html',
                controller: 'ModalInstanceCtrl',
                size: size,
                scope: $scope
            });
        }
        else
        {
            $uibModal.open({
                animation: true,
                templateUrl: 'common.html',
                controller: 'ModalInstanceCtrl',
                size: size,
                scope: $scope
            });

        }


    }


});
influx.controller('content', function($scope,$state,$cookieStore,$http,$uibModal,$rootScope,$sce) {
    $scope.trustAsHtml=$sce.trustAsHtml;

    $scope.selectedarray=[1,3];
    $scope.selectstring='';
    $scope.type='';

    $scope.frontend='frontend';

    if(typeof ($cookieStore.get('platformid')) != 'undefined'){
        $scope.selectedarray.push(1);
        $scope.selectstring +='You have selected Platform,';
        $scope.platformid=$cookieStore.get('platformid');

    }
    if(typeof ($cookieStore.get('designid')) != 'undefined'){
        $scope.selectedarray.push(2);
        $scope.selectstring +=' Designed,';
        $scope.designid=$cookieStore.get('designid');

    }
    if(typeof ($cookieStore.get('contentid')) != 'undefined'){
        $scope.selectedarray.push(3);
        //$scope.selectstring +=' Content,';
        $scope.contentid=$cookieStore.get('contentid');

    }
    if(typeof ($cookieStore.get('markettingid')) != 'undefined'){
        $scope.selectedarray.push(4);
        $scope.selectstring +=' Marketting,';
        $scope.markettingid=$cookieStore.get('markettingid');

    }



    $scope.inarray1=function(id){
        return $scope.selectedarray.indexOf(parseInt(id));
    }

    $scope.categorylist=[];
    $http({
        method:'POST',
        async:false,
        url:$scope.adminUrl+'categorylist',
        headers :   { 'Content-Type': 'application/x-www-form-urlencoded' }

    }).success(function(data){


        $scope.categorylist=data;

    })



    $scope.platform_id=0;
    $scope.search_category_id=3;
    if(typeof ($cookieStore.get('platformid')) != 'undefined'){
        $scope.platform_id = $cookieStore.get('platformid');
    }
    $http({
        method:'POST',
        async:false,
        url:$scope.adminUrl+'productlist',
        data    : $.param({'category_id':$scope.search_category_id,'platform_id':$scope.platform_id,'frontend':$scope.frontend}),
        headers :   { 'Content-Type': 'application/x-www-form-urlencoded' }

    }).success(function(data){
        $scope.productlist=data;
    })

    $scope.pop_content = function(item,size) {
        if (typeof ($cookieStore.get('platformid')) != 'undefined') {
            $scope.currentindex = $scope.productlist.indexOf(item);
            $cookieStore.put('contentid', item.id);
            $cookieStore.put('contentprice', item.selected_product.price);
            $scope.contentid=$cookieStore.get('contentid');
             if(typeof ($cookieStore.get('contentid')) != 'undefined'){
                $scope.selectstring +=' Content,';
                 $scope.type +=' You may Select';
                 $scope.selectstring +=' type';

            }


            $uibModal.open({
                animation: true,
                templateUrl: 'design.html',
                controller: 'ModalInstanceCtrl',
                size: size,
                scope: $scope
            });
        }
        else
        {
            $uibModal.open({
                animation: true,
                templateUrl: 'common.html',
                controller: 'ModalInstanceCtrl',
                size: size,
                scope: $scope
            });

        }

    }




});
influx.controller('presencedevelopement', function($scope,$state,$cookieStore,$http,$uibModal,$rootScope,$stateParams,$sce) {
    $scope.trustAsHtml=$sce.trustAsHtml;
    $scope.selectedarray=[1,4];
    $scope.selectstring='';
    $scope.type='';
    $scope.frontend='frontend';

    if(typeof ($cookieStore.get('platformid')) != 'undefined'){
        $scope.selectedarray.push(1);
        $scope.selectstring +='You have selected Platform,';
        $scope.platformid=$cookieStore.get('platformid');

    }
    if(typeof ($cookieStore.get('designid')) != 'undefined'){
        $scope.selectedarray.push(2);
        $scope.selectstring +=' Designed,';
        $scope.designid=$cookieStore.get('designid');
    }
    if(typeof ($cookieStore.get('contentid')) != 'undefined'){
        $scope.selectedarray.push(3);
        $scope.selectstring +=' Content,';
        $scope.contentid=$cookieStore.get('contentid');
    }
    if(typeof ($cookieStore.get('markettingid')) != 'undefined'){
        $scope.selectedarray.push(4);
        // $scope.selectstring +=' Marketting,';
        $scope.markettingid=$cookieStore.get('markettingid');
    }



    $scope.inarray1=function(id){
        return $scope.selectedarray.indexOf(parseInt(id));
    }

    $scope.categorylist=[];
    $http({
        method:'POST',
        async:false,
        url:$scope.adminUrl+'categorylist',
        headers :   { 'Content-Type': 'application/x-www-form-urlencoded' }

    }).success(function(data){


        $scope.categorylist=data;

    })


    $scope.platform_id=0;
    $scope.search_category_id=4;
    if(typeof ($cookieStore.get('platformid')) != 'undefined'){
        $scope.platform_id = $cookieStore.get('platformid');
    }
    $http({
        method:'POST',
        async:false,
        url:$scope.adminUrl+'productlist',
        data    : $.param({'category_id':$scope.search_category_id,'platform_id':$scope.platform_id,'frontend':$scope.frontend}),
        headers :   { 'Content-Type': 'application/x-www-form-urlencoded' }

    }).success(function(data){
        $scope.productlist=data;
    })

    $scope.pop_marketting = function(item,size) {
        if (typeof ($cookieStore.get('platformid')) != 'undefined') {

            $scope.currentindex = $scope.productlist.indexOf(item);
            if(typeof ($cookieStore.get('markettingid')) != 'undefined'){
                $scope.selectstring +=' Marketting,';
                $scope.markettingid=$cookieStore.get('markettingid');
                console.log($scope.markettingid);
            }
            $scope.type +=' You may Select';
            $scope.selectstring +=' type';

            $cookieStore.put('markettingid', item.id);
            $cookieStore.put('markettingprice', item.selected_product.price);

            $uibModal.open({
                animation: true,
                templateUrl: 'marketting.html',
                controller: 'ModalInstanceCtrl',
                size: size,
                scope: $scope
            });
        }

        else {
            $uibModal.open({
                animation: true,
                templateUrl: 'common.html',
                controller: 'ModalInstanceCtrl',
                size: size,
                scope: $scope
            });

        }
    }
    $scope.getprice=function(){
        console.log($scope.myOption);
        console.log($(this));
        // $(this).parent().parent('.dropdown').next('.develope_price').html(item.price);
        console.log($('.develope_price').html());
    }

    $scope.getprice22 = function(item,item1){
        item.selected_product = item1;
    }


});
influx.controller('footer', function($scope,$state,$cookieStore,$http,$uibModal,$rootScope,$timeout) {
    $rootScope.currentstate='';
    $rootScope.contractfooter='';
    if($state.current.name == 'core-competencies'){
        $rootScope.currentstate='core-competencies';
    }
    if($state.current.name == 'web-platform'){
        $rootScope.currentstate='web-platform';
    }
    if($state.current.name == 'business-modelling'){
        $rootScope.currentstate='business-modelling';
    }
    if($state.current.name == 'web-design'){
        $rootScope.currentstate='web-design';
    }
    if($state.current.name == 'content-writing'){
        $rootScope.currentstate='content-writing';
    }
    if($state.current.name == 'presence-developement'){
        $rootScope.currentstate='presence-developement';
    }

    if($state.current.name == 'custom-engineering'){
        $rootScope.currentstate='custom-engineering';
    }
    if($state.current.name == 'contract'){
        $rootScope.contractfooter='contract';
    }

console.log($rootScope.contractfooter);
    var modalInstance;
    $scope.contactsubmit=function(){
        $http({
            method: 'POST',
            async: false,
            url: $scope.adminUrl + 'addcontact',
            data    : $.param($scope.form),
            headers: {'Content-Type': 'application/x-www-form-urlencoded'}

        }).success(function (data) {
            modalInstance= $uibModal.open({
                animation: true,
                templateUrl: 'contact.html',
                controller: 'ModalInstanceCtrl',
                size: 'lg',
                 scope:$scope
            });

            $scope.contactform.reset();


           // modalInstance.opened.then(function() {
           //  });


 /*           $timeout(function(){
               // $scope.cancel1();
            },5000)
*/



        })



    }
    $scope.cancel1=function(){
        modalInstance.dismiss('cancel');
    }

    setTimeout(function(){

        $('.con').click(function(){

            $('html, body').animate({
                scrollTop: $('.homeformblock').offset().top
            }, 2000);


        })


    },2000)


    if(typeof($cookieStore.get('platformid'))!='undefined'){
        $rootScope.globalplatformid=$cookieStore.get('platformid');
    }
    console.log($scope.platformid);
    //$state.go('home');
    //return
});




influx.controller('admin_header', function($scope,$state,$cookieStore,$http,$rootScope) {

   if(typeof($cookieStore.get('userid')) == 'undefined') {
       $state.go('login');
   }
    if(angular.element('head').find('link[href="css/admin_style.css"]').length==0)angular.element('head').append('<link id="home" href="css/admin_style.css" rel="stylesheet">');

    $scope.sdfsdfsd = function(){
        if(angular.element( document.querySelector( 'body' ) ).hasClass('sidebar-collapse')){
            angular.element( document.querySelector( 'body' ) ).removeClass('sidebar-collapse');
        }else{
            angular.element( document.querySelector( 'body' ) ).addClass('sidebar-collapse');
        }
    }
    if(typeof($cookieStore.get('userid')) != 'undefined') {
        $scope.uid=$cookieStore.get('userid');
        $rootScope.userid=$cookieStore.get('userid');
    }
    if(typeof($cookieStore.get('userrole')) != 'undefined') {
        $scope.userrole=$cookieStore.get('userrole');
        $rootScope.userrole=$cookieStore.get('userrole');
    }

    $http({
        method  :   'POST',
        async   :   false,

        url :       $scope.adminUrl+'getuserinfo',
        data    : $.param({'uid':$rootScope.userid,'userrole':$rootScope.userrole}),
        headers :   { 'Content-Type': 'application/x-www-form-urlencoded' }

    }).success(function(data){

        $scope.userfullname=data.userdetails.fullname;
        $scope.timestring=data.userdetails.timestring;

    })


    $rootScope.signout=function(){

        $cookieStore.remove('userid');
        $cookieStore.remove('useremail');
        $cookieStore.remove('userfullname');
        $cookieStore.remove('username');
        $cookieStore.remove('userrole');
        $cookieStore.remove('timestring');
        $cookieStore.remove('created_time');
        $state.go('login');
    }
});
influx.controller('admin_left', function($scope,$state,$http,$cookieStore,$rootScope) {

})

influx.controller('login', function($scope,$state,$http,$cookieStore,$rootScope) {
    $scope.adminloginsubmit = function(){
        $rootScope.stateIsLoading = true;
        $http({
            method  : 'POST',
            async:   false,
            url     : $scope.adminUrl+'adminlogin',
            data    : $.param($scope.form),  // pass in data as strings
            headers : { 'Content-Type': 'application/x-www-form-urlencoded' }
        }) .success(function(data) {
            $rootScope.stateIsLoading = false;
            if(data.status == 'success'){
                $cookieStore.put('userid',data.userdetails.id);
                $cookieStore.put('useremail',data.userdetails.email);
                $cookieStore.put('userfullname',data.userdetails.fname+' '+data.userdetails.lname);
                $cookieStore.put('username',data.userdetails.username);

                if(typeof (data.userdetails.roles[4]) != 'undefined')
                    $cookieStore.put('userrole',4);
                if(typeof (data.userdetails.roles[5]) != 'undefined')
                    $cookieStore.put('userrole',5);
                if(typeof (data.userdetails.roles[6]) != 'undefined')
                    $cookieStore.put('userrole',6);
                if(typeof (data.userdetails.roles[7]) != 'undefined')
                    $cookieStore.put('userrole',7);
                console.log($cookieStore.get('userid'));
                console.log($cookieStore.get('useremail'));
                console.log($cookieStore.get('userfullname'));

                $state.go('dashboard');
            }
            else{
                $scope.errormsg = data.msg;
            }

        });
    }
});


influx.controller('forgotpassword', function($scope,$state,$http,$cookieStore,$rootScope) {
    $scope.forgotpasssubmit = function(){
        $rootScope.stateIsLoading = true;
        $http({
            method  : 'POST',
            async:   false,
            url     : $scope.adminUrl+'forgotpass',
            data    : $.param($scope.form),  // pass in data as strings
            headers : { 'Content-Type': 'application/x-www-form-urlencoded' }
        }) .success(function(data) {
            $rootScope.stateIsLoading = false;
            if(data.status == 'success'){
                 $cookieStore.put('user_id',data.userdetails.user_id);
                $cookieStore.put('user_email',data.userdetails.email);

                $rootScope.user_id=$cookieStore.get('user_id');
                $rootScope.user_email=$cookieStore.get('user_email');

               // console.log($rootScope.user_email);
               // console.log($rootScope.user_id);
                //console.log($rootScope.refferalcodes);

                $state.go('forgot-password-check');


            }else{
                $scope.errormsg = data.msg;
            }

        });
    }
});
influx.controller('forgotpasswordcheck', function($scope,$state,$http,$cookieStore,$rootScope) {
    $scope.form={email:$rootScope.user_email}
    $scope.forgotpasschecksubmit = function(){
        $rootScope.stateIsLoading = true;
        $http({
            method  : 'POST',
            async:   false,
            url     : $scope.adminUrl+'forgotpassaccesscheck',
            data    : $.param($scope.form),  // pass in data as strings
            headers : { 'Content-Type': 'application/x-www-form-urlencoded' }
        }) .success(function(data) {
            $rootScope.stateIsLoading = false;
            if(data.status == 'success'){
                   $state.go('change-password');
                  return

            }else{
                $scope.errormsg = data.msg;
            }

        });
    }
});

influx.controller('change_password', function($scope,$state,$http,$cookieStore,$rootScope) {
    $scope.form={email:$rootScope.user_email,user_id:$rootScope.user_id}
    $scope.changepassFormSubmit = function(){
        $rootScope.stateIsLoading = true;
        $http({
            method  : 'POST',
            async:   false,
            url     : $scope.adminUrl+'changepassword',
            data    : $.param($scope.form),  // pass in data as strings
            headers : { 'Content-Type': 'application/x-www-form-urlencoded' }
        }) .success(function(data) {
            $rootScope.stateIsLoading = false;
            if(data.status == 'success'){
                $state.go('login');
                return

            }else{
                $scope.errormsg = data.msg;
            }

        });
    }
});




influx.controller('adduser',function($scope,$state,$http,$cookieStore,$rootScope){
    $scope.addusersubmit=function() {


        $http({
            method  :   'POST',
            async   :   false,

            url :       $scope.adminUrl+'addadmin',
            data    : $.param($scope.form),
            headers :   { 'Content-Type': 'application/x-www-form-urlencoded' }

        }).success(function(){
            $state.go('user-list');

        })

    }
    $scope.genderValidator=function() {
        if ($scope.adduserform.$submitted) {

            if (typeof ($("input[name='gender']:checked").val()) != 'undefined') {
                $scope.gender_error = false;
                //console.log('in true');
                return true;
            }
            else {
                //console.log('in false');
                $scope.gender_error = true;
                return '';

            }

        }
    }


})

influx.controller('edituser', function($scope,$state,$http,$cookieStore,$rootScope,$stateParams){

    $scope.userid=$stateParams.userId;

    $http({
        method  : 'POST',
        async:   false,
        url     :     $scope.adminUrl+'admindetails',
        data    : $.param({'uid':$scope.userid}),  // pass in data as strings
        headers : { 'Content-Type': 'application/x-www-form-urlencoded' }
    }) .success(function(data) {

        $scope.form = {
            uid: data.uid,

            fname: data.fname,
            lname: data.lname,

            email: data.email,
            address: data.address,
            phone_no: data.phone_no,
            gender: data.gender,
            user_role: data.rid,
        }
    });
        $scope.editusersubmit = function () {

        $rootScope.stateIsLoading = true;
        $http({
            method  : 'POST',
            async:   false,
            url     : $scope.adminUrl+'adminupdates',
            data    : $.param($scope.form),  // pass in data as strings
            headers : { 'Content-Type': 'application/x-www-form-urlencoded' }
        }) .success(function(data) {
            $rootScope.stateIsLoading = false;
            $state.go('user-list');
            return
        });
    }


})

influx.controller('userprofile', function($scope,$state,$http,$cookieStore,$rootScope,$stateParams){

    if(typeof($cookieStore.get('userid')!='undefined')){
        $scope.userid=$cookieStore.get('userid');
    }


    $http({
        method  : 'POST',
        async:   false,
        url     :     $scope.adminUrl+'admindetails',
        data    : $.param({'uid':$scope.userid}),  // pass in data as strings
        headers : { 'Content-Type': 'application/x-www-form-urlencoded' }
    }) .success(function(data) {
        console.log(data);
        $scope.email=data.email;
        console.log($scope.email);
        $scope.fname=data.fname;
        $scope.lname=data.lname;
        $scope.address=data.address;
        $scope.phone_no=data.phone_no;
        $scope.user_role=data.rolename;
        $scope.gender=data.gender;

     });


})
influx.controller('edituserprofile', function($scope,$state,$http,$cookieStore,$rootScope,$stateParams){

    if(typeof($cookieStore.get('userid')!='undefined')){
        $scope.userid=$cookieStore.get('userid');
    }

    $http({
        method  : 'POST',
        async:   false,
        url     :     $scope.adminUrl+'admindetails',
        data    : $.param({'uid':$scope.userid}),  // pass in data as strings
        headers : { 'Content-Type': 'application/x-www-form-urlencoded' }
    }) .success(function(data) {

        $scope.form = {
            uid: data.uid,

            fname: data.fname,
            lname: data.lname,

            email: data.email,
            address: data.address,
            phone_no: data.phone_no,
            gender: data.gender,
            user_role: data.rid,
        }
    });
    $scope.edituserprofilesubmit = function () {

        $rootScope.stateIsLoading = true;
        $http({
            method  : 'POST',
            async:   false,
            url     : $scope.adminUrl+'adminupdates',
            data    : $.param($scope.form),  // pass in data as strings
            headers : { 'Content-Type': 'application/x-www-form-urlencoded' }
        }) .success(function(data) {
            $rootScope.stateIsLoading = false;
            $state.go('profile');
            return
        });
    }


})

influx.controller('userchangepassword', function($scope,$state,$http,$cookieStore,$rootScope) {
    if(typeof($cookieStore.get('userid')!='undefined')){
        $rootScope.user_id=  $cookieStore.get('userid');
    }
    if(typeof($cookieStore.get('useremail')!='undefined')){
        $rootScope.user_email=  $cookieStore.get('useremail');
    }

    $scope.form={email:$rootScope.user_email,user_id:$rootScope.user_id}
    $scope.profilechangepassFormSubmit = function(){
        $rootScope.stateIsLoading = true;
        $http({
            method  : 'POST',
            async:   false,
            url     : $scope.adminUrl+'changepassword',
            data    : $.param($scope.form),  // pass in data as strings
            headers : { 'Content-Type': 'application/x-www-form-urlencoded' }
        }) .success(function(data) {
            $rootScope.stateIsLoading = false;
            if(data.status == 'success'){
                $state.go('profile');
                return

            }else{
                $scope.errormsg = data.msg;
            }

        });
    }
});

influx.controller('userlist',function($scope,$state,$http,$cookieStore,$rootScope,$uibModal){
    $scope.predicate = 'uid';
    $scope.reverse = true;
    $scope.order = function(predicate) {
        $scope.reverse = ($scope.predicate === predicate) ? !$scope.reverse : false;
        $scope.predicate = predicate;
    };
    $scope.currentPage=1;
    $scope.perPage=10;

    $scope.totalItems = 0;

    $scope.filterResult = [];

$http({
    method:'POST',
    async:false,
    url:$scope.adminUrl+'adminlist',
    headers :   { 'Content-Type': 'application/x-www-form-urlencoded' }

}).success(function(data){
    $scope.userlist=data;
    $scope.getArray =data;
    $scope.filename='userlist';
})


    $scope.searchkey = '';
    $scope.search = function(item){

        if ( (item.fname.indexOf($scope.searchkey) != -1) || (item.lname.indexOf($scope.searchkey) != -1) ||(item.mail.indexOf($scope.searchkey) != -1)||(item.gender.indexOf($scope.searchkey) != -1)||(item.phone_no.indexOf($scope.searchkey) != -1) ||(item.address.indexOf($scope.searchkey) != -1)){
            return true;
        }
        return false;
    };

    $scope.deluser = function(item,size){

        $scope.currentindex=$scope.userlist.indexOf(item);

        $uibModal.open({
            animation: true,
            templateUrl: 'delconfirm.html',
            controller: 'ModalInstanceCtrl',
            size: size,
            scope:$scope
        });
    }



    $scope.changestatus = function(item){
        $rootScope.stateIsLoading = true;
        var idx = $scope.userlist.indexOf(item);
        $http({
            method  : 'POST',
            async:   false,
            url     : $scope.adminUrl+'adminupdatestatus',
            data    : $.param({uid: $scope.userlist[idx].uid}),  // pass in data as strings
            headers : { 'Content-Type': 'application/x-www-form-urlencoded' }
        }) .success(function(data) {
            $rootScope.stateIsLoading = false;
            if($scope.userlist[idx].status == 0){
                $scope.userlist[idx].status = 1;
            }else{
                $scope.userlist[idx].status = 0;
            }
        });
    }
})

influx.controller('addaffiliate',function($scope,$state,$http,$cookieStore,$rootScope){


    $scope.form={product_affiliate_code:'',seo_affiliate_code:'',service_affiliate_code:''}

    $scope.generate_product_code=function(){
        var str="", i=0, min=0, max=62;
        for(;i++<8;){
            var r = Math.random()*(max-min)+min <<0;
            str += String.fromCharCode(r+=r>9?r<36?55:61:48);
        }


         $scope.form.product_affiliate_code=str;
    }
   $scope.product_code_clear=function(){

       $scope.form.product_affiliate_code='';
   }

    $scope.generate_seo_code=function(){
        var str1="", j=0, min1=0, max1=62;
        for(;j++<8;){
            var r1 = Math.random()*(max1-min1)+min1 <<0;
            str1 += String.fromCharCode(r1+=1>9?r1<36?55:61:48);
        }



        $scope.form.seo_affiliate_code=str1;


    }
    $scope.seo_code_clear=function(){
        $scope.form.seo_affiliate_code='';
    }
    $scope.generate_service_code=function(){

        var str2="", k=0, min2=0, max2=62;
        for(;k++<8;){
            var r2 = Math.random()*(max2-min2)+min2 <<0;
            str2 += String.fromCharCode(r2+=r2>9?r2<36?55:61:48);
        }

        $scope.form.service_affiliate_code=str2;


    }
    $scope.service_code_clear=function(){
        $scope.form.service_affiliate_code='';
    }

    $scope.format = 'MM/dd/yyyy';
    $scope.open1 = function() {
        $scope.opened = true;
    };

    $scope.form={'affiliate_date':new Date()};

    $scope.addaffiliatesubmit=function() {


        $http({
            method  :   'POST',
            async   :   false,

            url :       $scope.adminUrl+'addaffiliate',
            data    : $.param($scope.form),
            headers :   { 'Content-Type': 'application/x-www-form-urlencoded' }

        }).success(function(){
            $state.go('affiliate-list');

        })

    }




})

influx.controller('editaffiliate', function($scope,$state,$http,$cookieStore,$rootScope,$stateParams){
    $scope.open1 = function() {
        $scope.opened = true;
    };

    $scope.id=$stateParams.id;

    $http({
        method  : 'POST',
        async:   false,
        url     :     $scope.adminUrl+'affiliatedetails',
        data    : $.param({'id':$scope.id}),  // pass in data as strings
        headers : { 'Content-Type': 'application/x-www-form-urlencoded' }
    }) .success(function(data) {

        $scope.form = {
            id: data.id,

            affiliate_name: data.affiliate_name,
            affiliate_email: data.affiliate_email,
            affiliate_date: new Date(data.affiliate_date),
            product_affiliate_code: data.product_affiliate_code,
            seo_affiliate_code: data.seo_affiliate_code,
            service_affiliate_code: data.service_affiliate_code,

        }
    });




    $scope.generate_product_code=function(){

        var str="", i=0, min=0, max=62;
        for(;i++<8;){
            var r = Math.random()*(max-min)+min <<0;
            str += String.fromCharCode(r+=r>9?r<36?55:61:48);
        }

        $scope.form.product_affiliate_code=str;
    }
    $scope.product_code_clear=function(){
        $scope.form.product_affiliate_code='';
    }

    $scope.generate_seo_code=function(){
        var str1="", j=0, min1=0, max1=62;
        for(;j++<8;){
            var r1 = Math.random()*(max1-min1)+min1 <<0;
            str1 += String.fromCharCode(r1+=1>9?r1<36?55:61:48);
        }


        $scope.form.seo_affiliate_code=str1;


    }
    $scope.seo_code_clear=function(){
        $scope.form.seo_affiliate_code='';
    }
    $scope.generate_service_code=function(){
        var str2="", k=0, min2=0, max2=62;
        for(;k++<8;){
            var r2 = Math.random()*(max2-min2)+min2 <<0;
            str2 += String.fromCharCode(r2+=r2>9?r2<36?55:61:48);
        }


        $scope.form.service_affiliate_code=str2;


    }
    $scope.service_code_clear=function(){
        $scope.form.service_affiliate_code='';
    }
    $scope.editaffiliatesubmit = function () {

        $rootScope.stateIsLoading = true;
        $http({
            method  : 'POST',
            async:   false,
            url     : $scope.adminUrl+'affiliateupdates',
            data    : $.param($scope.form),  // pass in data as strings
            headers : { 'Content-Type': 'application/x-www-form-urlencoded' }
        }) .success(function(data) {
            $rootScope.stateIsLoading = false;
            $state.go('affiliate-list');
            return
        });
    }


})

influx.controller('affiliatelist',function($scope,$state,$http,$cookieStore,$rootScope,$uibModal){
    $scope.predicate = 'id';
    $scope.reverse = true;
    $scope.order = function(predicate) {
        $scope.reverse = ($scope.predicate === predicate) ? !$scope.reverse : false;
        $scope.predicate = predicate;
    };
    $scope.currentPage=1;
    $scope.perPage=10;

    $scope.totalItems = 0;

    $scope.filterResult = [];

    $http({
        method:'POST',
        async:false,
        url:$scope.adminUrl+'affiliatelist',
        headers :   { 'Content-Type': 'application/x-www-form-urlencoded' }

    }).success(function(data){
        $scope.affiliatelist=data;
        $scope.getArray =data;
        $scope.filename='affiliatelist';

    })
    $scope.searchkey = '';
    $scope.search = function(item){

        if ( (item.affiliate_name.indexOf($scope.searchkey) != -1) || (item.affiliate_email.indexOf($scope.searchkey) != -1) ||(item.affiliate_date.indexOf($scope.searchkey) != -1)||(item.product_affiliate_code.indexOf($scope.searchkey) != -1)||(item.seo_affiliate_code.indexOf($scope.searchkey) != -1) ||(item.service_affiliate_code.indexOf($scope.searchkey) != -1)){
            return true;
        }
        return false;
    };

    $scope.delaffiliate = function(item,size){

        $scope.currentindex=$scope.affiliatelist.indexOf(item);

        $uibModal.open({
            animation: true,
            templateUrl: 'affiliatedelconfirm.html',
            controller: 'ModalInstanceCtrl',
            size: size,
            scope:$scope
        });
    }



    $scope.changestatus = function(item){
        $rootScope.stateIsLoading = true;
        var idx = $scope.userlist.indexOf(item);
        $http({
            method  : 'POST',
            async:   false,
            url     : $scope.adminUrl+'adminupdatestatus',
            data    : $.param({uid: $scope.userlist[idx].uid}),  // pass in data as strings
            headers : { 'Content-Type': 'application/x-www-form-urlencoded' }
        }) .success(function(data) {
            $rootScope.stateIsLoading = false;
            $scope.userlist[idx].status = !$scope.userlist[idx].status;
        });
    }

    $scope.productaffiliatecode = function(item,size){
    $scope.productcode=$scope.baseUrl+'affiliates/web-platform/'+item.product_affiliate_code;
        //$('.url_text').val('http://influx.spectrumiq.com/products/'+item.product_affiliate_code);
//console.log('http://influx.spectrumiq.com/products/'+item.product_affiliate_code);
        $uibModal.open({
            animation: true,
            templateUrl: 'productaffiliate.html',
            controller: 'ModalInstanceCtrl',
            size: size,
            scope:$scope
        });
    }

    $scope.seoaffiliatecode = function(item,size){
        $scope.seocode=$scope.baseUrl+'affiliates/content-writing/'+item.seo_affiliate_code;
        //$('.url_text').val('http://influx.spectrumiq.com/products/'+item.product_affiliate_code);
//console.log('http://influx.spectrumiq.com/products/'+item.product_affiliate_code);
        $uibModal.open({
            animation: true,
            templateUrl: 'seoaffiliate.html',
            controller: 'ModalInstanceCtrl',
            size: size,
            scope:$scope
        });
    }

    $scope.serviceaffiliatecode = function(item,size){
        $scope.servicecode=$scope.baseUrl+'affiliates/presence-developement/'+item.service_affiliate_code;
        //$('.url_text').val('http://influx.spectrumiq.com/products/'+item.product_affiliate_code);
//console.log('http://influx.spectrumiq.com/products/'+item.product_affiliate_code);
        $uibModal.open({
            animation: true,
            templateUrl: 'serviceaffiliate.html',
            controller: 'ModalInstanceCtrl',
            size: size,
            scope:$scope
        });
    }




})
influx.controller('affiliatetrack',function($scope,$state,$http,$cookieStore,$rootScope,$uibModal){
    $scope.predicate = 'id';
    $scope.reverse = true;
    $scope.order = function(predicate) {
        $scope.reverse = ($scope.predicate === predicate) ? !$scope.reverse : false;
        $scope.predicate = predicate;
    };
    $scope.currentPage=1;
    $scope.perPage=10;

    $scope.totalItems = 0;

    $scope.filterResult = [];

    $http({
        method:'POST',
        async:false,
        url:$scope.adminUrl+'affiliatetracklist',
        headers :   { 'Content-Type': 'application/x-www-form-urlencoded' }

    }).success(function(data){
        $scope.affiliatelist=data;
        $scope.getArray =data;
        $scope.filename='affiliatetrackinglist';


    })
    $scope.searchkey = '';
    $scope.search = function(item){

        if ( (item.affiliate_name.indexOf($scope.searchkey) != -1) || (item.id.indexOf($scope.searchkey) != -1) ||(item.total_hit.indexOf($scope.searchkey) != -1)){
            return true;
        }
        return false;
    };

})
influx.controller('affiliatetrackdetails',function($scope,$stateParams,$state,$http,$cookieStore,$rootScope,$uibModal){
    $scope.predicate = 'affiliate_hit_id';
    $scope.reverse = true;
    $scope.affiliate_id=$stateParams.affiliate_id;
    $scope.order = function(predicate) {
        $scope.reverse = ($scope.predicate === predicate) ? !$scope.reverse : false;
        $scope.predicate = predicate;
    };
    $scope.currentPage=1;
    $scope.perPage=10;

    $scope.totalItems = 0;

    $scope.filterResult = [];
    $scope.id=$stateParams.id;


    $http({
        method:'POST',
        async:false,
        url:$scope.adminUrl+'affiliatetrackdetailslist1',
        data    : $.param({'affiliate_id':$scope.affiliate_id}),
        headers :   { 'Content-Type': 'application/x-www-form-urlencoded' }

    }).success(function(data){
        $scope.affiliatelist=data;
        $scope.getArray =data;
        $scope.filename='affiliatetrackingdetailslist';


    })
    $scope.searchkey = '';
    $scope.search = function(item){

        if ( (item.affiliate_hit_id.indexOf($scope.searchkey) != -1) || (item.affiliate_hit_ip.indexOf($scope.searchkey) != -1) ||(item.affiliate_hit_type.indexOf($scope.searchkey) != -1)||(item.hit_time.indexOf($scope.searchkey) != -1)){
            return true;
        }
        return false;
    };

    $scope.affiliatehitdel=function(item,size){

        $scope.currentindex=$scope.affiliatelist.indexOf(item);
        $uibModal.open({
            animation: true,
            templateUrl: 'affiliatetrackdetailsdelconfirm.html',
            controller: 'ModalInstanceCtrl',
            size: size,
            scope:$scope
        });

    }

})




influx.controller('affiliates',function($scope,$window,$state,$http,$cookieStore,$rootScope,$uibModal,$stateParams){

    $scope.type=$stateParams.type;
    $scope.code=$stateParams.code;
    console.log($scope.type);
    console.log($scope.code);
    $cookieStore.put('affiliatetype',$scope.type);
    $cookieStore.put('affiliatecode',$scope.code);


    $http({
        method  : 'POST',
        async:   false,
        url     :     $scope.adminUrl+'addaffiliatehit',
        data    : $.param({'type':$scope.type,'code':$scope.code}),  // pass in data as strings
        headers : { 'Content-Type': 'application/x-www-form-urlencoded' }
    }) .success(function(data) {
        console.log(data.affiliate_hit_id);
        if(data.affiliate_hit_id>0){
            if($scope.type=='web-platform'){
                $window.location.href = $scope.baseUrl+'products';
            }

            if($scope.type=='presence-developement'){
                $window.location.href = $scope.baseUrl+'presence-developement';
            }

            if($scope.type=='content-writing'){
                $window.location.href = $scope.baseUrl+'content-writing';
            }


        }


      });



})

influx.controller('leadlist',function($scope,$state,$http,$cookieStore,$rootScope,$uibModal){
    $scope.predicate = 'fullname';
    $scope.reverse = true;
    $scope.order = function(predicate) {
        $scope.reverse = ($scope.predicate === predicate) ? !$scope.reverse : false;
        $scope.predicate = predicate;
    };
    $scope.currentPage=1;
    $scope.perPage=10;

    $scope.totalItems = 0;

    $scope.filterResult = [];

    $http({
        method:'POST',
        async:false,
        url:$scope.adminUrl+'contactlist',
        headers :   { 'Content-Type': 'application/x-www-form-urlencoded' }

    }).success(function(data){
        $scope.userlist=data;
        $scope.getArray =data;
        $scope.filename='leadlist';
    })


    $scope.searchkey = '';
    $scope.search = function(item){

        if ( (item.fullname.indexOf($scope.searchkey) != -1) || (item.email.indexOf($scope.searchkey) != -1) ||(item.phone_no.indexOf($scope.searchkey) != -1)||(item.message.indexOf($scope.searchkey) != -1) ||(item.contact_date.indexOf($scope.searchkey) != -1) ){
            return true;
        }
        return false;
    };

    $scope.dellead = function(item,size){

        $scope.currentindex=$scope.userlist.indexOf(item);

        $uibModal.open({
            animation: true,
            templateUrl: 'delcontactconfirm.html',
            controller: 'ModalInstanceCtrl',
            size: size,
            scope:$scope
        });
    }




})
influx.controller('orderlist',function($scope,$state,$http,$cookieStore,$rootScope,$uibModal){
    $scope.predicate = 'fullname';
    $scope.reverse = true;
    $scope.order = function(predicate) {
        $scope.reverse = ($scope.predicate === predicate) ? !$scope.reverse : false;
        $scope.predicate = predicate;
    };
    $scope.currentPage=1;
    $scope.perPage=10;

    $scope.totalItems = 0;

    $scope.filterResult = [];

    $http({
        method:'POST',
        async:false,
        url:$scope.adminUrl+'orderlist',
        headers :   { 'Content-Type': 'application/x-www-form-urlencoded' }

    }).success(function(data){
        $scope.orderlist=data;
    })


    $scope.searchkey = '';
    $scope.search = function(item){

        if ( (item.fullname.indexOf($scope.searchkey) != -1) || (item.email.indexOf($scope.searchkey) != -1) ||(item.phone.indexOf($scope.searchkey) != -1)||(item.orderdate.indexOf($scope.searchkey) != -1) ||(item.price.indexOf($scope.searchkey) != -1)||(item.signature.indexOf($scope.searchkey) != -1)){
            return true;
        }
        return false;
    };





})

influx.controller('addcategoryjungle',function($scope,$state,$http,$cookieStore,$rootScope){

    $http({
        method  :   'POST',
        async   :   false,

        url :       $scope.adminUrl+'parentcategorylist',
       // data    : $.param($scope.form),
        headers :   { 'Content-Type': 'application/x-www-form-urlencoded' }

    }).success(function(data){
        $scope.categorylist=data;

    })

    $scope.tinymceOptions = {
        trusted: true,
        theme: 'modern',
        plugins: [
            'advlist autolink link  lists charmap   hr anchor pagebreak spellchecker',
            'searchreplace wordcount visualblocks visualchars code  insertdatetime  nonbreaking',
            'save table contextmenu directionality  template paste textcolor'
        ],
        // toolbar: 'insertfile undo redo | styleselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link image | print preview media fullpage | forecolor backcolor emoticons',
        toolbar: ' undo redo | styleselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link  |   media fullpage | forecolor backcolor',
    };


    $scope.addcategorysubmit=function() {


        $http({
            method  :   'POST',
            async   :   false,

            url :       $scope.adminUrl+'addjunglecategory',
            data    : $.param($scope.form),
            headers :   { 'Content-Type': 'application/x-www-form-urlencoded' }

        }).success(function(){
            $state.go('jungle-category-list');

        })

    }




})
influx.controller('junglecategorylist',function($scope,$state,$http,$cookieStore,$rootScope,$uibModal,$sce){
    $scope.trustAsHtml=$sce.trustAsHtml;

    $scope.predicate = 'id';
    $scope.reverse = true;
    $scope.order = function(predicate) {
        $scope.reverse = ($scope.predicate === predicate) ? !$scope.reverse : false;
        $scope.predicate = predicate;
    };
    $scope.currentPage=1;
    $scope.perPage=2;

    $scope.totalItems = 0;

    $scope.filterResult = [];

    $http({
        method:'POST',
        async:false,
        url:$scope.adminUrl+'junglecategorylist',
        headers :   { 'Content-Type': 'application/x-www-form-urlencoded' }

    }).success(function(data){
        $scope.categorylist=data;


        angular.forEach($scope.categorylist,function(value,key){
            value.priority = parseInt(value.priority);
        })

    })
    $scope.searchkey = '';
    $scope.search = function(item){

        if ( (item.cat_name.indexOf($scope.searchkey) != -1) || (item.cat_desc.indexOf($scope.searchkey) != -1) || (item.type.indexOf($scope.searchkey) != -1) || (item.priority.indexOf($scope.searchkey) != -1)|| (item.status.indexOf($scope.searchkey) != -1) || (item.parent_cat_name.indexOf($scope.searchkey) != -1)){
            return true;
        }
        return false;
    };

    $scope.jungledelcategory = function(item,size){

        $scope.currentindex=$scope.categorylist.indexOf(item);

        $uibModal.open({
            animation: true,
            templateUrl: 'junglecategorydelconfirm.html',
            controller: 'ModalInstanceCtrl',
            size: size,
            scope:$scope
        });
    }

    $scope.changestatus = function(item,size){

        $scope.currentindex=$scope.categorylist.indexOf(item);

        $uibModal.open({
            animation: true,
            templateUrl: 'junglecategorystatusfirm.html',
            controller: 'ModalInstanceCtrl',
            size: size,
            scope:$scope
        });
    }



})

influx.controller('editcategoryjungle', function($scope,$state,$http,$cookieStore,$rootScope,$stateParams){

    $http({
        method  :   'POST',
        async   :   false,

        url :       $scope.adminUrl+'parentcategorylist',
        // data    : $.param($scope.form),
        headers :   { 'Content-Type': 'application/x-www-form-urlencoded' }

    }).success(function(data){
        $scope.categorylist=data;

    })

    $scope.id=$stateParams.id;

    $http({
        method  : 'POST',
        async:   false,
        url     :     $scope.adminUrl+'junglecategorydetails',
        data    : $.param({'id':$scope.id}),  // pass in data as strings
        headers : { 'Content-Type': 'application/x-www-form-urlencoded' }
    }) .success(function(data) {

        $scope.form = {
            id: data.id,

            cat_name: data.cat_name,
            cat_desc: data.cat_desc,
            parent_cat: {
                id:data.parent_cat
            },
            type: data.type,
            priority: data.priority,

        }
    });
    $scope.tinymceOptions = {
        trusted: true,
        theme: 'modern',
        plugins: [
            'advlist autolink link  lists charmap   hr anchor pagebreak spellchecker',
            'searchreplace wordcount visualblocks visualchars code  insertdatetime  nonbreaking',
            'save table contextmenu directionality  template paste textcolor'
        ],
        // toolbar: 'insertfile undo redo | styleselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link image | print preview media fullpage | forecolor backcolor emoticons',
        toolbar: ' undo redo | styleselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link  |   media fullpage | forecolor backcolor',
    };

    $scope.editcategorysubmit = function () {
console.log(1);
        $rootScope.stateIsLoading = true;
        $http({
            method  : 'POST',
            async:   false,
            url     : $scope.adminUrl+'junglecategoryupdates',
            data    : $.param($scope.form),  // pass in data as strings
            headers : { 'Content-Type': 'application/x-www-form-urlencoded' }
        }) .success(function(data) {
            $rootScope.stateIsLoading = false;
            $state.go('jungle-category-list');
            return;
        });
    }


})







/*

influx.controller('addproductjungle',function($scope,$state,$http,$cookieStore,$rootScope,Upload,$sce){
    $scope.trustAsHtml=$sce.trustAsHtml;
    $http({
        method  :   'POST',
        async   :   false,

        url :       $scope.adminUrl+'junglecategorylist',
        // data    : $.param($scope.form),
        headers :   { 'Content-Type': 'application/x-www-form-urlencoded' }

    }).success(function(data){
        $scope.categorylist=data;

    })

    $scope.tinymceOptions = {
        trusted: true,
        theme: 'modern',
        plugins: [
            'advlist autolink link  lists charmap   hr anchor pagebreak spellchecker',
            'searchreplace wordcount visualblocks visualchars code  insertdatetime  nonbreaking',
            'save table contextmenu directionality  template paste textcolor'
        ],
        // toolbar: 'insertfile undo redo | styleselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link image | print preview media fullpage | forecolor backcolor emoticons',
        toolbar: ' undo redo | styleselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link  |   media fullpage | forecolor backcolor',
    };


    $scope.product_video_src='';
    $scope.product_img_src='';

    $scope.form= {product_file:''};
    $scope.getReqParams = function () {
        return $scope.generateErrorOnServer ? '?errorCode=' + $scope.serverErrorCode +
        '&errorMessage=' + $scope.serverErrorMsg : '';
    };

    $scope.$watch('product_upload', function (files) {
        $('.errormsg').html('');
        $scope.formUpload = false;
        if (files != null) {
            for (var i = 0; i < files.length; i++) {
                $scope.errorMsg = null;
                (function (file) {
                    upload(file);
                })(files[i]);
            }
        }
    });


    function upload(file) {
        $scope.errorMsg = null;
        uploadUsingUpload(file);
    }

    function uploadUsingUpload(file) {

        $('#loaderDiv').addClass('ng-hide');
        file.upload = Upload.upload({
            url: $scope.adminUrl+'uploadjungleproductimage' + $scope.getReqParams(),
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
            },
            fields: {'id':$rootScope.createIdeaId},
            file: file,
            fileFormDataName: 'Filedata'
        });

        file.upload.then(function (response) {
            // console.log(response.data.status);
            if(response.data.status=='error'){
                $('.errormsg').html('Invalid file type.');
            }
            else {
                $('.progress').removeClass('ng-hide');
                file.result = response.data;
                if(response.data.video_url!='') {
                    $sce.trustAsResourceUrl(response.data.video_url);
                    $scope.product_video_src = response.data.video_url;
                }
                if(response.data.image_url!='') {
                    $scope.product_img_src = response.data.image_url;
                }

                $scope.form.


                    = response.data.image_name;
                console.log($scope.product_video_src);

                if(typeof($scope.product_video_src)!='undefined') {

                    console.log(11);
                    setTimeout(function () {

                        angular.element(document.querySelector('#maintvDiv')).html('<video id="maintvVideo" volume="0" width="100%" height="100%" autoplay loop muted controls>\
            <source src="' + $scope.product_video_src + '" type="video/mp4">\
            </video>');
                    }, 2000);

                }



            }


        }, function (response) {
            console.log(response.status);
            if(response.data.status>0) {

                //  $scope.errorMsg = response.status + ': ' + response.data;
            }

        });

        file.upload.progress(function (evt) {
            // Math.min is to fix IE which reports 200% sometimes
            $('#loaderDiv').removeClass('ng-hide');

            file.progress = Math.min(100, parseInt(100.0 * evt.loaded / evt.total));

        });

        file.upload.xhr(function (xhr) {
            // xhr.upload.addEventListener('abort', function(){console.log('abort complete')}, false);
        });
    }


console.log($scope.product_video_src);



    $scope.addcategorysubmit=function() {


        $http({
            method  :   'POST',
            async   :   false,

            url :       $scope.adminUrl+'addjunglecategory',
            data    : $.param($scope.form),
            headers :   { 'Content-Type': 'application/x-www-form-urlencoded' }

        }).success(function(){
            $state.go('jungle-category-list');

        })

    }




})
influx.controller('jungleproductlist',function($scope,$state,$http,$cookieStore,$rootScope,$uibModal,$sce){
    $scope.trustAsHtml=$sce.trustAsHtml;

    $scope.predicate = 'id';
    $scope.reverse = true;
    $scope.order = function(predicate) {
        $scope.reverse = ($scope.predicate === predicate) ? !$scope.reverse : false;
        $scope.predicate = predicate;
    };
    $scope.currentPage=1;
    $scope.perPage=10;

    $scope.totalItems = 0;

    $scope.filterResult = [];

    $http({
        method:'POST',
        async:false,
        url:$scope.adminUrl+'junglecategorylist',
        headers :   { 'Content-Type': 'application/x-www-form-urlencoded' }

    }).success(function(data){
        $scope.categorylist=data;
    })
    $scope.searchkey = '';
    $scope.search = function(item){

        if ( (item.cat_name.indexOf($scope.searchkey) != -1) || (item.cat_desc.indexOf($scope.searchkey) != -1) || (item.type.indexOf($scope.searchkey) != -1) || (item.priority.indexOf($scope.searchkey) != -1)|| (item.status.indexOf($scope.searchkey) != -1) || (item.parent_cat_name.indexOf($scope.searchkey) != -1)){
            return true;
        }
        return false;
    };

    $scope.jungledelcategory = function(item,size){

        $scope.currentindex=$scope.categorylist.indexOf(item);

        $uibModal.open({
            animation: true,
            templateUrl: 'junglecategorydelconfirm.html',
            controller: 'ModalInstanceCtrl',
            size: size,
            scope:$scope
        });
    }

    $scope.changestatus = function(item,size){

        $scope.currentindex=$scope.categorylist.indexOf(item);

        $uibModal.open({
            animation: true,
            templateUrl: 'junglecategorystatusfirm.html',
            controller: 'ModalInstanceCtrl',
            size: size,
            scope:$scope
        });
    }



})

influx.controller('editproductjungle', function($scope,$state,$http,$cookieStore,$rootScope,$stateParams){

    $http({
        method  :   'POST',
        async   :   false,

        url :       $scope.adminUrl+'parentcategorylist',
        // data    : $.param($scope.form),
        headers :   { 'Content-Type': 'application/x-www-form-urlencoded' }

    }).success(function(data){
        $scope.categorylist=data;

    })

    $scope.id=$stateParams.id;

    $http({
        method  : 'POST',
        async:   false,
        url     :     $scope.adminUrl+'junglecategorydetails',
        data    : $.param({'id':$scope.id}),  // pass in data as strings
        headers : { 'Content-Type': 'application/x-www-form-urlencoded' }
    }) .success(function(data) {

        $scope.form = {
            id: data.id,

            cat_name: data.cat_name,
            cat_desc: data.cat_desc,
            parent_cat: {
                id:data.parent_cat
            },
            type: data.type,
            priority: data.priority,

        }
    });
    $scope.tinymceOptions = {
        trusted: true,
        theme: 'modern',
        plugins: [
            'advlist autolink link  lists charmap   hr anchor pagebreak spellchecker',
            'searchreplace wordcount visualblocks visualchars code  insertdatetime  nonbreaking',
            'save table contextmenu directionality  template paste textcolor'
        ],
        // toolbar: 'insertfile undo redo | styleselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link image | print preview media fullpage | forecolor backcolor emoticons',
        toolbar: ' undo redo | styleselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link  |   media fullpage | forecolor backcolor',
    };

    $scope.editcategorysubmit = function () {
        console.log(1);
        $rootScope.stateIsLoading = true;
        $http({
            method  : 'POST',
            async:   false,
            url     : $scope.adminUrl+'junglecategoryupdates',
            data    : $.param($scope.form),  // pass in data as strings
            headers : { 'Content-Type': 'application/x-www-form-urlencoded' }
        }) .success(function(data) {
            $rootScope.stateIsLoading = false;
            $state.go('jungle-category-list');
            return;
        });
    }


})
*/


influx.controller('addcategory',function($scope,$state,$http,$cookieStore,$rootScope){
    $scope.addcategorysubmit=function() {


        $http({
            method  :   'POST',
            async   :   false,

            url :       $scope.adminUrl+'addcategory',
            data    : $.param($scope.form),
            headers :   { 'Content-Type': 'application/x-www-form-urlencoded' }

        }).success(function(){
            $state.go('category-list');

        })

    }




})



influx.controller('editcategory', function($scope,$state,$http,$cookieStore,$rootScope,$stateParams){


    $scope.id=$stateParams.id;

    $http({
        method  : 'POST',
        async:   false,
        url     :     $scope.adminUrl+'categorydetails',
        data    : $.param({'id':$scope.id}),  // pass in data as strings
        headers : { 'Content-Type': 'application/x-www-form-urlencoded' }
    }) .success(function(data) {

        $scope.form = {
            id: data.id,

            category_name: data.category_name,
        }
    });
    $scope.editcategorysubmit = function () {

        $rootScope.stateIsLoading = true;
        $http({
            method  : 'POST',
            async:   false,
            url     : $scope.adminUrl+'categoryupdates',
            data    : $.param($scope.form),  // pass in data as strings
            headers : { 'Content-Type': 'application/x-www-form-urlencoded' }
        }) .success(function(data) {
            $rootScope.stateIsLoading = false;
            $state.go('category-list');
            return
        });
    }


})

influx.controller('categorylist',function($scope,$state,$http,$cookieStore,$rootScope,$uibModal){
    $scope.predicate = 'id';
    $scope.reverse = true;
    $scope.order = function(predicate) {
        $scope.reverse = ($scope.predicate === predicate) ? !$scope.reverse : false;
        $scope.predicate = predicate;
    };
    $scope.currentPage=1;
    $scope.perPage=10;

    $scope.totalItems = 0;

    $scope.filterResult = [];

    $http({
        method:'POST',
        async:false,
        url:$scope.adminUrl+'categorylist',
        headers :   { 'Content-Type': 'application/x-www-form-urlencoded' }

    }).success(function(data){
        $scope.categorylist=data;
    })
    $scope.searchkey = '';
    $scope.search = function(item){

        if ( (item.category_name.indexOf($scope.searchkey) != -1)){
            return true;
        }
        return false;
    };

    $scope.delcategory = function(item,size){

        $scope.currentindex=$scope.categorylist.indexOf(item);

        $uibModal.open({
            animation: true,
            templateUrl: 'categorydelconfirm.html',
            controller: 'ModalInstanceCtrl',
            size: size,
            scope:$scope
        });
    }


})
influx.controller('addproduct',function($scope,$state,$http,$cookieStore,$rootScope,Upload,$compile){
    $scope.id=1;
    $http({
        method: 'POST',
        async: false,
        url: $scope.adminUrl + 'productnamelist',
        data    : $.param({'id':$scope.id}),
        headers: {'Content-Type': 'application/x-www-form-urlencoded'}

    }).success(function (data) {
        console.log(data);
        $scope.productnamelist = data;
    })


    $http({
        method:'POST',
        async:false,
        url:$scope.adminUrl+'categorylist',
        headers :   { 'Content-Type': 'application/x-www-form-urlencoded' }

    }).success(function(data){
        $scope.categorylist=data;
    })
    $scope.selectAction=function(){

        $compile($('form').html())($scope);
 //   var current_category=$scope.form.category_id.id;
    //$scope.addproductform.reset();
      //  $scope.form={product_name:'',category_id:{id:current_category}}
    }


    $scope.platformValidator=function() {
        if ($scope.addproductform.$submitted) {

            if (typeof ($("input[name='plaform_id']:checked").val()) != 'undefined') {
                $scope.platform_error = false;
                //console.log('in true');
                return true;
            }
            else {
                //console.log('in false');
                $scope.platform_error = true;
                return '';

            }

        }
    }



    $scope.form= {product_image:''};
    $scope.getReqParams = function () {
        return $scope.generateErrorOnServer ? '?errorCode=' + $scope.serverErrorCode +
        '&errorMessage=' + $scope.serverErrorMsg : '';
    };

    $scope.$watch('product_imgupload', function (files) {
        $('.errormsg').html('');
        $scope.formUpload = false;
        if (files != null) {
            for (var i = 0; i < files.length; i++) {
                $scope.errorMsg = null;
                (function (file) {
                    upload(file);
                })(files[i]);
            }
        }
    });


    function upload(file) {
        $scope.errorMsg = null;
        uploadUsingUpload(file);
    }

    function uploadUsingUpload(file) {

        $('#loaderDiv').addClass('ng-hide');
        file.upload = Upload.upload({
            url: $scope.adminUrl+'uploadproductimage' + $scope.getReqParams(),
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
            },
            fields: {'id':$rootScope.createIdeaId},
            file: file,
            fileFormDataName: 'Filedata'
        });

        file.upload.then(function (response) {
            // console.log(response.data.status);
            if(response.data.status=='error'){
                $('.errormsg').html('Invalid file type.');
            }
            else {
                $('.progress').removeClass('ng-hide');
                file.result = response.data;

                $scope.product_img_src = response.data.image_url;
                $scope.form.product_image = response.data.image_name;

                $('#loaderDiv').addClass('ng-hide');
            }


        }, function (response) {
            console.log(response.status);
            if(response.data.status>0) {

                //  $scope.errorMsg = response.status + ': ' + response.data;
            }

        });

        file.upload.progress(function (evt) {
            // Math.min is to fix IE which reports 200% sometimes
            $('#loaderDiv').removeClass('ng-hide');

            file.progress = Math.min(100, parseInt(100.0 * evt.loaded / evt.total));

        });

        file.upload.xhr(function (xhr) {
            // xhr.upload.addEventListener('abort', function(){console.log('abort complete')}, false);
        });
    }


/*=======================Start Upload icon ============================*/

    $scope.$watch('product_iconupload', function (files) {
        $('.errormsg').html('');
        $scope.formUpload = false;
        if (files != null) {
            for (var i = 0; i < files.length; i++) {
                $scope.errorMsg = null;
                (function (file) {
                    iconupload(file);
                })(files[i]);
            }
        }
    });


    function iconupload(file) {
        $scope.errorMsg = null;
        iconuploadUsingUpload(file);
    }

    function iconuploadUsingUpload(file) {

        $('#loaderDiv').addClass('ng-hide');
        file.upload = Upload.upload({
            url: $scope.adminUrl+'uploadproducticon' + $scope.getReqParams(),
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
            },
            fields: {'id':$rootScope.createIdeaId},
            file: file,
            fileFormDataName: 'Filedata'
        });

        file.upload.then(function (response) {
            // console.log(response.data.status);
            if(response.data.status=='error'){
                $('.errormsg').html('Invalid file type.');
            }
            else {
                $('.progress').removeClass('ng-hide');
                file.result = response.data;

                $scope.product_icon_src = response.data.icon_url;
                $scope.form.product_icon = response.data.icon_name;

                $('#loaderDiv').addClass('ng-hide');
            }


        }, function (response) {
            console.log(response.status);
            if(response.data.status>0) {

                //  $scope.errorMsg = response.status + ': ' + response.data;
            }

        });

        file.upload.progress(function (evt) {
            // Math.min is to fix IE which reports 200% sometimes
            $('#loaderDiv').removeClass('ng-hide');

            file.progress = Math.min(100, parseInt(100.0 * evt.loaded / evt.total));

        });

        file.upload.xhr(function (xhr) {
            // xhr.upload.addEventListener('abort', function(){console.log('abort complete')}, false);
        });
    }


    /*=======================End Upload icon ============================*/

    $scope.product_name='';
    $scope.product_validation_meassage='';
    $scope.productprice_label='';
    $scope.get_product_name=function(id){

        if(id==1) {
            $scope.product_name='Platform';

        }
        else if(id==2){
            $scope.product_name='Design';
        }
        else if(id==3){
            $scope.product_name='Content';
        }
        else if(id==4){
            $scope.product_name='Marketting';
        }
        return $scope.product_name;

    }
    $scope.get_productprice_label=function(id){

        if(id==1) {
            $scope.productprice_labell='Platform Cost';

        }
        else if(id==2){
            $scope.productprice_labell='Price';
        }
        return $scope.productprice_labell;
    }
    $scope.customproductvalidator=function() {
        //$scope.addproductform.reset();

        if ($('input[name="product_name"]').val().length <1) {

            console.log($scope.form.category_id.id);
            console.log($scope.form.category_id.category_name);
            console.log($scope.form.product_name);

            //$scope.form.product_name=4;
            //$scope.form.product_name='';
            //setTimeout(function(){
            console.log($scope.form.product_name);
            //$scope.form.product_name=null;

            $scope.addproductform.product_name.$dirty=false;
            $scope.addproductform.product_name.$dirty=true;
            $scope.addproductform.product_name.$setDirty();
            //$scope.addproductform.product_name.$setViewValue('');


            $('input[name="product_name"]').val('');



            // },200);

            var msg = '';
            msg = $scope.form.category_id.category_name + " name can not be blank";
            //return $scope.form.category_id.category_name + " name can not be blank";
            return msg;

            //$('input[name="product_name"]').val(8);
            //$('input[name="product_name"]').val('');




        }
        return true;
    }
    /*  $scope.get_product_validation=function(id) {
     $scope.error='';
     console.log(id);
     // if (typeof(category) != 'undefined') {

     // if (product == '') {


     if (id == 1) {
     $scope.error= "Platform name can not be blank";
     }

     if (id == 2) {
     $scope.error=  "Design name can not be blank";
     }

     if (id == 3) {
     $scope.error=  "Content name can not be blank";
     }

     if (id == 4) {
     $scope.error=  "Marketting name can not be blank";
     }
     // }
     return $scope.error ;

     //}
     }*/


    $scope.choices = [{id: 'choice1'}];

    $scope.addFeature = function(item) {
        var newItemNo = $scope.choices.length+1;
        $scope.choices.push({'id':'choice'+newItemNo});
    };

    $scope.deleteFeature = function() {
        if($scope.choices.length>1) {
            var lastItem = $scope.choices.length - 1;
            $scope.choices.splice(lastItem);
        }
    };
    $scope.packages = [{id: 'package1'}];
    $scope.addPackage = function() {
        var newItemNo = $scope.packages.length+1;
        $scope.packages.push({'id':'package1'+newItemNo});
    };
    $scope.deletePackage = function() {
        if($scope.packages.length>1) {
            var lastItem = $scope.packages.length - 1;
            $scope.packages.splice(lastItem);
        }
    };

    $scope.onpackages = [{id: 'onpackage'}];
    $scope.addOnPackage = function() {
        var newItemNo = $scope.onpackages.length+1;
        $scope.onpackages.push({'id':'onpackag'+newItemNo});
    };
    $scope.deleteOnPackage = function() {
        if($scope.onpackages.length>1) {
            var lastItem = $scope.onpackages.length - 1;
            $scope.onpackages.splice(lastItem);
        }
    };
    $scope.ofpackages = [{id: 'ofpackage'}];
    $scope.addOffPackage = function() {
        var newItemNo = $scope.ofpackages.length+1;
        $scope.ofpackages.push({'id':'ofpackage'+newItemNo});
    };
    $scope.deleteOffPackage = function() {
        if($scope.ofpackages.length>1) {
            var lastItem = $scope.ofpackages.length - 1;
            $scope.ofpackages.splice(lastItem);
        }
    };

    $scope.tinymceOptions = {
        trusted: true,
        theme: 'modern',
        plugins: [
            'advlist autolink link  lists charmap   hr anchor pagebreak spellchecker',
            'searchreplace wordcount visualblocks visualchars code  insertdatetime  nonbreaking',
            'save table contextmenu directionality  template paste textcolor'
        ],
        // toolbar: 'insertfile undo redo | styleselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link image | print preview media fullpage | forecolor backcolor emoticons',
        toolbar: ' undo redo | styleselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link  |   media fullpage | forecolor backcolor',
    };


    $scope.addproductsubmit=function() {

        $http({
            method  : 'POST',
            async:   false,
            url     : $scope.adminUrl+'addproduct',
            data    : $.param($scope.form),  // pass in data as strings
            headers : { 'Content-Type': 'application/x-www-form-urlencoded' }
        }) .success(function(data) {
            $rootScope.stateIsLoading = false;
            $state.go('product-list');
            return;
        });




    }




})
influx.controller('productlist',function($scope,$state,$http,$cookieStore,$rootScope,$uibModal,$sce){
    $scope.trustAsHtml=$sce.trustAsHtml;
    $scope.search_category_id = 1;
    $scope.cat=$scope.search_category_id;
    $http({
        method:'POST',
        async:false,
        url:$scope.adminUrl+'categorylist',
        headers :   { 'Content-Type': 'application/x-www-form-urlencoded' }

    }).success(function(data){
        $scope.categorylist=data;
        $scope.search_category_id = 1;
        $scope.cat=$scope.search_category_id;
    })

    $scope.predicate = 'id';
    $scope.reverse = true;
    $scope.order = function(predicate) {
        $scope.reverse = ($scope.predicate === predicate) ? !$scope.reverse : false;
        $scope.predicate = predicate;
    };
    $scope.currentPage=1;
    $scope.perPage=10;

    $scope.totalItems = 0;

    $scope.filterResult = [];

    $http({
        method:'POST',
        async:false,
        url:$scope.adminUrl+'productlist',
        data    : $.param({'category_id':$scope.search_category_id}),
        headers :   { 'Content-Type': 'application/x-www-form-urlencoded' }

    }).success(function(data){
        $scope.productlist=data;
    })
 /*   $scope.searchkey = '';
    $scope.search = function(item){

        if ( (item.category_name.indexOf($scope.searchkey) != -1)){
            return true;
        }
        return false;
    };

*/    $scope.delproduct = function(item,size){

        $scope.currentindex=$scope.productlist.indexOf(item);

        $uibModal.open({
            animation: true,
            templateUrl: 'productdelconfirm.html',
            controller: 'ModalInstanceCtrl',
            size: size,
            scope:$scope
        });
    }

    $scope.categoryChange=function(){
        $scope.cat=$scope.search_category_id;
        $http({
            method:'POST',
            async:false,
            url:$scope.adminUrl+'productlist',
            data    : $.param({'category_id':$scope.search_category_id}),
            headers :   { 'Content-Type': 'application/x-www-form-urlencoded' }

        }).success(function(data){
            $scope.productlist=data;
        })

    }
    $scope.changestatus = function(item){
        $rootScope.stateIsLoading = true;
        var idx = $scope.productlist.indexOf(item);
        $http({
            method  : 'POST',
            async:   false,
            url     : $scope.adminUrl+'productupdatestatus',
            data    : $.param({id: $scope.productlist[idx].id}),  // pass in data as strings
            headers : { 'Content-Type': 'application/x-www-form-urlencoded' }
        }) .success(function(data) {
            $rootScope.stateIsLoading = false;

            if($scope.productlist[idx].status == 0){
                $scope.productlist[idx].status = 1;
            }else{
                $scope.productlist[idx].status = 0;
            }
        });
    }


})

influx.controller('addcontract',function($scope,$state,$http,$cookieStore,$rootScope,$stateParams) {
    $scope.productname='';
    $scope.id=$stateParams.id;
    console.log($scope.id);
    $http({
        method: 'POST',
        async: false,
        url: $scope.adminUrl + 'productname',
        data    : $.param({'id':$scope.id}),
        headers: {'Content-Type': 'application/x-www-form-urlencoded'}

    }).success(function (data) {
        $scope.productname = data.product_name;
        $scope.form = {
            id: $scope.id,contract:data.contract,
        }
    })


    $scope.tinymceOptions = {
        trusted: true,
        theme: 'modern',
        plugins: [
            'advlist autolink link  lists charmap   hr anchor pagebreak spellchecker',
            'searchreplace wordcount visualblocks visualchars code  insertdatetime  nonbreaking',
            'save table contextmenu directionality  template paste textcolor'
        ],
        // toolbar: 'insertfile undo redo | styleselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link image | print preview media fullpage | forecolor backcolor emoticons',
        toolbar: ' undo redo | styleselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link  |   media fullpage | forecolor backcolor',
        force_p_newlines : false,
        forced_root_block:'',
        extended_valid_elements : "label,span"


    };
    $scope.addcontractsubmit=function(){

        $http({
            method  : 'POST',
            async:   false,
            url     : $scope.adminUrl+'addcontract',
            data    : $.param($scope.form),  // pass in data as strings
            headers : { 'Content-Type': 'application/x-www-form-urlencoded' }
        }) .success(function(data) {
            $rootScope.stateIsLoading = false;
            $state.go('product-list');
            return
        });

    }
})
influx.controller('productcontract',function($scope,$state,$http,$cookieStore,$rootScope,$stateParams,$sce) {
    $scope.trustAsHtml=$sce.trustAsHtml;
    $scope.id=1;
/*
    $scope.tinymceOptions = {
        trusted: true,
        theme: 'modern',
        plugins: [
            'advlist autolink link  lists charmap   hr anchor pagebreak spellchecker',
            'searchreplace wordcount visualblocks visualchars code  insertdatetime  nonbreaking',
            'save table contextmenu directionality  template paste textcolor'
        ],
        // toolbar: 'insertfile undo redo | styleselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link image | print preview media fullpage | forecolor backcolor emoticons',
        toolbar: ' undo redo | styleselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link  |   media fullpage | forecolor backcolor',
    };
*/

        $http({
            method  : 'POST',
            async:   false,
            url     : $scope.adminUrl+'getproductcontract',
            data    : $.param({'id':$scope.id}),
            headers : { 'Content-Type': 'application/x-www-form-urlencoded' }
        }) .success(function(data) {
            $rootScope.stateIsLoading = false;
           // $state.go('product-list');
            $scope.productcontarct=data;
           // return
        });


})

influx.controller('editproductcontract',function($scope,$state,$http,$cookieStore,$rootScope,$stateParams,$sce) {
    $scope.trustAsHtml=$sce.trustAsHtml;
    $scope.id=$stateParams.id;
    $scope.content_type=$stateParams.content_type;
     $scope.tinymceOptions = {
     trusted: true,
     theme: 'modern',
     plugins: [
     'advlist autolink link  lists charmap   hr anchor pagebreak spellchecker',
     'searchreplace wordcount visualblocks visualchars code  insertdatetime  nonbreaking',
     'save table contextmenu directionality  template paste textcolor'
     ],
     // toolbar: 'insertfile undo redo | styleselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link image | print preview media fullpage | forecolor backcolor emoticons',
     toolbar: ' undo redo | styleselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link  |   media fullpage | forecolor backcolor',

         force_p_newlines : false,
         forced_root_block:'',
         extended_valid_elements : "label,span[style]"
     };


    $http({
        method  : 'POST',
        async:   false,
        url     : $scope.adminUrl+'getproductcontract',
        data    : $.param({'id':$scope.id}),
        headers : { 'Content-Type': 'application/x-www-form-urlencoded' }
    }) .success(function(data) {
        $rootScope.stateIsLoading = false;

        if($scope.content_type==1){
            $scope.contentheading='Header' ;

            $scope.form = {dynamiccontent:data.header,content_type:$scope.content_type};

        }
        if($scope.content_type==2){
            $scope.contentheading='Terms & Conditions' ;

            $scope.form = {dynamiccontent:data.terms_conditions,content_type:$scope.content_type};
        }
        if($scope.content_type==3){
            $scope.contentheading='Footer' ;


            $scope.form = {dynamiccontent:data.footer,content_type:$scope.content_type,id:$scope.id};
        }
        $scope.productcontractsubmit=function() {
            $http({
                method: 'POST',
                async: false,
                url: $scope.adminUrl + 'productcontracupdate',
                data: $.param($scope.form),
                headers: {'Content-Type': 'application/x-www-form-urlencoded'}

            }).success(function (data) {
                $state.go('product-contract');
                return
            })
        }

            // return
    });


})







influx.controller('editproduct',function($scope,$state,$http,$cookieStore,$rootScope,$stateParams,Upload) {
    $scope.id=$stateParams.id;
    $scope.id1=1;

    $scope.category_id=$stateParams.category_id;


    $http({
        method: 'POST',
        async: false,
        url: $scope.adminUrl + 'productnamelist',
        data    : $.param({'id':$scope.id1}),
        headers: {'Content-Type': 'application/x-www-form-urlencoded'}

    }).success(function (data1) {
        //console.log(data);
        $scope.productnamelist = data1;



        $http({
            method: 'POST',
            async: false,
            url: $scope.adminUrl + 'productdetails',
            data    : $.param({'id':$scope.id,category_id:$scope.category_id}),
            headers: {'Content-Type': 'application/x-www-form-urlencoded'}

        }).success(function (data) {
            $scope.category_name = data.category_name;
            $scope.product_img_src = data.image_url;
            $scope.product_icon_src = data.icon_url;
            $scope.choices = data.product_feature;
            $scope.packages = data.product_package;
            $scope.ofpackages = data.product_package_off;
            $scope.onpackages = data.product_package_on;

            $scope.fetaures=[];
            $scope.duration=[];
            $scope.price=[];
            $scope.duration_off_page=[];
            $scope.price_off_page=[];
            $scope.duration_on_page=[];
            $scope.price_on_page=[];
            angular.forEach(data.product_feature, function(value, key){

                $scope.fetaures.push(value);

            });
            angular.forEach(data.product_package, function(value, key){

                $scope.duration.push(value.duration);

            });
            angular.forEach(data.product_package, function(value, key){

                $scope.price.push(value.price);

            });

            angular.forEach($scope.ofpackages, function(value, key){

                $scope.duration_off_page.push(value.duration);

            });
            angular.forEach($scope.ofpackages, function(value, key){

                $scope.price_off_page.push(value.price);

            });
            angular.forEach($scope.onpackages, function(value, key){

                $scope.duration_on_page.push(value.duration);

            });
            angular.forEach($scope.onpackages, function(value, key){

                $scope.price_on_page.push(value.price);

            });


            $scope.form = {
                id: $scope.id,
                contract:data.contract,
                category_id:data.category_id,
                product_price:data.product_price,
                product_name:data.product_name,
                product_short_name:data.product_short_name,
                coding_only_price:data.coding_only_price,
                page_range_start:data.page_range_start,
                page_range_end:data.page_range_end,
                product_description:data.product_description,
                transaction_charge:data.transaction_charge,
                per_transaction:data.per_transaction,
                monthly_hosting:data.monthly_hosting,
                product_feature:$scope.fetaures,
                duration:$scope.duration,
                price:$scope.price,
                duration_off_page:$scope.duration_off_page,
                price_off_page:$scope.price_off_page,
                duration_on_page:$scope.duration_on_page,
                price_on_page:$scope.price_on_page,

                product_feature_title:data.product_feature_title,
                product_image:data.product_image,
                product_icon:data.product_icon,
                colour:data.colour,
                platform_id:data.platform_id,
            }



        })



    })


    $scope.addFeature = function(item) {
        var newItemNo = $scope.choices.length+1;
        $scope.choices.push({'id':'choice'+newItemNo});
    };

    $scope.deleteFeature = function(item) {
        if($scope.choices.length>1) {
            var lastItem = $scope.choices.length - 1;
            $scope.choices.splice(lastItem);
            $scope.form.product_feature.splice(lastItem);

        }
    };


    $scope.addPackage = function() {
        var newItemNo = $scope.packages.length+1;
        $scope.packages.push({'id':'package1'+newItemNo});
    };
    $scope.deletePackage = function() {
        if($scope.packages.length>1) {
            var lastItem = $scope.packages.length - 1;
            console.log($scope.form.duration);
            console.log(lastItem);

            $scope.packages.splice(lastItem);
            $scope.form.duration.splice(lastItem);
            $scope.form.price.splice(lastItem);

        }
    };

    $scope.addOnPackage = function() {
        var newItemNo = $scope.onpackages.length+1;
        $scope.onpackages.push({'id':'onpackag'+newItemNo});
    };
    $scope.deleteOnPackage = function() {
        if($scope.onpackages.length>1) {
            var lastItem = $scope.onpackages.length - 1;
            $scope.onpackages.splice(lastItem);
            $scope.form.duration_off_page.splice(lastItem);
            $scope.form.price_off_page.splice(lastItem);
        }
    };
    $scope.addOffPackage = function() {
        var newItemNo = $scope.ofpackages.length+1;
        $scope.ofpackages.push({'id':'ofpackage'+newItemNo});
    };
    $scope.deleteOffPackage = function() {
        if($scope.ofpackages.length>1) {
            var lastItem = $scope.ofpackages.length - 1;
            $scope.ofpackages.splice(lastItem);
            $scope.form.duration_on_page.splice(lastItem);
            $scope.form.price_on_page.splice(lastItem);

        }
    };

    $scope.get_product_name=function(id){

        if(id==1) {
            $scope.product_name='Platform';

        }
        else if(id==2){
            $scope.product_name='Design';
        }
        else if(id==3){
            $scope.product_name='Content';
        }
        else if(id==4){
            $scope.product_name='Marketting';
        }
        return $scope.product_name;

    }

    $scope.get_productprice_label=function(id){

        if(id==1) {
            $scope.productprice_labell='Platform Cost';

        }
        else if(id==2){
            $scope.productprice_labell='Price';
        }
        return $scope.productprice_labell;
    }



    $scope.getReqParams = function () {
        return $scope.generateErrorOnServer ? '?errorCode=' + $scope.serverErrorCode +
        '&errorMessage=' + $scope.serverErrorMsg : '';
    };

    /*=======================Start Upload icon ============================*/

    $scope.$watch('product_imgupload', function (files) {
        $('.errormsg').html('');
        $scope.formUpload = false;
        if (files != null) {
            for (var i = 0; i < files.length; i++) {
                $scope.errorMsg = null;
                (function (file) {
                    upload(file);
                })(files[i]);
            }
        }
    });


    function upload(file) {
        $scope.errorMsg = null;
        uploadUsingUpload(file);
    }

    function uploadUsingUpload(file) {

        $('#loaderDiv').addClass('ng-hide');
        file.upload = Upload.upload({
            url: $scope.adminUrl+'uploadproductimage' + $scope.getReqParams(),
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
            },
            fields: {'id':$rootScope.createIdeaId},
            file: file,
            fileFormDataName: 'Filedata'
        });

        file.upload.then(function (response) {
            // console.log(response.data.status);
            if(response.data.status=='error'){
                $('.errormsg').html('Invalid file type.');
            }
            else {
                $('.progress').removeClass('ng-hide');
                file.result = response.data;

                $scope.product_img_src = response.data.image_url;
                $scope.form.product_image = response.data.image_name;

                $('#loaderDiv').addClass('ng-hide');
            }


        }, function (response) {
            console.log(response.status);
            if(response.data.status>0) {

                //  $scope.errorMsg = response.status + ': ' + response.data;
            }

        });

        file.upload.progress(function (evt) {
            // Math.min is to fix IE which reports 200% sometimes
            $('#loaderDiv').removeClass('ng-hide');

            file.progress = Math.min(100, parseInt(100.0 * evt.loaded / evt.total));

        });

        file.upload.xhr(function (xhr) {
            // xhr.upload.addEventListener('abort', function(){console.log('abort complete')}, false);
        });
    }
    /*=======================End Upload image ============================*/

    /*=======================Start Upload icon ============================*/

    $scope.$watch('product_iconupload', function (files) {
        $('.errormsg').html('');
        $scope.formUpload = false;
        if (files != null) {
            for (var i = 0; i < files.length; i++) {
                $scope.errorMsg = null;
                (function (file) {
                    iconupload(file);
                })(files[i]);
            }
        }
    });


    function iconupload(file) {
        $scope.errorMsg = null;
        iconuploadUsingUpload(file);
    }

    function iconuploadUsingUpload(file) {

        $('#loaderDiv').addClass('ng-hide');
        file.upload = Upload.upload({
            url: $scope.adminUrl+'uploadproducticon' + $scope.getReqParams(),
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
            },
            fields: {'id':$rootScope.createIdeaId},
            file: file,
            fileFormDataName: 'Filedata'
        });

        file.upload.then(function (response) {
            // console.log(response.data.status);
            if(response.data.status=='error'){
                $('.errormsg').html('Invalid file type.');
            }
            else {
                $('.progress').removeClass('ng-hide');
                file.result = response.data;

                $scope.product_icon_src = response.data.icon_url;
                $scope.form.product_icon = response.data.icon_name;

                $('#loaderDiv').addClass('ng-hide');
            }


        }, function (response) {
            console.log(response.status);
            if(response.data.status>0) {

                //  $scope.errorMsg = response.status + ': ' + response.data;
            }

        });

        file.upload.progress(function (evt) {
            // Math.min is to fix IE which reports 200% sometimes
            $('#loaderDiv').removeClass('ng-hide');

            file.progress = Math.min(100, parseInt(100.0 * evt.loaded / evt.total));

        });

        file.upload.xhr(function (xhr) {
            // xhr.upload.addEventListener('abort', function(){console.log('abort complete')}, false);
        });
    }


    /*=======================End Upload icon ============================*/
    selector: "textarea",  // change this value according to your HTML
     $scope.tinymceOptions = {
        trusted: true,
        theme: 'modern',
        plugins: [
            'advlist autolink link  lists charmap   hr anchor pagebreak spellchecker',
            'searchreplace wordcount visualblocks visualchars code  insertdatetime  nonbreaking',
            'save table contextmenu directionality  template paste textcolor '
        ],
        // toolbar: 'insertfile undo redo | styleselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link image | print preview media fullpage | forecolor backcolor emoticons',
        toolbar: ' undo redo paste | code | styleselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link  |   media fullpage | forecolor backcolor',
        menubar: 'tools'
    };


    $scope.editproductsubmit=function(){

        $http({
            method  : 'POST',
            async:   false,
            url     : $scope.adminUrl+'productupdates',
            data    : $.param($scope.form),  // pass in data as strings
            headers : { 'Content-Type': 'application/x-www-form-urlencoded' }
        }) .success(function(data) {
            $rootScope.stateIsLoading = false;
            $state.go('product-list');
            return
        });

    }
})

influx.controller('contact',function($scope,$state,$http,$cookieStore,$rootScope,$stateParams) {
    $scope.contactsubmit=function(){
        $http({
            method: 'POST',
            async: false,
            url: $scope.adminUrl + 'addcontact',
            data    : $.param($scope.form),
            headers: {'Content-Type': 'application/x-www-form-urlencoded'}

        }).success(function (data) {

        })

    }


 })

