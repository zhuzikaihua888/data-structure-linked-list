//创建链表
const createList=(value)=>{
    return{
       data:value,
       next:null,
    };
};
//在创建的链表上来在增加节点
const appendList=(List,value)=>{
    const node={
        data:value,
        next:null,
    };
    let x=List;
    while(x.next){
        x=x.next
    }
    x.next===null;
    x.next=node;
    return node;
};
//如何删除节点
const removeFromList=(list,node)=>{
    debugger//调试器;
    let x=List;
    let p=null;
    while(x!=node){
        p=x;
        x=x.next;
    }
    p.next=x.next;
}
//遍历每一个节点
const travelList=(List,fn)=>{
    let x=List;
    while(x!=null){
        fn(x);
        x=x.next;
    }
};


/* const removeFromList=(List,node)=>{
    //如果删除的是第一个节点
    if(List===node){
        List=node.next;
    }else{
        //如果删除的是第二个节点
        if(List.next===node){
        //第一个节点.next=第二个节点.next   
            List.next=node.next
        }else{
            //如果删除的是第三个节点
            if(List.next.next===node){
            //第二个节点.next=第三节点.next    
                List.next.next=node.next;
            }
        }
    }
} */
const List=createList(10);
const node1 =appendList(List,20);
const node2=appendList(List,30);
const node3=appendList(List,40);
removeFromList(List,node2)
console.log("list");
console.log(List);
travelList(List,node=>{
    console.log(node.data);
});

