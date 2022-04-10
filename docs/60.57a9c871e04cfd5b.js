"use strict";(self.webpackChunkcroco_app=self.webpackChunkcroco_app||[]).push([[60],{3060:(m,i,o)=>{o.r(i),o.d(i,{UserModule:()=>Z});var t=o(9808),a=o(2382),l=o(8118),s=o(1223),p=o(946);function d(r,u){if(1&r&&(s.TgZ(0,"div",2),s.TgZ(1,"div",3),s.TgZ(2,"div",4),s.TgZ(3,"h5",5),s._uU(4),s.qZA(),s._UZ(5,"img",6),s.qZA(),s.TgZ(6,"h6",7),s._uU(7),s.qZA(),s.TgZ(8,"p",8),s._uU(9),s.qZA(),s.qZA(),s.qZA()),2&r){const e=u.$implicit;s.xp6(4),s.hij("Post title: ",e.title,""),s.xp6(3),s.hij("Post ID: ",e.id,""),s.xp6(2),s.Oqu(e.body)}}const c=function(r){return["/user-info",r,"posts"]},h=[{path:":id/posts",component:(()=>{class r{constructor(e,n){this.route=e,this.configService=n,this.posts=[],this.subscriptions=[]}ngOnInit(){this.subscriptions.push(this.route.params.subscribe(e=>{this.subscriptions.push(this.configService.fetchClientPosts(Number(e.id||0)).subscribe(n=>this.posts=n))}))}ngOnDestroy(){this.subscriptions.forEach(e=>e.unsubscribe())}}return r.\u0275fac=function(e){return new(e||r)(s.Y36(l.gz),s.Y36(p.E))},r.\u0275cmp=s.Xpm({type:r,selectors:[["app-posts"]],decls:3,vars:2,consts:[[2,"margin-left","25px"],["class","card border",4,"ngFor","ngForOf"],[1,"card","border"],[1,"card-body"],[1,"in-row"],[1,"card-title"],["src","assets/icons/post.png","alt","post.png",1,"icon"],[1,"card-subtitle","mb-2","text-muted"],[1,"card-text"]],template:function(e,n){1&e&&(s.TgZ(0,"h3",0),s._uU(1),s.qZA(),s.YNc(2,d,10,3,"div",1)),2&e&&(s.xp6(1),s.hij("Posts of user with ID: ",null==n.posts[0]?null:n.posts[0].userId,""),s.xp6(1),s.Q6J("ngForOf",n.posts))},directives:[t.sg],styles:[".border[_ngcontent-%COMP%]{border-radius:25px;margin:25px;overflow:hidden;background-color:#f8f8f8}.border[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:hover{background-color:#d6e7ff;transition:background-color 2s}.in-row[_ngcontent-%COMP%]{display:flex;flex-direction:row;justify-content:space-between}.icon[_ngcontent-%COMP%]{width:20px;height:20px}"]}),r})()},{path:":id",component:(()=>{class r{constructor(e,n){this.route=e,this.configService=n,this.subscriptions=[]}ngOnInit(){this.subscriptions.push(this.route.params.subscribe(e=>{this.subscriptions.push(this.configService.fetchClient(Number(e.id||0)).subscribe(n=>this.user=n))}))}ngOnDestroy(){this.subscriptions.forEach(e=>e.unsubscribe())}}return r.\u0275fac=function(e){return new(e||r)(s.Y36(l.gz),s.Y36(p.E))},r.\u0275cmp=s.Xpm({type:r,selectors:[["app-user-info"]],decls:47,vars:19,consts:[[1,"list-group"],[2,"margin-left","25px"],[1,"list-group-item","border"],["src","assets/icons/email.png","alt","email.png",1,"icon"],["src","assets/icons/adress.png","alt","adress.png",1,"icon"],["src","assets/icons/phone.png","alt","phone.png",1,"icon"],["src","assets/icons/website.png","alt","website.png",1,"icon"],[1,"btn","btn-dark","button",3,"routerLink"]],template:function(e,n){1&e&&(s.TgZ(0,"ul",0),s.TgZ(1,"h3",1),s._uU(2),s.qZA(),s.TgZ(3,"li",2),s._uU(4),s.qZA(),s.TgZ(5,"li",2),s._uU(6),s.qZA(),s.TgZ(7,"li",2),s._uU(8),s.qZA(),s.TgZ(9,"li",2),s._UZ(10,"img",3),s._uU(11),s.qZA(),s.TgZ(12,"li",2),s.TgZ(13,"h4"),s._UZ(14,"img",4),s._uU(15," Adress "),s.qZA(),s.TgZ(16,"p"),s._uU(17),s.qZA(),s.TgZ(18,"p"),s._uU(19),s.qZA(),s.TgZ(20,"p"),s._uU(21),s.qZA(),s.TgZ(22,"p"),s._uU(23),s.qZA(),s.TgZ(24,"h5"),s._uU(25,"Geo"),s.qZA(),s.TgZ(26,"p"),s._uU(27),s.qZA(),s.TgZ(28,"p"),s._uU(29),s.qZA(),s.qZA(),s.TgZ(30,"li",2),s._UZ(31,"img",5),s._uU(32),s.qZA(),s.TgZ(33,"li",2),s._UZ(34,"img",6),s._uU(35),s.qZA(),s.TgZ(36,"li",2),s.TgZ(37,"h4"),s._uU(38,"Company"),s.qZA(),s.TgZ(39,"p"),s._uU(40),s.qZA(),s.TgZ(41,"p"),s._uU(42),s.qZA(),s.TgZ(43,"p"),s._uU(44),s.qZA(),s.qZA(),s.TgZ(45,"button",7),s._uU(46," User posts "),s.qZA(),s.qZA()),2&e&&(s.xp6(2),s.hij("Infromation about: ",null==n.user?null:n.user.name,""),s.xp6(2),s.hij(" ID: ",null==n.user?null:n.user.id,""),s.xp6(2),s.hij(" Name: ",null==n.user?null:n.user.name,""),s.xp6(2),s.hij(" Username: ",null==n.user?null:n.user.username,""),s.xp6(3),s.hij(" Email: ",null==n.user?null:n.user.email," "),s.xp6(6),s.hij(" Street: ",null==n.user||null==n.user.address?null:n.user.address.street,""),s.xp6(2),s.hij(" Suite: ",null==n.user||null==n.user.address?null:n.user.address.suite,""),s.xp6(2),s.hij(" City: ",null==n.user||null==n.user.address?null:n.user.address.city,""),s.xp6(2),s.hij(" Zipcode: ",null==n.user||null==n.user.address?null:n.user.address.zipcode,""),s.xp6(4),s.hij(" Lat: ",null==n.user||null==n.user.address||null==n.user.address.geo?null:n.user.address.geo.lat,""),s.xp6(2),s.hij(" Lng: ",null==n.user||null==n.user.address||null==n.user.address.geo?null:n.user.address.geo.lng,""),s.xp6(3),s.hij(" Phone: ",null==n.user?null:n.user.phone," "),s.xp6(3),s.hij(" Website: ",null==n.user?null:n.user.website,""),s.xp6(5),s.hij(" Name: ",null==n.user||null==n.user.company?null:n.user.company.name,""),s.xp6(2),s.hij(" CatchPhrase: ",null==n.user||null==n.user.company?null:n.user.company.catchPhrase,""),s.xp6(2),s.hij(" Bs: ",null==n.user||null==n.user.company?null:n.user.company.bs,""),s.xp6(1),s.Q6J("routerLink",s.VKq(17,c,null==n.user?null:n.user.id)))},directives:[l.rH],styles:[".border[_ngcontent-%COMP%]{border-radius:25px;margin:5px 25px;overflow:hidden;background-color:#f8f8f8}.icon[_ngcontent-%COMP%]{width:30px;height:30px}.button[_ngcontent-%COMP%]{margin:5px 25px;width:150px;border-radius:20px}"]}),r})()}];let Z=(()=>{class r{}return r.\u0275fac=function(e){return new(e||r)},r.\u0275mod=s.oAB({type:r}),r.\u0275inj=s.cJS({imports:[[t.ez,l.Bz.forChild(h),a.UX]]}),r})()}}]);