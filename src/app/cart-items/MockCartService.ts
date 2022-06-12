export class MockCartService{
    getProducts(){
        return [
            {
            id: 1,
            name: 'Selenium',
            price: 7,
            quantity: 2,
            status: 'in Stock',
            description: "We will learn Java, Selenium Webdriver, TestNG/Junit, Maven, and Jenkins.",
            imgaddress : "https://camo.githubusercontent.com/4b95df4d6ca7a01afc25d27159804dc5a7d0df41d8131aaf50c9f84847dfda21/68747470733a2f2f73656c656e69756d2e6465762f696d616765732f73656c656e69756d5f6c6f676f5f7371756172655f677265656e2e706e67"
          },
          {
            id: 3,
            name: 'Devops',
            price: 9,
            quantity: 0,
            status: '4 left',
            description: "We will learn about AWS EC2 instances, Docker, Ansible and Kubertnetes.",
            imgaddress : "https://blog.harness.io/wp-content/uploads/2021/05/022021-Harness-Blogpost-DevOpsGeneric-Header-2400x700-1.png"
          }]
    }
}